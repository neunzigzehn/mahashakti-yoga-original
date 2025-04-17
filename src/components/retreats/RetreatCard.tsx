
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface RetreatCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  description: string;
  price: string;
  availableSpots: string;
  objectPosition?: string;
}

const RetreatCard = ({
  image,
  title,
  location,
  date,
  description,
  price,
  availableSpots,
  objectPosition = "center center"
}: RetreatCardProps) => {
  return (
    <Card className="overflow-hidden bg-white shadow-lg border-yoga-gold/10 hover:shadow-xl transition-shadow duration-300">
      <div className="h-56 bg-yoga-beige/50 relative overflow-hidden">
        <img 
          src={image}
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          style={{ objectPosition }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/70 to-transparent"></div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-xl text-yoga-brown">{title}</CardTitle>
        <CardDescription className="text-yoga-brown/70 flex flex-col gap-2 mt-2">
          <span className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-yoga-gold" />
            {location}
          </span>
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-yoga-gold" />
            {date}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-yoga-brown/80">
        <p className="mb-4">
          {description}
        </p>
        <div className="text-yoga-gold font-medium">{price}</div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <span className="text-yoga-brown/60 text-sm">{availableSpots}</span>
        <a href="#" className="text-yoga-brown hover:text-yoga-gold flex items-center transition-colors">
          Mehr Infos <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default RetreatCard;
