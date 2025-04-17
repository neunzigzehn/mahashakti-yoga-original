
import { Loader2 } from "lucide-react";

const LoadingFallback = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-yoga-beige">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 text-yoga-gold animate-spin" />
        <h2 className="font-display italic text-2xl text-yoga-brown">
          Mahashakti Yoga
        </h2>
        <p className="text-yoga-brown/80 text-sm">
          Seite wird geladen...
        </p>
      </div>
    </div>
  );
};

export default LoadingFallback;
