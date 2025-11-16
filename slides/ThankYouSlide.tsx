
import React from 'react';
import { Mic } from 'lucide-react';

const ThankYouSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-green-900/50">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
          Thank You
        </h1>
        <div className="flex items-center justify-center gap-4">
            <Mic className="h-12 w-12 text-gray-300" />
            <p className="text-5xl text-gray-300">
             Questions?
            </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide;
