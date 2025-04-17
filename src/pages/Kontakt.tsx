
import React from 'react';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';
import AnimatedSection from '@/components/contact/AnimatedSection';

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Using only the PageHeader component and removing the duplicate ContactHero */}
        <PageHeader 
          title="Kontakt" 
          subtitle="Hast du Fragen oder Anregungen? Wir freuen uns, von dir zu hören."
        />

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  {/* Contact Information */}
                  <ContactInfo />
                  
                  {/* Contact Form */}
                  <div>
                    <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Schreib uns</h2>
                    <ContactForm />
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Map */}
              <AnimatedSection delay={300}>
                <LocationMap />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
