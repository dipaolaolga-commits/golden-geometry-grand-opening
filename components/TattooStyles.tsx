
import React, { useState } from 'react';

interface TattooStyle {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  ctaText: string;
  folder: string;
}

// Funktion zum Generieren aller Bildpfade für einen Stil
const generateAllImages = (folder: string, maxImages: number = 50): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= maxImages; i++) {
    images.push(`/images/tattoo-projects/${folder}/tattoo-${i}.jpg`);
  }
  return images;
};

const TATTOO_STYLES: TattooStyle[] = [
  {
    title: 'Geometrie trifft Emotion',
    subtitle: '',
    description: '',
    folder: 'geometrie',
    images: generateAllImages('geometrie', 6), // Initial nur 6 anzeigen
    ctaText: 'Alle Geometrie Tattoos'
  },
  {
    title: 'Fine Line Kunstwerke',
    subtitle: 'minimalistisch, elegant, zeitlos.',
    description: '',
    folder: 'fine-line',
    images: generateAllImages('fine-line', 6), // Initial nur 6 anzeigen
    ctaText: 'Alle Fine Line Tattoos'
  },
  {
    title: 'Black & Grey',
    subtitle: 'Tiefe, Ausdruck, Charakter.',
    description: '',
    folder: 'black-grey',
    images: generateAllImages('black-grey', 6), // Initial nur 6 anzeigen
    ctaText: 'Alle Black & Grey Tattoos'
  }
];

export const TattooStyles: React.FC = () => {
  const [expandedStyles, setExpandedStyles] = useState<Set<number>>(new Set());

  const toggleStyle = (index: number) => {
    const newExpanded = new Set(expandedStyles);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedStyles(newExpanded);
  };

  const getDisplayImages = (style: TattooStyle, index: number): string[] => {
    if (expandedStyles.has(index)) {
      // Alle Bilder anzeigen (bis zu 50)
      return generateAllImages(style.folder, 50);
    }
    // Nur die ersten 6 anzeigen
    return style.images.slice(0, 6);
  };

  return (
    <div>
      {TATTOO_STYLES.map((style, index) => {
        const displayImages = getDisplayImages(style, index);
        const isExpanded = expandedStyles.has(index);

        return (
          <section key={index} className="py-12 md:py-24 bg-white text-black">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl mb-4 tracking-tight">
                  {style.title}
                </h2>
                {style.subtitle && (
                  <p className="text-sm md:text-base text-gray-600 uppercase tracking-[0.2em]">
                    {style.subtitle}
                  </p>
                )}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
                {displayImages.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative aspect-square overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${style.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Verstecke Bilder, die nicht existieren
                        const target = e.target as HTMLImageElement;
                        target.parentElement!.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button 
                  onClick={() => toggleStyle(index)}
                  className="text-white px-8 py-4 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-700 ease-out bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isExpanded ? 'Weniger anzeigen' : style.ctaText}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

