
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
      
      {/* More transparent white overlay with very subtle blur */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative container-custom h-full flex flex-col justify-center items-start">
        <div className={`max-w-3xl transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden mb-2">
            <h2 className={`yoga-heading text-yoga-brown text-2xl md:text-3xl lg:text-4xl ${isVisible ? 'animate-slide-up' : 'translate-y-full'}`}>Willkommen bei</h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className={`hero-text text-yoga-darkBrown text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight ${isVisible ? 'animate-slide-up animation-delay-300' : 'translate-y-full'}`}>
              MAHASHAKTI YOGA
            </h1>
          </div>
          <div className="overflow-hidden mb-4">
            <p className={`text-yoga-brown/80 font-sans font-light max-w-xl text-lg md:text-xl lg:text-2xl leading-relaxed ${isVisible ? 'animate-slide-up animation-delay-600' : 'translate-y-full'}`}>
              MÜNCHEN
            </p>
          </div>
          <div className="overflow-hidden mb-10">
            <p className={`text-yoga-brown/80 font-sans font-light max-w-xl text-lg md:text-xl leading-relaxed ${isVisible ? 'animate-slide-up animation-delay-600' : 'translate-y-full'}`}>
              Erleben Sie die transformative Kraft des authentischen Yoga mit Veronika Rössls Mahashakti-Ansatz zu Bewegung, Atem und spirituellem Bewusstsein seit 2002.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#classes" className="yoga-button-premium border-yoga-brown text-yoga-brown hover:bg-yoga-brown hover:text-white">
              Kurse Entdecken
            </a>
            <a href="#about" className="yoga-button-outline border-yoga-brown/70 text-yoga-brown hover:border-yoga-brown">
              Mehr Erfahren
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-yoga-brown text-sm font-light tracking-wider mb-2">Scrollen</span>
        <div className="h-16 w-0.5 bg-yoga-brown/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
