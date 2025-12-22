import React from 'react';

export const DrinksAtmosphere: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Drinks. Matcha. Good Energy.
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Komm an, entspann dich – wir kümmern uns um den Rest.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Matcha */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col items-start md:items-center text-left md:text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] flex items-center justify-center mb-4 shadow-sm">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5h9.75A3.75 3.75 0 0118 14.25v.75A4.5 4.5 0 0113.5 19.5h-6A4.5 4.5 0 013 15v-.75A3.75 3.75 0 016.75 10.5m8.25 0H18A2.25 2.25 0 0120.25 12.75v.75A3 3 0 0118 16.5M8.25 6.75c0 .75-.375 1.125-.75 1.5m3-1.5c0 .75-.375 1.125-.75 1.5m3-1.5c0 .75-.375 1.125-.75 1.5"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
              Matcha Bar
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Kostenloser Matcha für alle Gäste – von klassisch bis iced, perfekt zum Ankommen.
            </p>
          </div>

          {/* Drinks */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col items-start md:items-center text-left md:text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] flex items-center justify-center mb-4 shadow-sm">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 5.25h7.5a.75.75 0 01.74.86l-1.35 8.1a3.75 3.75 0 01-3.7 3.14H9.56a3.75 3.75 0 01-3.7-3.14l-1.35-8.1a.75.75 0 01.74-.86h3M9 5.25c0 .75.45 1.5 1.5 1.5s1.5-.75 1.5-1.5"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
              Drinks & Softdrinks
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ausgewählte Drinks, Softdrinks und Water – dezent, hochwertig, ohne Jahrmarkt-Vibe.
            </p>
          </div>

          {/* Snacks */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col items-start md:items-center text-left md:text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] flex items-center justify-center mb-4 shadow-sm">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5a3 3 0 014.243 0L12 7.757l.257-.257a3 3 0 114.243 4.243L12 16.243l-4.5-4.5A3 3 0 017.5 7.5z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
              Snacks all day
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Kleine, ausgewählte Snacks den ganzen Tag – entspannt genießen, während du die Kunst entdeckst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


