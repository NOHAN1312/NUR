'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Make the marker's movement silky smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the path length based on viewport (we keep it inside a specific bounds)
  const yPosition = useTransform(smoothProgress, [0, 1], ['0%', 'calc(100vh - 8rem)']);

  return (
    <div className="fixed right-4 md:right-8 top-16 bottom-16 w-3 z-40 hidden sm:block pointer-events-none">
      
      {/* Background tracking line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
      
      {/* Active illuminated track trail */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[1.5px] bg-[#00E5FF]/40 shadow-[0_0_10px_#00E5FF]"
        style={{ height: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }} 
      />

      {/* The Moon Marker mapping to the Y Position */}
      <motion.div
        style={{ y: yPosition }}
        className="absolute left-1/2 -translate-x-1/2 top-0"
      >
        <div className="relative w-8 h-8 -top-4 rounded-full flex items-center justify-center bg-[#001827]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.5)] border border-[#00E5FF]/30 text-[#00E5FF]">
          {/* Crescent Moon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            className="animate-pulse"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </motion.div>
      
    </div>
  );
}
