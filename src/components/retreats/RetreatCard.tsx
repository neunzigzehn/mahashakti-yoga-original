
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Euro } from 'lucide-react';

interface RetreatCardProps {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  price: string;
  spots: string;
  objectPosition?: string;
}

const RetreatCard = ({ 
  id, 
  title, 
  location, 
  date, 
  description, 
  image, 
  price, 
  spots, 
  objectPosition = "center center" 
}: RetreatCardProps) => {
  return (
    <div className="retreat-card opacity-0 flex flex-col premium-card group h-full transform hover:translate-y-[-5px] transition-all duration-300">
      <div className="relative h-64 image-zoom overflow-hidden rounded-t-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ objectPosition: objectPosition || 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/80 to-transparent"></div>
        <div className="absolute top-0 left-0 m-4">
          <div className="py-1 px-3 bg-yoga-gold text-white text-xs uppercase tracking-wider rounded-sm shadow-md">
            Empfohlen
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl text-white group-hover:text-yoga-gold/90 transition-colors duration-300">{title}</h3>
          <div className="flex flex-wrap text-white/90 gap-4 mt-2">
            <span className="flex items-center text-sm">
              <MapPin className="h-5 w-5 mr-1.5 flex-shrink-0 text-yoga-gold/80" />
              <span className="whitespace-normal">{location}</span>
            </span>
            <span className="flex items-center text-sm">
              <Calendar className="h-5 w-5 mr-1.5 flex-shrink-0 text-yoga-gold/80" />
              <span>{date}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-yoga-brown/80 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between text-yoga-brown mt-auto border-t border-yoga-gold/10 pt-4">
          <span className="flex items-center font-medium text-yoga-gold">
            <Euro className="h-4 w-4 mr-1.5" />
            {price}
          </span>
          <span className="flex items-center text-yoga-brown/70">
            <Users className="h-4 w-4 mr-1.5" />
            {spots}
          </span>
        </div>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <Link to="/retreats" className="yoga-button-premium bg-yoga-brown text-white hover:bg-yoga-gold border-yoga-brown hover:border-yoga-gold w-full block text-center">Mehr erfahren</Link>
      </div>
    </div>
  );
};

export default RetreatCard;
