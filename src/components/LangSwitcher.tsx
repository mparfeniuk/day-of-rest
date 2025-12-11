import { useLanguage } from '../context/LanguageContext';
import { Language, translations } from '../data/translations';

const languages: Language[] = ['ua', 'en', 'la'];

export function LangSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav
      className="fixed top-4 left-4 z-50 flex gap-1 bg-rest-dark/80 backdrop-blur-sm rounded-lg p-1 shadow-lg"
      aria-label="Language selection"
    >
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1.5 text-sm font-serif font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rest-cream/50 ${
            language === lang
              ? 'bg-rest-cream text-rest-dark'
              : 'text-rest-cream/80 hover:text-rest-cream hover:bg-rest-cream/10'
          }`}
          aria-current={language === lang ? 'true' : undefined}
          aria-label={translations[lang].langName}
        >
          {translations[lang].langLabel}
        </button>
      ))}
    </nav>
  );
}

