
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const AGB = () => {
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
        <PageHeader title="Allgemeine Geschäftsbedingungen" />

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <div className="prose prose-lg prose-yoga-brown max-w-none mb-12">
                <h2>Allgemeine Geschäftsbedingungen (AGB) von Mahashakti Yoga</h2>
                
                <h3>1. Geltungsbereich</h3>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen Mahashakti Yoga, betrieben von Veronika Rössl (nachfolgend "Anbieter"), und den Teilnehmern von Yogakursen, Workshops, Retreats und Ausbildungen (nachfolgend "Teilnehmer") geschlossen werden.
                </p>
                
                <h3>2. Vertragsschluss</h3>
                <p>
                  Die Anmeldung zu Kursen, Workshops, Retreats und Ausbildungen kann schriftlich, telefonisch, per E-Mail oder über das Online-Buchungssystem erfolgen. Der Vertrag kommt durch die Anmeldung des Teilnehmers und die Bestätigung des Anbieters zustande.
                </p>
                
                <h3>3. Zahlungsbedingungen</h3>
                <p>
                  Die Kursgebühren sind im Voraus zu entrichten, sofern nicht anders vereinbart. Bei Workshops, Retreats und Ausbildungen ist eine Anzahlung in Höhe von 30% der Gesamtgebühr bei der Anmeldung fällig. Der Restbetrag ist spätestens 14 Tage vor Beginn der Veranstaltung zu zahlen.
                </p>
                
                <h3>4. Stornierungsbedingungen</h3>
                <p>
                  Für Kurse gilt: Eine Stornierung ist bis 7 Tage vor Kursbeginn kostenfrei möglich. Bei späterer Stornierung oder Nichterscheinen wird die volle Kursgebühr berechnet. Es besteht die Möglichkeit, einen Ersatzteilnehmer zu stellen.
                </p>
                <p>
                  Für Workshops, Retreats und Ausbildungen gilt: Bei Stornierung bis 30 Tage vor Beginn werden 30% der Gebühr als Bearbeitungsgebühr einbehalten. Bei Stornierung bis 14 Tage vor Beginn werden 50% der Gebühr berechnet. Bei späterer Stornierung oder Nichterscheinen ist die volle Gebühr zu entrichten. Auch hier besteht die Möglichkeit, einen Ersatzteilnehmer zu stellen.
                </p>
                
                <h3>5. Absage durch den Anbieter</h3>
                <p>
                  Der Anbieter behält sich das Recht vor, Kurse, Workshops, Retreats oder Ausbildungen aus wichtigem Grund (z.B. Krankheit des Lehrers, zu geringe Teilnehmerzahl) abzusagen. In diesem Fall werden bereits gezahlte Gebühren vollständig erstattet. Weitergehende Ansprüche sind ausgeschlossen.
                </p>
                
                <h3>6. Gesundheitszustand</h3>
                <p>
                  Der Teilnehmer versichert, dass er körperlich gesund und psychisch stabil ist und in der Lage ist, an den gebuchten Aktivitäten teilzunehmen. Bestehende gesundheitliche Einschränkungen, Schwangerschaft oder Vorerkrankungen sind dem Anbieter vor Beginn mitzuteilen.
                </p>
                
                <h3>7. Haftung</h3>
                <p>
                  Die Teilnahme an allen Angeboten erfolgt auf eigene Verantwortung. Der Anbieter übernimmt keine Haftung für Verletzungen, Unfälle, Verluste oder Schäden, es sei denn, diese wurden durch grobe Fahrlässigkeit oder Vorsatz des Anbieters verursacht.
                </p>
                
                <h3>8. Kurskarten und Gültigkeit</h3>
                <p>
                  Kurskarten (10er Karten, Monatskarten etc.) sind nicht übertragbar und haben eine begrenzte Gültigkeitsdauer, die auf der jeweiligen Karte vermerkt ist. Eine Verlängerung ist nur in Ausnahmefällen (z.B. Krankheit mit ärztlichem Attest) möglich.
                </p>
                
                <h3>9. Datenschutz</h3>
                <p>
                  Die vom Teilnehmer übermittelten Daten werden ausschließlich zum Zweck der Durchführung des Vertragsverhältnisses gespeichert und verwendet. Eine Weitergabe an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragserfüllung notwendig. Es gelten die Bestimmungen der Datenschutzerklärung.
                </p>
                
                <h3>10. Widerrufsrecht</h3>
                <p>
                  Bei Fernabsatzverträgen (z.B. Online-Buchungen) hat der Teilnehmer ein 14-tägiges Widerrufsrecht. Dieses erlischt bei Dienstleistungen, wenn die Dienstleistung vollständig erbracht wurde und mit der Ausführung begonnen wurde, nachdem der Teilnehmer seine ausdrückliche Zustimmung gegeben hat.
                </p>
                
                <h3>11. Schlussbestimmungen</h3>
                <p>
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Es gilt deutsches Recht. Gerichtsstand ist München.
                </p>
                
                <p className="text-sm text-yoga-brown/70 mt-12">
                  Stand: April 2025
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

export default AGB;
