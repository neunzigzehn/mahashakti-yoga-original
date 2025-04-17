
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Separator } from "./ui/separator";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const suggestedQuestions = [
  "Welche Kurse bieten Sie an?",
  "Erzählen Sie mir über Ihr Retreat-Programm",
  "Was ist Ihre Yoga-Philosophie?",
  "Wie buche ich einen Kurs?",
  "Bieten Sie Privatstunden an?"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      // Add welcome message when component mounts
      setMessages([
        {
          id: "welcome",
          text: "Hallo! Ich bin der virtuelle Assistent von Mahashakti. Wie kann ich Ihnen heute helfen?",
          sender: "bot",
          timestamp: new Date(),
        }
      ]);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const formatTime = (date: Date) => {
    return date.toLocaleString('de-DE', { 
      hour: 'numeric', 
      minute: '2-digit'
    });
  };

  const handleSend = () => {
    if (inputMessage.trim()) {
      // Add user message
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputMessage("");
      // Hide suggestions after sending a message
      setShowSuggestions(false);
      
      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponse: Message = {
          id: `bot-${Date.now()}`,
          text: "Vielen Dank für Ihre Nachricht! Unser Team wird sich in Kürze bei Ihnen melden.",
          sender: "bot",
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    // Add user message for the suggested question
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: question,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Hide suggestions after selecting one
    setShowSuggestions(false);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      let responseText = "";
      
      switch (question) {
        case "Welche Kurse bieten Sie an?":
          responseText = "Wir bieten verschiedene Yogastile an, darunter Hatha Flow, Hatha-Vinyasa, Yin Yoga und Ashtanga. Alle Kurse werden von erfahrenen Lehrern geleitet und sind für verschiedene Niveaus geeignet.";
          break;
        case "Erzählen Sie mir über Ihr Retreat-Programm":
          responseText = "Unsere Retreats bieten Ihnen die Möglichkeit, tiefer in Ihre Yogapraxis einzutauchen. Wir organisieren Retreats in verschiedenen wunderschönen Orten, sowohl in Deutschland als auch international.";
          break;
        case "Was ist Ihre Yoga-Philosophie?":
          responseText = "Bei Mahashakti verbinden wir traditionelles Yoga mit modernen Erkenntnissen. Wir glauben an einen ganzheitlichen Ansatz, der Körper, Geist und Seele in Einklang bringt.";
          break;
        case "Wie buche ich einen Kurs?":
          responseText = "Sie können Kurse direkt über unsere Website buchen oder uns telefonisch kontaktieren. Für regelmäßige Teilnehmer bieten wir auch Monatskarten und Zehnerkarten an.";
          break;
        case "Bieten Sie Privatstunden an?":
          responseText = "Ja, wir bieten Privatstunden für individuelle Bedürfnisse an. Diese können in unserem Studio oder bei Ihnen zu Hause stattfinden. Kontaktieren Sie uns für weitere Details.";
          break;
        default:
          responseText = "Vielen Dank für Ihre Frage. Bitte kontaktieren Sie uns direkt für weitere Informationen.";
      }
      
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Show suggestions again after bot response with a small delay
      setTimeout(() => {
        setShowSuggestions(true);
      }, 500);
    }, 1000);
  };

  return (
    <>
      {/* Chat button - increased size */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-6 right-6 z-50 bg-yoga-brown hover:bg-yoga-gold text-white p-3 rounded-full shadow-lg transition-colors duration-300 w-14 h-14 flex items-center justify-center"
        aria-label="Chat öffnen"
      >
        <MessageCircle size={20} />
      </button>
      
      {/* Chat window - improved width */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[330px] rounded-lg shadow-xl overflow-hidden bg-yoga-cream animate-scale-in font-serif">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-yoga-gold/20 bg-yoga-cream">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yoga-gold text-white mr-2 text-xs font-semibold">
                MA
              </div>
              <h3 className="font-serif text-yoga-brown">Mahashakti Assistent</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-yoga-brown/60 hover:text-yoga-brown transition-colors"
              aria-label="Chat schließen"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-3 bg-yoga-cream/95">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${
                  message.sender === "bot" ? "pr-6" : "pl-6"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[90%] font-sans text-sm ${
                    message.sender === "bot"
                      ? "bg-yoga-gold/10 text-yoga-brown"
                      : "bg-yoga-brown/10 text-yoga-brown ml-auto"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs text-yoga-brown/60 mt-1 font-sans ${
                    message.sender === "user" ? "text-right" : ""
                  }`}
                >
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggested questions with improved visual separation */}
          {showSuggestions && (
            <div className="px-3 py-2 bg-yoga-cream border-t border-yoga-gold/30">
              <p className="text-xs font-serif text-yoga-brown/80 mb-2">Vorgeschlagene Fragen:</p>
              <Separator className="mb-2 bg-yoga-gold/20" />
              <div className="flex flex-col gap-1.5">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs font-sans py-1.5 px-3 rounded-full bg-yoga-beige/80 text-yoga-brown hover:bg-yoga-gold/20 transition-colors text-left overflow-hidden text-ellipsis border border-yoga-gold/10"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input */}
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
        </div>
      )}
    </>
  );
};

export default ChatBot;
