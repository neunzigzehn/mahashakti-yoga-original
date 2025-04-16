
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
      quote: "Nina's classes have transformed not just my yoga practice but my entire approach to mindfulness. Her gentle guidance has helped me connect with my body in a way I never thought possible.",
      name: "Sarah Johnson",
      title: "Practicing for 2 years",
    },
    {
      id: 2,
      quote: "As someone who was intimidated by yoga, Nina created a space where I felt completely comfortable exploring movement at my own pace. Her approach is accessible yet deeply transformative.",
      name: "Michael Chen",
      title: "Practicing for 6 months",
    },
    {
      id: 3,
      quote: "The mindfulness techniques I've learned in Nina's classes have been invaluable for managing stress in my daily life. Her teaching extends far beyond the yoga mat.",
      name: "Emily Rodriguez",
      title: "Practicing for 1 year",
    },
    {
      id: 4,
      quote: "Nina has an incredible ability to make each student feel seen and supported in their practice. Her attention to detail and personalized adjustments have helped me deepen my practice immensely.",
      name: "David Thompson",
      title: "Practicing for 3 years",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

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
          sectionRef.current?.classList.add('animate-fade-in');
          sectionRef.current?.classList.remove('opacity-0');
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
        nextTestimonial();
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-yoga-tan/30 opacity-0 transition-opacity duration-1000"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-yoga-brown">Student Experiences</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                    <svg className="w-10 h-10 text-yoga-gold mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-yoga-brown/90 font-serif text-lg md:text-xl italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col">
                      <span className="font-medium text-yoga-brown">{testimonial.name}</span>
                      <span className="text-yoga-brown/70 text-sm">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-yoga-brown hover:text-yoga-gold transition-colors duration-300"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-yoga-brown hover:text-yoga-gold transition-colors duration-300"
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
