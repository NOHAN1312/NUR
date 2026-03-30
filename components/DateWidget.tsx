'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DateWidget() {
  const [dates, setDates] = useState({
    en: '',
    bn: '',
    hijri: '',
    hijriBn: ''
  });

  useEffect(() => {
    const today = new Date();

    // English Date
    const enFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Bengali Date
    const bnFormatter = new Intl.DateTimeFormat('bn-BD-u-ca-beng', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Hijri (Islamic) Date
    const hijriFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Hijri Date localized in Bengali
    const hijriBnFormatter = new Intl.DateTimeFormat('bn-BD-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    setDates({
      en: enFormatter.format(today),
      bn: bnFormatter.format(today),
      hijri: hijriFormatter.format(today),
      hijriBn: hijriBnFormatter.format(today)
    });
  }, []);

  if (!dates.en) return null; // Avoid hydration mismatch

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col items-center justify-center gap-2 text-center my-8 z-20 relative"
    >
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 rounded-2xl bg-[#001827]/30 border border-white/10 p-4 sm:p-6 backdrop-blur-md shadow-2xl">
        {/* Hijri Date */}
        <div className="flex flex-col items-center px-4 sm:border-r border-white/10 last:border-0">
          <span className="text-[#00E5FF]/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1.5 font-sans">هجري</span>
          <span className="text-xl sm:text-2xl font-[family-name:var(--font-amiri)] text-white/95" dir="rtl">{dates.hijri}</span>
          <span className="text-[13px] sm:text-sm font-[family-name:var(--font-noto-bn)] text-[#00E5FF]/90 mt-1.5">{dates.hijriBn}</span>
        </div>
        
        {/* Bengali Date */}
        <div className="flex flex-col items-center px-4 sm:border-r border-white/10 last:border-0">
          <span className="text-[#00E5FF]/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 font-sans">বাংলা</span>
          <span className="text-lg sm:text-xl font-[family-name:var(--font-noto-bn)] text-white/95">{dates.bn}</span>
        </div>

        {/* English Date */}
        <div className="flex flex-col items-center px-4">
          <span className="text-[#00E5FF]/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 font-sans">English</span>
          <span className="text-sm sm:text-base font-medium font-sans text-white/90">{dates.en}</span>
        </div>
      </div>
    </motion.div>
  );
}
