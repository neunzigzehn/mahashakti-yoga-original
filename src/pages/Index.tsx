
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Retreats from "@/components/Retreats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { initializeStorage } from "@/utils/initializeStorage";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize the Supabase storage when the home page loads
    initializeStorage();
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add a small delay to simulate page transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Testimonials />
      <Schedule />
      <Retreats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
