
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-yoga-cream/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="z-10">
          <h1 className="font-display italic text-2xl md:text-3xl text-yoga-brown">Yoga by Nina</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#classes" className="nav-link">Classes</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#retreats" className="nav-link">Retreats</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10 text-yoga-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-yoga-cream/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center space-y-8">
            <a href="#home" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#classes" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Classes</a>
            <a href="#schedule" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#retreats" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Retreats</a>
            <a href="#contact" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
