import React from 'react';

const TRUST_ITEMS = [
  {
    title: '14K Echtgold',
    description: 'Kein Vergolden, kein Anlaufen.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3l7.794 5.053-2.977 9.17H7.183L4.206 8.053 12 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Sichere Zahlung',
    description: 'SSL-verschlüsselt & geprüft.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 11c1.105 0 2 .895 2 2v4H10v-4c0-1.105.895-2 2-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 11V8a5 5 0 0110 0v3M6 11h12v8H6z"
        />
      </svg>
    ),
  },
  {
    title: 'Versicherter Versand',
    description: 'Tracking & Absicherung.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 7h13l5 5-5 5H3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12h4"
        />
      </svg>
    ),
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-transparent text-white text-[7px] md:text-[9px]">
      <div className="container mx-auto px-3 md:px-6 py-1.5 md:py-2.5 flex flex-row flex-wrap md:flex-row items-center justify-center md:justify-center gap-1.5 md:gap-5">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-1 md:gap-2 text-[7px] md:text-[9px] tracking-[0.18em] md:tracking-[0.22em] uppercase text-white/70"
          >
            <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full border border-white/15 bg-white/5 text-gold flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white leading-tight whitespace-nowrap">
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


