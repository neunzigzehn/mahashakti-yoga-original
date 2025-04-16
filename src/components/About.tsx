
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current?.classList.add('animate-fade-in');
          textRef.current?.classList.add('animate-fade-in');
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
    <section id="about" ref={sectionRef} className="py-24 bg-yoga-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-yoga-brown">About Nina</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageRef} 
            className="opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" 
              alt="Nina in yoga pose" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text content */}
          <div 
            ref={textRef} 
            className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-300"
          >
            <h3 className="font-serif text-2xl mb-6 text-yoga-brown">My Yoga Journey</h3>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              My journey in yoga began over a decade ago when I was searching for a way to find balance in my busy life. What started as a physical practice quickly evolved into a transformative journey of self-discovery and mindfulness.
            </p>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              Trained in various traditions including Hatha, Vinyasa, and Yin, I blend these approaches with a deep understanding of mindfulness practices to create a unique experience that honors both traditional yoga principles and modern wellness science.
            </p>
            <p className="text-yoga-brown/80 mb-8 leading-relaxed">
              My teaching philosophy centers on creating a nurturing environment where students can explore movement and breath with curiosity and compassion, regardless of their experience level or physical abilities.
            </p>
            <a href="#contact" className="yoga-button">Connect With Me</a>
          </div>
        </div>

        {/* Philosophy section */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl mb-6 text-yoga-brown">My Philosophy</h3>
          <p className="text-yoga-brown/80 mb-6 leading-relaxed italic font-serif text-xl">
            "Yoga is not about touching your toes, it's about what you learn on the way down."
          </p>
          <p className="text-yoga-brown/80 leading-relaxed">
            I believe that yoga is for everybody and every body. My classes create space for students to connect with their breath, explore movement with curiosity, and cultivate a sense of presence that extends beyond the mat and into everyday life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
