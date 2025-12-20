
import React from 'react';

const ARTISTS = [
  { name: 'Martin', role: 'Inhaber & Artist', image: '/images/artists/artist-1.jpg' },
  { name: 'Nicola', role: 'Artist', image: '/images/artists/artist-2.jpg' },
  { name: 'Aneta', role: 'Artist', image: '/images/artists/artist-3.jpg' },
  { name: 'Nino', role: 'Artist', image: '/images/artists/artist-4.jpg' },
  { name: 'Lisa', role: 'Artist', image: '/images/artists/artist-5.jpg' },
  { name: 'Sergiu', role: 'Artist', image: '/images/artists/artist-6.jpg' },
  { name: 'Jorgo', role: 'Artist', image: '/images/artists/artist-7.jpg' },
  { name: 'Fabio', role: 'Artist', image: '/images/artists/artist-8.jpg' }
];

export const MeetTheArtists: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Die Köpfe hinter der Kunst – lerne unsere Artists kennen.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ARTISTS.map((artist, index) => (
            <div key={index} className="text-center group">
              <div className="relative aspect-square overflow-hidden mb-4 rounded-lg group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={artist.image} 
                  alt={`artist-${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback zu Placeholder wenn Bild nicht gefunden wird
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#7C3AED]/20 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-400">{artist.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{artist.name}</h3>
              <p className="text-sm text-gray-600 uppercase tracking-wider">{artist.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

