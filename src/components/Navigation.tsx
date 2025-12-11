import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface NavigationProps {
  blockIds: string[];
}

export function Navigation({ blockIds }: NavigationProps) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = blockIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = blockIds.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [blockIds]);

  const scrollToBlock = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label={t.navigation}
    >
      {blockIds.map((id, index) => (
        <button
          key={id}
          onClick={() => scrollToBlock(id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rest-cream focus:ring-offset-2 focus:ring-offset-rest-dark ${
            activeIndex === index
              ? "bg-rest-cream scale-125 shadow-lg"
              : "bg-rest-cream/40 hover:bg-rest-cream/70 hover:scale-110"
          }`}
          aria-label={`${t.blocks[index]?.title || id} (${index + 1}/${
            blockIds.length
          })`}
          aria-current={activeIndex === index ? "true" : undefined}
        />
      ))}
    </nav>
  );
}
