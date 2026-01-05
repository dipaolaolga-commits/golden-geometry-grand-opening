
import React from 'react';

interface CountdownProps {
  onCtaClick: () => void;
}

export const Countdown: React.FC<CountdownProps> = ({ onCtaClick }) => {
  return (
    <section className="py-12 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-6 tracking-tight uppercase text-black">
          THE GRAND OPENING.
        </h2>
        <p className="text-sm md:text-base mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          <span className="text-lg md:text-xl font-light tracking-wide" style={{ color: '#8B5CF6' }}>Münchens neue Adresse für Körperkunst.</span>
          <br /><br />
          Präzision trifft Party. Sei dabei, wenn Golden Geometry offiziell startet. Wir laden dich ein auf einen Tag voller Kunst, Networking und guter Drinks.
          <br /><br />
          Triff die Artists, check die Location und hol dir exklusiv als Gast deinen 50€ Eröffnungs-Gutschein ab.
        </p>

        {/* Event Information & Atmosphere Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Datum Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">DATUM</h3>
              <p className="text-black text-lg font-semibold mb-1">17. Januar 2026</p>
              <p className="text-gray-600 text-sm">Samstag</p>
            </div>
          </div>

          {/* Uhrzeit Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">UHRZEIT</h3>
              <p className="text-black text-lg font-semibold mb-1">Ab 12:00 Uhr –</p>
              <p className="text-gray-600 text-sm">Open Doors</p>
            </div>
          </div>

          {/* Adresse Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">ADRESSE</h3>
              <p className="text-black text-lg font-semibold mb-1">Hohenzollernstraße 72</p>
              <p className="text-gray-600 text-sm">80801 München</p>
            </div>
          </div>

          {/* Matcha Bar */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5h9.75A3.75 3.75 0 0118 14.25v.75A4.5 4.5 0 0113.5 19.5h-6A4.5 4.5 0 013 15v-.75A3.75 3.75 0 016.75 10.5m8.25 0H18A2.25 2.25 0 0120.25 12.75v.75A3 3 0 0118 16.5M8.25 6.75c0 .75-.375 1.125-.75 1.5m3-1.5c0 .75-.375 1.125-.75 1.5m3-1.5c0 .75-.375 1.125-.75 1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">MATCHA BAR</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Kostenloser Matcha für alle Gäste – von klassisch bis iced, perfekt zum Ankommen.
              </p>
            </div>
          </div>

          {/* Drinks & Softdrinks */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 5.25h7.5a.75.75 0 01.74.86l-1.35 8.1a3.75 3.75 0 01-3.7 3.14H9.56a3.75 3.75 0 01-3.7-3.14l-1.35-8.1a.75.75 0 01.74-.86h3M9 5.25c0 .75.45 1.5 1.5 1.5s1.5-.75 1.5-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">DRINKS & SOFTDRINKS</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Ausgewählte Drinks, Softdrinks und Water – dezent, hochwertig, ohne Jahrmarkt-Vibe.
              </p>
            </div>
          </div>

          {/* Snacks all day */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5a3 3 0 014.243 0L12 7.757l.257-.257a3 3 0 114.243 4.243L12 16.243l-4.5-4.5A3 3 0 017.5 7.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">SNACKS ALL DAY</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Kleine, ausgewählte Snacks den ganzen Tag – entspannt genießen, während du die Kunst entdeckst.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onCtaClick}
            className="text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm tracking-[0.34em] uppercase font-bold transition-all duration-700 ease-out mb-8 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group"
          >
            <span className="relative z-10">Auf VIP-Gästeliste eintragen</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

