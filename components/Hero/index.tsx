'use client';

import React, { useRef } from 'react';
import HeroTextOverlays from './HeroTextOverlays';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Outfit } from 'next/font/google';

// Instantiate the Outfit font
const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit'
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'] // Use container height scrollable area for texts
  });

  // Subtle parallax effect for an overlay mesh/gradient
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section 
      ref={containerRef} 
      className={`relative w-full h-[500vh] ${outfit.className}`}
      id="hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
        {/* Subtle parallax overlay moving slowly at ~0.3x scroll speed (simulated with Framer) */}
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 mix-blend-overlay opacity-30 z-0"
          aria-hidden="true"
        >
          <div className="w-full h-[150%] bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.1),transparent_50%)]" />
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,95,115,0.2),transparent_50%)]" />
        </motion.div>
      </div>

      {/* The Dynamic Cornered Text Components */}
      <HeroTextOverlays containerRef={containerRef} />
    </section>
  );
}
