
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadSection = () => {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl mb-4 text-yoga-brown">Private Yoga-Reisen</h2>
        <p className="text-yoga-brown/80 mb-8">
          Maßgeschneiderte Retreats für Gruppen – Plane dein eigenes transformatives Erlebnis für Freunde, Familie oder dein Unternehmen.
        </p>
        <Link to="/kontakt" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
          Unverbindlich anfragen
        </Link>
      </div>
      
      <div className="p-8 bg-white shadow-md rounded-lg text-center max-w-2xl mx-auto border border-yoga-gold/10">
        <h3 className="font-serif text-xl mb-4 text-yoga-brown">Alle Retreats, Aus- & Fortbildungen 2025 / 2026</h3>
        <a 
          href="/ALLE_TERMINE_2025_2026.pdf"
          className="yoga-button inline-flex items-center" 
          download
        >
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;
