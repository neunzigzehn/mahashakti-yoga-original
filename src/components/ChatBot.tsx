
import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Simple predefined answers
const predefinedAnswers: Record<string, string> = {
  "hallo": "Hallo! Willkommen bei Mahashakti Yoga. Wie kann ich dir heute helfen?",
  "hi": "Hallo! Willkommen bei Mahashakti Yoga. Wie kann ich dir heute helfen?",
  "who is veronika": "Veronika ist eine der erfahrensten Yoga-Lehrerinnen in Deutschland mit über 20 Jahren Erfahrung in verschiedenen Yoga-Stilen.",
  "wer ist veronika": "Veronika ist eine der erfahrensten Yoga-Lehrerinnen in Deutschland mit über 20 Jahren Erfahrung in verschiedenen Yoga-Stilen.",
  "kurse": "Wir bieten verschiedene Yoga-Kurse für alle Niveaus an, von Anfängern bis zu Fortgeschrittenen. Schau dir unseren Stundenplan an oder kontaktiere uns für mehr Details.",
  "preise": "Unsere Einzelstunde kostet 20€, eine 10er Karte 180€ und das Monatsabo 95€. Alle Details findest du auf unserer Webseite im Bereich 'Stundenplan'.",
  "öffnungszeiten": "Unsere Öffnungszeiten richten sich nach dem aktuellen Kursplan. Du findest alle Details im Stundenplan auf unserer Webseite.",
  "adresse": "Du findest uns in München. Die genaue Adresse und Anfahrtsbeschreibung findest du auf unserer Kontaktseite.",
  "retreats": "Wir bieten regelmäßig Yoga-Retreats an verschiedenen Orten an. Aktuelle Retreat-Termine und -Orte findest du auf unserer Retreat-Seite.",
  "ausbildung": "Wir bieten Yoga-Ausbildungen für angehende Lehrer an. Details zu unseren Ausbildungsprogrammen findest du auf unserer Ausbildungsseite.",
  "danke": "Gerne! Wenn du weitere Fragen hast, stehe ich dir jederzeit zur Verfügung.",
  "tschüss": "Auf Wiedersehen! Namaste. 🙏",
  "namaste": "Namaste! 🙏 Wie kann ich dir heute helfen?",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const conversationRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          text: "Willkommen bei Mahashakti Yoga! Wie kann ich dir helfen?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [messages.length]);

  // Scroll to bottom of conversation when messages change
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  const findAnswer = (question: string): string => {
    // Convert to lowercase for case-insensitive matching
    const lowerQuestion = question.toLowerCase().trim();
    
    // Check exact matches first
    if (predefinedAnswers[lowerQuestion]) {
      return predefinedAnswers[lowerQuestion];
    }
    
    // Check for keywords in the question
    for (const [key, answer] of Object.entries(predefinedAnswers)) {
      if (lowerQuestion.includes(key)) {
        return answer;
      }
    }
    
    // Default answer if no match is found
    return "Entschuldigung, ich verstehe deine Frage nicht. Kannst du es anders formulieren oder frag mich nach unseren Kursen, Preisen, Öffnungszeiten oder über Veronika.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking and responding
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: findAnswer(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window animate-scale-in">
          <div className="chatbot-header rounded-t-lg">
            <h3 className="font-serif text-lg">Mahashakti Yoga Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-yoga-gold transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-conversation" ref={conversationRef}>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`chatbot-message ${
                  message.sender === "user" 
                    ? "chatbot-message-user" 
                    : "chatbot-message-bot"
                }`}
              >
                {message.text}
              </div>
            ))}
            
            {isTyping && (
              <div className="chatbot-typing">
                <span className="chatbot-typing-dot" style={{ animationDelay: "0ms" }}></span>
                <span className="chatbot-typing-dot" style={{ animationDelay: "300ms" }}></span>
                <span className="chatbot-typing-dot" style={{ animationDelay: "600ms" }}></span>
              </div>
            )}
          </div>
          
          <div className="chatbot-input-area">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Schreib deine Frage hier..."
              className="chatbot-input"
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              className="chatbot-send-button"
              disabled={isTyping || inputMessage.trim() === ""}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : null}
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="chatbot-button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
