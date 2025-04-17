
import React from 'react';

const FortbildungSection = () => {
  return (
    <div className="mb-20">
      <h2 className="font-serif text-3xl mb-6 text-yoga-brown">Fortbildung 30 h Adjustment & Alignment 2025</h2>
      <p className="text-yoga-brown/80 mb-6">
        05./06.07., 26./27.07., 25./26.10., 06./07.12. – anerkannt als CE bei Yoga Alliance, Regierung Oberbayern
      </p>
      <div className="bg-white shadow-md p-6 rounded-lg mb-8">
        <h3 className="font-serif text-xl mb-4 text-yoga-brown">Modul-Inhalte:</h3>
        <div className="space-y-4 text-yoga-brown/80 mb-6">
          <p>Diese spezialisierte Fortbildung vermittelt tiefgehendes Wissen über sichere und wirksame Hands-On-Adjustments und präzises Alignment in Yoga-Asanas. Du lernst, wie du durch bewusste Berührung und klare verbale Anleitungen deinen Schülern zu einer sicheren und anatomisch korrekten Praxis verhelfen kannst.</p>
          <p>Die Fortbildung ist in vier Wochenendmodule aufgeteilt, die aufeinander aufbauen und ein umfassendes Verständnis für die Kunst des Adjustments vermitteln. Du erhältst praktische Werkzeuge, die du sofort in deinem eigenen Unterricht anwenden kannst.</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-yoga-gold font-medium">Preis: 690 €</p>
          <a href="/kontakt" className="yoga-button">
            Mehr erfahren
          </a>
        </div>
      </div>
    </div>
  );
};

export default FortbildungSection;
