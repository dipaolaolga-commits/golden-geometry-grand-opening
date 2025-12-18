
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex flex-col mb-4">
              <span className="serif text-3xl tracking-[0.2em] font-bold">TWINS</span>
              <span className="text-[10px] tracking-[0.5em] uppercase opacity-50">Jewelry</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400">8 Designs. 1 Kollektion.</p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Legal</h4>
              <a href="#" className="text-sm hover:text-gold transition-colors">Impressum</a>
              <a href="#" className="text-sm hover:text-gold transition-colors">Datenschutz</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Connect</h4>
              <a href="#" className="text-sm hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="text-sm hover:text-gold transition-colors">Tattoo Fashion</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 gap-4">
          <p>© 2026 TWINS JEWELRY. ALL RIGHTS RESERVED.</p>
          <p>FROM HAMBURG WITH GOLD.</p>
        </div>
      </div>
    </footer>
  );
};
