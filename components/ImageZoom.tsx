import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const imageRef = useRef<HTMLImageElement>(null);
  const isPanning = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  const openModal = () => setIsOpen(true);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Reset state after transition
    setTimeout(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    }, 300);
  }, []);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev * 1.2, 5));
  };
  
  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const onMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (e.button !== 0) return; // Only left click
    isPanning.current = true;
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    if (imageRef.current) {
        imageRef.current.style.cursor = 'grabbing';
    }
  };
  
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isPanning.current) return;
    setPosition({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y,
    });
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    isPanning.current = false;
    if (imageRef.current) {
        imageRef.current.style.cursor = 'grab';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      <style>{`
        .image-zoom-modal {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .image-zoom-modal.open {
          opacity: 1;
        }
      `}</style>
      <div 
        className="w-full h-[75vh] flex items-center justify-center bg-gray-800/30 rounded-lg p-4 cursor-zoom-in hover:bg-gray-800/50 transition-colors" 
        onClick={openModal}
        role="button"
        aria-label={`View ${alt} in fullscreen`}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-md"
        />
      </div>

      {isOpen && (
        <div 
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 image-zoom-modal ${isOpen ? 'open' : ''}`}
          onClick={closeModal}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          role="dialog"
          aria-modal="true"
        >
          <img 
            ref={imageRef}
            src={src} 
            alt={alt} 
            className="max-w-[95vw] max-h-[95vh] object-contain transition-transform duration-200 ease-out"
            style={{ 
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`, 
              cursor: scale > 1 ? 'grab' : 'default',
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={scale > 1 ? onMouseDown : undefined}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); closeModal(); }} 
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/70 text-white hover:bg-blue-500 transition-colors"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-gray-800/70"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleZoomOut} 
              className="p-2 rounded-full text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
              aria-label="Zoom out"
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-6 w-6" />
            </button>
            <span className="text-white w-12 text-center font-mono">{(scale * 100).toFixed(0)}%</span>
            <button 
              onClick={handleZoomIn} 
              className="p-2 rounded-full text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
              aria-label="Zoom in"
              disabled={scale >= 5}
            >
              <ZoomIn className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoom;
