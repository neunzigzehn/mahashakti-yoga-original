
import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-yoga-gold/20 bg-yoga-cream">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yoga-gold text-white mr-2 text-xs font-semibold">
          MA
        </div>
        <h3 className="font-serif text-yoga-brown">Mahashakti Assistent</h3>
      </div>
      <button 
        onClick={onClose} 
        className="text-yoga-brown/60 hover:text-yoga-brown transition-colors"
        aria-label="Chat schließen"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default ChatHeader;
