
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const Impressum = () => {
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
        <PageHeader title="Impressum" />

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <div className="prose prose-lg prose-yoga-brown max-w-none mb-12">
                <h2>Angaben gemäß § 5 TMG</h2>
                
                <p>
                  Mahashakti Yoga<br />
                  Veronika Rössl<br />
                  Rosenstraße 12<br />
                  80331 München
                </p>
                
                <h3>Kontakt</h3>
                
                <p>
                  Telefon: +49 89 1234 5678<br />
                  E-Mail: info@mahashakti-yoga.de
                </p>
                
                <h3>Umsatzsteuer-ID</h3>
                
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE123456789
                </p>
                
                <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
                
                <p>
                  Berufsbezeichnung: Yogalehrerin<br />
                  Zuständige Kammer: BDY/EYU - Berufsverband der Yogalehrenden in Deutschland<br />
                  Verliehen in: Deutschland
                </p>
                
                <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                
                <p>
                  Veronika Rössl<br />
                  Rosenstraße 12<br />
                  80331 München
                </p>
                
                <h2>Hinweise zur Website</h2>
                
                <h3>Urheberrecht</h3>
                
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                
                <h3>Haftungsausschluss</h3>
                
                <p>
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
                
                <h3>Bildrechte</h3>
                
                <p>
                  Die auf dieser Website verwendeten Bilder sind urheberrechtlich geschützt. Die Bildrechte liegen, soweit nicht anders angegeben, bei Mahashakti Yoga bzw. Veronika Rössl.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
