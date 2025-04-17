import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import PageHeader from "@/components/PageHeader";

interface ClassSchedule {
  id: number;
  day: string;
  time: string;
  title: string;
  level: string;
  duration: string;
  instructor: string;
}

const Stundenplan = () => {
  const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  const [activeDay, setActiveDay] = useState('Montag');
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

  const scheduleData: Record<string, ClassSchedule[]> = {
    'Montag': [
      { id: 1, day: 'Montag', time: '7:00 Uhr', title: 'Morgen Flow', level: 'Alle Niveaus', duration: '60 Min', instructor: 'Veronika' },
      { id: 2, day: 'Montag', time: '12:00 Uhr', title: 'Mittags Express Flow', level: 'Mittelstufe', duration: '45 Min', instructor: 'Veronika' },
      { id: 3, day: 'Montag', time: '18:00 Uhr', title: 'Sanfte Abendpraxis', level: 'Alle Niveaus', duration: '75 Min', instructor: 'Veronika' },
    ],
    'Dienstag': [
      { id: 4, day: 'Dienstag', time: '9:00 Uhr', title: 'Achtsames Vinyasa', level: 'Mittelstufe', duration: '75 Min', instructor: 'Veronika' },
      { id: 5, day: 'Dienstag', time: '17:30 Uhr', title: 'Yin & Meditation', level: 'Alle Niveaus', duration: '90 Min', instructor: 'Veronika' },
    ],
    'Mittwoch': [
      { id: 6, day: 'Mittwoch', time: '7:00 Uhr', title: 'Morgen Flow', level: 'Alle Niveaus', duration: '60 Min', instructor: 'Veronika' },
      { id: 7, day: 'Mittwoch', time: '12:00 Uhr', title: 'Mittags Express Flow', level: 'Mittelstufe', duration: '45 Min', instructor: 'Veronika' },
      { id: 8, day: 'Mittwoch', time: '19:00 Uhr', title: 'Restorative Abendpraxis', level: 'Alle Niveaus', duration: '90 Min', instructor: 'Veronika' },
    ],
    'Donnerstag': [
      { id: 9, day: 'Donnerstag', time: '9:00 Uhr', title: 'Sanfter Flow', level: 'Anfänger', duration: '60 Min', instructor: 'Veronika' },
      { id: 10, day: 'Donnerstag', time: '17:30 Uhr', title: 'Achtsames Vinyasa', level: 'Mittelstufe', duration: '75 Min', instructor: 'Veronika' },
    ],
    'Freitag': [
      { id: 11, day: 'Freitag', time: '7:00 Uhr', title: 'Morgen Flow', level: 'Alle Niveaus', duration: '60 Min', instructor: 'Veronika' },
      { id: 12, day: 'Freitag', time: '12:00 Uhr', title: 'Mittags Express Flow', level: 'Mittelstufe', duration: '45 Min', instructor: 'Veronika' },
      { id: 13, day: 'Freitag', time: '18:00 Uhr', title: 'Wochenend-Entspannung', level: 'Alle Niveaus', duration: '90 Min', instructor: 'Veronika' },
    ],
    'Samstag': [
      { id: 14, day: 'Samstag', time: '9:00 Uhr', title: 'Wochenend-Vinyasa', level: 'Alle Niveaus', duration: '90 Min', instructor: 'Veronika' },
      { id: 15, day: 'Samstag', time: '11:00 Uhr', title: 'Anfänger Workshop', level: 'Anfänger', duration: '120 Min', instructor: 'Veronika' },
    ],
    'Sonntag': [
      { id: 16, day: 'Sonntag', time: '10:00 Uhr', title: 'Sonntags Slow Flow', level: 'Alle Niveaus', duration: '90 Min', instructor: 'Veronika' },
      { id: 17, day: 'Sonntag', time: '17:00 Uhr', title: 'Restorative & Meditation', level: 'Alle Niveaus', duration: '90 Min', instructor: 'Veronika' },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader 
          title="Stundenplan" 
          subtitle="Unser Stundenplan bietet eine Vielfalt an Klassen für alle Niveaus. Für Einsteiger empfehlen wir unsere 'Alle Level' Kurse."
        />

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Day selection tabs */}
              <div className={`flex overflow-x-auto pb-2 md:pb-0 md:justify-center mb-8 scrollbar-hide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex space-x-1 md:space-x-2">
                  {days.map((day) => (
                    <button
                      key={day}
                      className={`px-4 py-2 font-sans text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                        activeDay === day
                          ? 'bg-yoga-brown text-white shadow-md'
                          : 'bg-white text-yoga-brown hover:bg-yoga-tan/50'
                      }`}
                      onClick={() => setActiveDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule table */}
              <div className={`bg-white rounded-lg shadow-lg overflow-hidden border border-yoga-gold/10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-yoga-brown text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Zeit</th>
                        <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Kurs</th>
                        <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Niveau</th>
                        <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Dauer</th>
                        <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Lehrer</th>
                        <th className="px-6 py-4 text-right font-medium text-sm uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-yoga-beige">
                      {scheduleData[activeDay]?.map((classItem) => (
                        <tr key={classItem.id} className="hover:bg-yoga-beige/30 transition-colors duration-200">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-yoga-brown">{classItem.time}</td>
                          <td className="px-6 py-4 text-yoga-brown">{classItem.title}</td>
                          <td className="px-6 py-4 text-yoga-brown/80">{classItem.level}</td>
                          <td className="px-6 py-4 text-yoga-brown/80">{classItem.duration}</td>
                          <td className="px-6 py-4 text-yoga-brown/80">{classItem.instructor}</td>
                          <td className="px-6 py-4 text-right">
                            <Link to="/kontakt" className="text-yoga-gold hover:text-yoga-brown transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
                              Buchen
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-16 p-8 bg-yoga-beige/30 rounded-lg transition-all duration-1000 delay-700 text-center">
                <h2 className="font-serif text-2xl mb-6 text-yoga-brown">Weitere Informationen</h2>
                <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-6"></div>
                <ul className="space-y-4 text-yoga-brown/80 max-w-3xl mx-auto">
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
                
                <div className="mt-10">
                  <Link to="/angebot" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
                    Alle Kurse ansehen
                  </Link>
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

export default Stundenplan;
