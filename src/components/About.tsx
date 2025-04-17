
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
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
    <section id="about" ref={sectionRef} className="py-24 bg-yoga-beige relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yoga-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yoga-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Über Mahashakti</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with border effect */}
          <div 
            ref={imageRef} 
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="absolute inset-0 border-2 border-yoga-gold rounded-lg transform translate-x-6 translate-y-6"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/lovable-uploads/602e51c2-8474-470c-b1e8-9a9567c669e7.png" 
                alt="Mahashakti Yoga Gründerin" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div 
            ref={textRef} 
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <h3 className="font-serif text-3xl mb-6 text-yoga-brown">Meine Yoga-Reise</h3>
            <div className="w-16 h-0.5 bg-yoga-gold mb-8"></div>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              Die Reise von Mahashakti Yoga begann vor über fünfzehn Jahren, verwurzelt in alten Traditionen und authentischen Praktiken. Was als persönliche Erkundung begann, entwickelte sich zu einer Mission, diese transformativen Praktiken mit anderen zu teilen.
            </p>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              Ausgebildet in traditionellen Hatha-, Kundalini- und Tantra-Yoga-Praktiken bietet Mahashakti einen einzigartigen Ansatz, der die heiligen Ursprünge des Yoga ehrt und gleichzeitig für moderne Praktizierende zugänglich macht, die körperliches, geistiges und spirituelles Wohlbefinden suchen.
            </p>
            <p className="text-yoga-brown/80 mb-8 leading-relaxed">
              Unsere Lehrphilosophie konzentriert sich darauf, einen heiligen Raum zu schaffen, in dem Schüler die tieferen Dimensionen des Yoga erforschen, sich mit ihrer inneren Kraft verbinden und ihr wahres Potenzial erwecken können.
            </p>
            <a href="/kontakt" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">Kontakt aufnehmen</a>
          </div>
        </div>

        {/* Philosophy section */}
        <div className={`mt-24 text-center max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-3xl mb-6 text-yoga-brown">Unsere Philosophie</h3>
          <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-8"></div>
          <p className="text-yoga-brown/80 mb-10 leading-relaxed italic font-serif text-2xl">
            "Yoga ist nicht nur eine Praxis, sondern eine Reise zur Entdeckung deiner inneren Kraft und deines göttlichen Lichts."
          </p>
          <div className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
            <p className="text-yoga-brown/80 leading-relaxed">
              Bei Mahashakti Yoga glauben wir an die transformative Kraft authentischer Yoga-Praktiken, die Körper, Geist und Seele integrieren. Unser Ansatz verbindet traditionelle Weisheit mit zeitgenössischem Verständnis und schafft einen Raum für persönliches Wachstum, Heilung und spirituelles Erwachen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
