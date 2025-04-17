
import { useEffect, useState } from 'react';
import WebGLBackground from './WebGLBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set background as loaded
    setIsLoaded(true);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* WebGL Background - load only when component is mounted */}
      {isLoaded && <WebGLBackground />}
      
      {/* Lighter overlay with moderate blur for premium effect while ensuring text visibility */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative container-custom h-full flex flex-col justify-center">
        <div className={`max-w-2xl transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden mb-2">
            <h2 className={`yoga-heading text-yoga-brown text-xl md:text-2xl ${isVisible ? 'animate-slide-up' : 'translate-y-full'}`}>Veronikas in München</h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className={`hero-text text-yoga-darkBrown ${isVisible ? 'animate-slide-up animation-delay-300' : 'translate-y-full'}`}>
              Veronika, eine der beliebtesten Yoga-Trainerinnen & Coaches in Deutschland.
            </h1>
          </div>
          <div className="overflow-hidden mb-10">
            <p className={`text-yoga-brown/80 font-sans font-light max-w-xl text-lg leading-relaxed ${isVisible ? 'animate-slide-up animation-delay-600' : 'translate-y-full'}`}>
              Veronika auf Festivals mit Teilnehmer*innen, auf Yoga-Retreats und bei
              Ausbildungen am Strand. Veronika gehört laut Presse, Verbänden und Blogger*innen zu den 10 besten
              Yoga-Lehrerinnen in München. Gründe, warum du bei Veronika Aus- & Fortbildungen
              machen möchtest, findest du unten.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#classes" className="yoga-button-premium border-yoga-brown text-yoga-brown hover:bg-yoga-brown hover:text-white">
              Kurse entdecken
            </a>
            <a href="#about" className="yoga-button-outline border-yoga-brown/70 text-yoga-brown hover:border-yoga-brown">
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-yoga-brown text-sm font-light tracking-wider mb-2">Scrollen</span>
        <div className="h-16 w-0.5 bg-yoga-brown/50 animate-pulse"></div>
      </div>
      
      {/* Hinweis unter Hero */}
      <div className={`absolute bottom-4 left-0 right-0 text-center transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href="/ALLE_TERMINE_2025_2026.pdf" 
          download 
          className="inline-flex items-center text-yoga-brown/80 hover:text-yoga-brown transition-colors text-sm font-medium"
        >
          <span>Alle Retreats, Aus- & Fortbildungen 2025 / 2026 → Download PDF</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
