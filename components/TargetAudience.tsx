
import React from 'react';

const AUDIENCES = [
  {
    title: "Die Modebewusste",
    description: "Schmuck als Ausdruck der Persönlichkeit – jenseits des Mainstreams."
  },
  {
    title: "Die Karrierefrau",
    description: "Minimalistisch, stark, zeitlos – ein Statement ohne Worte."
  },
  {
    title: "Die Sensiblen",
    description: "14K Echtgold – Schönheit ohne Kompromisse für die Haut."
  },
  {
    title: "Die Geschenk-Suchenden",
    description: "Ein besonderes Stück für besondere Momente."
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
            <div key={index} className="p-8 border border-gray-100 hover:border-gold transition-all duration-500 bg-white">
              <h3 className="serif text-2xl mb-4 text-black">{audience.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
