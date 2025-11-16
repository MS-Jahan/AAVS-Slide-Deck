
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, total, onPrev, onNext }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-50 z-20">
      <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4">
        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <span className="text-sm text-gray-400">
          Slide {current + 1} of {total}
        </span>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
