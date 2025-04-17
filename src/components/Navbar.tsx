
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ["home", "about", "classes", "testimonials", "schedule", "retreats", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || "home";
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-yoga-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="z-10 group">
          <h1 className="font-display italic text-2xl md:text-3xl text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">Mahashakti Yoga</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>About</a>
          <a href="#classes" className={`nav-link ${activeSection === 'classes' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Classes</a>
          <a href="#schedule" className={`nav-link ${activeSection === 'schedule' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Schedule</a>
          <a href="#retreats" className={`nav-link ${activeSection === 'retreats' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Retreats</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10 text-yoga-brown hover:text-yoga-gold transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-yoga-cream/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center space-y-8">
            <a href="#home" className={`nav-link text-xl ${activeSection === 'home' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className={`nav-link text-xl ${activeSection === 'about' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#classes" className={`nav-link text-xl ${activeSection === 'classes' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Classes</a>
            <a href="#schedule" className={`nav-link text-xl ${activeSection === 'schedule' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#retreats" className={`nav-link text-xl ${activeSection === 'retreats' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Retreats</a>
            <a href="#contact" className={`nav-link text-xl ${activeSection === 'contact' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
