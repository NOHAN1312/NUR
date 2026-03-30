'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Language } from '@/lib/translations';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  // Optional: Read from local storage if previously selected
  useEffect(() => {
    const saved = localStorage.getItem('site_lang') as Language;
    if (saved === 'en' || saved === 'bn') {
      setLang(saved);
    }
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  const toggleLang = () => {
    changeLang(lang === 'en' ? 'bn' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
