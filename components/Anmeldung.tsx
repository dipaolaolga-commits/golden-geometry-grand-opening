
import React, { useState } from 'react';
import type { LeadFormData } from '../types';

interface AnmeldungProps {
  onBack: () => void;
}

export const Anmeldung: React.FC<AnmeldungProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Anmeldung submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-24 max-w-2xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-widest">Zurück</span>
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl mb-6 tracking-tight uppercase">
            VIP-Gästeliste
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            Trage dich jetzt ein und sichere dir deinen Platz auf der VIP-Gästeliste für das Grand Opening Event.
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <div className="bg-white p-10 md:p-16 text-black shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-3">
                  Vorname <span style={{ color: '#8B5CF6' }}>*</span>
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                  placeholder="Max"
                  className="w-full border-b-2 border-gray-200 py-4 px-2 text-base focus:border-[#8B5CF6] outline-none transition-colors placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-3">
                  E-Mail Adresse <span style={{ color: '#8B5CF6' }}>*</span>
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="max@beispiel.de"
                  className="w-full border-b-2 border-gray-200 py-4 px-2 text-base focus:border-[#8B5CF6] outline-none transition-colors placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-3">
                  Telefonnummer <span style={{ color: '#8B5CF6' }}>*</span>
                </label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+49 123 456789"
                  className="w-full border-b-2 border-gray-200 py-4 px-2 text-base focus:border-[#8B5CF6] outline-none transition-colors placeholder:text-gray-400"
                />
              </div>

              <button 
                type="submit"
                className="w-full text-white py-6 text-sm tracking-[0.3em] uppercase font-bold transition-all duration-700 ease-out mt-6 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group"
              >
                <span className="relative z-10">Auf VIP-Gästeliste eintragen</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
              </button>
              
              {/* Sicherheits-Icon */}
              <div className="flex items-center justify-center gap-2 mt-6 mb-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500">SSL-verschlüsselt & sicher</span>
              </div>
              
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-[0.15em] leading-relaxed">
                Der 50€ Gutschein ist nur vor Ort beim Grand Opening Event erhältlich. <br />
                Mit der Anmeldung wirst du auf die VIP-Gästeliste gesetzt. <br />
                <br />
                Kein Spam. Nur exklusive Updates zum Grand Opening.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-white p-10 md:p-16 text-black shadow-2xl text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#8B5CF6', opacity: 0.1 }}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8B5CF6' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="serif text-3xl mb-4 text-black">Auf der VIP-Gästeliste!</h3>
            <p className="text-gray-500 font-light mb-8">
              Du bist jetzt auf der VIP-Gästeliste. Deinen 50€ Eröffnungs-Gutschein erhältst du exklusiv vor Ort beim Grand Opening Event. Wir informieren dich, sobald das Event startet.
            </p>
            <button 
              onClick={onBack}
              className="text-[10px] uppercase tracking-widest border-b border-black font-bold pb-1 text-black hover:opacity-70 transition-opacity"
            >
              Zurück zur Startseite
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

