
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Collection } from './components/Collection';
import { Quality } from './components/Quality';
import { Reveal } from './components/Reveal';
import { TargetAudience } from './components/TargetAudience';
import { LeadMagnet } from './components/LeadMagnet';
import { LaunchNotice } from './components/LaunchNotice';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { TrustBar } from './components/TrustBar';
import { CookieBanner } from './components/CookieBanner';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [shouldLoadCookieBanner, setShouldLoadCookieBanner] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lazy load Cookie Banner after initial render to improve performance
  useEffect(() => {
    // Load cookie banner after page is interactive
    const timer = setTimeout(() => {
      setShouldLoadCookieBanner(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      // Nur Desktop, nur wenn der Mauszeiger oben das Fenster verlässt und bereits etwas gescrollt wurde
      // Und nur einmal pro Session (per sessionStorage gesteuert)
      if (
        typeof window === 'undefined' ||
        window.innerWidth < 1024 ||
        showExitIntent ||
        window.scrollY < 400 ||
        event.clientY > 0 ||
        sessionStorage.getItem('exitIntentShown') === 'true'
      ) {
        return;
      }

      sessionStorage.setItem('exitIntentShown', 'true');
      setShowExitIntent(true);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitIntent]);

  const scrollToForm = () => {
    // Versuche zuerst direkt zum Formular zu scrollen
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      // Auf Mobilgeräten etwas mehr Offset, damit das Formular vollständig sichtbar ist
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 120 : 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback: Falls das Formular-Element nicht gefunden wird, zur Sektion scrollen
      const element = document.getElementById('waitlist');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Wenn Impressum angezeigt wird, zeige nur die Impressum-Seite
  if (showImpressum) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}
        <Impressum onBack={() => setShowImpressum(false)} />
        {shouldLoadCookieBanner && <CookieBanner />}
      </div>
    );
  }

  // Wenn Datenschutz angezeigt wird, zeige nur die Datenschutz-Seite
  if (showDatenschutz) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}
        <Datenschutz onBack={() => setShowDatenschutz(false)} />
        {shouldLoadCookieBanner && <CookieBanner />}
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}
      {/* Fixierter Header mit Trust-Bar + Navbar, mit Glass-Effekt beim Scrollen */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-black'
        }`}
      >
        <Navbar scrolled={scrolled} onCtaClick={scrollToForm} />

        {/* Mobile: Trust-Bar unterhalb der Navbar */}
        <div className="block md:hidden">
          <TrustBar />
        </div>
      </header>

      {/* Hauptinhalt – Hero kümmert sich selbst um den Abstand nach dem Header */}
      <main>
        <Hero onCtaClick={scrollToForm} />
        <Story />
        <Quality />
        <Collection onProductClick={scrollToForm} />
        <Reveal />
        <TargetAudience />
        <LeadMagnet id="waitlist" />
        <LaunchNotice />
      </main>

      <Footer 
        onImpressumClick={() => setShowImpressum(true)} 
        onDatenschutzClick={() => setShowDatenschutz(true)} 
      />

      {shouldLoadCookieBanner && <CookieBanner />}

      {showExitIntent && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 transition-opacity duration-300"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
          onClick={() => setShowExitIntent(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-white text-black p-12 md:p-16 shadow-2xl"
            style={{ animation: 'zoomIn 0.5s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Close Button */}
            <button
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors group"
              onClick={() => setShowExitIntent(false)}
              aria-label="Schließen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-[0.4em] mb-6" style={{ color: '#C5A059' }}>
                Bevor du gehst
              </p>
              <h3 className="serif text-4xl md:text-5xl mb-6 leading-tight">
                Sicher dir deinen Zugang vor dem Launch.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-10 font-light max-w-md mx-auto">
                Trage dich jetzt in die Priority List ein und erhalte Early Access zum Shop
                sowie einen einmaligen 10&nbsp;% Vorteil auf deine erste Bestellung.
              </p>
              <button
                onClick={() => {
                  scrollToForm();
                  setShowExitIntent(false);
                }}
                className="w-full bg-white text-black py-5 text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-700 shadow-[0_4px_12px_rgba(0,0,0,0.1)] group overflow-hidden relative"
              >
                <span className="relative z-10">Zur Priority List &amp; 10% Vorteil</span>
                <div className="absolute inset-0 bg-[#C5A059] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
