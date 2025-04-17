
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
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
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Blog</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <article className="mb-16">
                <div className="mb-8">
                  <span className="text-yoga-brown/70 text-sm">08.01.2025</span>
                  <h2 className="font-serif text-3xl mt-2 mb-6 text-yoga-brown">Die Definition von Wahnsinn 😉 – ein schönes neues Jahr!</h2>
                  <div className="w-16 h-0.5 bg-yoga-gold mb-8"></div>
                </div>
                
                <div className="prose prose-lg prose-yoga-brown max-w-none">
                  <p>
                    Die Definition von Wahnsinn ist, immer wieder das Gleiche zu tun und andere Ergebnisse zu erwarten. Dieses berühmte Zitat, das oft Albert Einstein zugeschrieben wird, erinnert uns daran, wie wichtig es ist, neue Ansätze zu wagen, wenn wir Veränderung in unserem Leben sehen möchten.
                  </p>
                  
                  <p>
                    Mit dem Beginn des neuen Jahres haben viele von uns wieder einmal gute Vorsätze gefasst – mehr Yoga zu praktizieren, gesünder zu essen, mehr zu meditieren. Doch wie oft scheitern diese Vorsätze bereits in den ersten Wochen des Jahres? Warum fällt es uns so schwer, neue Gewohnheiten zu etablieren und alte loszulassen?
                  </p>
                  
                  <p>
                    Die Yogaphilosophie bietet uns wertvolle Einsichten zu diesem Thema. In den Yoga Sutras spricht Patanjali von Abhyasa (beständige Übung) und Vairagya (Loslassen). Diese beiden Prinzipien sind wie zwei Flügel eines Vogels – beide sind notwendig, um zu fliegen.
                  </p>
                  
                  <h3>Abhyasa – Die Kraft der Beständigkeit</h3>
                  
                  <p>
                    Abhyasa bedeutet, eine Praxis mit Hingabe und Kontinuität zu verfolgen. Es geht nicht darum, sofort perfekt zu sein, sondern darum, jeden Tag aufs Neue zu beginnen, mit Geduld und ohne Erwartungen. 
                  </p>
                  
                  <p>
                    In unserer modernen Welt der sofortigen Befriedigung vergessen wir oft, dass wahre Veränderung Zeit braucht. Eine täglich 15-minütige Yogapraxis über Monate hinweg wird mehr Transformation bewirken als ein intensives Wochenend-Retreat, nach dem wir zur alten Routine zurückkehren.
                  </p>
                  
                  <h3>Vairagya – Die Kunst des Loslassens</h3>
                  
                  <p>
                    Ebenso wichtig ist Vairagya – das Loslassen von Gewohnheiten, Gedankenmustern und Erwartungen, die uns nicht mehr dienen. Oft halten wir an Dingen fest, die uns einschränken, aus Angst vor Veränderung oder dem Unbekannten.
                  </p>
                  
                  <p>
                    Wahre Transformation beginnt mit dem Mut, loszulassen – sei es eine ungesunde Beziehung, ein stressiger Job oder einfach die Art und Weise, wie wir über uns selbst denken. 
                  </p>
                  
                  <h3>Mein Wunsch für 2025</h3>
                  
                  <p>
                    Mein Wunsch für euch in diesem Jahr ist nicht, dass ihr perfekt seid oder all eure Ziele sofort erreicht. Mein Wunsch ist, dass ihr den Mut findet, neue Wege zu gehen, liebevoll mit euch selbst zu sein, wenn ihr stolpert, und die Weisheit zu erkennen, wann es Zeit ist, loszulassen und wann es Zeit ist, durchzuhalten.
                  </p>
                  
                  <p>
                    Lasst uns gemeinsam ein Jahr der bewussten Entscheidungen, des gesunden Wachstums und der tiefen Selbsterkenntnis gestalten.
                  </p>
                  
                  <p>
                    Namasté und ein wundervolles neues Jahr!
                  </p>
                  
                  <p>Eure Veronika</p>
                </div>
              </article>
              
              <div className="flex justify-between items-center border-t border-yoga-beige/50 pt-8">
                <a href="#" className="yoga-button">Ältere Beiträge</a>
                <a href="#" className="yoga-button">Zurück zur Übersicht</a>
              </div>
              
              <div className="mt-16 p-8 bg-yoga-beige/30 rounded-lg text-center">
                <h3 className="font-serif text-xl mb-4 text-yoga-brown">Newsletter abonnieren</h3>
                <p className="text-yoga-brown/80 mb-6">
                  Erhalte regelmäßig Inspirationen, Übungstipps und Neuigkeiten aus dem Studio.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Deine E-Mail-Adresse" 
                    className="flex-grow py-2 px-4 border border-yoga-beige rounded-md focus:outline-none focus:ring-1 focus:ring-yoga-gold"
                  />
                  <button className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold whitespace-nowrap">
                    Anmelden
                  </button>
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

export default Blog;
