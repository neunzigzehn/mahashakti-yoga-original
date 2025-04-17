
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Widerruf = () => {
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
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Widerruf</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <div className="prose prose-lg prose-yoga-brown max-w-none mb-12">
                <h2>Widerrufsbelehrung für Workshops und Kartenkauf</h2>
                
                <p>
                  Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Mahashakti Yoga, Rosenstraße 12, 80331 München, info@mahashakti-yoga.de, +49 89 1234 5678) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                </p>
                
                <p>
                  Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
                
                <h3>Folgen des Widerrufs</h3>
                
                <p>
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                </p>
                
                <p>
                  Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
                </p>
                
                <p>
                  Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
                </p>
                
                <h3>Besondere Hinweise</h3>
                
                <p>
                  Das Widerrufsrecht erlischt vorzeitig, wenn die Dienstleistung vollständig erbracht wurde und Sie vor der Bestellung ausdrücklich zugestimmt haben, dass wir mit der Erbringung der Dienstleistung beginnen können und Sie Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.
                </p>
                
                <p>
                  Bei digital bereitgestellten Inhalten erlischt das Widerrufsrecht, wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und Sie Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung Ihr Widerrufsrecht verlieren.
                </p>
              </div>
              
              <div className="bg-yoga-beige/30 p-8 rounded-lg mb-12">
                <h2 className="font-serif text-2xl mb-6 text-yoga-brown">Widerrufsformular</h2>
                <p className="text-yoga-brown/80 mb-6">
                  Wenn Sie den Vertrag widerrufen wollen, können Sie das folgende Formular herunterladen, ausfüllen und an uns zurücksenden.
                </p>
                <a 
                  href="/Widerrufsformular.pdf" 
                  download 
                  className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold"
                >
                  Widerrufsformular herunterladen
                </a>
              </div>
              
              <div className="prose prose-lg prose-yoga-brown max-w-none">
                <h3>Muster-Widerrufsformular</h3>
                
                <p>
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück)
                </p>
                
                <div className="bg-white p-6 border border-yoga-beige/50 rounded-md">
                  <p>An<br />
                  Mahashakti Yoga<br />
                  Rosenstraße 12<br />
                  80331 München<br />
                  info@mahashakti-yoga.de</p>
                  
                  <p>
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
                  </p>
                  
                  <p>— Bestellt am (*)/erhalten am (*)</p>
                  
                  <p>— Name des/der Verbraucher(s)</p>
                  
                  <p>— Anschrift des/der Verbraucher(s)</p>
                  
                  <p>— Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                  
                  <p>— Datum</p>
                  
                  <p className="text-sm text-yoga-brown/70">(*) Unzutreffendes streichen.</p>
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

export default Widerruf;
