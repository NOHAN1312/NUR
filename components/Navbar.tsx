'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';
import AudioPlayer from '@/components/AudioPlayer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${
        scrolled 
          ? 'bg-[#001827]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent py-6 lg:py-8'
      } ${lang === 'bn' ? 'font-[family-name:var(--font-noto-bn)]' : ''}`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center w-full">
        {/* Brand Text */}
        <a href="/" className="text-2xl lg:text-3xl font-[800] tracking-tighter hover:opacity-80 transition-opacity font-[family-name:var(--font-outfit)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#00E5FF]">
            NUR
          </span>
        </a>
        
        {/* Nav Links & Controls */}
        <div className="flex gap-4 sm:gap-6 items-center">
          <a href="#about" className="hidden sm:block text-sm lg:text-base font-medium text-white/80 hover:text-[#00E5FF] transition-colors relative group">
            {t.mission}
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
          </a>
          
          <a 
            href="#join"
            className="hidden sm:block text-sm lg:text-base font-[600] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            {t.join}
          </a>

          {/* Controls Cluster: Audio & Language Switcher */}
          <div className="flex items-center gap-3">
            <AudioPlayer />
            
            <div className="flex bg-white/10 rounded-full p-1 border border-white/5 backdrop-blur-md font-[family-name:var(--font-outfit)]">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'en' ? 'bg-[#00E5FF] text-[#001827] shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('bn')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'bn' ? 'bg-[#00E5FF] text-[#001827] shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                বাং
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
