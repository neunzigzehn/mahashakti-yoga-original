
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80')",
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-yoga-brown/20" />
      </div>

      {/* Content */}
      <div className="relative container-custom h-full flex flex-col justify-center">
        <div className={`max-w-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="yoga-heading text-white text-xl md:text-2xl mb-4">Welcome to</h2>
          <h1 className="hero-text text-white mb-8">
            A mindful approach to yoga
          </h1>
          <p className="text-white/90 font-sans font-light mb-10 max-w-xl text-lg">
            Experience yoga in a new light with Nina's gentle and mindful approach to movement, breath and body awareness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#classes" className="yoga-button border-white text-white hover:bg-white hover:text-yoga-brown">
              Explore Classes
            </a>
            <a href="#about" className="yoga-button border-white/70 text-white hover:border-white">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm font-light tracking-wider mb-2">Scroll</span>
        <div className="h-16 w-0.5 bg-white/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
