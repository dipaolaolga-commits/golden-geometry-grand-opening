
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { TattooStyles } from './components/TattooStyles';
import { VoucherSteps } from './components/VoucherSteps';
import { Testimonials } from './components/Testimonials';
import { PrecisionMeetsArt } from './components/PrecisionMeetsArt';
import { MeetTheArtists } from './components/MeetTheArtists';
import { FAQ } from './components/FAQ';
import { LeadMagnet } from './components/LeadMagnet';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { TrustBar } from './components/TrustBar';
import { CookieBanner } from './components/CookieBanner';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';
import { Anmeldung } from './components/Anmeldung';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [shouldLoadCookieBanner, setShouldLoadCookieBanner] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [showAnmeldung, setShowAnmeldung] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Sticky-Button erst nach Hero-Bereich anzeigen (ca. nach einer Bildschirmhöhe)
      setShowStickyCta(currentScrollY > window.innerHeight * 0.6);
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
    // Wenn wir auf der Hauptseite sind, scroll smooth zur Waitlist-Sektion
    if (!showImpressum && !showDatenschutz && !showAnmeldung) {
      // Versuche zuerst direkt zum Formular zu scrollen
      const formElement = document.getElementById('waitlist-form');
      const targetElement = formElement || document.getElementById('waitlist');

      if (targetElement) {
        // Berechne die Position mit Offset für den fixierten Header
        const headerOffset = 100; // Anpassbar je nach Header-Höhe
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Wenn wir auf einer anderen Seite sind, öffne die Anmeldungs-Unterseite
      setShowAnmeldung(true);
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

  // Wenn Anmeldung angezeigt wird, zeige nur die Anmeldungs-Seite
  if (showAnmeldung) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}
        <Anmeldung onBack={() => setShowAnmeldung(false)} />
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
            ? 'backdrop-blur-md border-b border-gray-200 shadow-lg bg-white/90'
            : 'bg-white'
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
        <Hero onCtaClick={scrollToForm} isLoading={isLoading} />
        <Countdown onCtaClick={scrollToForm} />
        <TattooStyles />
        <VoucherSteps onCtaClick={scrollToForm} />
        <Testimonials />
        <PrecisionMeetsArt onCtaClick={scrollToForm} />
        <MeetTheArtists />
        <FAQ />
        <LeadMagnet id="waitlist" />
      </main>

      <Footer 
        onImpressumClick={() => setShowImpressum(true)} 
        onDatenschutzClick={() => setShowDatenschutz(true)}
        onAnmeldungClick={() => setShowAnmeldung(true)}
      />

      {shouldLoadCookieBanner && <CookieBanner />}

      {showExitIntent && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-md px-4 transition-opacity duration-300 bg-white/90"
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
              <p className="text-[9px] uppercase tracking-[0.4em] mb-6" style={{ color: '#8B5CF6' }}>
                Bevor du gehst
              </p>
              <h3 className="serif text-4xl md:text-5xl mb-6 leading-tight">
                Sichere dir deinen 50€ Gutschein.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-10 font-light max-w-md mx-auto">
                Trage dich jetzt ein und erhalte deinen exklusiven 50€ Gutschein für das Grand Opening Event von Golden Geometry.
              </p>
              <button
                onClick={() => {
                  scrollToForm();
                  setShowExitIntent(false);
                }}
                className="w-full text-white py-5 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-700 ease-out shadow-[0_4px_12px_rgba(139,92,246,0.3)] bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group"
              >
                <span className="relative z-10">50€ Gutschein sichern</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA unten – erst nach Hero sichtbar, weich ein-/ausblenden, mit Glass-Hintergrund */}
      {!showImpressum && !showDatenschutz && !showAnmeldung && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-3 border-t border-gray-200/70 backdrop-blur-md bg-white/85 transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
            showStickyCta
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-6 pointer-events-none'
          }`}
        >
          <button
            onClick={scrollToForm}
            className="w-full text-white py-4 text-[12px] tracking-[0.34em] uppercase font-bold bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] shadow-[0_18px_45px_rgba(139,92,246,0.7)]"
          >
            50€ Gutschein sichern
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
