
import React from 'react';
import { Card } from "@/components/ui/card";

const WochenendModuleSection = () => {
  const modules = [
    {
      title: "I Asanas",
      date: "16.–18.01.2026",
      description: "Grundlagen der Asana-Praxis, Ausrichtungsprinzipien und Modifikationen.",
      price: "450 €"
    },
    {
      title: "II Philosophie",
      date: "20.–22.02.2026",
      description: "Yogische Philosophie, Sutras und Integration in den modernen Lebensstil.",
      price: "390 €"
    },
    {
      title: "III Anatomie",
      date: "20.–22.03.2026",
      description: "Funktionelle Anatomie, Biomechanik und deren Anwendung in der Yoga-Praxis.",
      price: "450 €"
    },
    {
      title: "IV Marketing",
      date: "17.–19.04.2026",
      description: "Business-Strategien, Markenaufbau und ethisches Marketing für Yoga-Lehrer.",
      price: "390 €"
    }
  ];

  const benefits = [
    "Professionelle Entwicklung unter Anleitung erfahrener Lehrer",
    "Internationale Anerkennung und Zertifizierung",
    "Vertiefung des eigenen Verständnisses und der Praxis",
    "Networking mit Gleichgesinnten und Aufbau einer Gemeinschaft",
    "Praktische Werkzeuge zur unmittelbaren Anwendung"
  ];

  return (
    <div className="mb-20">
      <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Wochenend-Module 2026</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {modules.map((module, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="font-serif text-xl mb-2 text-yoga-brown">{module.title}</h3>
            <p className="text-yoga-brown/70 text-sm mb-4">{module.date}</p>
            <p className="text-yoga-brown/80 mb-4">
              {module.description}
            </p>
            <p className="text-yoga-gold font-medium">{module.price}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-yoga-beige/30 p-8 rounded-lg mb-10">
        <h3 className="font-serif text-xl mb-6 text-yoga-brown">Gründe für die Teilnahme:</h3>
        <ul className="space-y-3 text-yoga-brown/80 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yoga-gold mr-2">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WochenendModuleSection;
