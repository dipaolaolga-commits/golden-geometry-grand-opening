
import React, { useRef, useEffect, useState } from 'react';

interface HeroProps {
  onCtaClick: () => void;
  isLoading?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, isLoading = false }) => {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopImageRef = useRef<HTMLImageElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Countdown Timer Logic - Zählt rückwärts bis 17. Januar 2026
  const TARGET_DATE = new Date('2026-01-17T10:00:00'); // 17. Januar 2026, 10:00 Uhr

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = TARGET_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Starte Animationen erst, wenn der Loader fertig ist
  useEffect(() => {
    if (!isLoading) {
      // Kleine Verzögerung, damit der Loader vollständig ausgeblendet ist
      // Verwende requestAnimationFrame für synchronen Start
      const timer = setTimeout(() => {
        requestAnimationFrame(() => {
          setShouldAnimate(true);
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #121212, #1A1A1A, #1F1F1F)' }}>
      {/* Cinematic Background with Parallax */}
      <div className="absolute inset-0 opacity-[0.15] md:opacity-[0.35] transition-all duration-[2000ms] overflow-hidden">
        {/* Desktop: statisches Hero-Bild – Fokus auf oberes Drittel */}
        <img
          ref={desktopImageRef}
          src="/images/hero/hero-desktop.jpg"
          alt="Golden Geometry Studio Innenansicht"
          className="hidden md:block w-full h-full object-cover object-top scale-105"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Mobile: vertikales Video */}
        <div className="block md:hidden relative w-full h-full">
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/hero/mobile-hero.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
        </div>
      </div>

      {/* Subtle Gradient Overlay for Readability – mobil stärker abdunkeln */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 md:from-black/40 md:via-transparent md:to-black/60 z-0"></div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-28 text-center text-white mt-[-1.5rem] md:mt-0">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight ${shouldAnimate ? 'animate-slide-in-top' : ''}`} style={{ opacity: shouldAnimate ? undefined : 0 }}>
          <span className="block md:inline">Grand Opening</span>
          <br className="hidden md:block" />
          <span className="block md:inline text-4xl md:text-6xl italic font-light md:ml-2">Dein 50€ Tattoo-Gutschein wartet.</span>
        </h1>
        <p className={`text-xs md:text-base mb-8 md:mb-10 tracking-[0.25em] font-light max-w-2xl mx-auto uppercase ${shouldAnimate ? 'animate-slide-in-bottom opacity-90' : 'opacity-0'}`}>
          Sichere dir jetzt deinen exklusiven Gutschein für unser Grand Opening Event.
        </p>

        {/* Countdown Timer */}
        <div className={`flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-8 ${shouldAnimate ? 'animate-slide-in-bottom' : ''}`} style={{ opacity: shouldAnimate ? undefined : 0, animationDelay: shouldAnimate ? '0.2s' : '0s' }}>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold mb-1 text-white">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Tage</span>
          </div>
          <span className="text-xl md:text-4xl font-bold text-white/70 mx-0.5 md:mx-0">:</span>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold mb-1 text-white">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Stunden</span>
          </div>
          <span className="text-xl md:text-4xl font-bold text-white/70 mx-0.5 md:mx-0">:</span>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold mb-1 text-white">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Minuten</span>
          </div>
          <span className="text-xl md:text-4xl font-bold text-white/70 mx-0.5 md:mx-0">:</span>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold mb-1 text-white">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Sekunden</span>
          </div>
        </div>

        <button 
          onClick={onCtaClick}
          className={`text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm tracking-[0.3em] uppercase font-bold transition-all duration-700 ease-out mb-8 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group ${shouldAnimate ? 'animate-slide-in-bottom-short' : ''}`}
          style={{ opacity: 0, animationDelay: shouldAnimate ? '0.4s' : '0s' }}
        >
          <span className="relative z-10">Jetzt 50€ Gutschein sichern</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-[8px] uppercase tracking-[0.4em] mb-3 text-white">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};
