
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const RetreatSeite = () => {
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
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Retreats</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Featured Retreats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {/* Sacred India Retreat */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="h-48 bg-yoga-beige/50 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Sacred India Retreat in Rishikesh" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">Sacred India Retreat – Rishikesh</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">15.–28. 03. 2026</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Tauche im Ursprungsland des Yoga in die authentische Tradition ein und erlebe spirituelle Transformation.
                    </p>
                    <p className="text-yoga-gold font-medium mb-4">ab 2.800 €</p>
                    <a href="#" className="yoga-button inline-block w-full text-center">Mehr erfahren</a>
                  </div>
                </div>
                
                {/* Kundalini Awakening */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="h-48 bg-yoga-beige/50 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Kundalini Awakening Retreat in Süddeutschland" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">Kundalini Awakening – Süddeutschland</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">8.–15. 07. 2025</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Aktiviere deine innere Energie durch kraftvolle Kundalini-Praktiken und transformative Atemarbeit.
                    </p>
                    <p className="text-yoga-gold font-medium mb-4">ab 1.950 €</p>
                    <a href="#" className="yoga-button inline-block w-full text-center">Mehr erfahren</a>
                  </div>
                </div>
                
                {/* Tantric Wisdom Retreat */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="h-48 bg-yoga-beige/50 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Tantric Wisdom Retreat in Bali" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-2 text-yoga-brown">Tantric Wisdom Retreat – Bali</h3>
                    <p className="text-yoga-brown/70 text-sm mb-4">5.–17. 10. 2025</p>
                    <p className="text-yoga-brown/80 mb-4">
                      Verbinde feminine & maskuline Energien in einem ganzheitlichen Ansatz zur Selbstfindung.
                    </p>
                    <p className="text-yoga-gold font-medium mb-4">ab 3.200 €</p>
                    <a href="#" className="yoga-button inline-block w-full text-center">Mehr erfahren</a>
                  </div>
                </div>
              </div>
              
              {/* Additional Retreats */}
              <div className="bg-yoga-beige/30 p-8 rounded-lg mb-16">
                <h2 className="font-serif text-2xl mb-8 text-yoga-brown text-center">Weitere Retreats 2025 / 2026</h2>
                <ul className="space-y-4 text-yoga-brown/80 max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Mallorca – Port de Sóller 28.05.–01.06.2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Südtirol – Vigilius Mountain Resort 12.–15.06.2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Salzburg – Holzhotel Forsthofalm 04.–07.09.2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Tirol – Posthotel Achenkirch 11.–14.09. & 13.–16.11.2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Mallorca Süd – Es Trenc 05.–09.10.2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yoga-gold mr-2">•</span>
                    <span>Südtirol – Hotel Schwarzschmied 27.–30.11.2025</span>
                  </li>
                </ul>
              </div>
              
              {/* Private Sacred Journeys */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-2xl mb-4 text-yoga-brown">Private Sacred Journeys</h2>
                <p className="text-yoga-brown/80 mb-8">
                  Maßgeschneiderte Retreats für Gruppen – Planen Sie Ihr eigenes transformatives Erlebnis für Freunde, Familie oder Ihr Unternehmen.
                </p>
                <button className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
                  Unverbindlich anfragen
                </button>
              </div>
              
              {/* Download PDF section */}
              <div className="mt-16 p-8 bg-white shadow-md rounded-lg text-center max-w-2xl mx-auto">
                <h3 className="font-serif text-xl mb-4 text-yoga-brown">Alle Retreats, Aus- & Fortbildungen 2025 / 2026</h3>
                <a href="/ALLE_TERMINE_2025_2026.pdf" className="yoga-button inline-block" download>
                  Download PDF
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

export default RetreatSeite;
