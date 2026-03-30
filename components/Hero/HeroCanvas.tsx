'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useSpring, motion } from 'framer-motion';

const FRAME_COUNT = 193;

export default function HeroCanvas({ themeClass = 'bg-[#001827]', timeOpacity = 'opacity-60' }: { themeClass?: string, timeOpacity?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track the scroll of the entire vertical page (Global window tracking)
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll mapping for Canvas lerp
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Cross-fades mapping for first and last frames
  const canvasOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0.8, 1, 1, 0.8]);

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(1);

  // Lazy Preload images logic
  useEffect(() => {
    let isMounted = true;

    // Load batched images to prevent browser lockup
    const preloadBatch = async (start: number, end: number) => {
      const promises = [];
      for (let i = start; i <= end; i++) {
        if (!isMounted) break;
        promises.push(new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `/images/hero/${i}.jpg`;
          img.onload = () => {
            if (isMounted) imagesRef.current[i] = img;
            // Draw first frame immediately once loaded
            if (i === 1) renderFrame(1);
            resolve();
          };
          img.onerror = () => resolve(); // continue if error
        }));
      }
      await Promise.all(promises);
    };

    const runPreloader = async () => {
      // High-priority first 15 frames for immediate playback start
      await preloadBatch(1, 15);
      // Background load the rest in larger chunks 
      for(let i = 16; i <= FRAME_COUNT; i += 20) {
        if (!isMounted) break;
        await preloadBatch(i, Math.min(i + 19, FRAME_COUNT));
      }
    };
    
    runPreloader();

    return () => { isMounted = false; };
  }, []);

  const renderFrame = (frameIndex: number) => {
    if (!canvasRef.current || !imagesRef.current[frameIndex]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = imagesRef.current[frameIndex]!;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;
    
    // Resize with DPR support
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }
    
    // Replicate object-fit: cover implementation on canvas element
    const hRatio = rect.width / img.width;
    const vRatio = rect.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (rect.width - img.width * ratio) / 2;
    const centerShift_y = (rect.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.drawImage(
      img, 
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useMotionValueEvent(smoothProgress, "change", (latestVal) => {
    // Map full 0-1 page scroll progress to image frame [1 -> 193]
    const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.floor(latestVal * (FRAME_COUNT - 1)) + 1));
    if (currentFrameRef.current !== frameIndex) {
      currentFrameRef.current = frameIndex;
      requestAnimationFrame(() => renderFrame(frameIndex));
    }
  });

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => requestAnimationFrame(() => renderFrame(currentFrameRef.current)), 100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className={`fixed inset-0 w-full h-full -z-50 pointer-events-none transition-colors duration-1000 ${themeClass}`}>
      <div 
        className={`absolute inset-0 bg-cover bg-center brightness-[0.7] transition-opacity duration-1000 z-0 ${timeOpacity}`}
        style={{ backgroundImage: 'url(/images/hero/1.jpg)' }}
        aria-hidden="true"
      />
      <motion.canvas
        ref={canvasRef}
        style={{ opacity: canvasOpacity }}
        role="img"
        aria-label="Islamic scrollytelling frame animation shifting from Fajr to Isha"
        className="relative z-10 w-full h-full object-cover mix-blend-lighten"
      />
    </div>
  );
}
