
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
      
      {/* Lighter overlay with subtle blur to ensure text visibility while allowing orbs to be more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-yoga-brown/30 to-yoga-brown/10 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative container-custom h-full flex flex-col justify-center">
        <div className={`max-w-2xl transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden mb-2">
            <h2 className={`yoga-heading text-white text-xl md:text-2xl ${isVisible ? 'animate-slide-up' : 'translate-y-full'}`}>Welcome to</h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className={`hero-text text-white ${isVisible ? 'animate-slide-up animation-delay-300' : 'translate-y-full'}`}>
              A mindful approach to yoga
            </h1>
          </div>
          <div className="overflow-hidden mb-10">
            <p className={`text-white/90 font-sans font-light max-w-xl text-lg leading-relaxed ${isVisible ? 'animate-slide-up animation-delay-600' : 'translate-y-full'}`}>
              Experience yoga in a new light with Nina's gentle and mindful approach to movement, breath and body awareness.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#classes" className="yoga-button-premium border-white text-white hover:bg-white hover:text-yoga-brown">
              Explore Classes
            </a>
            <a href="#about" className="yoga-button-outline border-white/70 text-white hover:border-white">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white text-sm font-light tracking-wider mb-2">Scroll</span>
        <div className="h-16 w-0.5 bg-white/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
