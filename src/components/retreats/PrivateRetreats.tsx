
import { Link } from 'react-router-dom';

interface PrivateRetreatsProps {
  isVisible: boolean;
}

const PrivateRetreats = ({ isVisible }: PrivateRetreatsProps) => {
  return (
    <div className={`mt-16 p-10 bg-yoga-tan/30 backdrop-blur-sm rounded-lg shadow-lg text-center border border-yoga-gold/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Private Yoga-Reisen</h3>
      <div className="w-16 h-0.5 bg-yoga-gold mx-auto mb-6"></div>
      <p className="text-yoga-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
        Suchst du nach einer personalisierten spirituellen Reise für deine Gruppe, Familie oder zu einem besonderen Anlass?
        Mahashakti bietet maßgeschneiderte Retreats, die auf deine spezifischen Intentionen und spirituellen Ziele abgestimmt sind.
      </p>
      <Link to="/retreats" className="yoga-button-premium bg-yoga-gold/90 hover:bg-yoga-gold text-white border-yoga-gold/90 hover:border-yoga-gold">Anfrage für private Reisen</Link>
    </div>
  );
};

export default PrivateRetreats;
