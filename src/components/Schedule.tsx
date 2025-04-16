
import { useState, useRef, useEffect } from 'react';

interface ClassSchedule {
  id: number;
  day: string;
  time: string;
  title: string;
  level: string;
  duration: string;
  instructor: string;
}

const Schedule = () => {
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
    Montag: [
      { id: 1, day: 'Montag', time: '7:00', title: 'Morning Flow', level: 'Alle Levels', duration: '60 min', instructor: 'Veronika' },
      { id: 2, day: 'Montag', time: '12:00', title: 'Mittags Express Flow', level: 'Mittelstufe', duration: '45 min', instructor: 'Veronika' },
      { id: 3, day: 'Montag', time: '18:00', title: 'Sanfte Abendpraxis', level: 'Alle Levels', duration: '75 min', instructor: 'Veronika' },
    ],
    Dienstag: [
      { id: 4, day: 'Dienstag', time: '9:00', title: 'Achtsames Vinyasa', level: 'Mittelstufe', duration: '75 min', instructor: 'Veronika' },
      { id: 5, day: 'Dienstag', time: '17:30', title: 'Yin & Meditation', level: 'Alle Levels', duration: '90 min', instructor: 'Veronika' },
    ],
    Mittwoch: [
      { id: 6, day: 'Mittwoch', time: '7:00', title: 'Morning Flow', level: 'Alle Levels', duration: '60 min', instructor: 'Veronika' },
      { id: 7, day: 'Mittwoch', time: '12:00', title: 'Mittags Express Flow', level: 'Mittelstufe', duration: '45 min', instructor: 'Veronika' },
      { id: 8, day: 'Mittwoch', time: '19:00', title: 'Entspannender Abend', level: 'Alle Levels', duration: '90 min', instructor: 'Veronika' },
    ],
    Donnerstag: [
      { id: 9, day: 'Donnerstag', time: '9:00', title: 'Sanfter Flow', level: 'Anfänger', duration: '60 min', instructor: 'Veronika' },
      { id: 10, day: 'Donnerstag', time: '17:30', title: 'Achtsames Vinyasa', level: 'Mittelstufe', duration: '75 min', instructor: 'Veronika' },
    ],
    Freitag: [
      { id: 11, day: 'Freitag', time: '7:00', title: 'Morning Flow', level: 'Alle Levels', duration: '60 min', instructor: 'Veronika' },
      { id: 12, day: 'Freitag', time: '12:00', title: 'Mittags Express Flow', level: 'Mittelstufe', duration: '45 min', instructor: 'Veronika' },
      { id: 13, day: 'Freitag', time: '18:00', title: 'Wochenend-Entspannung', level: 'Alle Levels', duration: '90 min', instructor: 'Veronika' },
    ],
    Samstag: [
      { id: 14, day: 'Samstag', time: '9:00', title: 'Wochenend-Vinyasa', level: 'Alle Levels', duration: '90 min', instructor: 'Veronika' },
      { id: 15, day: 'Samstag', time: '11:00', title: 'Anfänger Workshop', level: 'Anfänger', duration: '120 min', instructor: 'Veronika' },
    ],
    Sonntag: [
      { id: 16, day: 'Sonntag', time: '10:00', title: 'Slow Flow Sonntag', level: 'Alle Levels', duration: '90 min', instructor: 'Veronika' },
      { id: 17, day: 'Sonntag', time: '17:00', title: 'Restorative & Meditation', level: 'Alle Levels', duration: '90 min', instructor: 'Veronika' },
    ],
  };

  return (
    <section id="schedule" ref={sectionRef} className="py-24 bg-yoga-beige relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yoga-gold/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yoga-gold/5 rounded-full -translate-x-1/2 translate-y-1/3"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Kursplan</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Nehmen Sie an regelmäßigen Kursen im Laufe der Woche in München teil. 
            Ob Sie ein Frühaufsteher sind oder lieber abends üben, 
            wir haben Optionen, die zu Ihrem Zeitplan passen.
          </p>
        </div>

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
                  <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Level</th>
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
                      <a href="#contact" className="text-yoga-gold hover:text-yoga-brown transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
                        Buchen
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing section */}
        <div className={`mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-center font-serif text-3xl mb-12 text-yoga-brown">Preisoptionen</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-8 text-center group">
              <h4 className="font-serif text-xl mb-2 text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">Einzelkurs</h4>
              <p className="text-yoga-gold text-3xl font-light mb-6 mt-4">18 €</p>
              <ul className="text-yoga-brown/80 space-y-2 mb-8">
                <li>Zugang zu einem Kurs</li>
                <li>Mattenverleih inklusive</li>
                <li>Perfekt für Erstbesucher</li>
              </ul>
              <a href="#contact" className="yoga-button-premium border-yoga-brown text-yoga-brown hover:bg-yoga-brown hover:text-white inline-block w-full">Jetzt Buchen</a>
            </div>

            <div className="premium-card p-8 text-center relative transform md:scale-105 md:-translate-y-2 border border-yoga-gold/20 shadow-lg">
              <div className="absolute top-0 right-0 bg-yoga-gold text-white px-4 py-1 text-xs uppercase tracking-wider">30% Rabatt</div>
              <h4 className="font-serif text-xl mb-2 text-yoga-brown">10er Karte</h4>
              <p className="text-yoga-gold text-3xl font-light mb-6 mt-4">90 €</p>
              <ul className="text-yoga-brown/80 space-y-2 mb-8">
                <li>10 Kurse (spare 90 €)</li>
                <li>Gültig für 3 Monate</li>
                <li>Mattenverleih inklusive</li>
                <li>10% Rabatt auf Workshops</li>
              </ul>
              <a href="#contact" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold inline-block w-full">Kaufen</a>
            </div>

            <div className="premium-card p-8 text-center group">
              <h4 className="font-serif text-xl mb-2 text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">Monatsabo Unlimited</h4>
              <p className="text-yoga-gold text-3xl font-light mb-6 mt-4">130 €</p>
              <ul className="text-yoga-brown/80 space-y-2 mb-8">
                <li>Unbegrenzte Kurse für 30 Tage</li>
                <li>Mattenverleih inklusive</li>
                <li>15% Rabatt auf Workshops</li>
                <li>1 Gästepass inklusive</li>
              </ul>
              <a href="#contact" className="yoga-button-premium border-yoga-brown text-yoga-brown hover:bg-yoga-brown hover:text-white inline-block w-full">Abonnieren</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
