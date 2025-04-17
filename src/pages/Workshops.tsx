
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Workshops = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero banner */}
        <section className="pt-24 pb-16 bg-yoga-beige relative">
          <div className="container-custom">
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Workshops & Events</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Yoga Workshops */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Yoga Workshops</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-yoga-beige/50 relative">
                      <img 
                        src="/placeholder.svg" 
                        alt="Inversionen Masterclass" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2 text-yoga-brown">Inversionen Masterclass</h3>
                      <p className="text-yoga-brown/70 text-sm mb-4">26.05.2025 • 14:00–17:00 Uhr</p>
                      <p className="text-yoga-brown/80 mb-4">
                        Lerne die Grundlagen sicherer Umkehrhaltungen und überwinde Ängste.
                      </p>
                      <p className="text-yoga-gold font-medium mb-4">55 €</p>
                      <a href="#" className="yoga-button inline-block w-full text-center">Anmelden</a>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-48 bg-yoga-beige/50 relative">
                      <img 
                        src="/placeholder.svg" 
                        alt="Pranayama & Meditation" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2 text-yoga-brown">Pranayama & Meditation</h3>
                      <p className="text-yoga-brown/70 text-sm mb-4">14.06.2025 • 10:00–13:00 Uhr</p>
                      <p className="text-yoga-brown/80 mb-4">
                        Entdecke die transformative Kraft des bewussten Atmens und der Meditation.
                      </p>
                      <p className="text-yoga-gold font-medium mb-4">45 €</p>
                      <a href="#" className="yoga-button inline-block w-full text-center">Anmelden</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mental & Emotional Balance */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Mental & Emotional Balance</h2>
                <div className="bg-yoga-beige/30 p-8 rounded-lg mb-10">
                  <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Craniosacrale Therapie</h3>
                  <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                    Unsere Workshops zur Craniosacralen Therapie verbinden alte Weisheiten mit moderner Wissenschaft. Diese sanfte, aber tiefgreifende Methode unterstützt das Nervensystem und fördert die Selbstheilungskräfte des Körpers.
                  </p>
                  <p className="text-yoga-brown/80 mb-8 leading-relaxed">
                    In diesen spezialisierten Workshops lernst du grundlegende Techniken, die du in deinen Alltag und deine Yoga-Praxis integrieren kannst, um Stress abzubauen und innere Balance zu fördern.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-yoga-gold font-medium">Nächster Termin: 12.07.2025</p>
                    <a href="/kontakt" className="yoga-button">
                      Anfragen
                    </a>
                  </div>
                </div>
              </div>

              {/* Special Events */}
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Special Events</h2>
                
                <div className="mb-12">
                  <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Festivals</h3>
                  <div className="bg-white shadow-md p-6 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h4 className="font-serif text-xl mb-2 text-yoga-brown">Summer Yoga Festival 2025</h4>
                        <p className="text-yoga-brown/70 text-sm">22.-24.08.2025 • Englischer Garten, München</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <a href="#" className="yoga-button">Mehr erfahren</a>
                      </div>
                    </div>
                    <p className="text-yoga-brown/80">
                      Ein Wochenende voller Yoga, Meditation, Musik und Gemeinschaft im Herzen von München. Mit internationalen Lehrern, Workshops, vegetarischem Essen und Livemusik.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Community</h3>
                  <div className="space-y-6">
                    <div className="bg-white shadow-sm p-6 rounded-lg">
                      <h4 className="font-serif text-xl mb-3 text-yoga-brown">Vollmond-Meditation</h4>
                      <p className="text-yoga-brown/80 mb-4">
                        Jeden Vollmond treffen wir uns zur gemeinsamen Meditation, gefolgt von Tee und Gesprächen. Diese regelmäßige Praxis hilft uns, mit den natürlichen Zyklen in Einklang zu kommen.
                      </p>
                      <p className="text-yoga-brown/70 italic">Kostenlos für Mitglieder, 5 € für Gäste</p>
                    </div>
                    <div className="bg-white shadow-sm p-6 rounded-lg">
                      <h4 className="font-serif text-xl mb-3 text-yoga-brown">Yogini Circle</h4>
                      <p className="text-yoga-brown/80 mb-4">
                        Ein monatlicher Frauenkreis zum Austausch von Erfahrungen, gegenseitiger Unterstützung und gemeinsamem Wachstum durch Yoga, Meditation und tiefgreifende Gespräche.
                      </p>
                      <p className="text-yoga-brown/70 italic">15 € pro Session, 10er-Karte 120 €</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Blog-like section */}
              <div className="mb-16">
                <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Selbsterfahrungs- & Achtsamkeitsseminare</h2>
                <div className="bg-white shadow-md p-8 rounded-lg">
                  <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Feedback eines Teilnehmers</h3>
                  <p className="text-yoga-brown/80 mb-6 italic font-serif text-lg">
                    "Die Seminare bei Veronika haben mein Leben verändert. Ich habe gelernt, achtsamer mit mir selbst umzugehen und meine Gedanken zu beobachten, ohne mich von ihnen mitreißen zu lassen. Diese Erfahrung hat mir geholfen, sowohl in meinem persönlichen als auch beruflichen Leben präsenter und ausgeglichener zu sein."
                  </p>
                  <p className="text-yoga-brown/70 text-right">- Maria K., 42, Teilnehmerin seit 2022</p>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-serif text-2xl mb-6 text-yoga-brown">#metoo und Yoga – Ein wichtiges Thema</h3>
                  <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                    Als verantwortungsbewusste Yoga-Gemeinschaft setzen wir uns aktiv mit dem Thema Grenzen und Respekt auseinander. In unseren Workshops schaffen wir einen sicheren Raum, in dem diese wichtigen Themen offen diskutiert werden können.
                  </p>
                  <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                    Unser Ziel ist es, ein Bewusstsein für angemessenes Verhalten, Konsens und Respekt im Yoga-Kontext zu fördern und Praktizierenden die Werkzeuge zu geben, ihre Grenzen klar zu kommunizieren und die anderer zu respektieren.
                  </p>
                  <a href="/blog" className="yoga-button">
                    Zum vollständigen Artikel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Workshops;
