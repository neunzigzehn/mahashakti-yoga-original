
import { useRef, useEffect } from 'react';

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-fade-in');
          sectionRef.current?.classList.remove('opacity-0');
          
          const retreats = retreatsRef.current?.querySelectorAll('.retreat-card');
          retreats?.forEach((retreat, index) => {
            setTimeout(() => {
              retreat.classList.add('animate-fade-in');
              retreat.classList.remove('opacity-0');
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
    <section id="retreats" ref={sectionRef} className="py-24 bg-white opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-yoga-brown">Upcoming Retreats</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto">
            Experience the transformative power of yoga in beautiful settings around the world.
            Our retreats offer a perfect balance of practice, relaxation, and adventure.
          </p>
        </div>

        <div ref={retreatsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {retreats.map((retreat) => (
            <div key={retreat.id} className="retreat-card opacity-0 flex flex-col bg-yoga-beige overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={retreat.image} 
                  alt={retreat.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
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
                <p className="text-yoga-brown/80 mb-6">
                  {retreat.description}
                </p>
                <div className="flex justify-between text-yoga-brown">
                  <span className="font-medium">{retreat.price}</span>
                  <span>{retreat.spots}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <a href="#contact" className="yoga-button w-full block text-center">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-yoga-tan/30 rounded-lg shadow-sm text-center">
          <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Custom Retreats</h3>
          <p className="text-yoga-brown/80 mb-6 max-w-3xl mx-auto">
            Looking for a personalized retreat experience for your group, company, or special occasion?
            I offer custom-designed retreats tailored to your specific needs and preferences.
          </p>
          <a href="#contact" className="yoga-button">Inquire About Custom Retreats</a>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
