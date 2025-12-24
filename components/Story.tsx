
import React from 'react';

export const Story: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Visual: Portrait / Studio-Atmosphäre */}
        <div className="relative aspect-[3/4] overflow-hidden transition-all duration-1000">
          <img 
            src="/images/portraits/story-main.jpg" 
            alt="Golden Geometry Studio Story" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
            GOLDEN GEOMETRY. <br />
            <span className="italic">PRÄZISION TRIFFT KUNST.</span>
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-base font-light">
            <p>
              Golden Geometry ist unser gemeinsames Projekt für präzise, grafische und zugleich emotionale Tattoos in München. 
              Hier verbinden wir saubere Linienführung, durchdachte Komposition und eine Studio-Atmosphäre, in der du dich 
              vom ersten Moment an sicher und ernst genommen fühlst.
            </p>
            <p>
              Jedes Motiv entsteht in enger Abstimmung mit dir – vom ersten Scribble bis zur finalen Ausarbeitung auf der Haut. 
              Wir planen Proportionen, Kontraste und Platzierung so, dass dein Tattoo auch nach Jahren noch klar, harmonisch 
              und hochwertig wirkt.
            </p>
            <p className="font-medium text-black italic border-l-2 border-gold pl-6 py-2">
              Unsere Mission: Tätowierungen, die aussehen wie kuratierte Kunstwerke – geometrisch präzise, technisch sauber, 
              aber immer mit deiner persönlichen Geschichte im Mittelpunkt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
