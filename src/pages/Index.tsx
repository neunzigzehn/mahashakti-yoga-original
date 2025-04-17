
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Retreats from "@/components/Retreats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Meta />
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
