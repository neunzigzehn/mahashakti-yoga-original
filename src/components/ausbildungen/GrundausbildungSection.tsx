
import React from 'react';

const GrundausbildungSection = () => {
  return (
    <div className="mb-20">
      <div className="bg-yoga-beige/30 p-8 rounded-lg mb-8">
        <h2 className="font-serif text-3xl mb-4 text-yoga-brown">200 h Grundausbildung 2026</h2>
        <p className="text-yoga-brown/80 mb-6">
          16.01.–10.05.2026, Alliance-zertifiziert
        </p>
        <p className="text-yoga-gold font-medium mb-6">
          Osterspecial 2.950 € bis 30.04.2025
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-serif text-xl mb-3 text-yoga-brown">Inhalte:</h3>
            <ul className="space-y-2 text-yoga-brown/80">
              <li>• Asana-Praxis und -Lehrmethodik</li>
              <li>• Yogaphilosophie</li>
              <li>• Funktionelle Anatomie</li>
              <li>• Pranayama und Meditation</li>
              <li>• Unterrichtsplanung</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-3 text-yoga-brown">Vorteile:</h3>
            <ul className="space-y-2 text-yoga-brown/80">
              <li>• Internationale Anerkennung</li>
              <li>• Kleine Gruppen (max. 16 Teilnehmer)</li>
              <li>• Persönliches Mentoring</li>
              <li>• Umfangreiche Lehrmaterialien</li>
            </ul>
          </div>
        </div>
        <a href="/kontakt" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold">
          Jetzt anmelden
        </a>
      </div>
    </div>
  );
};

export default GrundausbildungSection;
