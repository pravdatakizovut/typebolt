import React, { useEffect, useRef, useState } from 'react';
import { WORDS } from '../lib/words';
import { Cigarette } from 'lucide-react';

function TypingArea() {
  const [typed, setTyped] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const text = WORDS.join(' ');
  console.log(typed);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setTyped(prev => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      setTyped(prev => prev + e.key);
    }
  };
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
      onKeyDown={handleKeyDown}
      className="bg-bg-section p-8 font-mono text-2xl rounded-2xl text-text-secondary border-border-section border flex flex-wrap gap-2 focus:outline-none focus:border-accent/50"
    >
      {WORDS.map((word, wordIndex) => {
        const startIndex =
          WORDS.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0);

        return (
          <span key={wordIndex}>
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className={getCharClass(startIndex + charIndex)}
              >
                {startIndex + charIndex === typed.length && (
                  <span className="inline-block w-[3px] h-6 bg-white animate-pulse " />
                )}
                {char}
              </span>
            ))}
          </span>
        );
      })}
    </div>
  );
}

export default TypingArea;
