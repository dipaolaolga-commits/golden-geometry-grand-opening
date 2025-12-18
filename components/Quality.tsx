
import React from 'react';

const QUALITY_ITEMS = [
  {
    icon: (
      <svg className="w-10 h-10 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
      </svg>
    ),
    title: "14K Echtgold",
    description: "Langlebig und wertbeständig. Ein Investment, das bleibt."
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    title: "Hypoallergen",
    description: "Echtes Gold für echte Haut. Für alle, die keinen Modeschmuck tragen können."
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: "Strictly Limited",
    description: "Jedes Design ist einzigartig und limitiert auf die erste Edition."
  },
  {
    icon: (
      <svg className="w-10 h-10 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Fashion Heritage",
    description: "Inspiriert von internationalen Laufstegen und moderner Modeästhetik."
  }
];

export const Quality: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 uppercase">SCHÖNHEIT OHNE KOMPROMISSE.</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {QUALITY_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="text-gold transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="serif text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
