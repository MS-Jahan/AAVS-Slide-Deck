
import React, { useState, useCallback, useEffect } from 'react';
import { slides } from './slides/slideData';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <main className="h-screen w-screen bg-gray-900 text-white font-sans overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ transitionDelay: index === currentSlide ? '200ms' : '0ms' }}
          >
            <SlideComponent />
          </div>
        ))}
      </div>
      <Navigation
        current={currentSlide}
        total={slides.length}
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
      />
    </main>
  );
};

export default App;
