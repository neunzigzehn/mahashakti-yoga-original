
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
      
      // Update active section based on scroll position if on the home page
      if (window.location.pathname === '/') {
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-yoga-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-10 group">
          <h1 className="font-display italic text-2xl md:text-3xl text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">Mahashakti Yoga</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-5">
              <NavigationMenuItem>
                <Link to="/" className={`nav-link ${activeSection === 'home' || window.location.pathname === '/' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Home</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/uber-uns" className={`nav-link ${window.location.pathname === '/uber-uns' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Über Uns</Link>
              </NavigationMenuItem>
              
              {/* Angebot Dropdown - Improved styling */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`nav-link ${
                  ['/angebot', '/retreats', '/ausbildungen', '/stundenplan', '/workshops'].some(path => window.location.pathname === path) 
                  ? 'text-yoga-gold' 
                  : 'text-yoga-brown'
                } bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent p-0`}>
                  Angebot <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-yoga-cream/95 backdrop-blur-md p-3 rounded-md shadow-md mt-2 border border-yoga-gold/10">
                  <ul className="grid w-[250px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/angebot" className="block w-full px-4 py-2.5 rounded-md text-yoga-brown hover:text-yoga-gold hover:bg-yoga-beige/50 transition-colors">
                          Kursangebot
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/stundenplan" className="block w-full px-4 py-2.5 rounded-md text-yoga-brown hover:text-yoga-gold hover:bg-yoga-beige/50 transition-colors">
                          Stundenplan
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/retreats" className="block w-full px-4 py-2.5 rounded-md text-yoga-brown hover:text-yoga-gold hover:bg-yoga-beige/50 transition-colors">
                          Retreats
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/ausbildungen" className="block w-full px-4 py-2.5 rounded-md text-yoga-brown hover:text-yoga-gold hover:bg-yoga-beige/50 transition-colors">
                          Ausbildungen
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/workshops" className="block w-full px-4 py-2.5 rounded-md text-yoga-brown hover:text-yoga-gold hover:bg-yoga-beige/50 transition-colors">
                          Workshops & Events
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/kontakt" className={`nav-link ${window.location.pathname === '/kontakt' ? 'text-yoga-gold' : 'text-yoga-brown'}`}>Kontakt</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
          <nav className="flex flex-col items-center space-y-6">
            <Link to="/" className={`nav-link text-xl ${activeSection === 'home' || window.location.pathname === '/' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/uber-uns" className={`nav-link text-xl ${window.location.pathname === '/uber-uns' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Über Uns</Link>
            
            {/* Mobile Angebot submenu */}
            <div className="flex flex-col items-center space-y-2">
              <span className="nav-link text-xl text-yoga-gold">Angebot</span>
              <div className="flex flex-col items-center space-y-4 mt-2">
                <Link to="/angebot" className={`nav-link text-lg ${window.location.pathname === '/angebot' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Kursangebot</Link>
                <Link to="/stundenplan" className={`nav-link text-lg ${window.location.pathname === '/stundenplan' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Stundenplan</Link>
                <Link to="/retreats" className={`nav-link text-lg ${window.location.pathname === '/retreats' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Retreats</Link>
                <Link to="/ausbildungen" className={`nav-link text-lg ${window.location.pathname === '/ausbildungen' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Ausbildungen</Link>
                <Link to="/workshops" className={`nav-link text-lg ${window.location.pathname === '/workshops' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Workshops & Events</Link>
              </div>
            </div>
            
            <Link to="/kontakt" className={`nav-link text-xl ${window.location.pathname === '/kontakt' ? 'text-yoga-gold' : 'text-yoga-brown'}`} onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
