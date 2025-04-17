
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Ausbildungen = () => {
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
        {/* Hero banner */}
        <section className="pt-24 pb-16 bg-yoga-beige relative">
          <div className="container-custom">
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Ausbildungen</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* 200h Grundausbildung */}
              <div className="mb-20">
                <div className="bg-yoga-beige/30 p-8 rounded-lg mb-8">
                  <h2 className="font-serif text-3xl mb-4 text-yoga-brown">200 h Grundausbildung 2026</h2>
                  <p className="text-yoga-brown/80 mb-6">
                    16.01.–10.05.2026, Alliance-zertifiziert
                  </p>
                  <p className="text-yoga-gold font-medium mb-6">
                    Osterspecial 2.950 € bis 30.04.2025
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-serif text-xl mb-3 text-yoga-brown">Inhalte:</h3>
                      <ul className="space-y-2 text-yoga-brown/80">
                        <li>• Asana-Praxis und -Lehrmethodik</li>
                        <li>• Yogaphilosophie</li>
                        <li>• Funktionelle Anatomie</li>
                        <li>• Pranayama und Meditation</li>
                        <li>• Unterrichtsplanung</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl mb-3 text-yoga-brown">Vorteile:</h3>
                      <ul className="space-y-2 text-yoga-brown/80">
                        <li>• Internationale Anerkennung</li>
                        <li>• Kleine Gruppen (max. 16 Teilnehmer)</li>
                        <li>• Persönliches Mentoring</li>
                        <li>• Umfangreiche Lehrmaterialien</li>
                      </ul>
                    </div>
                  </div>
                  <a href="/kontakt" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
                    Jetzt anmelden
                  </a>
                </div>
              </div>

              {/* Fortbildung 30h */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Fortbildung 30 h Adjustment & Alignment 2025</h2>
                <p className="text-yoga-brown/80 mb-6">
                  05./06.07., 26./27.07., 25./26.10., 06./07.12. – anerkannt als CE bei Yoga Alliance, Regierung Oberbayern
                </p>
                <div className="bg-white shadow-md p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl mb-4 text-yoga-brown">Modul-Inhalte:</h3>
                  <div className="space-y-4 text-yoga-brown/80 mb-6">
                    <p>Diese spezialisierte Fortbildung vermittelt tiefgehendes Wissen über sichere und wirksame Hands-On-Adjustments und präzises Alignment in Yoga-Asanas. Du lernst, wie du durch bewusste Berührung und klare verbale Anleitungen deinen Schülern zu einer sicheren und anatomisch korrekten Praxis verhelfen kannst.</p>
                    <p>Die Fortbildung ist in vier Wochenendmodule aufgeteilt, die aufeinander aufbauen und ein umfassendes Verständnis für die Kunst des Adjustments vermitteln. Du erhältst praktische Werkzeuge, die du sofort in deinem eigenen Unterricht anwenden kannst.</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-yoga-gold font-medium">Preis: 690 €</p>
                    <a href="/kontakt" className="yoga-button">
                      Mehr erfahren
                    </a>
                  </div>
                </div>
              </div>

              {/* Wochenend-Module */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Wochenend-Module 2026</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">I Asanas</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">16.–18.01.2026</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Grundlagen der Asana-Praxis, Ausrichtungsprinzipien und Modifikationen.
                    </p>
                    <p className="text-yoga-gold font-medium">450 €</p>
                  </div>
                  <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">II Philosophie</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">20.–22.02.2026</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Yogische Philosophie, Sutras und Integration in den modernen Lebensstil.
                    </p>
                    <p className="text-yoga-gold font-medium">390 €</p>
                  </div>
                  <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">III Anatomie</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">20.–22.03.2026</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Funktionelle Anatomie, Biomechanik und deren Anwendung in der Yoga-Praxis.
                    </p>
                    <p className="text-yoga-gold font-medium">450 €</p>
                  </div>
                  <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">IV Marketing</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">17.–19.04.2026</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Business-Strategien, Markenaufbau und ethisches Marketing für Yoga-Lehrer.
                    </p>
                    <p className="text-yoga-gold font-medium">390 €</p>
                  </div>
                </div>
                
                <div className="bg-yoga-beige/30 p-8 rounded-lg mb-10">
                  <h3 className="font-serif text-xl mb-6 text-yoga-brown">Gründe für die Teilnahme:</h3>
                  <ul className="space-y-3 text-yoga-brown/80 mb-8">
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-2">•</span>
                      <span>Professionelle Entwicklung unter Anleitung erfahrener Lehrer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-2">•</span>
                      <span>Internationale Anerkennung und Zertifizierung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-2">•</span>
                      <span>Vertiefung des eigenen Verständnisses und der Praxis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-2">•</span>
                      <span>Networking mit Gleichgesinnten und Aufbau einer Gemeinschaft</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-2">•</span>
                      <span>Praktische Werkzeuge zur unmittelbaren Anwendung</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mb-16">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Häufig gestellte Fragen</h2>
                <div className="space-y-6">
                  <div className="bg-white shadow-sm p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-3 text-yoga-brown">Für wen sind die Ausbildungen geeignet?</h3>
                    <p className="text-yoga-brown/80">
                      Unsere Ausbildungen richten sich an Praktizierende aller Levels, die ihr Wissen und ihre Praxis vertiefen möchten. Für die Grundausbildung empfehlen wir mindestens ein Jahr regelmäßige Yoga-Praxis.
                    </p>
                  </div>
                  <div className="bg-white shadow-sm p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-3 text-yoga-brown">Wie ist der Ablauf der Ausbildung?</h3>
                    <p className="text-yoga-brown/80">
                      Die Ausbildung umfasst theoretischen Unterricht, praktische Übungen, Lehrproben und Selbststudium. Die genauen Zeitpläne werden vor Beginn der Ausbildung mitgeteilt.
                    </p>
                  </div>
                  <div className="bg-white shadow-sm p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-3 text-yoga-brown">Gibt es Zahlungserleichterungen?</h3>
                    <p className="text-yoga-brown/80">
                      Ja, wir bieten Ratenzahlungen an. Bitte kontaktiere uns für weitere Details zu den Finanzierungsoptionen.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Download Button */}
              <div className="text-center">
                <a href="/ALLE_TERMINE_2025_2026.pdf" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold" download>
                  Download: ALLE TERMINE 2025/2026
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

export default Ausbildungen;
