
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GrundausbildungSection from "@/components/ausbildungen/GrundausbildungSection";
import FortbildungSection from "@/components/ausbildungen/FortbildungSection";
import WochenendModuleSection from "@/components/ausbildungen/WochenendModuleSection";
import FaqSection from "@/components/ausbildungen/FaqSection";

const Ausbildungen = () => {
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
        <PageHeader 
          title="Ausbildungen" 
          subtitle="Professionelle Yoga-Ausbildungen für angehende Lehrer und alle, die ihre Praxis vertiefen möchten."
        />

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <GrundausbildungSection />
              <FortbildungSection />
              <WochenendModuleSection />
              <FaqSection />
              
              {/* Download Button */}
              <div className="text-center">
                <a href="/ALLE_TERMINE_2025_2026.pdf" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold" download>
                  Download: ALLE TERMINE 2025/2026
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

export default Ausbildungen;
