
import { useRef, useEffect, useState } from 'react';

interface Retreat {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  price: string;
  spots: string;
}

const Retreats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const retreatsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const retreats = retreatsRef.current?.querySelectorAll('.retreat-card');
          retreats?.forEach((retreat, index) => {
            setTimeout(() => {
              retreat.classList.add('animate-fade-in');
              retreat.classList.remove('opacity-0');
            }, index * 300);
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

  const retreats: Retreat[] = [
    {
      id: 1,
      title: "Bali Serenity Retreat",
      location: "Ubud, Bali",
      date: "June 15-22, 2025",
      description: "Immerse yourself in the lush landscapes of Bali for a week of yoga, meditation, and cultural experiences. This retreat balances daily practice with plenty of time to explore this magical island.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
      price: "From $2,200",
      spots: "12 spots available",
    },
    {
      id: 2,
      title: "Mountain Mindfulness",
      location: "Blue Ridge Mountains, USA",
      date: "September 8-13, 2025",
      description: "Connect with nature in the stunning Blue Ridge Mountains. This retreat focuses on mindful movement and forest bathing, with cozy evenings by the fireplace and nourishing farm-to-table meals.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80",
      price: "From $1,800",
      spots: "8 spots available",
    },
  ];

  return (
    <section id="retreats" ref={sectionRef} className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-48 h-48 bg-yoga-gold/5 rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-24 left-0 w-64 h-64 bg-yoga-gold/5 rounded-full -translate-x-1/2"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Upcoming Retreats</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Experience the transformative power of yoga in beautiful settings around the world.
            Our retreats offer a perfect balance of practice, relaxation, and adventure.
          </p>
        </div>

        <div ref={retreatsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {retreats.map((retreat) => (
            <div key={retreat.id} className="retreat-card opacity-0 flex flex-col premium-card group">
              <div className="relative h-64 image-zoom">
                <img 
                  src={retreat.image} 
                  alt={retreat.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/80 to-transparent"></div>
                <div className="absolute top-0 left-0 m-4">
                  <div className="py-1 px-3 bg-yoga-gold text-white text-xs uppercase tracking-wider rounded-sm shadow-md">
                    Featured
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white">{retreat.title}</h3>
                  <div className="flex text-white/90 space-x-6 mt-2">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {retreat.location}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {retreat.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-yoga-brown/80 mb-6 leading-relaxed">
                  {retreat.description}
                </p>
                <div className="flex justify-between text-yoga-brown">
                  <span className="font-medium text-yoga-gold">{retreat.price}</span>
                  <span className="text-yoga-brown/70">{retreat.spots}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <a href="#contact" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold w-full block text-center">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-10 bg-yoga-tan/30 backdrop-blur-sm rounded-lg shadow-lg text-center border border-yoga-gold/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Custom Retreats</h3>
          <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-6"></div>
          <p className="text-yoga-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Looking for a personalized retreat experience for your group, company, or special occasion?
            I offer custom-designed retreats tailored to your specific needs and preferences.
          </p>
          <a href="#contact" className="yoga-button-premium bg-yoga-gold/90 hover:bg-yoga-gold text-white border-yoga-gold/90 hover:border-yoga-gold">Inquire About Custom Retreats</a>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
