
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetreatCard from '@/components/retreats/RetreatCard';
import UpcomingRetreats from '@/components/retreats/UpcomingRetreats';
import ScheduleOverview from '@/components/retreats/ScheduleOverview';
import TestimonialsSection from '@/components/retreats/TestimonialsSection';
import DownloadSection from '@/components/retreats/DownloadSection';
import { getImageUrl } from '@/utils/supabaseStorage';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

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
      objectPosition: "center center"
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
      objectPosition: "center center"
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
      objectPosition: "center center"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader 
          title="Yoga-Retreats"
          subtitle="Komme auch du mit auf eines der vielen schönen Yoga-Retreats mit Veronika an besonderen Kraftorten dieser Welt. Alleine, zu zweit, in einer Gruppe, als AnfängerIn oder fortgeschritten. Come as you are."
        />

        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Introduction section to fill the gap */}
              <div className="mb-16 max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-2xl mb-6 text-yoga-brown">Warum ein Yoga-Retreat mit Veronika?</h2>
                <p className="text-yoga-brown/80 mb-8 leading-relaxed">
                  Ein Retreat ist eine wunderbare Gelegenheit, um tiefer in deine Yoga-Praxis einzutauchen, dich zu entspannen und 
                  neue Kraft zu tanken. In einer kleinen Gruppe von Gleichgesinnten kannst du deinen Alltag hinter dir lassen und 
                  dich ganz auf dich und deine Praxis konzentrieren.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <Card className="border-yoga-gold/20 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-yoga-gold/10 p-2 rounded-full mr-4">
                          <Check className="h-5 w-5 text-yoga-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-yoga-brown">Persönliche Betreuung</h3>
                      </div>
                      <p className="text-yoga-brown/70 text-sm">Kleine Gruppen ermöglichen eine individuelle Betreuung und Anpassung der Praxis an deine Bedürfnisse.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-yoga-gold/20 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-yoga-gold/10 p-2 rounded-full mr-4">
                          <Check className="h-5 w-5 text-yoga-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-yoga-brown">Besondere Orte</h3>
                      </div>
                      <p className="text-yoga-brown/70 text-sm">Alle Retreats finden an sorgfältig ausgewählten Kraftorten statt, die den perfekten Rahmen für deine Yoga-Erfahrung bieten.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-yoga-gold/20 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-yoga-gold/10 p-2 rounded-full mr-4">
                          <Check className="h-5 w-5 text-yoga-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-yoga-brown">Ganzheitliche Erfahrung</h3>
                      </div>
                      <p className="text-yoga-brown/70 text-sm">Neben Yoga erwarten dich auch Meditation, gesunde Ernährung und Zeit für Entspannung und Austausch.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
