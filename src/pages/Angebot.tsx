import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const Angebot = () => {
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
        <PageHeader 
          title="Angebot" 
          subtitle="Entdecke unser vielfältiges Angebot an Yogakursen, Workshops und speziellen Programmen für alle Levels."
        />

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Klassen */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Klassen</h2>
                <h3 className="font-serif text-2xl mb-4 text-yoga-brown font-bold">REGELMÄSSIG ÜBEN – SO KLAPPT ES!</h3>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Tipps für die eigene Motivation: Die regelmäßige Yoga-Praxis ist der Schlüssel zu nachhaltigen Fortschritten und Wohlbefinden. Hier sind einige Strategien, die dir helfen können, dein Übungsprogramm konsequent beizubehalten und in deinen Alltag zu integrieren.
                </p>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Beginne mit realistischen Zielen und steigere langsam die Intensität und Dauer deiner Praxis. Finde einen festen Zeitpunkt im Tagesablauf, der gut zu deinem natürlichen Rhythmus passt – sei es am frühen Morgen, in der Mittagspause oder am Abend.
                </p>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Gestalte einen speziellen Übungsbereich in deinem Zuhause, der dich einlädt und inspiriert. Verbinde dich mit Gleichgesinnten in unserer Studio-Gemeinschaft für zusätzliche Motivation und Unterstützung.
                </p>
              </div>

              {/* Online-Bibliothek */}
              <div className="mb-20 bg-yoga-beige/30 p-8 rounded-lg">
                <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Online-Bibliothek</h2>
                <p className="text-yoga-brown/80 mb-8 text-lg font-medium">
                  150 Yogastunden & Meditationen on-demand – Monatspass 29 €
                </p>
                <a 
                  href="https://www.eversports.de/widget/w/A1qlik?list=recording" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold"
                >
                  Zur Videothek
                </a>
              </div>

              {/* Preise */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Preise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="font-serif text-2xl mb-2 text-yoga-brown">Einzelstunde</h3>
                    <p className="text-yoga-gold text-3xl font-bold mb-4">20 €</p>
                    <p className="text-yoga-brown/80">Flexible Option für Einsteiger</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="font-serif text-2xl mb-2 text-yoga-brown">10er-Karte</h3>
                    <p className="text-yoga-gold text-3xl font-bold mb-4">100 €</p>
                    <p className="text-yoga-brown/80">Ideal für regelmäßige Praxis</p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="font-serif text-2xl mb-2 text-yoga-brown">Monat Unlimited</h3>
                    <p className="text-yoga-gold text-3xl font-bold mb-4">150 €</p>
                    <p className="text-yoga-brown/80">Für intensive Praxis</p>
                  </div>
                </div>
              </div>

              {/* In-Studio */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">In-Studio</h2>
                <h3 className="font-serif text-2xl mb-4 text-yoga-brown font-bold">REGELMÄSSIG ÜBEN – SO KLAPPT ES!</h3>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Tipps für die eigene Motivation: Die regelmäßige Yoga-Praxis ist der Schlüssel zu nachhaltigen Fortschritten und Wohlbefinden. Hier sind einige Strategien, die dir helfen können, dein Übungsprogramm konsequent beizubehalten und in deinen Alltag zu integrieren.
                </p>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Beginne mit realistischen Zielen und steigere langsam die Intensität und Dauer deiner Praxis. Finde einen festen Zeitpunkt im Tagesablauf, der gut zu deinem natürlichen Rhythmus passt – sei es am frühen Morgen, in der Mittagspause oder am Abend.
                </p>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Gestalte einen speziellen Übungsbereich in deinem Zuhause, der dich einlädt und inspiriert. Verbinde dich mit Gleichgesinnten in unserer Studio-Gemeinschaft für zusätzliche Motivation und Unterstützung.
                </p>
              </div>

              {/* Spezielle Programme */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Spezielle Programme</h2>
                <h3 className="font-serif text-2xl mb-4 text-yoga-brown">DVD für MS-Betroffene, msyoga Standard & Spezial Programm</h3>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Unsere spezialisierten Programme für Menschen mit Multipler Sklerose sind das Ergebnis jahrelanger Forschung und Erfahrung. Entwickelt in Zusammenarbeit mit Ärzten und Physiotherapeuten, bieten diese Kurse sanfte, aber wirksame Übungen, die speziell auf die Bedürfnisse von MS-Betroffenen zugeschnitten sind.
                </p>
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  Das Standard-Programm konzentriert sich auf Gleichgewicht, Flexibilität und Stressreduktion, während das Spezial-Programm individualisierte Sequenzen für verschiedene Symptome und Krankheitsstadien bietet.
                </p>
                <p className="text-yoga-brown/80 mb-8 leading-relaxed">
                  Unsere DVD für MS-Betroffene ermöglicht es dir, diese bewährten Praktiken bequem zu Hause zu üben, mit detaillierten Anleitungen und Modifikationen für verschiedene Fähigkeitsstufen.
                </p>
                <a href="/kontakt" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Angebot;
