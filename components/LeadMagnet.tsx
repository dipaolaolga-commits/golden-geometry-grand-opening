
import React, { useState } from 'react';
import type { LeadFormData } from '../types';

interface LeadMagnetProps {
  id?: string;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ id }) => {
  // Einfacher, aber realistischer Counter: Start bei 117, jeden Tag ein paar neue Personen
  const START_COUNT = 117;
  // Referenzdatum: ab wann der Counter „live“ ist – aktuell so gesetzt,
  // dass heute ca. 117 angezeigt wird und ab morgen hochzählt.
  const START_DATE = new Date('2025-12-18T00:00:00Z');
  const DAILY_INCREASE = 17; // durchschnittliche neue Personen pro Tag

  const today = new Date();
  const daysSinceStart = Math.max(
    0,
    Math.floor(
      (today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)
    )
  );
  const liveCount = START_COUNT + daysSinceStart * DAILY_INCREASE;
  const formattedLiveCount = liveCount.toLocaleString('de-DE');

  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    email: '',
    goldPreference: 'Gelbgold'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Lead submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id={id} className="py-32 bg-black text-white relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[100px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">EXKLUSIVER <br /><span className="italic text-gold text-4xl md:text-5xl">EARLY ACCESS.</span></h2>
            
            {/* Vertikaler Mood-Clip */}
            <div>
              <div className="mx-auto md:mx-0 max-w-[260px] rounded-[32px] overflow-hidden border border-gold/30 shadow-[0_24px_80px_rgba(0,0,0,0.6)] bg-black/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/leadmagnet/clip-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 mt-1 border border-gold flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-gold"></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide">Zugang zum Shop vor dem offiziellen Launch</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 mt-1 border border-gold flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-gold"></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide">Einmaliger 10 % Vorteil auf die erste Bestellung</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 mt-1 border border-gold flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-gold"></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide">Persönliche Benachrichtigung zum Launch</p>
              </div>
            </div>
            
            <div className="flex items-baseline gap-3 py-6 border-y border-white/10">
              <span className="text-base md:text-lg tracking-[0.25em] uppercase text-white">
                <span className="font-bold">{formattedLiveCount}</span>
                <span className="text-sm align-middle ml-1 opacity-80">+</span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60">
                Personen bereits dabei
              </span>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 text-black shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Vorname <span className="opacity-30 font-light italic">(optional)</span></label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Dein Name"
                    className="w-full border-b border-gray-200 py-3 px-1 focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">E-Mail Adresse <span className="text-gold">*</span></label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="hallo@beispiel.de"
                    className="w-full border-b border-gray-200 py-3 px-1 focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-4">Bevorzugtes Material</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="gold" 
                        className="hidden"
                        checked={formData.goldPreference === 'Gelbgold'}
                        onChange={() => setFormData({...formData, goldPreference: 'Gelbgold'})}
                      />
                      <div
                        className={
                          `text-center py-3 border transition-all text-xs uppercase tracking-widest ` +
                          (formData.goldPreference === 'Gelbgold'
                            ? 'border-gold bg-gold/5 text-black shadow-sm'
                            : 'border-gray-200 text-gray-500 hover:border-gold/60')
                        }
                      >
                        Gelbgold
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="gold" 
                        className="hidden"
                        checked={formData.goldPreference === 'Weißgold'}
                        onChange={() => setFormData({...formData, goldPreference: 'Weißgold'})}
                      />
                      <div
                        className={
                          `text-center py-3 border transition-all text-xs uppercase tracking-widest ` +
                          (formData.goldPreference === 'Weißgold'
                            ? 'border-gold bg-gold/5 text-black shadow-sm'
                            : 'border-gray-200 text-gray-500 hover:border-gold/60')
                        }
                      >
                        Weißgold
                      </div>
                    </label>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 text-xs tracking-[0.3em] uppercase font-bold hover:bg-gold transition-all duration-500 shadow-lg mt-4"
                >
                  Join the Waitlist
                </button>
                <p className="text-[9px] text-gray-400 text-center uppercase tracking-[0.15em] leading-relaxed">
                  Kein Spam. Nur exklusive Updates zur Kollektion. <br />
                  Mit der Anmeldung akzeptierst du unsere Datenschutzbestimmungen.
                </p>
              </form>
            ) : (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="serif text-3xl mb-4 text-black">Willkommen im Circle.</h3>
                <p className="text-gray-500 font-light mb-8">
                  Dein 10% Code wurde an deine E-Mail gesendet. Wir informieren dich, sobald der Launch beginnt.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] uppercase tracking-widest border-b border-black font-bold pb-1 text-black"
                >
                  Zurück
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
