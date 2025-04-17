
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const UberUns = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero banner for About page with improved spacing */}
        <section className="pt-36 pb-20 bg-yoga-beige relative">
          <div className="container-custom">
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Über Uns</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Meine Yoga-Reise</h2>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Die Reise von Mahashakti Yoga begann vor über fünfzehn Jahren, verwurzelt in alten Traditionen und authentischen Praktiken. Was als persönliche Erkundung begann, entwickelte sich zu einer Mission, diese transformativen Praktiken mit anderen zu teilen.
                </p>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Ausgebildet in traditionellen Hatha-, Kundalini- und Tantra-Yoga-Praktiken bietet Mahashakti einen einzigartigen Ansatz, der die heiligen Ursprünge des Yoga ehrt und gleichzeitig für moderne Praktizierende zugänglich macht, die körperliches, geistiges und spirituelles Wohlbefinden suchen.
                </p>
                <p className="text-yoga-brown/80 mb-12 leading-relaxed">
                  Unsere Lehrphilosophie konzentriert sich darauf, einen heiligen Raum zu schaffen, in dem Schüler die tieferen Dimensionen des Yoga erforschen, sich mit ihrer inneren Kraft verbinden und ihr wahres Potenzial erwecken können.
                </p>

                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Philosophie</h2>
                <p className="text-yoga-brown/80 mb-10 leading-relaxed italic font-serif text-2xl">
                  „Yoga ist nicht nur eine Praxis, sondern eine Reise zur Entdeckung deiner inneren Kraft und deines göttlichen Lichts."
                </p>

                <h2 className="font-serif text-3xl mb-8 text-yoga-brown mt-16">Veronika Rössl – Gründerin & Hauptlehrerin</h2>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Veronika ist anerkanntes Mitglied im BDYoga (BDY/EYU), E-RYT 200, YACEP und seit über 20 Jahren Studio-Leiterin in München.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-yoga-beige/50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-4 text-yoga-brown">Ausbildung & Erfahrung</h3>
                    <ul className="list-disc pl-5 text-yoga-brown/80 space-y-2">
                      <li>Über 15.000 Unterrichtsstunden</li>
                      <li>Studium in Indien, Nepal und Thailand</li>
                      <li>Ausbildung bei internationalen Meistern</li>
                      <li>Spezialisierung auf therapeutisches Yoga</li>
                    </ul>
                  </div>
                  <div className="bg-yoga-beige/50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-4 text-yoga-brown">Lehrmethodik</h3>
                    <ul className="list-disc pl-5 text-yoga-brown/80 space-y-2">
                      <li>Präzise Anleitungen und Ausrichtungen</li>
                      <li>Integration von Philosophie und Praxis</li>
                      <li>Individueller Unterricht für alle Niveaus</li>
                      <li>Fokus auf nachhaltige Transformation</li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Auszeichnungen & Presse</h2>
                <p className="text-yoga-brown/80 mb-8 leading-relaxed">
                  Ausgezeichnet von BDYoga, Yoga Alliance, Süddeutsche Zeitung, Yoga Journal u. v. m.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-16">
                  <div className="bg-white shadow-md p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="BDYoga Zertifizierung" width="100" height="100" className="mx-auto" loading="lazy" />
                  </div>
                  <div className="bg-white shadow-md p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Yoga Alliance Zertifizierung" width="100" height="100" className="mx-auto" loading="lazy" />
                  </div>
                  <div className="bg-white shadow-md p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Süddeutsche Zeitung Erwähnung" width="100" height="100" className="mx-auto" loading="lazy" />
                  </div>
                  <div className="bg-white shadow-md p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Yoga Journal Erwähnung" width="100" height="100" className="mx-auto" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UberUns;
