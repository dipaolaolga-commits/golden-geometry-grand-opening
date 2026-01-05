
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Was ist der 50€ Gutschein?',
    answer: 'Der 50€ Gutschein ist ein exklusives Angebot zum Grand Opening von Golden Geometry. Du kannst ihn bei deinem ersten Tattoo-Termin einlösen und erhältst 50€ Rabatt auf dein Tattoo.'
  },
  {
    question: 'Wie kann ich den Gutschein erhalten?',
    answer: 'Trage dich einfach in unser Formular ein und komm zum Grand Opening Event. Dort erhältst du deinen persönlichen 50€ Gutschein ausschließlich vor Ort an der Rezeption.'
  },
  {
    question: 'Wann ist das Grand Opening?',
    answer: 'Das Grand Opening Event findet am 17. Januar 2026 statt. Trage dich in unsere Liste ein, um alle Details und Updates zum Event zu erhalten.'
  },
  {
    question: 'Kann ich den Gutschein mit anderen Angeboten kombinieren?',
    answer: 'Ja, der 50€ Gutschein kann mit anderen Rabatten oder Aktionen kombiniert werden. Du kannst ihn immer einsetzen und benutzen.'
  },
  {
    question: 'Wie lange ist der Gutschein gültig?',
    answer: 'Der Gutschein ist für das gesamte Jahr 2026 gültig. Du kannst ihn im Zeitraum vom Grand Opening an bis zum 31.12.2026 bei deinem Tattoo-Termin einlösen.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-black">
            Häufige Fragen zum Grand Opening
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* FAQ Content */}
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between py-6 text-black hover:text-[#8B5CF6] transition-colors group"
                >
                  <span className="text-base md:text-lg font-medium pr-4">{item.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform text-gray-500 group-hover:text-[#8B5CF6] ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg hidden md:block shadow-lg">
            <img
              src="/images/faq/faq-image.jpg"
              alt="Tattoo Design"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback wenn Bild nicht gefunden wird
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

