
import React, { useState } from 'react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Aurelia – Classic Gold Hoop",
    material: "14K Gelbgold",
    image: "/images/products/aurelia-classic-gold-hoop/gold.jpg",
    colors: ['Gelbgold', 'Weißgold'],
    imagesByColor: {
      Gelbgold: "/images/products/aurelia-classic-gold-hoop/gold.jpg",
      Weißgold: "/images/products/aurelia-classic-gold-hoop/white.jpg",
    },
  },
  {
    id: 2,
    name: "Gaia – Organic Gold Hoop",
    material: "14K Gelbgold",
    image: "/images/products/gaia-organic-gold-hoop/gold.jpg",
    colors: ['Gelbgold'],
    imagesByColor: {
      Gelbgold: "/images/products/gaia-organic-gold-hoop/gold.jpg",
    },
  },
  {
    id: 3,
    name: "Stella – Beaded Gold Hoop",
    material: "14K Gelbgold",
    image: "/images/products/stella-beaded-gold-hoop/gold.jpg",
    colors: ['Gelbgold'],
    imagesByColor: {
      Gelbgold: "/images/products/stella-beaded-gold-hoop/gold.jpg",
    },
  },
  {
    id: 4,
    name: "Lumina – Pavé Drop Hoop",
    material: "14K Weißgold",
    image: "/images/products/lumina-pave-drop-hoop/white.jpg",
    colors: ['Weißgold'],
    imagesByColor: {
      Weißgold: "/images/products/lumina-pave-drop-hoop/white.jpg",
    },
  },
  {
    id: 5,
    name: "Nexus – Pavé Chain Hoop",
    material: "14K Weißgold",
    image: "/images/products/nexus-pave-chain-hoop/white.jpg",
    colors: ['Weißgold'],
    imagesByColor: {
      Weißgold: "/images/products/nexus-pave-chain-hoop/white.jpg",
    },
  },
  {
    id: 6,
    name: "Aurelia Bold – Gold Hoop",
    material: "14K Gelbgold",
    image: "/images/products/aurelia-bold-gold-hoop/gold.jpg",
    colors: ['Gelbgold'],
    imagesByColor: {
      Gelbgold: "/images/products/aurelia-bold-gold-hoop/gold.jpg",
    },
  },
  {
    id: 7,
    name: "Nexus – Pavé Chain Hoop",
    material: "14K Weißgold",
    image: "/images/products/nexus-pave-chain-hoop/white.jpg",
    colors: ['Weißgold'],
    imagesByColor: {
      Weißgold: "/images/products/nexus-pave-chain-hoop/white.jpg",
    },
  },
  {
    id: 8,
    name: "Aurelia Bold – Gold Hoop",
    material: "14K Gelbgold",
    image: "/images/products/aurelia-bold-gold-hoop/gold.jpg",
    colors: ['Gelbgold'],
    imagesByColor: {
      Gelbgold: "/images/products/aurelia-bold-gold-hoop/gold.jpg",
    },
  },
];

interface CollectionProps {
  onProductClick: () => void;
}

export const Collection: React.FC<CollectionProps> = ({ onProductClick }) => {
  // gewählte Farbe pro Produkt (falls Varianten vorhanden)
  const [selectedColors, setSelectedColors] = useState<Record<number, 'Gelbgold' | 'Weißgold'>>(
    () =>
      PRODUCTS.reduce((acc, product) => {
        if (product.colors && product.colors.length > 0) {
          acc[product.id] = product.colors[0];
        }
        return acc;
      }, {} as Record<number, 'Gelbgold' | 'Weißgold'>),
  );

  const getProductImage = (product: Product) => {
    const color = selectedColors[product.id];
    if (product.imagesByColor && color && product.imagesByColor[color]) {
      return product.imagesByColor[color] as string;
    }
    return product.image;
  };

  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">THE FIRST COLLECTION – 8 DESIGNS.</h2>
          <p className="text-sm tracking-[0.2em] uppercase opacity-60 max-w-2xl mx-auto">Exklusiv entworfen für Frauen mit Stil und Haltung.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer max-w-[280px] mx-auto sm:max-w-none"
              onClick={onProductClick}
            >
              <div className="relative aspect-square overflow-hidden mb-6">
                {getProductImage(product) && getProductImage(product).trim() !== '' ? (
                  <>
                    <img 
                      src={getProductImage(product)} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs tracking-widest uppercase bg-black/80 px-4 py-2">Preview</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full flex items-center justify-center bg-white text-[10px] tracking-[0.25em] uppercase text-gray-400 transition-transform duration-700 group-hover:scale-110">
                      Coming Soon
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs tracking-widest uppercase bg-black/80 px-4 py-2">Preview</span>
                    </div>
                  </>
                )}
              </div>
              <h3 className="text-lg font-medium mb-1 group-hover:text-gold transition-colors">{product.name}</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {product.colors && product.colors.length > 0 && selectedColors[product.id]
                  ? `14K ${selectedColors[product.id]}`
                  : product.material}
              </p>

              {/* Farb-Varianten (nur anzeigen, wenn mindestens eine Option vorhanden ist) */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                    Farbe
                  </span>
                  <div className="flex gap-3">
                    {product.colors.map((color) => {
                      const isActive = selectedColors[product.id] === color;
                      const baseColorClass =
                        color === 'Gelbgold'
                          ? 'bg-[radial-gradient(circle_at_30%_20%,#fdf4c4,#d4b060_55%,#b48c3b)]'
                          : 'bg-[radial-gradient(circle_at_30%_20%,#ffffff,#d9d9d9_55%,#b5b5b5)]';
                      return (
                        <button
                          key={color}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation(); // nicht scroll-to-form auslösen
                            setSelectedColors((prev) => ({
                              ...prev,
                              [product.id]: color,
                            }));
                          }}
                          className="focus:outline-none"
                          aria-label={`Farbe ${color} wählen`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isActive
                                ? 'ring-[1.5px] ring-black'
                                : 'ring-[0.75px] ring-white/40'
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-full shadow-sm ${baseColorClass}`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              <button 
                className="w-full border border-black py-3 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-black hover:text-white transition-all"
              >
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
