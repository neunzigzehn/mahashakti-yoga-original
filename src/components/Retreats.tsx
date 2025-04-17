
import { useRef, useEffect, useState } from 'react';
import RetreatCard from './retreats/RetreatCard';
import PrivateRetreats from './retreats/PrivateRetreats';
import { getRetreats } from './retreats/RetreatData';

const Retreats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const retreatsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const retreats = retreatsRef.current?.querySelectorAll('.retreat-card');
          retreats?.forEach((retreat, index) => {
            setTimeout(() => {
              retreat.classList.add('animate-fade-in');
              retreat.classList.remove('opacity-0');
            }, index * 300);
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

  const retreats = getRetreats();

  return (
    <section id="retreats" ref={sectionRef} className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-48 h-48 bg-yoga-gold/5 rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-24 left-0 w-64 h-64 bg-yoga-gold/5 rounded-full -translate-x-1/2"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Retreats mit Veronika</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Erlebe die transformative Kraft des Yoga an heiligen Orten auf der ganzen Welt.
            Unsere Retreats bieten ein perfektes Gleichgewicht aus authentischer Praxis, spiritueller Erforschung und kulturellem Eintauchen.
          </p>
        </div>

        <div ref={retreatsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {retreats.map((retreat) => (
            <RetreatCard 
              key={retreat.id}
              id={retreat.id}
              title={retreat.title}
              location={retreat.location}
              date={retreat.date}
              description={retreat.description}
              image={retreat.image}
              price={retreat.price}
              spots={retreat.spots}
              objectPosition={retreat.objectPosition}
            />
          ))}
        </div>

        <PrivateRetreats isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Retreats;
