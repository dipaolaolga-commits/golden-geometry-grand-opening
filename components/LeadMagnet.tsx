
import React, { useState, useRef } from 'react';
import type { LeadFormData } from '../types';
import { useAgencyCounter } from '../contexts/AgencyCounterContext';

interface LeadMagnetProps {
  id?: string;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ id }) => {
  const { leadMagnetCount } = useAgencyCounter();
  
  // Der Counter wird von der Social Proof Notification erhöht
  // Hier zeigen wir nur den aktuellen Wert an
  const formattedLiveCount = leadMagnetCount.toLocaleString('de-DE');

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    email: '',
    phone: '',
    goldPreference: 'Gelbgold'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    
    // 2 Sekunden Verzögerung vor der Bestätigung
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section id={id} className="py-16 md:py-32 text-white relative overflow-hidden" style={{ backgroundColor: 'rgba(26, 26, 26, 1)' }}>
      {/* Decorative Purple Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 blur-[100px] -mr-48 -mt-48" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 blur-[100px] -ml-48 -mb-48" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl mb-8 leading-none text-white">Sichere dir deinen <br /><span className="italic" style={{ color: '#8B5CF6' }}>50€ Gutschein.</span></h2>
            
            {/* Vertikaler Mood-Clip */}
            <div>
              <div className="mx-auto md:mx-0 max-w-[320px] rounded-lg overflow-hidden border border-white/40 shadow-[0_24px_80px_rgba(0,0,0,0.6)] relative group" style={{ backgroundColor: 'rgba(26, 26, 26, 0.5)' }}>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Video loading error:', e);
                  }}
                  onLoadedData={() => {
                    console.log('Video loaded successfully');
                  }}
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
                <div className="w-5 h-5 mt-1 border flex items-center justify-center flex-shrink-0" style={{ borderColor: '#8B5CF6' }}>
                  <div className="w-2 h-2" style={{ backgroundColor: '#8B5CF6' }}></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide">Eintragung auf die VIP-Gästeliste</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 mt-1 border flex items-center justify-center flex-shrink-0" style={{ borderColor: '#8B5CF6' }}>
                  <div className="w-2 h-2" style={{ backgroundColor: '#8B5CF6' }}></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide">50€ Eröffnungs-Gutschein (nur vor Ort erhältlich)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 mt-1 border flex items-center justify-center flex-shrink-0" style={{ borderColor: '#8B5CF6' }}>
                  <div className="w-2 h-2" style={{ backgroundColor: '#8B5CF6' }}></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide">Exklusiver Zugang zum Grand Opening Event</p>
              </div>
            </div>
            
            <div className="flex items-baseline gap-3 py-6 border-y border-white/10">
              <span className="text-base md:text-lg tracking-[0.25em] uppercase text-white">
                <span className="font-bold">{formattedLiveCount}</span>
                <span className="text-sm align-middle ml-1 opacity-80">+</span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400">
                Personen bereits dabei
              </span>
            </div>
          </div>

          <div id="waitlist-form" className="bg-white p-10 md:p-16 lg:p-20 text-black shadow-2xl relative rounded-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3">Vorname <span style={{ color: '#8B5CF6' }}>*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Max Mustermann"
                    className="w-full border-b-2 border-gray-200 py-4 px-2 text-base focus:border-[#8B5CF6] outline-none transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3">E-Mail Adresse <span style={{ color: '#8B5CF6' }}>*</span></label>
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
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3">Telefonnummer <span style={{ color: '#8B5CF6' }}>*</span></label>
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
                  disabled={isLoading}
                  className="w-full text-white py-5 md:py-6 text-[12px] md:text-xs tracking-[0.36em] uppercase font-bold transition-all duration-700 ease-out mt-6 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading && (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    )}
                    <span>{isLoading ? 'Wird gesendet...' : '50€ Gutschein sichern'}</span>
                  </span>
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
            ) : (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] shadow-[0_20px_50px_rgba(139,92,246,0.5)]"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="serif text-3xl mb-4 text-black">
                  {formData.firstName ? `${formData.firstName}, du bist auf der VIP-Gästeliste!` : 'Auf der VIP-Gästeliste!'}
                </h3>
                <p className="text-gray-500 font-light mb-8">
                  Du bist jetzt auf der VIP-Gästeliste. Deinen 50€ Eröffnungs-Gutschein erhältst du exklusiv vor Ort beim Grand Opening Event.
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
