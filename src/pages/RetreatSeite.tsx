
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero banner */}
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

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Featured Retreats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {/* Mallorca - Port de Soller */}
                <Card className="overflow-hidden bg-white shadow-lg border-yoga-gold/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="h-56 bg-yoga-beige/50 relative overflow-hidden">
                    <img 
                      src={getImageUrl("retreat-images", "retreat-1.png")}
                      alt="Yoga-Retreat in Port de Sollér, Mallorca" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/70 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-serif text-xl text-yoga-brown">YOGA-RETREAT im BIKINI ISLAND & MOUNTAIN HOTEL</CardTitle>
                    <CardDescription className="text-yoga-brown/70 flex flex-col gap-2 mt-2">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                        Port de Sollér, Mallorca, Spanien
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                        24.-28.05.2025 (4 Nächte)
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-yoga-brown/80">
                    <p className="mb-4">
                      Yoga-Retreat in den Bergen mit Blick aufs Meer. Erlebe eine perfekte Balance aus Yoga-Praxis, 
                      Entspannung und mediterranem Flair auf der wunderschönen Insel Mallorca.
                    </p>
                    <div className="text-yoga-gold font-medium">Ab 1.950€</div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <span className="text-yoga-brown/60 text-sm">8 Plätze verfügbar</span>
                    <a href="#" className="text-yoga-brown hover:text-yoga-gold flex items-center transition-colors">
                      Mehr Infos <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
                
                {/* Südtirol - Vigilius */}
                <Card className="overflow-hidden bg-white shadow-lg border-yoga-gold/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="h-56 bg-yoga-beige/50 relative overflow-hidden">
                    <img 
                      src={getImageUrl("retreat-images", "retreat-2.png")}
                      alt="Yoga-Retreat im Vigilius Mountain Hotel, Südtirol" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/70 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-serif text-xl text-yoga-brown">YOGA-RETREAT im VIGILIUS MOUNTAIN HOTEL</CardTitle>
                    <CardDescription className="text-yoga-brown/70 flex flex-col gap-2 mt-2">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                        Lana, Südtirol, 1500m Höhe
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                        12.06.-15.06.2025
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-yoga-brown/80">
                    <p className="mb-4">
                      Eintauchen in die alpine Bergwelt auf 1500m Höhe. Ein besonderes Retreat in diesem exklusiven 
                      Naturresort, nur mit der Seilbahn erreichbar, für echte Erholung und tiefe Yoga-Praxis.
                    </p>
                    <div className="text-yoga-gold font-medium">Ab 1.200€</div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <span className="text-yoga-brown/60 text-sm">10 Plätze verfügbar</span>
                    <a href="#" className="text-yoga-brown hover:text-yoga-gold flex items-center transition-colors">
                      Mehr Infos <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
                
                {/* Salzburger Land - Forsthofalm */}
                <Card className="overflow-hidden bg-white shadow-lg border-yoga-gold/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="h-56 bg-yoga-beige/50 relative overflow-hidden">
                    <img 
                      src={getImageUrl("retreat-images", "retreat-3.png")}
                      alt="Yoga-Retreat im Holzhotel Forsthofalm, Salzburger Land" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/70 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-serif text-xl text-yoga-brown">YOGA-RETREAT im HOLZHOTEL FORSTHOFALM</CardTitle>
                    <CardDescription className="text-yoga-brown/70 flex flex-col gap-2 mt-2">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                        Salzburger Land, Österreich
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                        04.-07.09.2025 (3 Nächte)
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-yoga-brown/80">
                    <p className="mb-4">
                      Drei Tage Yoga inmitten der atemberaubenden Bergkulisse des Salzburger Landes. Das nachhaltige 
                      Holzhotel bietet den perfekten Rahmen für Yoga und Naturerlebnisse.
                    </p>
                    <div className="text-yoga-gold font-medium">Ab 990€</div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <span className="text-yoga-brown/60 text-sm">12 Plätze verfügbar</span>
                    <a href="#" className="text-yoga-brown hover:text-yoga-gold flex items-center transition-colors">
                      Mehr Infos <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Additional Retreats */}
              <div className="bg-yoga-beige/30 p-8 rounded-lg mb-16">
                <h2 className="font-serif text-2xl mb-8 text-yoga-brown text-center">Weitere Retreats 2025 / 2026</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white p-5 rounded-md shadow-sm">
                    <h3 className="font-serif text-lg mb-3 text-yoga-brown">POSTHOTEL ACHENKIRCH</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">Tirol, Österreich</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">11./12.09. – 14.09.25</span>
                    </div>
                    <div className="mt-1 text-yoga-brown/70 text-sm italic">
                      Beginne Donnerstag oder Freitag
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm">
                    <h3 className="font-serif text-lg mb-3 text-yoga-brown">POSTHOTEL ACHENKIRCH</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">Tirol, Österreich</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">13./14.11. – 16.11.25</span>
                    </div>
                    <div className="mt-1 text-yoga-brown/70 text-sm italic">
                      Beginne Donnerstag oder Freitag
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm">
                    <h3 className="font-serif text-lg mb-3 text-yoga-brown">BIKINI ISLAND & MOUNTAIN HOTEL</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">Es Trenc, Mallorca</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">05.10.-09.10.25 (4 Nächte)</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm">
                    <h3 className="font-serif text-lg mb-3 text-yoga-brown">HOTEL SCHWARZSCHMIED</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">Lana, Südtirol</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
                      <span className="text-yoga-brown/80">27.11. - 30.11.25</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Typical Retreat Day */}
              <div className="mb-16 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-yoga-tan/20 py-6 px-8">
                  <h2 className="font-serif text-2xl text-yoga-brown text-center">Ein typischer Yoga-Tag</h2>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 text-yoga-brown/80">
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-3 font-medium">08:00-09:30</span>
                      <span>Eine Yoga-Stunde mit unterschiedlichen Schwerpunkten (Meditation, Atemtechniken, Sonnengrüße, verschiedene Asanas, Savasana)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-3 font-medium">bis 11:00</span>
                      <span>Frühstück/Brunch zusammen in der Gruppe oder alleine oder mit Freunden/Familie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-3 font-medium">ab 11:30</span>
                      <span>Wandern, Ausflüge, Massage, Wellness, andere Aktivitäten oder einfach die Seele baumeln lassen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-3 font-medium">17:00-18:30</span>
                      <span>Eine weitere Yoga-Stunde mit unterschiedlichen Themen und Übungen, einmal auch Yin Yoga</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yoga-gold mr-3 font-medium">Abend</span>
                      <span>Gemeinsames oder individuelles Abendessen, Sauna, Entspannung oder geselliges Beisammensein</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-yoga-brown/80 italic">
                    Fixpunkt sind die Yoga-Stunden mit Veronika. Das Programm dazwischen stellst du dir selbst zusammen oder machen wir uns in der Gruppe aus.
                  </div>
                </div>
              </div>
              
              {/* Testimonials */}
              <div className="mb-16">
                <h2 className="font-serif text-2xl mb-8 text-yoga-brown text-center">Feedback von Teilnehmern</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-yoga-beige/20 p-6 rounded-lg relative">
                    <div className="text-yoga-gold text-4xl absolute top-4 right-6 opacity-20">"</div>
                    <p className="text-yoga-brown/80 mb-4 relative z-10">
                      Liebe Veronika, lieben Dank für das schöne Retreat. Es war eine wunderschöne Zeit mit dir, du hast uns gefordert, 
                      man konnte dank deiner Hilfe, über sich hinauswachsen und du hast uns Raum zum Entspannen gegeben. Von allem war 
                      alles dabei. Du füllst den Raum mit so wundervoller Energie, dass man in jeder Sekunde sich getragen und gestärkt fühlt.
                    </p>
                    <div className="text-yoga-brown font-medium">Susanne Sch., Januar 2023</div>
                  </div>
                  
                  <div className="bg-yoga-beige/20 p-6 rounded-lg relative">
                    <div className="text-yoga-gold text-4xl absolute top-4 right-6 opacity-20">"</div>
                    <p className="text-yoga-brown/80 mb-4 relative z-10">
                      Veronika ist außergewöhnlich und ganz besonders; mit ihrem rießigen Schatz an Erfahrung, ihrer Freude, 
                      am Unterrichten und Bewegen. Völlig entspannt & ruhig unterrichtet sie und macht glasklare & hilfreiche Ansagen. 
                      In ihrem Unterricht kann man so viel genießen: wohlige Leichtigkeit, herrliche Tiefe, verspielte, ungewöhnliche Übergänge.
                    </p>
                    <div className="text-yoga-brown font-medium">Mimo R., Januar 2023</div>
                  </div>
                </div>
              </div>
              
              {/* Private Sacred Journeys */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-serif text-2xl mb-4 text-yoga-brown">Private Yoga-Reisen</h2>
                <p className="text-yoga-brown/80 mb-8">
                  Maßgeschneiderte Retreats für Gruppen – Plane dein eigenes transformatives Erlebnis für Freunde, Familie oder dein Unternehmen.
                </p>
                <Link to="/kontakt" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
                  Unverbindlich anfragen
                </Link>
              </div>
              
              {/* Download PDF section */}
              <div className="p-8 bg-white shadow-md rounded-lg text-center max-w-2xl mx-auto border border-yoga-gold/10">
                <h3 className="font-serif text-xl mb-4 text-yoga-brown">Alle Retreats, Aus- & Fortbildungen 2025 / 2026</h3>
                <a 
                  href="/ALLE_TERMINE_2025_2026.pdf"
                  className="yoga-button inline-flex items-center" 
                  download
                >
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RetreatSeite;
