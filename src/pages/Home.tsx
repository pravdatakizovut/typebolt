import { RefreshCcw } from 'lucide-react';
import TypingArea from '../components/TypingArea';

function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 mb-10 font-mono">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="font-medium text-sm text-text-secondary">TIME</span>
          <span className="text-white text-xl ">0:42</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="font-medium text-sm text-text-secondary">WPM</span>
          <span className="text-white text-xl">64</span>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <span className="font-medium text-sm text-text-secondary">ACC</span>
          <span className="text-white text-xl">98%</span>
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
      <TypingArea />
    </div>
  );
}

export default Home;
