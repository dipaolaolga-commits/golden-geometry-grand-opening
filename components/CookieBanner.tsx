
import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prüfe, ob der Benutzer bereits eine Entscheidung getroffen hat
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Zeige den Banner nach kurzer Verzögerung
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-6 py-4 md:py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Wir verwenden Cookies, um deine Erfahrung zu verbessern und unsere Website zu analysieren. 
            Durch die Nutzung unserer Website stimmst du der Verwendung von Cookies zu.{' '}
            <a href="#" className="text-gold hover:underline font-medium">Mehr erfahren</a>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-6 py-2 text-xs uppercase tracking-widest border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-xs uppercase tracking-widest bg-black text-white hover:bg-gold transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

