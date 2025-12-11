import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export function QuantumComputer() {
  const { t } = useLanguage();
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleAsk = () => {
    setIsCalculating(true);
    setShowAnswer(false);
    setProgress(0);

    const duration = 30000; // 30 seconds
    const interval = 100; // Update every 100ms
    const increment = (interval / duration) * 100;

    let currentProgress = 0;
    timerRef.current = window.setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        if (timerRef.current) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setIsCalculating(false);
        setShowAnswer(true);
      }
    }, interval);
  };

  return (
    <div className="quantum-computer-layout">
      <div className="quantum-computer-content">
        {!isCalculating && !showAnswer && (
          <button
            onClick={handleAsk}
            className="quantum-button font-serif"
            aria-label="Ask quantum computer"
          >
            {t.quantum.buttonText}
          </button>
        )}

        {isCalculating && (
          <div className="quantum-calculating">
            <div className="quantum-progress-container">
              <div
                className="quantum-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="quantum-status font-serif">{t.quantum.calculating}</p>
            <div className="quantum-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {showAnswer && (
          <div className="quantum-answer">
            <p className="quantum-answer-text font-serif">
              {t.quantum.answerText}
            </p>
            <p className="quantum-answer-number font-serif">
              {t.quantum.answerLabel}: 41.784857857445454547343
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
