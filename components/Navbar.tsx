
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onCtaClick }) => {
  return (
    <nav
      className="w-full text-white py-4 transition-all duration-500"
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col">
          <span className="serif text-2xl tracking-[0.2em] font-bold">TWINS</span>
          <span className="text-[10px] tracking-[0.4em] uppercase -mt-1 opacity-70">
            Jewelry
          </span>
        </div>

        {/* Trust-Elemente (nur Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-[8px] tracking-[0.25em] uppercase text-white/70">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-white/5 text-gold">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 3l7.794 5.053-2.977 9.17H7.183L4.206 8.053 12 3z"
                />
              </svg>
            </div>
            <span>14K Echtgold</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-white/5 text-gold">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7 11V8a5 5 0 0110 0v3M6 11h12v8H6z"
                />
              </svg>
            </div>
            <span>Sichere Zahlung</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-white/5 text-gold">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 7h13l5 5-5 5H3z"
                />
              </svg>
            </div>
            <span>Versicherter Versand</span>
          </div>
        </div>

        <button 
          onClick={onCtaClick}
          className={`text-xs tracking-widest uppercase font-semibold border-b pb-1 transition-all ${
            scrolled
              ? 'border-black hover:border-gold hover:text-gold'
              : 'border-white hover:border-gold hover:text-gold'
          }`}
        >
          Priority List
        </button>
      </div>
    </nav>
  );
};
