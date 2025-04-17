
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetreatCard from '@/components/retreats/RetreatCard';
import UpcomingRetreats from '@/components/retreats/UpcomingRetreats';
import ScheduleOverview from '@/components/retreats/ScheduleOverview';
import TestimonialsSection from '@/components/retreats/TestimonialsSection';
import DownloadSection from '@/components/retreats/DownloadSection';
import { getImageUrl } from '@/utils/supabaseStorage';

const RetreatSeite = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const retreats = [
    {
      id: 1,
      title: "YOGA-RETREAT im BIKINI ISLAND & MOUNTAIN HOTEL",
      location: "Port de Sollér, Mallorca, Spanien",
      date: "24.-28.05.2025 (4 Nächte)",
      description: "Yoga-Retreat in den Bergen mit Blick aufs Meer. Erlebe eine perfekte Balance aus Yoga-Praxis, Entspannung und mediterranem Flair auf der wunderschönen Insel Mallorca.",
      image: getImageUrl("retreat-images", "retreat-1.png"),
      price: "Ab 1.950€",
      spots: "8 Plätze verfügbar",
      objectPosition: "center 25%"
    },
    {
      id: 2,
      title: "YOGA-RETREAT im VIGILIUS MOUNTAIN HOTEL",
      location: "Lana, Südtirol, 1500m Höhe",
      date: "12.06.-15.06.2025",
      description: "Eintauchen in die alpine Bergwelt auf 1500m Höhe. Ein besonderes Retreat in diesem exklusiven Naturresort, nur mit der Seilbahn erreichbar, für echte Erholung und tiefe Yoga-Praxis.",
      image: getImageUrl("retreat-images", "retreat-2.png"),
      price: "Ab 1.200€",
      spots: "10 Plätze verfügbar",
      objectPosition: "center 20%"
    },
    {
      id: 3,
      title: "YOGA-RETREAT im HOLZHOTEL FORSTHOFALM",
      location: "Salzburger Land, Österreich",
      date: "04.-07.09.2025 (3 Nächte)",
      description: "Drei Tage Yoga inmitten der atemberaubenden Bergkulisse des Salzburger Landes. Das nachhaltige Holzhotel bietet den perfekten Rahmen für Yoga und Naturerlebnisse.",
      image: getImageUrl("retreat-images", "retreat-3.png"),
      price: "Ab 990€",
      spots: "12 Plätze verfügbar",
      objectPosition: "center 25%"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <section className="pt-24 pb-16 bg-yoga-beige relative">
          <div className="container-custom">
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Yoga-Retreats</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-8"></div>
            <p className="text-center text-yoga-brown/80 max-w-3xl mx-auto">
              Komme auch du mit auf eines der vielen schönen Yoga-Retreats mit Veronika an besonderen Kraftorten dieser Welt. 
              Alleine, zu zweit, in einer Gruppe, als AnfängerIn oder fortgeschritten. Come as you are.
            </p>
          </div>
        </section>

        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {retreats.map(retreat => (
                  <RetreatCard
                    key={retreat.id}
                    id={retreat.id}
                    image={retreat.image}
                    title={retreat.title}
                    location={retreat.location}
                    date={retreat.date}
                    description={retreat.description}
                    price={retreat.price}
                    spots={retreat.spots}
                    objectPosition={retreat.objectPosition}
                  />
                ))}
              </div>
              
              <UpcomingRetreats />
              
              <ScheduleOverview />
              
              <TestimonialsSection />
              
              <DownloadSection />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RetreatSeite;
