
import { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Mahashakti's kundalini classes have been transformative for my spiritual journey. The energy work and meditations have helped me connect with my inner power in ways I never thought possible.",
      name: "Sophia Müller",
      title: "Practicing for 3 years",
    },
    {
      id: 2,
      quote: "As someone who struggled with stress and anxiety, Mahashakti's authentic approach to yoga has been a true gift. The breathing techniques and mantras have helped me find peace in everyday life.",
      name: "Andreas Weber",
      title: "Practicing for 1 year",
    },
    {
      id: 3,
      quote: "The sacred space that Mahashakti creates allows for deep inner work. Her guidance through traditional tantric practices has opened new dimensions in my spiritual development.",
      name: "Lena Schmidt",
      title: "Practicing for 2 years",
    },
    {
      id: 4,
      quote: "Mahashakti has an incredible ability to translate ancient yogic wisdom into accessible practices. Her deep knowledge and genuine devotion to the tradition make every class a profound experience.",
      name: "Thomas Fischer",
      title: "Practicing for 4 years",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

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

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-yoga-tan/30 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-yoga-gold/5 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yoga-gold/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Student Experiences</h2>
        </div>

        <div className={`max-w-4xl mx-auto relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-yoga-gold/10">
                    <svg className="w-12 h-12 text-yoga-gold mb-8 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-yoga-brown/90 font-serif text-xl md:text-2xl italic mb-10 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col">
                      <span className="font-medium text-yoga-brown text-lg">{testimonial.name}</span>
                      <span className="text-yoga-gold text-sm">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-yoga-brown hover:text-yoga-gold transition-colors duration-300 border border-yoga-gold/10 hover:border-yoga-gold/30"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-yoga-brown hover:text-yoga-gold transition-colors duration-300 border border-yoga-gold/10 hover:border-yoga-gold/30"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-yoga-gold w-8' : 'bg-yoga-gold/30'
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
