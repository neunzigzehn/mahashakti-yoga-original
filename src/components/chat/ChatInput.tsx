
import { Send } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div className="p-3 border-t border-yoga-gold/20 flex items-center">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 py-2 px-3 text-sm font-sans border border-yoga-beige rounded-l-md focus:outline-none focus:ring-1 focus:ring-yoga-gold/30 bg-white"
        placeholder="Nachricht eingeben..."
      />
      <button
        onClick={handleSend}
        className="bg-yoga-gold text-white p-2 rounded-r-md hover:bg-yoga-brown transition-colors"
        disabled={!inputMessage.trim()}
        aria-label="Nachricht senden"
      >
        <Send size={16} />
      </button>
    </div>
  );
};

export default ChatInput;
