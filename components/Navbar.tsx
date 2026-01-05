
import React from 'react';
import { useAgencyCounter } from '../contexts/AgencyCounterContext';

interface NavbarProps {
  scrolled: boolean;
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onCtaClick }) => {
  const { leadMagnetCount } = useAgencyCounter();
  const formattedLiveCount = leadMagnetCount.toLocaleString('de-DE');

  return (
    <nav
      className="w-full text-black py-2 md:py-3 transition-all duration-500"
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-2 md:gap-4 lg:gap-8">
        <div className="flex flex-col flex-shrink-0">
          <img
            src="/images/logo/logo-navbar.png"
            alt="Golden Geometry Logo"
            className="w-[160px] sm:w-[180px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
          />
        </div>

        {/* Counter - Mobil: rechts (anstelle des Buttons), Desktop: in der Mitte */}
        <div className="flex md:hidden items-center gap-2 text-black flex-shrink-0">
          <span className="text-xs tracking-[0.15em] uppercase font-bold whitespace-nowrap">
            {formattedLiveCount}
            <span className="text-[10px] align-middle ml-0.5 opacity-70">+</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
            Personen bereits dabei
          </span>
        </div>

        {/* Counter - Desktop: in der Mitte zwischen Logo und Trust-Elemente */}
        <div className="hidden md:flex items-center gap-2 text-black flex-shrink-0">
          <span className="text-sm tracking-[0.2em] uppercase font-bold whitespace-nowrap">
            {formattedLiveCount}
            <span className="text-xs align-middle ml-0.5 opacity-70">+</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
            dabei
          </span>
        </div>

        {/* Trust-Elemente (nur Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-600 -mt-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-200 bg-gray-50 text-[#8B5CF6]">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <span>5.0 Sterne</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-200 bg-gray-50 text-[#8B5CF6]">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span>220+ Bewertungen</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-200 bg-gray-50 text-[#8B5CF6]">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span>München</span>
          </div>
        </div>

        {/* Button - nur Desktop (auf Mobil wird der Counter an dieser Stelle angezeigt) */}
        <button 
          onClick={onCtaClick}
          className="hidden md:block text-[10px] md:text-xs tracking-widest uppercase font-semibold border-b border-black pb-1 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all"
        >
          50€ Gutschein sichern
        </button>
      </div>
    </nav>
  );
};
