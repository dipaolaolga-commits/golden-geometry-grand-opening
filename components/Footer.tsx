
import React from 'react';

interface FooterProps {
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
  onAnmeldungClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onImpressumClick, onDatenschutzClick, onAnmeldungClick }) => {
  return (
    <footer className="py-12 md:py-20 bg-black md:bg-white border-t border-gray-100 md:border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-start md:items-start mb-2 md:mb-4">
              <img
                src="/images/logo/logo.png"
                alt="Golden Geometry Logo"
                className="w-32 sm:w-40 md:w-44"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 md:text-gray-400 mb-1 md:mb-2">Navigation</h4>
              {onAnmeldungClick && (
                <button
                  onClick={onAnmeldungClick}
                  className="text-sm hover:text-[#8B5CF6] transition-colors text-left text-white md:text-black"
                >
                  VIP-Gästeliste
                </button>
              )}
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 md:text-gray-400 mb-1 md:mb-2">Legal</h4>
              <button
                onClick={onImpressumClick}
                className="text-sm hover:text-[#8B5CF6] transition-colors text-left text-white md:text-black"
              >
                Impressum
              </button>
              <button
                onClick={onDatenschutzClick}
                className="text-sm hover:text-[#8B5CF6] transition-colors text-left text-white md:text-black"
              >
                Datenschutz
              </button>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 md:text-gray-400 mb-1 md:mb-2">Kontakt</h4>
              <p className="text-sm text-gray-300 md:text-gray-600">info@golden-geometry.tattoo</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3 hidden md:flex">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Adresse</h4>
              <p className="text-sm text-gray-600">Hohenzollernstraße 72</p>
              <p className="text-sm text-gray-600">80801 München</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3 hidden md:flex">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Öffnungszeiten</h4>
              <p className="text-sm text-gray-600">Mo-Fr: 10:00 - 20:00</p>
              <p className="text-sm text-gray-600">Sa: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 md:border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 gap-4">
          <p className="text-gray-400">© 2026 GOLDEN GEOMETRY. ALL RIGHTS RESERVED.</p>
          <p className="text-gray-400">MÜNCHEN</p>
        </div>
      </div>
    </footer>
  );
};

