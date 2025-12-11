import { useLanguage } from '../context/LanguageContext';

interface ScrollArrowProps {
  onClick: () => void;
  textColor: string;
}

export function ScrollArrow({ onClick, textColor }: ScrollArrowProps) {
  const { t } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-transparent group"
      aria-label={t.scrollDown}
      style={{ color: textColor }}
    >
      <svg
        className="w-8 h-8 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
}

