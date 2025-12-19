import React, { useEffect, useState, useRef } from 'react';

interface LoaderProps {
  onLoadComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const startTime = useRef(Date.now());
  const minDisplayTime = 2000; // Mindestanzeigedauer: 2 Sekunden

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
        }, 500);
      }
    }, 16); // ~60fps für flüssige Animation

    // Fallback: Falls etwas schief geht, zeige den Loader trotzdem nach max. 3 Sekunden
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsComplete(true);
      setTimeout(() => {
        onLoadComplete();
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-700 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* TWINS Logo */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <span className="serif text-6xl md:text-7xl tracking-[0.2em] font-bold text-black">TWINS</span>
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-50 -mt-1">Jewelry</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-[1px] bg-gray-200 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#C5A059] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-gray-400">
          {progress < 100 ? 'Lädt...' : 'Fertig'}
        </p>
      </div>
    </div>
  );
};

