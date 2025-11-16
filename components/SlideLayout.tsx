
import React from 'react';

interface SlideLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ title, children }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 drop-shadow-lg">
        {title}
      </h1>
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
