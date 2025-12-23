import React, { useEffect, useState, useRef, useCallback } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [currentValidIndex, setCurrentValidIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const imageRef = useRef<HTMLImageElement>(null);

  // Swipe-Distanz in Pixel
  const minSwipeDistance = 50;

  // Navigation-Funktionen müssen vor ihrer Verwendung definiert werden
  const handleNext = useCallback(() => {
    setCurrentValidIndex((prev) => {
      if (validImages.length > 0) {
        return (prev + 1) % validImages.length;
      }
      return prev;
    });
  }, [validImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentValidIndex((prev) => {
      if (validImages.length > 0) {
        return (prev - 1 + validImages.length) % validImages.length;
      }
      return prev;
    });
  }, [validImages.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
    
    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Verhindere Body-Scroll wenn Lightbox offen ist
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, handleNext, handlePrev]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Filtere nur existierende Bilder beim Öffnen
  useEffect(() => {
    const filteredImages: string[] = [];
    let targetIndex = 0;
    let foundCurrent = false;

    // Prüfe alle Bilder und filtere nur existierende
    const checkImages = async () => {
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const exists = await new Promise<boolean>((resolve) => {
          const imgElement = new Image();
          imgElement.onload = () => resolve(true);
          imgElement.onerror = () => resolve(false);
          imgElement.src = img;
        });

        if (exists) {
          filteredImages.push(img);
          if (i === currentIndex && !foundCurrent) {
            targetIndex = filteredImages.length - 1;
            foundCurrent = true;
          }
        }
      }

      setValidImages(filteredImages);
      if (foundCurrent) {
        setCurrentValidIndex(targetIndex);
      } else if (filteredImages.length > 0) {
        setCurrentValidIndex(0);
      }
    };

    checkImages();
  }, [images, currentIndex]);

  const handleImageLoad = (imgSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imgSrc));
  };

  const handleImageError = () => {
    // Entferne das fehlerhafte Bild aus der Liste
    const newValidImages = validImages.filter((img, idx) => idx !== currentValidIndex);
    if (newValidImages.length > 0) {
      setValidImages(newValidImages);
      if (currentValidIndex >= newValidImages.length) {
        setCurrentValidIndex(newValidImages.length - 1);
      }
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all text-white z-20"
        aria-label="Schließen"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Arrows */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all text-white z-20"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all text-white z-20"
            aria-label="Nächstes Bild"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image Container */}
      {validImages.length > 0 && currentValidIndex < validImages.length && (
        <div 
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center touch-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            ref={imageRef}
            src={validImages[currentValidIndex]}
            alt={`Bild ${currentValidIndex + 1} von ${validImages.length}`}
            className="max-w-full max-h-[90vh] object-contain select-none"
            draggable={false}
            onLoad={() => handleImageLoad(validImages[currentValidIndex])}
            onError={handleImageError}
          />
        </div>
      )}

      {/* Image Counter */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
          {currentValidIndex + 1} / {validImages.length}
        </div>
      )}
    </div>
  );
};

