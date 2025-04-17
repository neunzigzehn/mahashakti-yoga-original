
import { useEffect, useRef, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import SuggestedQuestions from '@/components/chat/SuggestedQuestions';
import { useIsMobile } from '@/hooks/use-mobile';
import ContactForm from '@/components/ContactForm';

const Kontakt = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

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
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader 
          title="Kontakt" 
          subtitle="Hast du Fragen oder Anregungen? Wir freuen uns, von dir zu hören."
        />

        {/* Hero banner */}
        <section className="pt-24 pb-16 bg-yoga-beige relative">
          <div className="container-custom">
            <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">Kontakt</h1>
            <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-12"></div>
          </div>
        </section>

        {/* Main content */}
        <section ref={sectionRef} className="py-16 bg-white">
          <div className="container-custom">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Contact Information */}
                <div>
                  <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Kontaktinformationen</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-yoga-gold shrink-0" />
                      <div>
                        <h3 className="font-medium text-yoga-brown mb-1">Adresse</h3>
                        <p className="text-yoga-brown/80">Mahashakti Yoga<br />Rosenstraße 12<br />80331 München</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-3 text-yoga-gold shrink-0" />
                      <div>
                        <h3 className="font-medium text-yoga-brown mb-1">E-Mail</h3>
                        <p className="text-yoga-brown/80">info@mahashakti-yoga.de</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-3 text-yoga-gold shrink-0" />
                      <div>
                        <h3 className="font-medium text-yoga-brown mb-1">Telefon</h3>
                        <p className="text-yoga-brown/80">+49 89 1234 5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-3 text-yoga-gold shrink-0" />
                      <div>
                        <h3 className="font-medium text-yoga-brown mb-1">Öffnungszeiten</h3>
                        <p className="text-yoga-brown/80">Studio-Hours:<br />Mo–Fr 07–21 Uhr<br />Sa–So 08–18 Uhr</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-yoga-brown mb-4">Folge uns</h3>
                    <div className="flex space-x-4">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-yoga-beige/70 flex items-center justify-center text-yoga-brown hover:bg-yoga-gold hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-yoga-beige/70 flex items-center justify-center text-yoga-brown hover:bg-yoga-gold hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-yoga-beige/70 flex items-center justify-center text-yoga-brown hover:bg-yoga-gold hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form - Now using the shared ContactForm component */}
                <div>
                  <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Schreib uns</h2>
                  <ContactForm />
                </div>
              </div>
              
              {/* Map */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Besuche uns</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5142520077986!2d11.57564587659239!3d48.13484607128872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758a1a8be2ad%3A0xae873c22f11cbc27!2sRosenstra%C3%9Fe%2012%2C%2080331%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1743368976543!5m2!1sen!2sus"
                    className="w-full h-[400px] border-0 rounded-lg shadow-sm"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
