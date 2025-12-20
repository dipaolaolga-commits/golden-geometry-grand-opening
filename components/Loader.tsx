import React, { useEffect, useState, useRef } from 'react';

interface LoaderProps {
  onLoadComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const startTime = useRef(Date.now());
  const minDisplayTime = 2000; // Animationsdauer: 2 Sekunden

  useEffect(() => {
    // Aktualisiere Progress basierend auf verstrichener Zeit
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const newProgress = Math.min((elapsed / minDisplayTime) * 100, 100);
      
      setProgress(newProgress);
      
      // Wenn die Mindestanzeigedauer erreicht ist
      if (elapsed >= minDisplayTime) {
        clearInterval(interval);
        setProgress(100);
        setIsComplete(true);
        setTimeout(() => {
          onLoadComplete();
        }, 300);
      }
    }, 16); // ~60fps für flüssige Animation

    // Fallback: Falls etwas schief geht, zeige den Loader trotzdem nach max. 2.5 Sekunden
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsComplete(true);
      setTimeout(() => {
        onLoadComplete();
      }, 300);
    }, 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #fefefe 0%, #fafafa 50%, #fcfcfc 100%)'
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto">
        {/* Golden Geometry Logo */}
        <div className="mb-12 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Text Logo */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <span className="serif text-3xl sm:text-4xl md:text-6xl tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] font-bold text-black block md:inline">GOLDEN GEOMETRY</span>
            </div>
            <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-black font-light text-center">Grand Opening</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-64 md:max-w-80 h-[1px] bg-gray-300 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, backgroundColor: '#8B5CF6' }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-gray-600 text-center">
          {progress < 100 ? 'Lädt...' : 'Fertig'}
        </p>
      </div>
    </div>
  );
};

