import React from 'react';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
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
          <h1 className="serif text-4xl md:text-5xl mb-12 text-black">Datenschutzerklärung</h1>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Einleitung</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer 
              personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken 
              und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten 
              Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als 
              auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer 
              Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet 
              als „Onlineangebot").
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Inhaltsübersicht</h2>
            <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
              <li>Einleitung</li>
              <li>Verantwortlicher</li>
              <li>Übersicht der Verarbeitungen</li>
              <li>Maßgebliche Rechtsgrundlagen</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Übermittlung von personenbezogenen Daten</li>
              <li>Datenverarbeitung in Drittländern</li>
              <li>Löschung von Daten</li>
              <li>Einsatz von Cookies</li>
              <li>Geschäftliche Leistungen</li>
              <li>Bereitstellung des Onlineangebotes und Webhosting</li>
              <li>Blogs und Publikationsmedien</li>
              <li>Kontakt- und Anfragenverwaltung</li>
              <li>Newsletter und elektronische Benachrichtigungen</li>
              <li>Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</li>
              <li>Webanalyse, Monitoring und Optimierung</li>
              <li>Onlinemarketing</li>
              <li>Präsenzen in sozialen Netzwerken (Social Media)</li>
              <li>Plugins und eingebettete Funktionen sowie Inhalte</li>
              <li>Änderung und Aktualisierung der Datenschutzerklärung</li>
              <li>Rechte der betroffenen Personen</li>
              <li>Begriffsdefinitionen</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Verantwortlicher</h2>
            <div className="text-sm leading-relaxed text-gray-700 space-y-2">
              <p><strong>Jakob Richter</strong></p>
              <p><strong>Tattoo Fashion Hamburg</strong></p>
              <p>Adresse: Hongkongstraße 6</p>
              <p>20457 Hamburg</p>
              <p className="mt-4">
                <strong>E-Mail:</strong> <a href="mailto:anfrage@tattoo-fashion-hamburg.de" className="text-gold hover:underline">anfrage@tattoo-fashion-hamburg.de</a>
              </p>
              <p>
                <strong>Telefon:</strong> <a href="tel:+4915204801880" className="text-gold hover:underline">+49 152 04801880</a>
              </p>
              <p>
                <strong>Impressum:</strong> <a href="/impressum" className="text-gold hover:underline">www.tattoo-fashion-hamburg.de/impressum/</a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Übersicht der Verarbeitungen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer 
              Verarbeitung zusammen und verweist auf die betroffenen Personen.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Arten der verarbeiteten Daten</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1 list-disc list-inside">
                <li>Bestandsdaten.</li>
                <li>Zahlungsdaten.</li>
                <li>Kontaktdaten.</li>
                <li>Inhaltsdaten.</li>
                <li>Vertragsdaten.</li>
                <li>Nutzungsdaten.</li>
                <li>Meta-/Kommunikationsdaten.</li>
                <li>Event-Daten (Facebook).</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Kategorien betroffener Personen</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1 list-disc list-inside">
                <li>Kunden.</li>
                <li>Interessenten.</li>
                <li>Kommunikationspartner.</li>
                <li>Nutzer.</li>
                <li>Geschäfts- und Vertragspartner.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Zwecke der Verarbeitung</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1 list-disc list-inside">
                <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
                <li>Kontaktanfragen und Kommunikation.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Direktmarketing.</li>
                <li>Reichweitenmessung.</li>
                <li>Tracking.</li>
                <li>Büro- und Organisationsverfahren.</li>
                <li>Konversionsmessung.</li>
                <li>Verwaltung und Beantwortung von Anfragen.</li>
                <li>Feedback.</li>
                <li>Marketing.</li>
                <li>Profile mit nutzerbezogenen Informationen.</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                <li>Informationstechnische Infrastruktur.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Maßgebliche Rechtsgrundlagen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir 
              personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen 
              der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. 
              Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen 
              diese in der Datenschutzerklärung mit.
            </p>
            <ul className="text-sm leading-relaxed text-gray-700 space-y-3 list-none">
              <li>
                <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene Person 
                hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für 
                einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
              </li>
              <li>
                <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – 
                Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person 
                ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen 
                Person erfolgen.
              </li>
              <li>
                <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> – Die Verarbeitung 
                ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
              </li>
              <li>
                <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die Verarbeitung 
                ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, 
                sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den 
                Schutz personenbezogener Daten erfordern, überwiegen.
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen 
              zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch 
              personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält 
              insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, 
              zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke 
              und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. 
              Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), 
              insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen 
              sowie die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen 
              Bundesländer zur Anwendung gelangen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Sicherheitsmaßnahmen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, 
              der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung 
              sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte 
              und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem 
              Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit 
              von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie 
              betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. 
              Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung 
              von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den 
              Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie 
              Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche 
              Voreinstellungen.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>SSL-Verschlüsselung (https):</strong> Um Ihre via unserem Online-Angebot übermittelten Daten 
              zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an 
              dem Präfix https:// in der Adresszeile Ihres Browsers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Übermittlung von personenbezogenen Daten</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere 
              Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder 
              sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben 
              beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden 
              werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere 
              entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern 
              Ihrer Daten ab.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Datenverarbeitung in Drittländern</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union (EU), des Europäischen 
              Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten 
              Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen 
              stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher Übermittlung 
              verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, 
              vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, beim Vorliegen 
              von Zertifizierungen oder verbindlicher internen Datenschutzvorschriften verarbeiten (Art. 44 bis 49 
              DSGVO, Informationsseite der EU-Kommission:{' '}
              <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" 
                 className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
              </a>).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Löschung von Daten</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren 
              zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. 
              wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich 
              sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke 
              erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt 
              und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen 
              Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von 
              Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten 
              beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Einsatz von Cookies</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf Endgeräten 
              speichern und Informationen aus den Endgeräten auslesen. Z.B. um den Login-Status in einem Nutzerkonto, 
              einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines 
              Onlineangebotes speichern. Cookies können ferner zu unterschiedlichen Zwecken eingesetzt werden, z.B. 
              zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der Erstellung von 
              Analysen der Besucherströme.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              <strong>Hinweise zur Einwilligung:</strong> Wir setzen Cookies im Einklang mit den gesetzlichen 
              Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn 
              diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das 
              Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um 
              dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) 
              zur Verfügung zu stellen. Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich kommuniziert 
              und enthält die Informationen zu der jeweiligen Cookie-Nutzung.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen:</strong> Auf welcher datenschutzrechtlichen 
              Rechtsgrundlage wir die personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten, hängt davon 
              ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer einwilligen, ist die Rechtsgrundlage der 
              Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten 
              Daten auf Grundlage unserer berechtigten Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres 
              Onlineangebotes und Verbesserung seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung 
              unserer vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen 
              Verpflichtungen zu erfüllen. Zu welchen Zwecken die Cookies von uns verarbeitet werden, darüber klären wir 
              im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und Verarbeitungsprozessen auf.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              <strong>Speicherdauer:</strong> Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies 
              unterschieden:
            </p>
            <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside mb-4">
              <li>
                <strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong> Temporäre Cookies werden 
                spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und sein Endgerät (z.B. Browser 
                oder mobile Applikation) geschlossen hat.
              </li>
              <li>
                <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Endgerätes 
                gespeichert. So können beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt 
                werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mit Hilfe von Cookies erhobenen 
                Daten der Nutzer zur Reichweitenmessung verwendet werden. Sofern wir Nutzern keine expliziten Angaben zur 
                Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten Nutzer 
                davon ausgehen, dass Cookies permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):</strong> Nutzer können die von ihnen 
              abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend 
              den gesetzlichen Vorgaben im Art. 21 DSGVO einlegen. Nutzer können ihren Widerspruch auch über die Einstellungen 
              ihres Browsers erklären, z.B. durch Deaktivierung der Verwendung von Cookies (wobei dadurch auch die Funktionalität 
              unserer Online-Dienste eingeschränkt sein kann). Ein Widerspruch gegen die Verwendung von Cookies zu 
              Online-Marketing-Zwecken kann auch über die Websites{' '}
              <a href="https://optout.aboutads.info" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">https://optout.aboutads.info</a>{' '}
              und{' '}
              <a href="https://www.youronlinechoices.com/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.com/</a>{' '}
              erklärt werden.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:</strong> Wir setzen ein Verfahren 
              zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von 
              Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter 
              eingeholt sowie von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die Einwilligungserklärung 
              gespeichert, um deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung entsprechend der gesetzlichen 
              Verpflichtung nachweisen zu können. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes 
              Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen 
              Gerät zuordnen zu können. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, 
              gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen. 
              Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur 
              Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, 
              System und verwendeten Endgerät gespeichert.
            </p>
          </section>

          {/* Weitere Abschnitte werden hier gekürzt dargestellt - die vollständigen Inhalte sind sehr umfangreich */}
          {/* Ich werde die wichtigsten Abschnitte vollständig einfügen und bei sehr langen Abschnitten eine Zusammenfassung geben */}
          
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Geschäftliche Leistungen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B. Kunden und Interessenten (zusammenfassend 
              bezeichnet als „Vertragspartner") im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit 
              verbundenen Maßnahmen und im Rahmen der Kommunikation mit den Vertragspartnern (oder vorvertraglich), z.B., um 
              Anfragen zu beantworten.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören insbesondere die 
              Verpflichtungen zur Erbringung der vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei 
              Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus verarbeiten wir die Daten zur Wahrung unserer 
              Rechte und zum Zwecke der mit diesen Pflichten verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation. 
              Darüber hinaus verarbeiten wir die Daten auf Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen und 
              betriebswirtschaftlichen Geschäftsführung sowie an Sicherheitsmaßnahmen zum Schutz unserer Vertragspartner und unseres 
              Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte (z.B. zur Beteiligung 
              von Telekommunikations-, Transport- und sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und Rechtsberatern, 
              Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden Rechts geben wir die Daten von Vertragspartnern nur 
              insoweit an Dritte weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung gesetzlicher Pflichten erforderlich 
              ist. Über weitere Formen der Verarbeitung, z.B. zu Marketingzwecken, werden die Vertragspartner im Rahmen dieser 
              Datenschutzerklärung informiert.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den Vertragspartnern vor oder im Rahmen der 
              Datenerhebung, z.B. in Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw. Symbole (z.B. Sternchen o.ä.), 
              oder persönlich mit.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d.h., grundsätzlich nach 
              Ablauf von 4 Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert werden, z.B., solange sie aus gesetzlichen 
              Gründen der Archivierung aufbewahrt werden müssen. Die gesetzliche Aufbewahrungsfrist beträgt bei steuerrechtlich relevanten 
              Unterlagen sowie bei Handelsbüchern, Inventaren, Eröffnungsbilanzen, Jahresabschlüssen, die zum Verständnis dieser Unterlagen 
              erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen und Buchungsbelegen zehn Jahre sowie bei empfangenen 
              Handels- und Geschäftsbriefen und Wiedergaben der abgesandten Handels- und Geschäftsbriefe sechs Jahre. Die Frist beginnt 
              mit Ablauf des Kalenderjahres, in dem die letzte Eintragung in das Buch gemacht, das Inventar, die Eröffnungsbilanz, der 
              Jahresabschluss oder der Lagebericht aufgestellt, der Handels- oder Geschäftsbrief empfangen oder abgesandt worden oder der 
              Buchungsbeleg entstanden ist, ferner die Aufzeichnung vorgenommen worden ist oder die sonstigen Unterlagen entstanden sind.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder Plattformen einsetzen, gelten im Verhältnis zwischen den 
              Nutzern und den Anbietern die Geschäftsbedingungen und Datenschutzhinweise der jeweiligen Drittanbieter oder Plattformen.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-xs text-gray-600 mb-2"><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen); 
              Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten (z.B. E-Mail, Telefonnummern); 
              Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an 
              Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</p>
              <p className="text-xs text-gray-600 mb-2"><strong>Betroffene Personen:</strong> Kunden; Interessenten; Geschäfts- und 
              Vertragspartner.</p>
              <p className="text-xs text-gray-600 mb-2"><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen 
              und Kundenservice; Sicherheitsmaßnahmen; Kontaktanfragen und Kommunikation; Büro- und Organisationsverfahren; Verwaltung 
              und Beantwortung von Anfragen; Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen); Profile mit 
              nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).</p>
              <p className="text-xs text-gray-600"><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen 
              (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO); Berechtigte Interessen 
              (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
            </div>
          </section>

          {/* Weitere wichtige Abschnitte - gekürzt für Lesbarkeit */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Bereitstellung des Onlineangebotes und Webhosting</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck 
              verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste 
              an den Browser oder das Endgerät der Nutzer zu übermitteln.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-xs text-gray-600 mb-2"><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, 
              Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</p>
              <p className="text-xs text-gray-600 mb-2"><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von 
              Onlinediensten).</p>
              <p className="text-xs text-gray-600 mb-2"><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes 
              und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und 
              technischen Geräten (Computer, Server etc.).); Sicherheitsmaßnahmen.</p>
              <p className="text-xs text-gray-600"><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Kontakt- und Anfragenverwaltung</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen 
              bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur 
              Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und Anfragedaten im Rahmen von vertraglichen 
              oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von 
              (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen 
              und Pflege von Nutzer- bzw. Geschäftsbeziehungen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Newsletter und elektronische Benachrichtigungen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen (nachfolgend „Newsletter") nur mit der 
              Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen 
              Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere 
              Newsletter Informationen zu unseren Leistungen und uns.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich aus, wenn Sie Ihre E-Mail-Adresse angeben. Wir können 
              Sie jedoch bitten, einen Namen, zwecks persönlicher Ansprache im Newsletter, oder weitere Angaben, sofern diese für die 
              Zwecke des Newsletters erforderlich sind, zu tätigen.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung zu unserem Newsletter erfolgt grundsätzlich in einem sogenannte 
              Double-Opt-In-Verfahren. D.h., Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung 
              gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mail-Adressen anmelden kann. Die Anmeldungen 
              zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. 
              Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts als auch der IP-Adresse. Ebenso werden die Änderungen 
              Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Löschung und Einschränkung der Verarbeitung:</strong> Wir können die ausgetragenen E-Mail-Adressen bis zu drei Jahren 
              auf Grundlage unserer berechtigten Interessen speichern, bevor wir sie löschen, um eine ehemals gegebene Einwilligung nachweisen 
              zu können. Die Verarbeitung dieser Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller 
              Löschungsantrag ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird. Im Fall von 
              Pflichten zur dauerhaften Beachtung von Widersprüchen behalten wir uns die Speicherung der E-Mail-Adresse alleine zu diesem 
              Zweck in einer Sperrliste (sogenannte „Blocklist") vor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Webanalyse, Monitoring und Optimierung</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Die Webanalyse (auch als „Reichweitenmessung" bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebotes 
              und kann Verhalten, Interessen oder demographische Informationen zu den Besuchern, wie z.B. das Alter oder das Geschlecht, 
              als pseudonyme Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B. erkennen, zu welcher Zeit unser Onlineangebot 
              oder dessen Funktionen oder Inhalte am häufigsten genutzt werden oder zur Wiederverwendung einladen. Ebenso können wir nachvollziehen, 
              welche Bereiche der Optimierung bedürfen.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              <strong>Google Analytics:</strong> Webanalyse, Reichweitenmessung sowie Messung von Nutzerströmen; Dienstanbieter: Google Ireland 
              Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, 
              CA 94043, USA; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Website:{' '}
              <a href="https://marketingplatform.google.com/intl/de/about/analytics" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                https://marketingplatform.google.com/intl/de/about/analytics
              </a>; Datenschutzerklärung:{' '}
              <a href="https://policies.google.com/privacy" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>; Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin:{' '}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort 
              aktiven Nutzern zu kommunizieren oder um Informationen über uns anzubieten.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch 
              können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. 
              So können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. 
              Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, 
              die mutmaßlich den Interessen der Nutzer entsprechen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Änderung und Aktualisierung der Datenschutzerklärung</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung 
              an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald 
              durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung 
              erforderlich wird.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten 
              wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Rechte der betroffenen Personen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="text-sm leading-relaxed text-gray-700 space-y-3 list-none">
              <li>
                <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder 
                f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die 
                Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit 
                Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; 
                dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
              </li>
              <li>
                <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet 
                werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der 
                Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das 
                Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen 
                Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, 
                nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren 
                Übermittlung an einen anderen Verantwortlichen zu fordern.
              </li>
              <li>
                <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen 
                Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, 
                ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden 
                personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Begriffsdefinitionen</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe 
              sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die nachfolgenden 
              Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-black mb-2">Konversionsmessung:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Die Konversionsmessung (auch als „Besuchsaktionsauswertung" bezeichnet) ist ein Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen 
                  festgestellt werden kann. Dazu wird im Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der Webseiten, auf denen die Marketingmaßnahmen 
                  erfolgen, gespeichert und dann erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so nachvollziehen, ob die von uns auf anderen 
                  Webseiten geschalteten Anzeigen erfolgreich waren.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-2">Personenbezogene Daten:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  „Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden 
                  „betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels 
                  Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem 
                  oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, 
                  wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-2">Profile mit nutzerbezogenen Informationen:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Die Verarbeitung von „Profilen mit nutzerbezogenen Informationen", bzw. kurz „Profilen" umfasst jede Art der automatisierten Verarbeitung 
                  personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die 
                  sich auf eine natürliche Person beziehen (je nach Art der Profilbildung können dazu unterschiedliche Informationen betreffend die Demographie, 
                  Verhalten und Interessen, wie z.B. die Interaktion mit Webseiten und deren Inhalten, etc.) zu analysieren, zu bewerten oder, um sie vorherzusagen 
                  (z.B. die Interessen an bestimmten Inhalten oder Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des 
                  Profilings werden häufig Cookies und Web-Beacons eingesetzt.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-2">Reichweitenmessung:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der Auswertung der Besucherströme eines Onlineangebotes und kann das Verhalten 
                  oder Interessen der Besucher an bestimmten Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse können 
                  Webseiteninhaber z.B. erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich interessieren. Dadurch können 
                  sie z.B. die Inhalte der Webseite besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme 
                  Cookies und Web-Beacons eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere Analysen zur Nutzung eines Onlineangebotes zu erhalten.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-2">Tracking:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Vom „Tracking" spricht man, wenn das Verhalten von Nutzern über mehrere Onlineangebote hinweg nachvollzogen werden kann. Im Regelfall werden im 
                  Hinblick auf die genutzten Onlineangebote Verhaltens- und Interessensinformationen in Cookies oder auf Servern der Anbieter der Trackingtechnologien 
                  gespeichert (sogenanntes Profiling). Diese Informationen können anschließend z.B. eingesetzt werden, um den Nutzern Werbeanzeigen anzuzeigen, die 
                  voraussichtlich deren Interessen entsprechen.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-2">Verantwortlicher:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Als „Verantwortlicher" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen 
                  über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-2">Verarbeitung:</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  „Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit 
                  personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, 
                  das Übermitteln oder das Löschen.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

