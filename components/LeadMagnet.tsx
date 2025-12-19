
import React, { useState, useRef } from 'react';
import type { LeadFormData } from '../types';

interface LeadMagnetProps {
  id?: string;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ id }) => {
  // Einfacher, aber realistischer Counter: Start bei 117, jeden Tag ein paar neue Personen
  const START_COUNT = 117;
  // Referenzdatum: ab wann der Counter „live" ist – aktuell so gesetzt,
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    email: '',
    goldPreference: 'Gelbgold'
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
              <div className="mx-auto md:mx-0 max-w-[260px] rounded-lg overflow-hidden border border-white/40 shadow-[0_24px_80px_rgba(0,0,0,0.6)] bg-black/50 relative group">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/leadmagnet/clip-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Audio Toggle Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 z-10 flex items-center justify-center w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full transition-all opacity-0 group-hover:opacity-100"
                  aria-label={isMuted ? "Audio einschalten" : "Audio ausschalten"}
                >
                  {isMuted ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
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

          <div id="waitlist-form" className="bg-white p-10 md:p-16 lg:p-20 text-black shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3">Vorname <span style={{ color: '#C5A059' }}>*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Dein Name"
                    className="w-full border-b-2 border-gray-200 py-4 px-2 text-base focus:border-[#C5A059] outline-none transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3">E-Mail Adresse <span style={{ color: '#C5A059' }}>*</span></label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="hallo@beispiel.de"
                    className="w-full border-b-2 border-gray-200 py-4 px-2 text-base focus:border-[#C5A059] outline-none transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-5">Bevorzugtes Material</label>
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
                          `text-center py-4 transition-all text-sm uppercase tracking-widest font-medium ` +
                          (formData.goldPreference === 'Gelbgold'
                            ? 'border border-[#C5A059] bg-[#C5A059]/10 text-black shadow-sm'
                            : 'border border-gray-200 text-gray-500 hover:border-[#C5A059]/60')
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
                          `text-center py-4 transition-all text-sm uppercase tracking-widest font-medium ` +
                          (formData.goldPreference === 'Weißgold'
                            ? 'border border-[#C5A059] bg-[#C5A059]/10 text-black shadow-sm'
                            : 'border border-gray-200 text-gray-500 hover:border-[#C5A059]/60')
                        }
                      >
                        Weißgold
                      </div>
                    </label>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full border border-black py-6 text-sm tracking-[0.3em] uppercase font-bold hover:bg-black hover:text-white transition-all mt-6"
                >
                  Join the Waitlist
                </button>
                
                {/* Sicherheits-Icon */}
                <div className="flex items-center justify-center gap-2 mt-6 mb-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500">SSL-verschlüsselt & sicher</span>
                </div>
                
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-[0.15em] leading-relaxed">
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
