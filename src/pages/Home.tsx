import { RefreshCcw } from 'lucide-react';
import TypingArea from '../components/TypingArea';
import { useEffect, useState } from 'react';
import { calcAccuracy, calcWpm, timeFormat } from '../lib/calc';
import { WORDS } from '../lib/words';

function Home() {
  // State
  const [typed, setTyped] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number>(0);
  // Handlers
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setTyped(prev => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      if (startTime == null) {
        setStartTime(Date.now());
      }
      setTyped(prev => prev + e.key);
    }
  };
  // Effects
  useEffect(() => {
    if (startTime === null) return;
    const intevalId = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intevalId);
  }, [startTime]);
  // Tool
  const text = WORDS.join(' ');
  const seconds = timeFormat(elapsed);
  const accuracy = calcAccuracy(typed, text);
  const minutes = elapsed / 60;
  const wpm = calcWpm(typed, text, minutes);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-4 mb-10 font-mono">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="font-medium text-sm text-text-secondary">TIME</span>
          <span className="text-white text-xl ">{seconds}</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="font-medium text-sm text-text-secondary">WPM</span>
          <span className="text-white text-xl">{wpm}</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="font-medium text-sm text-text-secondary">ACC</span>
          <span className="text-white text-xl">{accuracy}</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <button className="bg-bg-section p-2 border-border-section border rounded-md cursor-pointer hover:border-accent transition-colors ease-in group">
            <RefreshCcw
              size={21}
              className="group-hover:-rotate-180 transition-transform ease-out duration-350"
            />
          </button>
        </div>
      </div>
      <TypingArea typed={typed} onKeyDown={handleKeyDown} />
    </div>
  );
}

export default Home;
