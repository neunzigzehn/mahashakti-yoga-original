
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
          <h2 className="section-title text-yoga-brown">About Mahashakti</h2>
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
                src="/lovable-uploads/205b48d5-16ef-42e4-91ac-372d0c0815b7.png" 
                alt="Veronika Rössl - Mahashakti Yoga Founder" 
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
              The journey of Mahashakti Yoga began over fifteen years ago, rooted in ancient traditions and authentic practices. What started as a personal exploration evolved into a mission to share these transformative practices with others.
            </p>
            <p className="text-yoga-brown/80 mb-6 leading-relaxed">
              Trained in traditional Hatha, Kundalini, and Tantric yoga practices, Mahashakti offers a unique approach that honors the sacred origins of yoga while making it accessible to modern practitioners seeking physical, mental, and spiritual well-being.
            </p>
            <p className="text-yoga-brown/80 mb-8 leading-relaxed">
              Our teaching philosophy centers on creating a sacred space where students can explore the deeper dimensions of yoga, connecting with their inner power and awakening their true potential.
            </p>
            <a href="#contact" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">Connect With Us</a>
          </div>
        </div>

        {/* Philosophy section */}
        <div className={`mt-24 text-center max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-3xl mb-6 text-yoga-brown">Our Philosophy</h3>
          <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-8"></div>
          <p className="text-yoga-brown/80 mb-10 leading-relaxed italic font-serif text-2xl">
            "Yoga is not merely a practice, but a journey towards discovering your inner power and divine light."
          </p>
          <div className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
            <p className="text-yoga-brown/80 leading-relaxed">
              At Mahashakti Yoga, we believe in the transformative power of authentic yoga practices that integrate body, mind, and spirit. Our approach combines traditional wisdom with contemporary understanding, creating a space for personal growth, healing, and spiritual awakening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
