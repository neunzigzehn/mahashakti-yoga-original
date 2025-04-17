
import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface SuggestedQuestion {
  id: string;
  text: string;
}

// Predefined answers
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
  "wie lange dauert": "Unsere Kurse dauern zwischen 45 und 90 Minuten, je nach Art des Kurses. Die genauen Zeiten findest du in unserem Stundenplan.",
  "wo finde ich": "Die meisten Informationen findest du auf unserer Website. Für Kurse schaue im Stundenplan, für Preise im Angebot und für allgemeine Informationen auf der Über Uns Seite.",
  "kann ich": "Grundsätzlich kannst du bei uns als Anfänger oder Fortgeschrittener teilnehmen. Bei spezifischen gesundheitlichen Fragen empfehlen wir, vorab mit uns Kontakt aufzunehmen.",
  "was soll ich mitbringen": "Bringe bequeme Kleidung, eine Yogamatte (falls du eine hast), ein kleines Handtuch und etwas zu trinken mit. Matten kannst du auch bei uns ausleihen.",
  "welcher kurs": "Für Anfänger empfehlen wir unsere 'Sanfte Abendpraxis' oder 'Anfänger Workshop'. Fortgeschrittene können an allen Kursen teilnehmen, besonders geeignet sind 'Vinyasa Flow' und 'Ashtanga'.",
};

// Suggested questions
const suggestedQuestions: SuggestedQuestion[] = [
  { id: "q1", text: "Wer ist Veronika?" },
  { id: "q2", text: "Welche Kurse bietet ihr an?" },
  { id: "q3", text: "Was kosten die Kurse?" },
  { id: "q4", text: "Wie sind die Öffnungszeiten?" },
  { id: "q5", text: "Wo finde ich euch?" },
  { id: "q6", text: "Bietet ihr Retreats an?" },
  { id: "q7", text: "Habt ihr Yoga-Ausbildungen?" },
  { id: "q8", text: "Was soll ich mitbringen?" },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const handleSendMessage = (text: string = inputMessage) => {
    if (text.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: text,
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
        text: findAnswer(text),
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const toggleChatExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className={`chatbot-window animate-scale-in ${isExpanded ? "md:w-[450px] w-full h-[80vh] md:h-[600px]" : ""}`}>
          <div className="chatbot-header rounded-t-lg">
            <h3 className="font-serif text-lg">Mahashakti Yoga Assistant</h3>
            <div className="flex items-center">
              <button 
                onClick={toggleChatExpansion}
                className="text-white hover:text-yoga-gold transition-colors mr-3"
                aria-label={isExpanded ? "Verkleinern" : "Vergrößern"}
              >
                {isExpanded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 14 10 14 10 20"></polyline>
                    <polyline points="20 10 14 10 14 4"></polyline>
                    <line x1="14" y1="10" x2="21" y2="3"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                )}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yoga-gold transition-colors"
                aria-label="Chat schließen"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {messages.length === 1 && (
            <div className="p-4 bg-yoga-beige/20 border-b border-yoga-gold/10">
              <h4 className="font-medium text-yoga-brown mb-2">Wie kann ich dir helfen?</h4>
              <div className="grid grid-cols-1 gap-2 mt-3">
                {suggestedQuestions.slice(0, 4).map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionClick(question.text)}
                    className="text-left px-3 py-2 bg-white rounded-md border border-yoga-gold/20 text-yoga-brown hover:bg-yoga-beige/50 transition-colors text-sm"
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          
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
              onClick={() => handleSendMessage()}
              className="chatbot-send-button"
              disabled={isTyping || inputMessage.trim() === ""}
              aria-label="Nachricht senden"
            >
              <Send size={18} />
            </button>
          </div>
          
          {messages.length > 1 && !isTyping && (
            <div className="px-4 py-3 bg-yoga-beige/10 border-t border-yoga-gold/10">
              <h4 className="font-medium text-yoga-brown/80 text-xs mb-2">Weitere Fragen:</h4>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.slice(4, 8).map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionClick(question.text)}
                    className="text-left px-2 py-1 bg-white rounded-md border border-yoga-gold/20 text-yoga-brown hover:bg-yoga-beige/50 transition-colors text-xs"
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="chatbot-button"
        aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
