
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Retreats from "@/components/Retreats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Chat } from "@/components/chat/Chat";

const Index = () => {
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
      <Chat />
    </div>
  );
};

export default Index;
