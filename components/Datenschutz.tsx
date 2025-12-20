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
          className="mb-12 flex items-center gap-2 text-sm uppercase tracking-widest text-gray-600 hover:text-[#8B5CF6] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </button>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <h1 className="serif text-4xl md:text-5xl mb-12 text-black">DATENSCHUTZ</h1>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">1. Datenschutz auf einen Blick</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Allgemeine Hinweise</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Datenerfassung auf dieser Website</h3>
              <p className="text-sm font-semibold mb-2 text-black">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-sm font-semibold mb-2 text-black">Wie erfassen wir Ihre Daten?</p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <p className="text-sm font-semibold mb-2 text-black">Wofür nutzen wir Ihre Daten?</p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="text-sm font-semibold mb-2 text-black">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Analyse-Tools und Tools von Drittanbietern</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">2. Hosting</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Externes Hosting</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Abschluss eines Vertrages über Auftragsverarbeitung</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Datenschutz</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="text-sm leading-relaxed text-gray-700 space-y-2 mb-4">
                <p><strong>Golden Geometry Tattoo München</strong></p>
                <p>Hohenzollernstraße 72</p>
                <p>80801 München</p>
                <p className="mt-4">
                  <strong>Inhaberin und inhaltlich verantwortlich:</strong> Martin Salim
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@golden-geometry.tattoo" className="text-[#8B5CF6] hover:underline">info@golden-geometry.tattoo</a>
                </p>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Recht auf Datenübertragbarkeit</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Auskunft, Löschung und Berichtigung</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside mb-4">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Widerspruch gegen Werbe-E-Mails</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">4. Datenerfassung auf dieser Website</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Cookies</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Soweit andere Cookies (z. B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Server-Log-Dateien</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1 list-disc list-inside mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Kontaktformular</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">5. Soziale Medien</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Social-Media-Plugins mit Shariff</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Auf dieser Website werden Plugins von sozialen Medien verwendet (z. B. Facebook, Twitter, Google+, Instagram, Pinterest, XING, LinkedIn, Tumblr). Die Plugins können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten „Shariff"-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten Plugins Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Erst wenn Sie das jeweilige Plugin durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Plugin aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto zuordnen.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Facebook Plugins (Like & Share-Button)</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Auf dieser Website sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem „Like-Button" („Gefällt mir") auf dieser Website. Eine Übersicht über die Facebook Plugins finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Wenn Sie diese Website besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook „Like-Button" anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://de-de.facebook.com/privacy/explanation</a>.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Wenn Sie nicht wünschen, dass Facebook den Besuch dieser Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Weitere Social-Media-Plugins</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Auf dieser Website können weitere Social-Media-Plugins (Twitter, Instagram, LinkedIn, Pinterest) integriert sein. Die Verwendung dieser Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Weitere Informationen zu den jeweiligen Datenschutzbestimmungen finden Sie auf den Websites der jeweiligen Anbieter.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">6. Analyse-Tools und Werbung</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Google Analytics</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Google Analytics verwendet so genannte „Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                <strong>IP Anonymisierung</strong><br />
                Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                <strong>Browser Plugin</strong><br />
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                <strong>Widerspruch gegen Datenerfassung</strong><br />
                Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: <a href="#" className="text-[#8B5CF6] hover:underline">Google Analytics deaktivieren</a>.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://support.google.com/analytics/answer/6004245?hl=de</a>.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Facebook Pixel</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA („Facebook").
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an effektiven Werbemaßnahmen unter Einschluss der sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre: <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://de-de.facebook.com/about/privacy/</a>.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Sie können außerdem die Remarketing-Funktion „Custom Audiences" im Bereich Einstellungen für Werbeanzeigen unter <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a> deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">7. Newsletter</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">MailChimp</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Website nutzt die Dienste von MailChimp für den Versand von Newslettern. Anbieter ist die Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                MailChimp ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Wenn Sie Daten zum Zwecke des Newsletterbezugs eingeben (z. B. E-Mail-Adresse), werden diese auf den Servern von MailChimp in den USA gespeichert.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, indem Sie den Newsletter abbestellen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Näheres entnehmen Sie den Datenschutzbestimmungen von MailChimp unter: <a href="https://mailchimp.com/legal/terms/" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://mailchimp.com/legal/terms/</a>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">8. Plugins und Tools</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Google Web Fonts</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://policies.google.com/privacy?hl=de</a>.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Google Maps (mit Einwilligung)</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Diese Website nutzt über eine API den Kartendienst Google Maps. Anbieterin ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                Um den Datenschutz auf dieser Website zu gewährleisten, ist Google Maps deaktiviert, wenn Sie diese Website das erste Mal betreten. Eine direkte Verbindung zu den Servern von Google wird erst hergestellt, wenn Sie Google Maps selbstständig aktivieren (Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO). Auf diese Weise wird verhindert, dass Ihre Daten schon beim ersten Betreten der Seite an Google übertragen werden.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://www.google.de/intl/de/policies/privacy/</a>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-black">9. Online Marketing und Partnerprogramme</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">Amazon Partnerprogramm</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Die Betreiber dieser Website nehmen am Amazon EU- Partnerprogramm teil. Auf dieser Website werden durch Amazon Werbeanzeigen und Links zur Seite von Amazon.de eingebunden, an denen wir über Werbekostenerstattung Geld verdienen können. Amazon setzt dazu Cookies ein, um die Herkunft der Bestellungen nachvollziehen zu können. Dadurch kann Amazon erkennen, dass Sie den Partnerlink auf dieser Website geklickt haben.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 mt-4">
                Die Speicherung von „Amazon-Cookies" erfolgt auf Grundlage von Art. 6 lit. f DSGVO. Der Websitebetreiber hat hieran ein berechtigtes Interesse, da nur durch die Cookies die Höhe seiner Affiliate-Vergütung feststellbar ist. Weitere Informationen zur Datennutzung durch Amazon erhalten Sie in der Datenschutzerklärung von Amazon: <a href="https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=3312401" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=3312401</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
