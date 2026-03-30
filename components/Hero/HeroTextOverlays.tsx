'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';

export default function HeroTextOverlays({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'] // Maps 0 to 1 over the full track
  });

  // Timings mapped to the corners over the full 500vh height
  
  // 1. Top-Left: Headline (fades in early, fades out at end)
  const hlOpacity = useTransform(scrollYProgress, [0.02, 0.08, 0.85, 0.95], [0, 1, 1, 0]);
  const hlY = useTransform(scrollYProgress, [0.02, 0.08, 0.85, 0.95], [40, 0, 0, -40]);

  // 2. Top-Right: Subheadline (fades in slightly later)
  const shOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.85, 0.95], [0, 1, 1, 0]);
  const shY = useTransform(scrollYProgress, [0.15, 0.25, 0.85, 0.95], [40, 0, 0, -40]);

  // 3. Bottom-Left: Microcopy (fades in mid-way)
  const mcOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.85, 0.95], [0, 1, 1, 0]);
  const mcY = useTransform(scrollYProgress, [0.35, 0.45, 0.85, 0.95], [40, 0, 0, -40]);

  // 4. Bottom-Right: CTAs (fades in last, persists until very end)
  const ctaOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.90, 0.98], [0, 1, 1, 0]);
  const ctaY = useTransform(scrollYProgress, [0.55, 0.65, 0.90, 0.98], [40, 0, 0, -40]);

  return (
    // Fixed wrapper gives the text the full screen breathing room 
    <div 
      className={`fixed inset-0 pointer-events-none z-10 flex flex-col justify-between pt-[15vh] pb-[10vh] px-6 md:px-12 lg:px-20 h-screen w-full ${
        lang === 'bn' ? 'font-[family-name:var(--font-noto-bn)]' : ''
      }`}
      aria-hidden="true"
    >
      {/* --- Top Row --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-4 sm:gap-0">
        {/* Top-Left: Headline */}
        <motion.div style={{ opacity: hlOpacity, y: hlY }} className="max-w-xl pointer-events-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[800] text-white tracking-tight leading-[1.3] drop-shadow-lg">
            {t.headlinePart1} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {t.headlineDarkness}
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-teal-300">
              {t.headlineToLight}
            </span>
          </h1>
        </motion.div>

        {/* Top-Right: Subheadline */}
        <motion.div style={{ opacity: shOpacity, y: shY }} className="max-w-md text-left sm:text-right pointer-events-auto mt-2 sm:mt-6">
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[600] text-[#00E5FF] leading-snug drop-shadow-lg ${lang === 'bn' ? 'leading-[1.4]' : ''}`}>
            {t.subheadline}
            <span className={`block text-white/90 text-[1.1rem] md:text-xl font-normal mt-2 tracking-wide font-serif italic drop-shadow-md ${lang === 'bn' ? 'font-sans opacity-80' : ''}`}>
              {t.subheadlineItalic}
            </span>
          </h2>
        </motion.div>
      </div>

      {/* --- Bottom Row --- */}
      <div className="flex flex-col-reverse sm:flex-row justify-between items-end w-full gap-6 sm:gap-0">
        {/* Bottom-Left: Microcopy */}
        <motion.div style={{ opacity: mcOpacity, y: mcY }} className="max-w-xs sm:max-w-sm pointer-events-auto pb-4">
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed bg-[#001827]/30 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/10 shadow-xl">
            {t.microcopyLine1}<br/>
            {t.microcopyLine2}
          </p>
        </motion.div>

        {/* Bottom-Right: Primary/Secondary CTAs */}
        <motion.div style={{ opacity: ctaOpacity, y: ctaY }} className="flex flex-col gap-4 pointer-events-auto sm:items-end w-full sm:w-auto pb-4">
          <a
            href="#content"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#00E5FF] text-[#001827] font-[800] text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center">
              {t.btnExplore}
              <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </span>
            {/* Glossy hover shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer pointer-events-none" />
          </a>
          
          <a
            href="#about"
            className="px-6 py-2 text-white/70 hover:text-white font-medium transition-colors hover:underline underline-offset-8 decoration-[#00E5FF]/40 hover:decoration-[#00E5FF] text-center sm:text-right text-base tracking-wide"
          >
            {t.btnLearnMore}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
