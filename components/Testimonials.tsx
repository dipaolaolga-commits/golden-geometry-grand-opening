
import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Michael Burtscher',
    rating: 5,
    text: 'Ich wollte schon länger ein neues tattoo machen bzw. ein tattoo erweitern und war lange auf der Suche nach dem richtigen, Anfang des Jahres habe ich Martin im Insta entdeckt und war gleich begeistert von seinen Arbeiten, ich hatte Kontakt mit ihm aufgenommen, wir hatten dann einen Video-call bzgl. Details und Umsetzung und gestern war es soweit, ich bin von Vorarlberg zu ihm nach Stuttgart gefahren und wir hatten dann 2 Sitzungen, nun bin ich wieder zuhause und mega happy mit dem Ergebnis! Danke Martin für die unkomplizierte Abwicklung, deine offene Art, hab mich sehr wohl bei dir gefühlt und für deine professionelle Arbeit, bis zum nächsten mal 😉'
  },
  {
    name: 'Florentina Mehmeti',
    rating: 5,
    text: 'Ich war bei Fabio für mein neues Tattoo und bin immer noch richtig happy damit. Er arbeitet sauber, hat ein starkes Gespür für Details und checkt sofort, was man sich vorstellt. Seine farbigen Tattoos sind einfach nächste Liga - ein echter Künstler auf dem Gebiet. Die Atmosphäre bei ihm ist locker und angenehm, man fühlt sich sofort wohl. Das Ergebnis ist genau das, was ich wollte, nur eben schöner. Großartige Arbeit, jedes Mal. Klare 5 Sterne.'
  },
  {
    name: 'julian kowalzik',
    rating: 5,
    text: 'Ich hatte heute einen Termin zum Tätowieren und bin rundum begeistert. Von Anfang an habe ich mich extrem gut aufgehoben gefühlt. Die Künstler haben sich Zeit genommen, sind auf alle meine Wünsche eingegangen und haben jedes Detail mit einer beeindruckenden Genauigkeit umgesetzt. Die Atmosphäre war angenehm, professionell und gleichzeitig sehr entspannt – man merkt, dass hier mit echter Leidenschaft gearbeitet wird. Besonders positiv fand ich, wie zuverlässig und aufmerksam alle waren. Es wurde auf alles geachtet, ich wurde super beraten und das Ergebnis ist noch besser geworden, als ich es mir vorgestellt hatte. Klare Empfehlung – ich komme definitiv wieder!'
  },
  {
    name: 'Fabian Lerchner',
    rating: 5,
    text: 'Im November hatte ich zwei Sessions bei Sergiu und bin mehr als zufrieden! Wer in Stuttgart ein qualitatives Tattoo haben möchte, ohne ein Vermögen auszugeben, sollte in dieses Studio kommen. Schnelle und unkomplizierte Absprache, Termine werden gleich ausgemacht und eingehalten und auch bei den zwei Sessions habe ich mich sehr wohl gefühlt. Für mein erstes großes Tattoo bin ich mehr als glücklich und sehr froh, wie Sergiu auf meine Anregungen und Wünsche eingegangen ist. Er versteht was er tut und bei ihm brauch man sich keine Gedanken über ein gutes Ergebnis machen. Danke dir vielmals, Sergiu und wir sehen uns sicher bald wieder!'
  },
  {
    name: 'Matthias Heinsch',
    rating: 5,
    text: 'Bin über einen Freund auf Golden Geometry aufmerksam geworden. War dieses Wochenende schon das zweite Jahr beim Gast-Tätowierer Nico zum Stechen. Absolute Empfehlung, gestochen scharfe Tattoos mit extremen Detail-Grad. Selbst nach einem Jahr sieht das Tattoo noch aus wie am ersten Tag. Die Location ist gut zu erreichen und sehr modern eingerichtet. Auf der großen Dachterrasse lassen sich die Pausen gut verbringen und im Sommer kann man sogar grillen. Das restliche Team ist ebenfalls super nett und gastfreundlich, man wird immer mit Getränken und Snacks versorgt. Klare Empfehlung, ich komme auf jeden Fall wieder 🔥'
  },
  {
    name: 'Li Sa',
    rating: 5,
    text: 'Endlich durfte ich Fabio persönlich kennenlernen. Er hat nicht nur ein unglaubliches Talent, sondern auch eine beeindruckende Kreativität, die jede Idee zum Leben erweckt. Mein Tattoo ist einfach atemberaubend geworden! Die Details sind präzise, die Farben strahlen und ich kann es kaum erwarten, mir mein nächstes Tattoo bei ihm stechen zu lassen. Ich kann ihn jedem empfehlen, der auf der Suche nach einem talentierten und professionellen Tätowierer ist!'
  },
  {
    name: 'Lara L.',
    rating: 5,
    text: 'War heute zum Termin im Studio und bin super happy! Die Tattoo-Qualität ist top – sauber, präzise und genau so geworden, wie ich es mir vorgestellt habe. Das ganze Team ist mega herzlich, professionell und schafft eine richtig angenehme Atmosphäre. Habe mich von Anfang bis Ende total wohl und gut aufgehoben gefühlt. Absolut empfehlenswert!'
  },
  {
    name: 'Adi',
    rating: 5,
    text: 'Bin durch Instargram auf Golden Geometry aufmerksam geworden. Nach einem ersten Beratungsgespräch habe ich mich dann von Sergiu tätowieren lassen und bin sehr zufrieden. Die Atmosphäre im Studio war top, alles sauber, professionell und entspannt. Man fühlt sich sofort wohl. Man merkt, dass Sergiu weiß, was er macht bis ins kleinste Detail wurde alles perfekt umgesetzt. Das Tattoo ist genauso geworden wie ich es mir vorgestellt hatte. Ich kann Sergiu und Golden Geometry jedem mit bestem Gewissen weiterempfehlen.'
  },
  {
    name: 'Chantal . T',
    rating: 5,
    text: 'Fabio ist ein absoluter Hammer Künstler! Kreativ, präzise und super aufmerksam gegenüber meinen Wünschen. Die Fahrt aus Hamburg hat sich mehr als gelohnt – mein Arm Sleeve ist perfekt geworden. Ich komme auf jeden Fall wieder! ❤️'
  },
  {
    name: 'Patrick Rodrigues Urbano',
    rating: 5,
    text: 'Ich hatte einen Termin bei Fabio, und für mich ist er weit mehr als nur ein Künstler. Seine Kreativität, sein Engagement und seine Leidenschaft spiegeln sich in jeder Arbeit wider, die er auf der Haut hinterlässt. Ich bin unglaublich dankbar für seine großartige Arbeit und dafür, was für ein wunderbarer Mensch er ist. Der Termin hat mich wirklich glücklich gemacht.'
  },
  {
    name: 'Chrysa Amanatidou',
    rating: 5,
    text: 'Ich war im September beim Jorgo und er hat mir mein Wunschtattoo gestochen. Ich kann ihn sehr empfehlen, da er sich die Zeit nimmt und auf deine Wünsche eingeht. Sehr freundlich und ein guter Tattoowierer. Achtet auf Sauberkeit und arbeitet präzise. Beim nächsten Mal wieder bei ihm.'
  },
  {
    name: 'Silke Volz',
    rating: 5,
    text: 'Mir hat eine Kollegin Lisa empfohlen. Ich habe ihr zwei Fotos von meinen Vorstellungen geschickt, die ich aus dem Internet als Vorlagen hatte. Lisa hatte sofort individuelle, auf mich angepasste Ideen, die wir am Tag des Termins verfeinert haben. Das Tattoo ist super schön geworden. Bin total happy und auch alle, denen ich es gezeigt habe, waren begeistert. Ich kann Lisa nur weiterempfehlen. Vielen Dank für mein erstes wunderschönes Tattoo und die positive Erfahrung.'
  },
  {
    name: 'Rob',
    rating: 5,
    text: 'Durch Instagramm auf Golden Geometry aufmerksam geworden, habe ich einen schnellen Beratungstermin erhalten. Ich wurde herzlich empfangen, ein super Team und je nach Stilrichtung wurde der passende Artist von Martin(Chef) empfohlen. Mein 1.Termin bei Lisa war super angenehm und das Ergebnis ist perfekt geworden. Die Atmosphäre ist total entspannt, die Arbeitsplätze sind sehr sauber. Alle sind sympathisch und freundlich und super kompetent. Ich kann Golden Geometry zu 100% weiterempfehlen. Herzliche Grüße'
  },
  {
    name: 'Sascha Kramer',
    rating: 5,
    text: 'Ich bin absolut begeistert von Lisa als Tattoo-Künstlerin. Sie hat das Motiv großartig vorbereitet, meine Ideen präzise umgesetzt und ein wunderschönes Tattoo gestochen. Die Beratung war freundlich und professionell, das Ergebnis übertrifft meine Erwartungen. Ich bin sehr happy damit und schon dabei, mir neue Projekte zu erarbeiten. Absolute Empfehlung'
  },
  {
    name: 'Sarah Schweizer',
    rating: 5,
    text: 'Ich hatte heute ein tolles Walk-in-Tattoo mit Martin! Ich kam zu ihm mit einer Idee, die nicht sein traditioneller Stil war, und er hat einen tollen Job gemacht. Ich fühlte mich sehr willkommen und würde gerne wiederkommen, wenn ich das nächste Mal wieder in Stuttgart bin. :)'
  },
  {
    name: 'N Coffee',
    rating: 5,
    text: 'Hab Lisa von einer Freundin empfohlen bekommen. Sie hat dafür gesorgt, dass mein erstes Tattoo eine wundervolle Erfahrung wird. Sie hat sich die Zeit und Mühe gemacht, meine Vorstellungen umzusetzen. Ich könnte mit dem Ergebnis nicht glücklicher sein! Einfach nur empfehlenswert!'
  },
  {
    name: 'Melanie Schmerbach',
    rating: 5,
    text: 'Wir waren zu Besuch in Stuttgart und sind ganz spontan aufgrund der guten Google-Bewertungen bei Golden Geometry gelandet. Sehr freundlich und angenehm. Wir hatten keinen Termin und wollten nur ein kleines Tattoo. War problemlos möglich. Perfekt gestochen. Diese Arbeit ist jeden Cent wert, die Leute sind auch mega sympathisch, sodass man sich wirklich gut aufgehoben fühlt. Sehr zu empfehlen!!!'
  },
  {
    name: 'Birke Ulmer',
    rating: 5,
    text: 'Jorgo hat mir ein absolut mega geiles Phönix Tattoo auf den Oberarm gezaubert. Kann ihn zu 100% weiter empfehlen. Er ist sehr präzise in der Linienführung um das Bestmögliche zu erschaffen. Seine absolute Vorliebe gilt dem Shading. Hat er bei mir klasse gemacht. Top! Danke!'
  },
  {
    name: 'Celine Himmeltor',
    rating: 5,
    text: 'Ein richtig tolles Tattoo-Studio! Ich wurde sehr freundlich empfangen und sofort mit einem Getränk versorgt. Die Beratung war professionell, alle haben sich Zeit genommen, auf meine Wünsche einzugehen. Das Studio ist sauber, gemütlich und man fühlt sich einfach wohl.'
  },
  {
    name: 'Falco Engel',
    rating: 5,
    text: 'Habe mir bei Nico meinen linken Arm Tattoowieren lassen, ein komplettes Blackout, bin sehr zufrieden. Das Studio an sich ist angenehm und ordentlich. Nico für seinen Stil perfekt, wer ein Blackout will ist bei ihm richtig :)'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const currentTestimonial = TESTIMONIALS[currentIndex];
  
  const MAX_TEXT_LENGTH = 200;
  const isTextLong = currentTestimonial.text.length > MAX_TEXT_LENGTH;
  const displayText = expandedIndex === currentIndex || !isTextLong 
    ? currentTestimonial.text 
    : currentTestimonial.text.substring(0, MAX_TEXT_LENGTH) + '...';

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setExpandedIndex(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setExpandedIndex(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToTestimonial = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setExpandedIndex(null);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  // Automatische Rotation alle 3 Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setExpandedIndex(null);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Über 1.000 zufriedene Kunden <br />
            vertrauen uns bereits in Stuttgart
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 mb-8 rounded-lg">
            <div className={`transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {/* Google Icon & Verifiziert Badge */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-gray-600 font-medium">Verifiziert</span>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    style={{ color: '#8B5CF6' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="min-h-[120px] md:min-h-[140px] mb-4">
                {expandedIndex === currentIndex ? (
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    "{currentTestimonial.text}"
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg line-clamp-5">
                    "{currentTestimonial.text}"
                  </p>
                )}
              </div>
              
              {/* Mehr lesen Button */}
              <div className="h-6 mb-4">
                {isTextLong && expandedIndex !== currentIndex && (
                  <button
                    onClick={() => setExpandedIndex(currentIndex)}
                    className="text-[#8B5CF6] text-sm font-medium hover:underline"
                  >
                    Mehr lesen
                  </button>
                )}
              </div>

              {/* Author Name */}
              <p className="text-black font-semibold">— {currentTestimonial.name}</p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#8B5CF6] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

