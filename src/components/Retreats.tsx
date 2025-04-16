
import { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Retreat {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  price: string;
  spots: string;
}

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

  const retreats: Retreat[] = [
    {
      id: 1,
      title: "Bikini Island & Mountain Resort",
      location: "Port de Sóller, Mallorca, Spanien",
      date: "28. Mai - 1. Juni 2025",
      description: "Erleben Sie die Schönheit Mallorcas in diesem exklusiven Strandresort. Praktizieren Sie Yoga mit atemberaubendem Blick auf das Mittelmeer, genießen Sie gesunde Mahlzeiten und erkunden Sie die malerische Umgebung. Perfekt, um sich wieder mit der Natur und sich selbst zu verbinden.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
      price: "Ab €980",
      spots: "Begrenzte Plätze verfügbar",
    },
    {
      id: 2,
      title: "Vigilius Mountain Resort",
      location: "Lana, Südtirol, Italien",
      date: "12.-15. Juni 2025",
      description: "Ein Bergretreat auf 1500m Höhe in der wunderschönen Region Südtirol. Vertiefen Sie Ihre Praxis umgeben von atemberaubenden Alpenblicken, während Sie in diesem preisgekrönten Öko-Resort wohnen, das nur mit der Seilbahn erreichbar ist.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80",
      price: "Ab €795",
      spots: "8 Plätze verfügbar",
    },
    {
      id: 3,
      title: "Forsthofalm Wood Hotel",
      location: "Leogang, Salzburg, Österreich",
      date: "4.-7. September 2025",
      description: "Verbinden Sie sich mit der Natur in diesem einzigartigen Holzhotel in den österreichischen Alpen. Das Retreat umfasst 3 Übernachtungen mit Yoga-Sessions in einem atemberaubenden Glasstudio mit Blick auf die Berge. Wandern und Spa-Behandlungen verfügbar.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1000&q=80",
      price: "Ab €685",
      spots: "10 Plätze verfügbar",
    },
  ];

  return (
    <section id="retreats" ref={sectionRef} className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-48 h-48 bg-yoga-gold/5 rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-24 left-0 w-64 h-64 bg-yoga-gold/5 rounded-full -translate-x-1/2"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Yoga Retreats mit Veronika Rössl</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Erleben Sie die transformative Kraft des Yoga an besonderen Orten in Europa.
            Unsere Retreats bieten die perfekte Balance aus authentischer Praxis, spiritueller Erkundung und kulturellem Eintauchen.
          </p>
        </div>

        <div ref={retreatsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {retreats.map((retreat) => (
            <Card key={retreat.id} className="retreat-card opacity-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-yoga-gold/10">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={retreat.image} 
                  alt={retreat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white">{retreat.title}</h3>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="py-1 px-3 bg-yoga-gold text-white text-xs uppercase tracking-wider rounded-sm shadow-md">
                    2025
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="flex items-center text-yoga-brown/90">
                    <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-yoga-gold" />
                    <span className="text-sm">{retreat.location}</span>
                  </div>
                  <div className="flex items-center text-yoga-brown/90">
                    <Calendar className="h-5 w-5 mr-3 flex-shrink-0 text-yoga-gold" />
                    <span className="text-sm">{retreat.date}</span>
                  </div>
                  <div className="flex items-center text-yoga-brown/90">
                    <Users className="h-5 w-5 mr-3 flex-shrink-0 text-yoga-gold" />
                    <span className="text-sm">{retreat.spots}</span>
                  </div>
                </div>
                
                <p className="text-yoga-brown/80 mb-6 leading-relaxed text-sm">
                  {retreat.description}
                </p>
                
                <div className="text-yoga-gold font-medium text-lg">
                  {retreat.price}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0">
                <a href="#contact" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold w-full block text-center">
                  Jetzt Buchen
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className={`mt-16 p-10 bg-yoga-tan/30 backdrop-blur-sm rounded-lg shadow-lg text-center border border-yoga-gold/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-2xl mb-4 text-yoga-brown">200h Yoga Teacher Training</h3>
          <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-6"></div>
          <p className="text-yoga-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Werden Sie ein zertifizierter Yogalehrer mit Veronika Rössls umfassendem 200-Stunden Yoga Alliance zertifizierten Training in München. 
            Die nächste Ausbildung läuft vom 16. Januar 2026 bis zum 10. Mai 2026. Nutzen Sie unser Frühbucherangebot!
          </p>
          <a href="#contact" className="yoga-button-premium bg-yoga-gold/90 hover:bg-yoga-gold text-white border-yoga-gold/90 hover:border-yoga-gold">
            Mehr über die Yogalehrer-Ausbildung erfahren
          </a>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
