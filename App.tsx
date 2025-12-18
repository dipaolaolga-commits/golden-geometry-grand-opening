
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Collection } from './components/Collection';
import { Quality } from './components/Quality';
import { TargetAudience } from './components/TargetAudience';
import { LeadMagnet } from './components/LeadMagnet';
import { LaunchNotice } from './components/LaunchNotice';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { TrustBar } from './components/TrustBar';
import { CookieBanner } from './components/CookieBanner';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      // Nur Desktop, nur wenn der Mauszeiger oben das Fenster verlässt und bereits etwas gescrollt wurde
      if (
        window.innerWidth < 1024 ||
        showExitIntent ||
        window.scrollY < 400 ||
        event.clientY > 0
      ) {
        return;
      }
      setShowExitIntent(true);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitIntent]);

  const scrollToForm = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
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
        <TargetAudience />
        <LeadMagnet id="waitlist" />
        <LaunchNotice />
      </main>

      <Footer />

      <CookieBanner />

      {showExitIntent && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative max-w-xl w-full bg-white text-black p-10 md:p-12 shadow-2xl">
            <button
              className="absolute top-4 right-4 text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-black"
              onClick={() => setShowExitIntent(false)}
            >
              Close
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">
              Bevor du gehst
            </p>
            <h3 className="serif text-3xl md:text-4xl mb-4">
              Sicher dir deinen Zugang vor dem Launch.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Trage dich jetzt in die Priority List ein und erhalte Early Access zum Shop
              sowie einen einmaligen 10&nbsp;% Vorteil auf deine erste Bestellung.
            </p>
            <button
              onClick={() => {
                scrollToForm();
                setShowExitIntent(false);
              }}
              className="w-full bg-black text-white py-4 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-gold transition-all duration-500"
            >
              Zur Priority List &amp; 10% Vorteil
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
