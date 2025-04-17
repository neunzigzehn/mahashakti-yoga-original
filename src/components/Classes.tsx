import { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '@/utils/supabaseStorage';

interface YogaClass {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  objectPosition?: string; 
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
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
      image: "/lovable-uploads/dba68d16-d275-4cef-a55a-21fcf95b2e44.png",
      level: "Alle Niveaus",
      duration: "75 Min",
      objectPosition: "50% 20%", // Shifted further up to show more of the body
      objectFit: "cover",
    },
    {
      id: 2,
      title: "Hatha-Vinyasa",
      description: "Eine dynamische Praxis, die traditionelle Hatha-Posen mit fließenden Vinyasa-Sequenzen verbindet. Entwickle Kraft und Flexibilität durch achtsame Bewegungen.",
      image: "/lovable-uploads/040584b2-f8bb-43a4-81b5-2ea45fdd0e83.png",
      level: "Mittelstufe",
      duration: "90 Min",
      objectPosition: "center center", // This one is already well-positioned
      objectFit: "cover",
    },
    {
      id: 3,
      title: "Yin Yoga",
      description: "Eine meditative Praxis mit längeren Haltezeiten. Löse tiefsitzende Spannungen, verbessere die Flexibilität deines Bindegewebes und finde innere Ruhe.",
      image: "/lovable-uploads/d041641d-c7a5-4f92-9886-4b97f0e15bbe.png",
      level: "Alle Niveaus",
      duration: "90 Min",
      objectPosition: "center center", // This one is already well-positioned
      objectFit: "cover",
    },
    {
      id: 4,
      title: "Ashtanga Yoga",
      description: "Eine kraftvolle und strukturierte Praxis, die durch eine festgelegte Sequenz von Asanas führt. Entwickle Stärke, Ausdauer und innere Klarheit durch regelmäßige Übung.",
      image: "/lovable-uploads/9ca8aec4-ec47-4aa0-ab46-f249513d47c8.png",
      level: "Fortgeschritten",
      duration: "90 Min",
      objectPosition: "50% 70%", // Shifted further down to show more of the face
      objectFit: "cover",
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
                  className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 filter grayscale-[25%] hover:grayscale-0"
                  style={{ 
                    objectPosition: yogaClass.objectPosition || 'center center',
                    objectFit: yogaClass.objectFit || 'cover'
                  }}
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
