
import React from 'react';

export const Story: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Visual: Editorial Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden transition-all duration-1000">
          <img 
            src="/images/portraits/story-main.jpg" 
            alt="Jakob & Ooruk Portrait" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            TWINS. <br />
            <span className="italic">EINE EVOLUTION.</span>
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
            <p>
              Twins Jewelry ist kein Bruch, sondern die nächste Stufe unserer Reise. Von Tattoo Fashion Hamburg zu Fine Jewelry.
            </p>
            <p>
              Als Models auf internationalen Laufstegen haben wir Mode gelebt. Jetzt gestalten wir sie. Jakob & Ooruk bringen ihre Erfahrung von Editorials und Fashion Weeks in jedes Detail.
            </p>
            <p className="font-medium text-black italic border-l-2 border-gold pl-6 py-2">
              Unsere Mission: Accessible Luxury – Schmuck, der zwischen High-End-Luxus und Mainstream steht. Kein Merch, sondern echtes Design.
            </p>
          </div>
          <div className="mt-12 flex gap-8">
            <div className="flex flex-col">
              <span className="serif text-xl">Jakob</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">Co-Founder</span>
            </div>
            <div className="flex flex-col">
              <span className="serif text-xl">Ooruk</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">Co-Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
