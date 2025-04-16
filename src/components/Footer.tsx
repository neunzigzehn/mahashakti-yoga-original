
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <footer className="bg-yoga-brown text-white py-16 relative">
      {showImpressum && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-yoga-brown text-xl font-medium">Impressum</h2>
              <button 
                onClick={() => setShowImpressum(false)} 
                className="text-yoga-brown hover:text-yoga-gold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <Impressum />
            </div>
          </div>
        </div>
      )}

      {showDatenschutz && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-yoga-brown text-xl font-medium">Datenschutz</h2>
              <button 
                onClick={() => setShowDatenschutz(false)} 
                className="text-yoga-brown hover:text-yoga-gold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <Datenschutz />
            </div>
          </div>
        </div>
      )}

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-white font-serif text-2xl mb-6">Mahashakti Yoga</h4>
            <p className="text-white/80 mb-6 leading-relaxed">
              Seit 2002 teilt Veronika Rössl ihre Leidenschaft für authentisches Yoga in München. Ihr Mahashakti-Ansatz verbindet traditionelle Praktiken mit moderner Zugänglichkeit für eine transformative Erfahrung.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yoga-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yoga-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-2xl mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-yoga-gold flex-shrink-0" />
                <p className="text-white/80">
                  Mahashakti Yoga Studio<br />
                  Leopoldstraße 35<br />
                  80802 München
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-yoga-gold flex-shrink-0" />
                <a href="tel:+498912345678" className="text-white/80 hover:text-white">+49 (0) 89 123 45678</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yoga-gold flex-shrink-0" />
                <a href="mailto:info@mahashakti-yoga.de" className="text-white/80 hover:text-white">info@mahashakti-yoga.de</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-2xl mb-6">Öffnungszeiten</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/80">Montag - Freitag:</span>
                <span className="text-white">07:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Samstag:</span>
                <span className="text-white">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Sonntag:</span>
                <span className="text-white">10:00 - 16:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Mahashakti Yoga. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6">
            <button 
              onClick={() => setShowImpressum(true)}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              Impressum
            </button>
            <button 
              onClick={() => setShowDatenschutz(true)}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              Datenschutz
            </button>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
