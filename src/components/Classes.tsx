
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
      title: "Hatha Flow Yoga",
      description: "Harmonische Verbindung von Atem und Bewegung. Stärke deinen Körper und verbessere deine Flexibilität mit fließenden Übergängen zwischen den Asanas.",
      image: "public/lovable-uploads/2923884d-cdb3-4751-a291-53f8d955a7ae.png",
      level: "Alle Niveaus",
      duration: "75 Min",
    },
    {
      id: 2,
      title: "Hatha-Vinyasa",
      description: "Eine dynamische Praxis, die traditionelle Hatha-Posen mit fließenden Vinyasa-Sequenzen verbindet. Entwickle Kraft und Flexibilität durch achtsame Bewegungen.",
      image: "public/lovable-uploads/ef7f56f0-628a-4a61-a33d-543f239643cf.png",
      level: "Mittelstufe",
      duration: "90 Min",
    },
    {
      id: 3,
      title: "Yin Yoga",
      description: "Eine meditative Praxis mit längeren Haltezeiten. Löse tiefsitzende Spannungen, verbessere die Flexibilität deines Bindegewebes und finde innere Ruhe.",
      image: "public/lovable-uploads/4f4b0113-5662-426b-b0ed-039247ec283a.png",
      level: "Alle Niveaus",
      duration: "90 Min",
    },
    {
      id: 4,
      title: "Ashtanga Yoga",
      description: "Eine kraftvolle und strukturierte Praxis, die durch eine festgelegte Sequenz von Asanas führt. Entwickle Stärke, Ausdauer und innere Klarheit durch regelmäßige Übung.",
      image: "public/lovable-uploads/0e42c8a4-6afd-410a-a56a-63559589bb10.png",
      level: "Fortgeschritten",
      duration: "90 Min",
    },
  ];

  return (
    <section id="classes" ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title text-yoga-brown">Yoga Kurse</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Entdecke eine Vielfalt authentischer Yoga-Praktiken, die darauf ausgerichtet sind, deine innere Kraft zu erwecken und dich zur Ganzheit zu führen.
            Jeder Kurs bietet einen einzigartigen Ansatz, um dich mit deinem Körper, Geist und Seele zu verbinden.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((yogaClass) => (
            <div key={yogaClass.id} className="class-card opacity-0 premium-card group">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.title} 
                  className="w-full h-full object-cover object-center filter grayscale-[25%] hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span>{yogaClass.level}</span>
                    <span>{yogaClass.duration}</span>
                  </div>
                  <a href="#schedule" className="text-white group-hover:text-yoga-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium flex items-center">
                    Stundenplan ansehen
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
          <a href="#schedule" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">Vollständigen Stundenplan ansehen</a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
