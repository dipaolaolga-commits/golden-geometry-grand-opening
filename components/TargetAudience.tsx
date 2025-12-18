
import React from 'react';

const AUDIENCES = [
  {
    title: "Die Modebewusste",
    description: "Schmuck als Ausdruck der Persönlichkeit – jenseits des Mainstreams.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Die Karrierefrau",
    description: "Minimalistisch, stark, zeitlos – ein Statement ohne Worte.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Die Sensiblen",
    description: "14K Echtgold – Schönheit ohne Kompromisse für die Haut.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Die Geschenk-Suchenden",
    description: "Ein besonderes Stück für besondere Momente.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )
  }
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 uppercase">FÜR WEN WIR DESIGNEN</h2>
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 italic">Handgefertigte Präzision für Charakterköpfe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AUDIENCES.map((audience, index) => (
            <div key={index} className="p-8 border border-gray-100 hover:border-[#C5A059] transition-all duration-500 bg-white group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300" style={{ color: '#C5A059' }}>
                {audience.icon}
              </div>
              <h3 className="serif text-2xl mb-4 text-black">{audience.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
