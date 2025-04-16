
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) - 0.5;
        const y = ((e.clientY - rect.top) / rect.height) - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const goldOrbStyle = {
    transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
    transition: 'transform 0.3s ease-out',
  };

  const blackOrbStyle = {
    transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
    transition: 'transform 0.3s ease-out',
  };

  return (
    <section ref={heroRef} id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Floating orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-yoga-gold/20 blur-[150px] animate-float"
        style={goldOrbStyle}
      />
      <div 
        className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-yoga-brown/20 blur-[100px] animate-pulse-gold"
        style={blackOrbStyle}
      />

      {/* Background image with parallax effect */}
      <div className="absolute inset-0 bg-black/80">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60" />
      </div>

      {/* Content */}
      <div className="relative container-custom h-full flex flex-col justify-center items-center lg:items-start">
        <div className={`max-w-2xl transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden mb-2">
            <h2 className={`yoga-heading text-yoga-gold text-xl md:text-2xl ${isVisible ? 'animate-slide-up' : 'translate-y-full'}`}>Welcome to</h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className={`text-center lg:text-left text-white font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider leading-tight ${isVisible ? 'animate-slide-up animation-delay-300' : 'translate-y-full'}`}>
              GLOW FLOW<br />YOGA
            </h1>
          </div>
          <div className="overflow-hidden mb-10">
            <p className={`text-white/80 text-center lg:text-left font-sans font-light max-w-xl text-lg leading-relaxed ${isVisible ? 'animate-slide-up animation-delay-600' : 'translate-y-full'}`}>
              Experience yoga in a new light with Nina's gentle and mindful approach to movement, breath and body awareness.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#classes" 
              className="yoga-button-premium border-yoga-gold text-yoga-gold hover:bg-yoga-gold hover:text-black transition-all duration-500 relative group overflow-hidden"
            >
              <span className="relative z-10">Explore Classes</span>
              <span className="absolute inset-0 bg-yoga-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </a>
            <a 
              href="#about" 
              className="yoga-button-outline border-white/30 text-white hover:border-yoga-gold hover:text-yoga-gold transition-all duration-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block">
        <div className="h-[200px] w-[1px] bg-gradient-to-b from-transparent via-yoga-gold/30 to-transparent"></div>
      </div>

      {/* Scroll down indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-yoga-gold text-sm font-light tracking-wider mb-2">Scroll</span>
        <div className="h-16 w-0.5 bg-yoga-gold/30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
