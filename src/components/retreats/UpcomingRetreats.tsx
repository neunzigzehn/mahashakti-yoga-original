
import { MapPin, Calendar, Download } from 'lucide-react';

interface UpcomingRetreatProps {
  title: string;
  location: string;
  date: string;
  note?: string;
}

const UpcomingRetreat = ({ title, location, date, note }: UpcomingRetreatProps) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow border border-yoga-gold/10 hover:border-yoga-gold/30 group">
      <h3 className="font-serif text-lg mb-3 text-yoga-brown group-hover:text-yoga-gold transition-colors duration-300">{title}</h3>
      <div className="flex items-center mb-2">
        <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
        <span className="text-yoga-brown/80">{location}</span>
      </div>
      <div className="flex items-center">
        <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
        <span className="text-yoga-brown/80">{date}</span>
      </div>
      {note && (
        <div className="mt-2 text-yoga-brown/70 text-sm italic">
          {note}
        </div>
      )}
    </div>
  );
};

const UpcomingRetreats = () => {
  const retreats = [
    {
      id: 1,
      title: "POSTHOTEL ACHENKIRCH",
      location: "Tirol, Österreich",
      date: "11./12.09. – 14.09.25",
      note: "Beginne Donnerstag oder Freitag"
    },
    {
      id: 2,
      title: "POSTHOTEL ACHENKIRCH",
      location: "Tirol, Österreich",
      date: "13./14.11. – 16.11.25",
      note: "Beginne Donnerstag oder Freitag"
    },
    {
      id: 3,
      title: "BIKINI ISLAND & MOUNTAIN HOTEL",
      location: "Es Trenc, Mallorca",
      date: "05.10.-09.10.25 (4 Nächte)"
    },
    {
      id: 4,
      title: "HOTEL SCHWARZSCHMIED",
      location: "Lana, Südtirol",
      date: "27.11. - 30.11.25"
    }
  ];

  return (
    <div className="bg-yoga-beige/30 p-8 rounded-lg mb-16">
      <h2 className="font-serif text-2xl mb-8 text-yoga-brown text-center">Weitere Retreats 2025 / 2026</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {retreats.map(retreat => (
          <UpcomingRetreat
            key={retreat.id}
            title={retreat.title}
            location={retreat.location}
            date={retreat.date}
            note={retreat.note}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a 
          href="/ALLE_TERMINE_2025_2026.pdf" 
          download 
          className="yoga-button-premium inline-flex items-center bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold"
        >
          <Download className="mr-2 h-5 w-5" />
          Alle Termine als PDF herunterladen
        </a>
      </div>
    </div>
  );
};

export default UpcomingRetreats;
