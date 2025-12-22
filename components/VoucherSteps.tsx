
import React from 'react';

interface VoucherStepsProps {
  onCtaClick: () => void;
}

const STEPS = [
  {
    number: 1,
    title: 'Hier online eintragen (Gästeliste)',
    description: 'Sichere dir deinen Platz auf der VIP-Gästeliste für das Grand Opening und reserviere dir deinen 50€ Vorteil.',
    image: '/images/voucher-steps/step-1.jpg'
  },
  {
    number: 2,
    title: 'Am 17.01. zum Grand Opening kommen',
    description: 'Komm zu unserem Opening in der Hohenzollernstraße 72 in München-Schwabing, genieße Kunst, Drinks und die Atmosphäre.',
    image: '/images/voucher-steps/step-2.jpg'
  },
  {
    number: 3,
    title: 'Persönlichen 50€ Voucher an der Rezeption abholen',
    description: 'Nenne deinen Namen am Empfang und erhalte deine hochwertige 50€ Gutscheinkarte persönlich ausgehändigt.',
    image: '/images/voucher-steps/step-3.jpg'
  }
];

export const VoucherSteps: React.FC<VoucherStepsProps> = ({ onCtaClick }) => {
  return (
    <section className="py-12 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm md:text-base mb-3 uppercase tracking-[0.3em] text-[#8B5CF6] font-medium">
            SO FUNKTIONIERT DEIN 50€ VORTEIL
          </p>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            In 3 einfachen Schritten zu deinem Gutschein
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] shadow-lg z-10">
                  {step.number}
                </div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl mb-4 font-semibold text-black">{step.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center hidden md:block">
          <button
            onClick={onCtaClick}
            className="text-white px-10 md:px-12 py-5 md:py-6 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold transition-all duration-700 ease-out mb-8 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:via-[#6D28D9] hover:to-[#5B21B6] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(139,92,246,0.6)] relative overflow-hidden group"
          >
            <span className="relative z-10">Jetzt 50€ Voucher sichern</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

