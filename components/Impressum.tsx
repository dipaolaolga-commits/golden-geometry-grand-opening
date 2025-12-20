import React from 'react';

interface ImpressumProps {
  onBack: () => void;
}

export const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-sm uppercase tracking-widest text-gray-600 hover:text-[#8B5CF6] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </button>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <h1 className="serif text-4xl md:text-5xl mb-12 text-black">IMPRESSUM</h1>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Angaben gemäß § 5 TMG</h2>
            <div className="text-sm leading-relaxed text-gray-700 space-y-2">
              <p>
                <strong>Golden Geometry Tattoo München</strong>
              </p>
              <p>Hohenzollernstraße 72</p>
              <p>80801 München</p>
              <p className="mt-4">
                <strong>Inhaberin und inhaltlich verantwortlich:</strong>
              </p>
              <p>Martin Salim</p>
              <p className="mt-4">
                <strong>Email:</strong> <a href="mailto:info@golden-geometry.tattoo" className="text-[#8B5CF6] hover:underline">info@golden-geometry.tattoo</a>
              </p>
              <p>
                <strong>Telefon:</strong> <a href="tel:015259316884" className="text-[#8B5CF6] hover:underline">01525 9316884</a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Streitschlichtung</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Haftung für Inhalte</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Haftung für Links</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Urheberrecht</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-xs leading-relaxed text-gray-600 mb-4">
              Quellenangaben: Datenschutzerklärung von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert.
            </p>
            <p className="text-xs leading-relaxed text-gray-600">
              Quellenangaben für die verwendeten Bilder und Grafiken<br />
              Nicht ohne Genehmigung zu veröffentlichen. Golden Geometry Tattoo München
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

