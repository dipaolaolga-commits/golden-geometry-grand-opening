
import React, { useRef, useEffect, useState } from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopImageRef = useRef<HTMLImageElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background with Parallax */}
      <div className="absolute inset-0 opacity-[0.35] transition-all duration-[2000ms] overflow-hidden">
        {/* Desktop: statisches Hero-Bild – Fokus auf oberes Drittel */}
        <img
          ref={desktopImageRef}
          src="/images/hero/hero-desktop.jpg"
          alt="TWINS Jewelry Hero"
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
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <source
              src="/videos/hero/mobile-hero.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Audio Toggle Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-10 right-10 z-20 flex items-center gap-2 group px-4 py-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/10 transition-all rounded-full"
            aria-label={isMuted ? "Audio einschalten" : "Audio ausschalten"}
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
              {isMuted ? "Audio Off" : "Audio On"}
            </span>
            {isMuted ? (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Subtle Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-28 text-center text-white fade-in mt-[-1.5rem] md:mt-0">
        <h1 className="text-3xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight">
          VON DER FASHION WEEK <span className="italic font-light">INSPIRIERT</span> – <br />
          FÜR DICH ENTWORFEN.
        </h1>
        <p className="text-xs md:text-lg mb-8 md:mb-10 tracking-[0.25em] font-light max-w-2xl mx-auto uppercase opacity-90">
          <span className="whitespace-nowrap md:whitespace-normal">
            Twins Jewelry. The First Collection.
          </span>
          <br />
          8 exklusive Designs in 14K Echtgold. Streng limitiert.
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-white text-black px-12 py-6 text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group overflow-hidden relative"
        >
          <span className="relative z-10">Zur Priority List & 10% Vorteil</span>
          <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-[8px] uppercase tracking-[0.4em] mb-3 text-white">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};
