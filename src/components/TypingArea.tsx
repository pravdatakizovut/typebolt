import React, { useEffect, useRef } from 'react';
import { WORDS } from '../lib/words';
import { MousePointerClick } from 'lucide-react';

type TypingAreaProps = {
  typed: string;
  onKeyDown: (e: React.KeyboardEvent) => void;
};
function TypingArea({ typed, onKeyDown }: TypingAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = WORDS.join(' ');

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const getCharClass = (i: number) => {
    if (i < typed.length) {
      return text[i] === typed[i] ? 'text-grn' : 'text-red-400';
    }
    if (i === typed.length) {
      return 'text-accent'; // текущая
    }
    return 'text-text-secondary'; // впереди
  };
  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="bg-bg-section p-8 font-mono text-2xl rounded-2xl text-text-secondary border-border-section border flex flex-wrap gap-2 focus:outline-none focus:border-accent/50 group relative cursor-default"
    >
      <div className="flex flex-wrap gap-2 blur-sm group-focus-within:blur-none">
        {WORDS.map((word, wordIndex) => {
          const startIndex =
            WORDS.slice(0, wordIndex).join(' ').length +
            (wordIndex > 0 ? 1 : 0);

          return (
            <span key={wordIndex}>
              {word.split('').map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={getCharClass(startIndex + charIndex)}
                >
                  {startIndex + charIndex === typed.length && (
                    <span className="inline-block w-0.75 rounded-full h-6 bg-white animate-pulse " />
                  )}
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </div>
      <div className="group-focus-within:hidden absolute left-1/2 flex gap-2 text-accent items-center top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default">
        <MousePointerClick />
        <span>Нажмите, чтобы начать</span>
      </div>
    </div>
  );
}

export default TypingArea;
