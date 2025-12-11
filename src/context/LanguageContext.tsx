import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'day-of-rest-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'ua';
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (stored === 'ua' || stored === 'en' || stored === 'la')) {
    return stored;
  }
  
  // Try to detect browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('uk')) return 'ua';
  if (browserLang.startsWith('en')) return 'en';
  
  return 'ua'; // Default to Ukrainian
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = language === 'ua' ? 'uk' : language === 'la' ? 'la' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
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

