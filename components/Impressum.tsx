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
          className="mb-12 flex items-center gap-2 text-sm uppercase tracking-widest text-gray-600 hover:text-gold transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </button>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <h1 className="serif text-4xl md:text-5xl mb-12 text-black">Impressum</h1>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Angaben gemäß § 5 TMG</h2>
            <div className="text-sm leading-relaxed text-gray-700 space-y-2">
              <p>
                <strong>Tattoo Fashion Hamburg</strong>
              </p>
              <p>Hongkongstraße 6</p>
              <p>20457 Hamburg</p>
              <p className="mt-4">
                <strong>Geschäftsführer:</strong>
              </p>
              <p>Jakob Richter</p>
              <p className="mt-4">
                <strong>Telefon:</strong> <a href="tel:+4915204801880" className="text-gold hover:underline">+49 152 04801880</a>
              </p>
              <p>
                <strong>E-Mail:</strong> <a href="mailto:anfrage@tattoo-fashion-hamburg.de" className="text-gold hover:underline">anfrage@tattoo-fashion-hamburg.de</a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Haftungsausschluss</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Haftung für Links</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Datenschutz</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf 
              unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, 
              erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche 
              Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung 
              von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. 
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung 
              von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Google Analytics</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). Google Analytics 
              verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der 
              Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung 
              dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und 
              dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports 
              über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und 
              der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls 
              an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google 
              verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie 
              können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir 
              weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website 
              voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie 
              erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

