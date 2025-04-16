
import { useEffect, useRef, useState } from 'react';

interface YogaClass {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
}

const Classes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const cards = cardsRef.current?.querySelectorAll('.class-card');
          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0');
            }, index * 200);
          });
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

  const classes: YogaClass[] = [
    {
      id: 1,
      title: "Kundalini Yoga",
      description: "Erwecken Sie Ihre innere Energie durch dynamische Bewegungen, Atemtechniken und Mantras. Erleben Sie das Aufsteigen des Bewusstseins und spirituelles Erwachen.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      level: "Alle Levels",
      duration: "90 min",
    },
    {
      id: 2,
      title: "Hatha Yoga",
      description: "Ein traditioneller Ansatz mit Fokus auf Ausrichtung, Balance und Atembewusstsein. Bauen Sie Kraft und Flexibilität auf, während Sie Achtsamkeit und inneren Frieden kultivieren.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
      level: "Alle Levels",
      duration: "75 min",
    },
    {
      id: 3,
      title: "Tantra Yoga",
      description: "Erforschen Sie die heilige Vereinigung von weiblichen und männlichen Energien durch achtsame Bewegung, Meditation und Atemarbeit. Verbinden Sie sich mit Ihrer göttlichen Essenz.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
      level: "Mittelstufe",
      duration: "90 min",
    },
    {
      id: 4,
      title: "Meditation & Mantra",
      description: "Tauchen Sie tief in alte Meditationstechniken und heilige Klangschwingungen ein, um den Geist zu beruhigen, das Herz zu öffnen und sich mit Ihrer inneren Weisheit zu verbinden.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      level: "Alle Levels",
      duration: "60 min",
    },
  ];

  return (
    <section id="classes" ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title text-yoga-brown">Yoga Kurse</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Entdecken Sie eine Vielfalt an authentischen Yoga-Praktiken, die darauf ausgerichtet sind, Ihre innere Kraft zu erwecken und Sie zur Ganzheit zu führen.
            Jeder Kurs bietet einen einzigartigen Ansatz, um sich mit Körper, Geist und Seele zu verbinden.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((yogaClass) => (
            <div key={yogaClass.id} className="class-card opacity-0 premium-card group">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span>{yogaClass.level}</span>
                    <span>{yogaClass.duration}</span>
                  </div>
                  <a href="#schedule" className="text-white group-hover:text-yoga-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium flex items-center">
                    Kursplan Ansehen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-4 text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">{yogaClass.title}</h3>
                <p className="text-yoga-brown/80 text-sm mb-6 leading-relaxed">
                  {yogaClass.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#schedule" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">Vollständigen Kursplan Ansehen</a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
