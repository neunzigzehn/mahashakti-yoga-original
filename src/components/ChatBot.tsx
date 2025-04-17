
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const suggestedQuestions = [
  "What classes do you offer?",
  "Tell me about your retreat program",
  "What's your teaching philosophy?",
  "How do I book a class?",
  "Are you offering private sessions?"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      // Add welcome message when component mounts
      setMessages([
        {
          id: "welcome",
          text: "Hello! I'm Mahashakti's virtual assistant. How can I help you today?",
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
    return date.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
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
      
      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponse: Message = {
          id: `bot-${Date.now()}`,
          text: "Thank you for your message! Our team will get back to you shortly.",
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
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: `Here's information about "${question}"...`,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-6 right-6 z-50 bg-yoga-brown hover:bg-yoga-gold text-white p-2 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Open chat"
      >
        <MessageCircle size={20} />
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 rounded-lg shadow-xl overflow-hidden border border-yoga-beige/30 bg-yoga-beige/5 backdrop-blur-sm animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-yoga-beige/10 bg-yoga-cream/90">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yoga-gold text-white mr-2 text-xs font-semibold">
                MA
              </div>
              <h3 className="font-serif text-yoga-brown">Mahashakti Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-yoga-brown/60 hover:text-yoga-brown transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 bg-yoga-cream/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${
                  message.sender === "bot" ? "pr-6" : "pl-6"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[90%] ${
                    message.sender === "bot"
                      ? "bg-yoga-gold/20 text-yoga-brown"
                      : "bg-yoga-brown/10 text-yoga-brown ml-auto"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs text-yoga-brown/60 mt-1 ${
                    message.sender === "user" ? "text-right" : ""
                  }`}
                >
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggested questions */}
          <div className="p-3 bg-yoga-cream/10 border-t border-yoga-beige/10">
            <p className="text-xs text-yoga-brown/70 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs py-1 px-3 rounded-full bg-yoga-cream/60 text-yoga-brown hover:bg-yoga-gold/20 transition-colors whitespace-nowrap"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <div className="p-3 bg-white border-t border-yoga-beige/10 flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 py-2 px-3 text-sm border border-yoga-beige rounded-l-md focus:outline-none focus:ring-1 focus:ring-yoga-gold/30"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-yoga-gold text-white p-2 rounded-r-md hover:bg-yoga-brown transition-colors"
              disabled={!inputMessage.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
