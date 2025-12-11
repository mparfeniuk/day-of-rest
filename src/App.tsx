import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Block } from "./components/Block";
import { LangSwitcher } from "./components/LangSwitcher";
import { Navigation } from "./components/Navigation";
import { QuantumComputer } from "./components/QuantumComputer";
import { getBlockColor } from "./data/translations";
import { setupKeyboardNavigation } from "./utils/scroll";

const BLOCK_IDS = [
  "bible",
  "reflection",
  "fourth",
  "other",
  "fifth",
  "sixth",
  "seventh",
];

function AppContent() {
  const { t } = useLanguage();

  useEffect(() => {
    const cleanup = setupKeyboardNavigation(".scroll-container", BLOCK_IDS);
    return cleanup;
  }, []);

  return (
    <>
      <LangSwitcher />
      <Navigation blockIds={BLOCK_IDS} />

      <main className="scroll-container">
        {t.blocks.map((block, index) => {
          const colors = getBlockColor(index);
          const backgroundImage =
            index === 0
              ? "/images/block-1/bg-block-1.jpg"
              : index === 2
              ? "/images/block-4/piano.jpg"
              : index === 4
              ? "/images/block-5/img1-block5.jpg"
              : index === 6
              ? "/images/block-7/img1-block7.jpg"
              : undefined;
          const overlayColor = index === 0 ? "rgba(10,10,10,0.45)" : undefined;
          const backgroundSize =
            index === 0 ? "cover" : index === 3 ? "cover" : "cover";

          return (
            <Block
              key={block.id}
              id={block.id}
              bgColor={colors.bg}
              textColor={colors.text}
              backgroundImage={backgroundImage}
              overlayColor={overlayColor}
              backgroundSize={backgroundSize}
            >
              {block.id === "bible" ? (
                // Bible block - special styling for verse with spinning decorations
                <article className="bible-block-layout">
                  <img
                    src="/images/block-1/img1-block1-rp.png"
                    alt=""
                    aria-hidden="true"
                    className="bible-decor bible-decor-left spin-clockwise"
                  />
                  <div className="bible-text-container space-y-8">
                    {block.title && (
                      <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        {block.title}
                      </h1>
                    )}
                    <blockquote className="font-serif leading-relaxed whitespace-pre-line text-balance bible-verse">
                      {block.content}
                    </blockquote>
                    {block.reference && (
                      <cite className="bible-reference block text-base sm:text-lg">
                        — {block.reference}
                      </cite>
                    )}
                  </div>
                  <img
                    src="/images/block-1/img1-block2-rp.png"
                    alt=""
                    aria-hidden="true"
                    className="bible-decor bible-decor-right spin-counter"
                  />
                </article>
              ) : block.id === "reflection" ? (
                // Reflection block - image on left, text on right
                <article className="reflection-block-layout">
                  <div className="reflection-image-container">
                    <img
                      src="/images/block-2/img1-block2.jpg"
                      alt=""
                      aria-hidden="true"
                      className="reflection-image"
                    />
                  </div>
                  {block.overlayText && (
                    <div className="reflection-text-container">
                      <p className="reflection-text font-serif">
                        {block.overlayText}
                      </p>
                    </div>
                  )}
                </article>
              ) : block.id === "other" ? (
                // Other block - spinning image with text and links
                <article className="other-block-layout">
                  <img
                    src="/images/block-3/img1-block3.png"
                    alt=""
                    aria-hidden="true"
                    className="other-block-image spin-clockwise"
                  />
                  {block.content && (
                    <p className="other-block-text font-serif text-center">
                      {block.content}
                    </p>
                  )}
                  <div className="other-block-links">
                    {block.facebookLink && (
                      <a
                        href={block.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="other-link font-serif"
                      >
                        Facebook пост
                      </a>
                    )}
                    {block.monobankLink && (
                      <a
                        href={block.monobankLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="other-link font-serif"
                      >
                        Monobank банка
                      </a>
                    )}
                  </div>
                </article>
              ) : block.id === "fourth" ? (
                // Fourth block - Quantum Computer
                <QuantumComputer />
              ) : block.id === "fifth" ? (
                // Fifth block - YouTube embed with text
                <article className="fifth-block-layout">
                  <div className="youtube-embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/tH2w6Oxx0kQ"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="youtube-iframe"
                    />
                  </div>
                  {block.content && (
                    <p className="fifth-block-text font-serif">
                      {block.content}
                    </p>
                  )}
                  <p className="hebrew-text" dir="rtl" lang="he">
                    {"מַה־שֶּׁהָיָה הוּא שֶׁיִּהְיֶה וּמַה־שֶּׁנַּעֲשָׂה הוּא שֶׁיִּעָשֶׂה וְאֵין כָּל־חָדָשׁ תַּחַת הַשָּׁמֶשׁ"
                      .split("")
                      .map((char, i) => (
                        <span
                          key={i}
                          className={`hebrew-char hebrew-char-${i % 12}`}
                        >
                          {char}
                        </span>
                      ))}
                  </p>
                </article>
              ) : block.id === "sixth" ? (
                // Sixth block - Alisa meme
                <article className="sixth-block-layout">
                  <img
                    src="/images/block-6/img1-block6.jpg"
                    alt="Alisa meme"
                    className="sixth-block-image"
                  />
                </article>
              ) : block.id === "seventh" ? (
                // Seventh block - Beatles with text overlay
                <article className="seventh-block-layout">
                  {block.content && (
                    <div className="seventh-block-content">
                      <p className="seventh-block-text font-serif">
                        {block.content}
                      </p>
                      <p className="seventh-block-footer">
                        Day 7. Vibe coding marathon.
                        <br />
                        Author{" "}
                        <a
                          href="https://www.linkedin.com/in/mparfeniuk/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="seventh-footer-link"
                        >
                          Max Parfeniuk
                        </a>
                      </p>
                    </div>
                  )}
                </article>
              ) : (
                // Other blocks - title + content
                <article className="space-y-6">
                  {block.title && (
                    <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                      {block.title}
                    </h2>
                  )}
                  {block.content && (
                    <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90">
                      {block.content}
                    </p>
                  )}
                </article>
              )}
            </Block>
          );
        })}
      </main>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
