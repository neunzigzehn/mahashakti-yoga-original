
import { useEffect, useRef, useState } from 'react';

interface YogaClass {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
}

const Classes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const cards = cardsRef.current?.querySelectorAll('.class-card');
          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0');
            }, index * 200);
          });
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

  const classes: YogaClass[] = [
    {
      id: 1,
      title: "Gentle Flow",
      description: "A slow-paced class focusing on fluid movement synchronized with breath. Perfect for beginners and those seeking a gentler approach to practice.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      duration: "60 min",
    },
    {
      id: 2,
      title: "Mindful Vinyasa",
      description: "A dynamic practice linking breath with movement in creative sequences. Builds strength, flexibility and mental focus through mindful transitions.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
      level: "Intermediate",
      duration: "75 min",
    },
    {
      id: 3,
      title: "Restorative Yoga",
      description: "A deeply relaxing practice using props to support the body in comfortable poses held for longer periods, activating the parasympathetic nervous system.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      duration: "90 min",
    },
    {
      id: 4,
      title: "Yin & Meditation",
      description: "A slow practice targeting deep connective tissues through long-held passive poses, followed by guided meditation to cultivate presence and awareness.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      duration: "90 min",
    },
  ];

  return (
    <section id="classes" ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title text-yoga-brown">Yoga Classes</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Discover a variety of classes designed to support your practice wherever you are on your yoga journey.
            Each class offers a unique approach to movement, breath, and mindfulness.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((yogaClass) => (
            <div key={yogaClass.id} className="class-card opacity-0 premium-card group">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span>{yogaClass.level}</span>
                    <span>{yogaClass.duration}</span>
                  </div>
                  <a href="#schedule" className="text-white group-hover:text-yoga-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium flex items-center">
                    View Schedule
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-4 text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">{yogaClass.title}</h3>
                <p className="text-yoga-brown/80 text-sm mb-6 leading-relaxed">
                  {yogaClass.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#schedule" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">View Full Schedule</a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
