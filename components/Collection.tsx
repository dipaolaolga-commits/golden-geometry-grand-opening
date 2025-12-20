
import React from 'react';
import { Product } from '../types';

const TATTOO_PROJECTS: Product[] = [
  {
    id: 1,
    name: "Geometrisches Arm-Tattoo",
    material: "Geometrie",
    image: "/images/products/aurelia-classic-gold-hoop/gold.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 2,
    name: "Organisches Schulter-Tattoo",
    material: "Geometrie",
    image: "/images/products/gaia-organic-gold-hoop/gold.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 3,
    name: "Feine Linien – Sternum",
    material: "Fine Line",
    image: "/images/products/stella-beaded-gold-hoop/gold.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 4,
    name: "Minimalistisches Rücken-Tattoo",
    material: "Fine Line",
    image: "/images/products/lumina-pave-drop-hoop/white.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 5,
    name: "Black & Grey Portrait",
    material: "Black & Grey",
    image: "/images/products/nexus-pave-chain-hoop/white.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 6,
    name: "Geometrisches Sleeve",
    material: "Geometrie",
    image: "/images/products/aurelia-bold-gold-hoop/gold.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 7,
    name: "Fine Line Blumen",
    material: "Fine Line",
    image: "/images/products/aurelia-classic-gold-hoop/20251029-DSC07362.jpg",
    colors: [],
    imagesByColor: {},
  },
  {
    id: 8,
    name: "Black & Grey Realismus",
    material: "Black & Grey",
    image: "/images/products/aurelia-classic-gold-hoop/20251029-DSC07363.jpg",
    colors: [],
    imagesByColor: {},
  },
];

interface CollectionProps {
  onProductClick: () => void;
}

export const Collection: React.FC<CollectionProps> = ({ onProductClick }) => {
  const getProjectImage = (project: Product) => {
    return project.image;
  };

  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">UNSERE TATTOO-PROJEKTE</h2>
          <p className="text-sm tracking-[0.2em] uppercase opacity-60 max-w-2xl mx-auto">Entdecke unsere vielfältigen Tattoo-Stile und Projekte.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {TATTOO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer max-w-[280px] mx-auto sm:max-w-none"
              onClick={onProductClick}
            >
              <div className="relative aspect-square overflow-hidden mb-6">
                {getProjectImage(project) && getProjectImage(project).trim() !== '' ? (
                  <>
                    <img 
                      src={getProjectImage(project)} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs tracking-widest uppercase bg-black/80 px-4 py-2">Details</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full flex items-center justify-center bg-white text-[10px] tracking-[0.25em] uppercase text-gray-400 transition-transform duration-700 group-hover:scale-110">
                      Coming Soon
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs tracking-widest uppercase bg-black/80 px-4 py-2">Details</span>
                    </div>
                  </>
                )}
              </div>
              <h3 className="text-lg font-medium mb-1 group-hover:text-[#8B5CF6] transition-colors">{project.name}</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                {project.material}
              </p>
              <button 
                className="w-full border border-black py-3 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-black hover:text-white transition-all"
              >
                Termin anfragen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
