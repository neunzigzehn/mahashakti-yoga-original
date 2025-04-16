
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
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
    <section id="about" ref={sectionRef} className="py-24 bg-yoga-beige relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yoga-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yoga-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">About Nina</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with border effect */}
          <div 
            ref={imageRef} 
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="absolute inset-0 border-2 border-yoga-gold rounded-lg transform translate-x-6 translate-y-6"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" 
                alt="Nina in yoga pose" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text content */}
          <div 
            ref={textRef} 
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <h3 className="font-serif text-3xl mb-6 text-yoga-brown">My Yoga Journey</h3>
            <div className="w-16 h-0.5 bg-yoga-gold mb-8"></div>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              My journey in yoga began over a decade ago when I was searching for a way to find balance in my busy life. What started as a physical practice quickly evolved into a transformative journey of self-discovery and mindfulness.
            </p>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              Trained in various traditions including Hatha, Vinyasa, and Yin, I blend these approaches with a deep understanding of mindfulness practices to create a unique experience that honors both traditional yoga principles and modern wellness science.
            </p>
            <p className="text-yoga-brown/80 mb-8 leading-relaxed">
              My teaching philosophy centers on creating a nurturing environment where students can explore movement and breath with curiosity and compassion, regardless of their experience level or physical abilities.
            </p>
            <a href="#contact" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">Connect With Me</a>
          </div>
        </div>

        {/* Philosophy section */}
        <div className={`mt-24 text-center max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-3xl mb-6 text-yoga-brown">My Philosophy</h3>
          <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-8"></div>
          <p className="text-yoga-brown/80 mb-10 leading-relaxed italic font-serif text-2xl">
            "Yoga is not about touching your toes, it's about what you learn on the way down."
          </p>
          <div className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
            <p className="text-yoga-brown/80 leading-relaxed">
              I believe that yoga is for everybody and every body. My classes create space for students to connect with their breath, explore movement with curiosity, and cultivate a sense of presence that extends beyond the mat and into everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
