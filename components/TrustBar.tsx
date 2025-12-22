import React from 'react';

const TRUST_ITEMS = [
  {
    title: '5.0 Sterne',
    description: 'Bewertungen',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    title: '220+ Bewertungen',
    description: 'Bewertungen',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'München',
    description: 'Standort',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-transparent text-black text-[8px] md:text-[9px]">
      <div className="container mx-auto px-3 md:px-6 py-1.5 md:py-2 flex flex-row flex-wrap md:flex-row items-center justify-center md:justify-center gap-3 md:gap-5">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.22em] uppercase text-gray-600"
          >
            <div className="flex items-center justify-center w-6 h-6 md:w-6 md:h-6 rounded-full border border-gray-200 bg-gray-50 flex-shrink-0" style={{ color: '#8B5CF6' }}>
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black leading-tight whitespace-nowrap">
                {item.title}
              </span>
              <span className="hidden md:inline text-[7px] md:text-[8px] tracking-[0.24em] opacity-60 whitespace-nowrap">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


