
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Stundenplan = () => {
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
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Stundenplan</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-12">
                <p className="text-yoga-brown/80 mb-8 text-center text-lg">
                  Unser Stundenplan bietet eine Vielfalt an Klassen für alle Niveaus. 
                  Für Einsteiger empfehlen wir unsere "Alle Level" Kurse.
                </p>
                
                <div className="overflow-x-auto mb-10">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-yoga-brown text-white">
                        <th className="p-4 text-left">Zeit</th>
                        <th className="p-4 text-left">Klasse</th>
                        <th className="p-4 text-left">Level</th>
                        <th className="p-4 text-left">Dauer</th>
                        <th className="p-4 text-left">Lehrer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-yoga-beige/50 hover:bg-yoga-beige/20 transition-colors">
                        <td className="p-4">07:00 Uhr</td>
                        <td className="p-4 font-medium">Morning Flow</td>
                        <td className="p-4">Alle</td>
                        <td className="p-4">60 min</td>
                        <td className="p-4">Nina</td>
                      </tr>
                      <tr className="border-b border-yoga-beige/50 hover:bg-yoga-beige/20 transition-colors">
                        <td className="p-4">12:00 Uhr</td>
                        <td className="p-4 font-medium">Lunch Express</td>
                        <td className="p-4">Mittel</td>
                        <td className="p-4">45 min</td>
                        <td className="p-4">Nina</td>
                      </tr>
                      <tr className="border-b border-yoga-beige/50 hover:bg-yoga-beige/20 transition-colors">
                        <td className="p-4">18:00 Uhr</td>
                        <td className="p-4 font-medium">Abend Flow Sanft</td>
                        <td className="p-4">Alle</td>
                        <td className="p-4">75 min</td>
                        <td className="p-4">Nina</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="text-center">
                  <button className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
                    Gesamtplan anzeigen
                  </button>
                </div>
              </div>
              
              <div className="mt-16 p-8 bg-yoga-beige/30 rounded-lg">
                <h2 className="font-serif text-2xl mb-6 text-yoga-brown text-center">Weitere Informationen</h2>
                <ul className="space-y-4 text-yoga-brown/80">
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Bitte komme 10-15 Minuten vor Kursbeginn, um dich in Ruhe umzuziehen und anzumelden.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Bring bequeme Kleidung und eine eigene Matte mit, falls vorhanden. Matten können auch im Studio ausgeliehen werden.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Für Anfänger empfehlen wir besonders die Kurse, die mit "Alle" gekennzeichnet sind.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Bitte informiere den Lehrer vor der Klasse über eventuelle gesundheitliche Einschränkungen oder Verletzungen.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stundenplan;
