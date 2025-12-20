import React from 'react';

const TRUST_ITEMS = [
  {
    title: '4.9 Sterne',
    description: 'Über 100 Bewertungen.',
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
    title: 'Professionelle Artists',
    description: 'Erfahrene Tätowierer.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Hygiene First',
    description: 'Höchste Standards.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-transparent text-black text-[7px] md:text-[9px]">
      <div className="container mx-auto px-3 md:px-6 py-1.5 md:py-2.5 flex flex-row flex-wrap md:flex-row items-center justify-center md:justify-center gap-1.5 md:gap-5">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-1 md:gap-2 text-[7px] md:text-[9px] tracking-[0.18em] md:tracking-[0.22em] uppercase text-gray-600"
          >
            <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-200 bg-gray-50 flex-shrink-0" style={{ color: '#8B5CF6' }}>
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


