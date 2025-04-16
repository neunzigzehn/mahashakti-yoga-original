
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
      title: "Bikini Island & Mountain Resort",
      location: "Port de Sóller, Mallorca, Spain",
      date: "May 28 - June 1, 2025",
      description: "Experience the beauty of Mallorca in this exclusive beachside resort. Practice yoga with stunning views of the Mediterranean, enjoy healthy meals, and explore the picturesque surroundings. Perfect for reconnecting with nature and yourself.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
      price: "From €980",
      spots: "Limited spots available",
    },
    {
      id: 2,
      title: "Vigilius Mountain Resort",
      location: "Lana, South Tyrol, Italy",
      date: "June 12-15, 2025",
      description: "A mountain retreat at 1500m altitude in the beautiful South Tyrol region. Deepen your practice surrounded by breathtaking Alpine views while staying at this award-winning eco-resort, accessible only by cable car.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80",
      price: "From €795",
      spots: "8 spots available",
    },
    {
      id: 3,
      title: "Forsthofalm Wood Hotel",
      location: "Leogang, Salzburg, Austria",
      date: "September 4-7, 2025",
      description: "Connect with nature in this unique wooden hotel in the Austrian Alps. The retreat includes 3 nights of accommodation with yoga sessions in a stunning glass-walled studio overlooking the mountains. Hiking and spa treatments available.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1000&q=80",
      price: "From €685",
      spots: "10 spots available",
    },
  ];

  return (
    <section id="retreats" ref={sectionRef} className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-48 h-48 bg-yoga-gold/5 rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-24 left-0 w-64 h-64 bg-yoga-gold/5 rounded-full -translate-x-1/2"></div>
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-yoga-brown">Sacred Journeys</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto mt-10">
            Experience the transformative power of yoga in sacred locations around Europe.
            Our retreats offer a perfect balance of authentic practice, spiritual exploration, and cultural immersion.
          </p>
        </div>

        <div ref={retreatsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                    2025
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
                <a href="#contact" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold w-full block text-center">Book Now</a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-10 bg-yoga-tan/30 backdrop-blur-sm rounded-lg shadow-lg text-center border border-yoga-gold/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-2xl mb-4 text-yoga-brown">200h Yoga Teacher Training</h3>
          <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-6"></div>
          <p className="text-yoga-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Become a certified yoga teacher with Veronika Rössl's comprehensive 200-hour Yoga Alliance certified training in Munich. 
            The next training runs from January 16, 2026 to May 10, 2026. Take advantage of our early booking special!
          </p>
          <a href="#contact" className="yoga-button-premium bg-yoga-gold/90 hover:bg-yoga-gold text-white border-yoga-gold/90 hover:border-yoga-gold">Learn About Teacher Training</a>
        </div>
      </div>
    </section>
  );
};

export default Retreats;
