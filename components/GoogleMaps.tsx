import React from 'react';

export const GoogleMaps: React.FC = () => {
  // Adresse: Hohenzollernstraße 72, 80801 München
  const address = 'Hohenzollernstraße 72, 80801 München';
  const encodedAddress = encodeURIComponent(address);
  
  // Google Maps Embed URL - verwendet die Adresse direkt
  // Diese URL funktioniert ohne API-Key und zeigt die Adresse auf der Karte
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  
  // Fallback: Direkter Link zu Google Maps (funktioniert immer)
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section className="py-16 md:py-32 bg-white text-black relative overflow-hidden">
      {/* Dekorative Akzente – dezent in Purple, aber auf hellem Hintergrund */}
      <div
        className="pointer-events-none absolute top-[-120px] right-[-80px] w-96 h-96 blur-[120px]"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)' }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-[-140px] left-[-80px] w-96 h-96 blur-[120px]"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.09)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-10 md:space-y-12">
          {/* Headline + Fließtext */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
              Grand Opening · Golden Geometry Studio
            </p>
            <h2 className="text-3xl md:text-5xl mb-6 leading-tight text-black">
              So findest du uns zum{' '}
              <span className="italic" style={{ color: '#8B5CF6' }}>
                Grand Opening.
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed md:leading-8">
              Das Golden Geometry Studio liegt im Herzen von Schwabing – in der{' '}
              <span className="font-medium text-gray-900">Hohenzollernstraße 72, 80801 München</span>.
              Rund um das Studio findest du Cafés, Bars und Boutiquen – perfekt, um den Tag vor oder nach deinem Besuch
              beim Grand Opening ausklingen zu lassen.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed md:leading-8">
              Plane ein paar Minuten extra ein, um entspannt anzukommen, die Atmosphäre auf dich wirken zu lassen und dir
              vor Ort deinen{' '}
              <span className="font-medium" style={{ color: '#8B5CF6' }}>
                50€ Eröffnungs-Gutschein
              </span>{' '}
              abzuholen.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div
            className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.16)] border border-gray-100 bg-white"
            style={{ height: '380px' }}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Golden Geometry Standort"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

