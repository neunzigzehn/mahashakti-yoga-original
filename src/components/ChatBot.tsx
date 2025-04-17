
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Messages from "./chat/Messages";
import SuggestedQuestions from "./chat/SuggestedQuestions";
import ChatInput from "./chat/ChatInput";
import ChatHeader from "./chat/ChatHeader";
import { Message } from "./chat/types";
import "./chat/styles.css";

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
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (messages.length === 0) {
      // Add welcome message when component mounts (in German)
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

  const handleSend = (message: string) => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: message,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Hide suggestions after sending a message
    setShowSuggestions(false);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: "Vielen Dank für Ihre Nachricht! Unser Team wird sich in Kürze bei Ihnen melden.",
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Show suggestions again after bot response with a small delay
      setTimeout(() => {
        setShowSuggestions(true);
      }, 500);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    if (!question.trim()) return;
    
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
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
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
    }, 1500);
  };

  return (
    <>
      {/* Chat button with increased size */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-6 right-6 z-50 bg-yoga-brown hover:bg-yoga-gold text-white p-4 rounded-full shadow-lg transition-colors duration-300 w-16 h-16 flex items-center justify-center"
        aria-label="Chat öffnen"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat window with improved width */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] rounded-lg shadow-xl overflow-hidden bg-white animate-scale-in font-serif">
          <ChatHeader onClose={() => setIsOpen(false)} />
          
          {/* Messages component with consistent height */}
          <Messages messages={messages} />
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="px-4 py-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yoga-gold/70 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yoga-gold/70 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-yoga-gold/70 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          )}
          
          {/* Suggested questions with improved visual separation */}
          {showSuggestions && messages.length > 0 && (
            <SuggestedQuestions 
              questions={suggestedQuestions} 
              onSelectQuestion={handleSuggestedQuestion} 
            />
          )}
          
          <ChatInput onSendMessage={handleSend} />
        </div>
      )}
    </>
  );
};

export default ChatBot;
