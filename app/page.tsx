'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import HeroCanvas from '@/components/Hero/HeroCanvas';
import Navbar from '@/components/Navbar';
import ScrollIndicator from '@/components/ScrollIndicator';
import ThreeDBackground from '@/components/ThreeDBackground';
import { useLanguage } from '@/components/LanguageProvider';
import { translations, islamicSources } from '@/lib/translations';
import { Share2, Check } from 'lucide-react';
import GoToTopButton from '@/components/GoToTopButton';
import DateWidget from '@/components/DateWidget';
import QuoteAudioPlayer from '@/components/QuoteAudioPlayer';

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // We maintain 4 items to ensure the page is tall enough for the 193 frames to slowly scroll
  const [randomSources, setRandomSources] = useState(() => islamicSources.slice(0, 4));
  
  // Theme Sync State
  const [themeClass, setThemeClass] = useState('bg-[#001827]'); // default night
  const [timeOpacity, setTimeOpacity] = useState('opacity-60');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    // "AI" Selection: Shuffles the massive library and randomly picks 4 unique ones on every client reload
    const shuffled = [...islamicSources].sort(() => 0.5 - Math.random());
    setRandomSources(shuffled.slice(0, 4));

    // Day/Night Sync based on local time
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 7) {
      setThemeClass('bg-[#1a0b2e]'); // Fajr (Deep Purple)
      setTimeOpacity('opacity-40');
    } else if (hour >= 7 && hour < 16) {
      setThemeClass('bg-[#004b6b]'); // Dhuhr (Bright Azure)
      setTimeOpacity('opacity-20');
    } else if (hour >= 16 && hour < 19) {
      setThemeClass('bg-[#2d1b00]'); // Asr/Maghrib (Warm Orange Dark)
      setTimeOpacity('opacity-50');
    } else {
      setThemeClass('bg-[#000810]'); // Isha (Pitch Black)
      setTimeOpacity('opacity-70');
    }
  }, []);

  const handleCopy = (source: any) => {
    const textToCopy = `${source.arabic}\n\n"${source[lang].text}"\n— ${source[lang].reference}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(source.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <main className={`min-h-screen relative text-white ${lang === 'bn' ? 'font-[family-name:var(--font-noto-bn)]' : ''}`}>
      {/* Background fixed canvas stretching 193 frames over the entire scroll of this page */}
      <HeroCanvas themeClass={themeClass} timeOpacity={timeOpacity} />
      
      {/* 3D WebGL Particles Floating behind the content */}
      <ThreeDBackground />

      {/* Persistent UI overlays */}
      <Navbar />
      
      <ScrollIndicator />

      {/* The 500vh container explicitly mapped for Text Overlays only */}
      <Hero />
      
      {/* Scrollable Intro Content section */}
      <section id="content" className="min-h-screen flex items-center justify-center bg-transparent p-6 sm:p-10 z-10 relative pointer-events-none">
        <div className="max-w-3xl text-center pointer-events-auto bg-[#001827]/40 p-8 sm:p-12 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:bg-[#001827]/60">
          <h2 className="text-4xl lg:text-5xl font-[800] mb-6 tracking-tight text-[#00E5FF]">
            {t.contentTitle}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
            {t.contentDescription}
          </p>
        </div>
      </section>

      {/* Dynamic Scrolling Sections for Ayahs & Hadiths */}
      <div className="flex flex-col gap-[75vh] pb-[30vh]">
        {randomSources.map((source, index) => {
          // Calculate staggered positioning: alternate left and right sides of the screen
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={source.id} 
              className={`min-h-[60vh] flex items-center bg-transparent p-6 sm:p-12 z-10 relative pointer-events-none ${
                isEven ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className="w-full max-w-2xl pointer-events-auto bg-black/50 p-8 sm:p-12 rounded-[2rem] backdrop-blur-md border border-[#00E5FF]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.02] flex flex-col">
                
                {/* Arabic Source (Always present, massive classical font) */}
                <div className="mb-8">
                  <p 
                    className="text-4xl sm:text-5xl md:text-6xl text-right text-[#00E5FF] leading-[1.8] sm:leading-[1.8] tracking-normal font-[family-name:var(--font-amiri)] drop-shadow-md"
                    dir="rtl"
                  >
                    {source.arabic}
                  </p>
                </div>

                {/* Localized Translation */}
                <div className="mt-8 pt-8 border-t border-white/10 flex-grow">
                  <p className="text-xl sm:text-2xl text-white/95 leading-relaxed font-semibold">
                    "{source[lang].text}"
                  </p>
                  <div className="mt-6 flex justify-between items-end">
                    <p className="text-sm sm:text-base text-white/60 tracking-wider font-bold uppercase">
                      — {source[lang].reference}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center">
                      <QuoteAudioPlayer reference={source.en.reference} />
                      <button 
                        onClick={() => handleCopy(source)}
                        className="p-2.5 rounded-full bg-white/5 hover:bg-[#00E5FF]/20 text-white/60 hover:text-[#00E5FF] transition-all border border-white/10 hover:border-[#00E5FF]/40 outline-none"
                        title="Copy Quote"
                      >
                        {copiedId === source.id ? <Check size={18} className="text-emerald-400" /> : <Share2 size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* About / Our Mission Section */}
      <section id="about" className="min-h-[80vh] flex items-center justify-center bg-[#001827]/80 backdrop-blur-2xl p-6 sm:p-10 z-20 relative border-t border-white/5 py-32">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-[800] mb-8 text-white tracking-tight">{t.about.title}</h2>
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-medium mx-auto max-w-3xl">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Join Us / Community Section */}
      <section id="join" className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#001827]/80 to-black backdrop-blur-3xl p-6 sm:p-10 z-20 relative pb-40 gap-12">
        <div className="w-full max-w-2xl text-center bg-white/5 p-10 sm:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <h2 className="text-4xl sm:text-5xl font-[800] mb-4 text-[#00E5FF]">{t.join.title}</h2>
          <p className="text-lg text-white/70 mb-10">{t.join.description}</p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t.join.placeholder}
              className="px-6 py-4 rounded-full bg-black/50 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00E5FF] w-full sm:w-96 transition-colors"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-[#00E5FF] text-[#001827] font-[800] rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] whitespace-nowrap"
            >
              {t.join.button}
            </button>
          </form>
        </div>

        <DateWidget />

        {/* Creator Credit Footer */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-50 pointer-events-auto">
          <p className="text-white/40 text-sm font-medium tracking-wider font-sans">
            {t.footer?.createdBy}{' '}
            <a 
              href="https://www.facebook.com/n4han13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#00E5FF] transition-colors hover:underline underline-offset-4 font-bold"
            >
              NOHAN AHMED
            </a>
          </p>
        </div>
      </section>

      <GoToTopButton />
    </main>
  );
}
