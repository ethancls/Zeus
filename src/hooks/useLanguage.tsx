"use client";

import { useState, useEffect, createContext, useContext } from 'react';

export type Locale = 'fr' | 'en' | 'es' | 'ja';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions statiques pour l'interface
const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.work': 'Projets',
    'nav.blog': 'Articles',
    'nav.gallery': 'Galerie',
    'language.french': 'Français',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.japanese': '日本語',
    'theme.light': 'Mode clair',
    'theme.dark': 'Mode sombre',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.blog': 'Blog',
    'nav.gallery': 'Gallery',
    'language.french': 'Français',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.japanese': '日本語',
    'theme.light': 'Light mode',
    'theme.dark': 'Dark mode',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.work': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.gallery': 'Galería',
    'language.french': 'Français',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.japanese': '日本語',
    'theme.light': 'Modo claro',
    'theme.dark': 'Modo oscuro',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.work': 'プロジェクト',
    'nav.blog': 'ブログ',
    'nav.gallery': 'ギャラリー',
    'language.french': 'Français',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.japanese': '日本語',
    'theme.light': 'ライトモード',
    'theme.dark': 'ダークモード',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    // Charger la langue depuis localStorage
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('zeus-locale') as Locale;
      if (savedLocale === 'fr' || savedLocale === 'en' || savedLocale === 'es' || savedLocale === 'ja') {
        setLocaleState(savedLocale);
      } else {
        // Utiliser la langue du navigateur comme fallback
        const browserLang = navigator.language.split('-')[0];
        const defaultLocale = ['fr', 'en', 'es', 'ja'].includes(browserLang) ? browserLang as Locale : 'fr';
        setLocaleState(defaultLocale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('zeus-locale', newLocale);
    }
  };

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
