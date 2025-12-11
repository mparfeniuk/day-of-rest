import { useEffect, useRef, useState, ReactNode } from "react";
import { ScrollArrow } from "./ScrollArrow";

interface BlockProps {
  id: string;
  bgColor: string;
  textColor: string;
  isLast?: boolean;
  backgroundImage?: string;
  overlayColor?: string;
  backgroundSize?: "cover" | "contain" | string;
  children: ReactNode;
}

export function Block({
  id,
  bgColor,
  textColor,
  isLast = false,
  backgroundImage,
  overlayColor,
  backgroundSize = "cover",
  children,
}: BlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = sectionRef.current
      ?.nextElementSibling as HTMLElement | null;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`block-section relative ${isInView ? "in-view" : ""} ${
        backgroundImage ? "with-image" : ""
      }`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        ...(backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: backgroundSize,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}
      aria-label={id}
    >
      {overlayColor && (
        <span
          className="block-overlay"
          aria-hidden="true"
          style={{
            backgroundColor: `var(--block-overlay-color, ${overlayColor})`,
          }}
        />
      )}
      <div className="block-content max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {children}
      </div>

      {!isLast && <ScrollArrow onClick={scrollToNext} textColor={textColor} />}
    </section>
  );
}
