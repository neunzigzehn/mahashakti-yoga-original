
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Retreats from "@/components/Retreats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { initializeStorage } from "@/utils/initializeStorage";

const Index = () => {
  useEffect(() => {
    // Initialize the Supabase storage when the home page loads
    initializeStorage();
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
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
