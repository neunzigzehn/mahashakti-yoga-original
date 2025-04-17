
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

type ChatInterfaceProps = {
  onClose: () => void;
};

// Initial greeting message from the assistant
const INITIAL_MESSAGES = [
  {
    id: "initial-message",
    content: "Namasté! I'm the Mahashakti Yoga assistant. How can I help you today with yoga classes, retreats, or scheduling?",
    role: "assistant",
    timestamp: new Date(),
  },
];

export function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: `user-${Date.now()}`,
      content,
      role: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock response
      const botResponse = {
        id: `bot-${Date.now()}`,
        content: getSimulatedResponse(content),
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error getting response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple response simulation
  const getSimulatedResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("class") || lowerQuery.includes("kurs")) {
      return "We offer various yoga classes including Hatha, Vinyasa, Yin, and Kundalini. Our classes are suitable for all levels from beginners to advanced practitioners. Would you like to know more about a specific type of yoga?";
    } else if (lowerQuery.includes("schedule") || lowerQuery.includes("zeit")) {
      return "Our studio is open daily from 7:00 to 21:00. Morning classes run from 7:00-10:00, afternoon classes from 12:00-16:00, and evening classes from 18:00-21:00. You can find our detailed schedule on our website's schedule section.";
    } else if (lowerQuery.includes("retreat") || lowerQuery.includes("reise")) {
      return "We organize several retreats throughout the year to destinations like Bali, India, and the Alps. Our retreats offer immersive yoga experiences, meditation, healthy food, and connection with nature. The next retreat is in Bali starting on June 15th.";
    } else if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("preis")) {
      return "Our single class costs €18, a 10-class pass is €160, and monthly unlimited membership is €120. We also offer special rates for students and seniors. First-time visitors can try a class for just €10.";
    } else if (lowerQuery.includes("beginner") || lowerQuery.includes("anfänger")) {
      return "Beginners are absolutely welcome! We recommend starting with our Gentle Hatha or Basics classes which are specifically designed for newcomers. Our instructors will guide you through modifications to make the practice accessible.";
    } else {
      return "Thank you for your question. Our team of yoga instructors is passionate about helping students on their yoga journey. Is there something specific about our yoga studio, classes, or philosophy you'd like to know more about?";
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-[90%] max-w-[400px] rounded-lg border bg-white shadow-xl z-40">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b px-4 py-3 bg-yoga-cream">
        <div>
          <h3 className="font-display italic text-xl text-yoga-brown">Mahashakti Yoga</h3>
          <p className="text-xs text-yoga-brown/70">Yoga Assistant</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-yoga-brown hover:bg-yoga-cream/80"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      
      {/* Messages Container */}
      <div className="flex h-[350px] flex-col overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start py-2">
            <div className="flex space-x-1">
              <div className="h-2 w-2 rounded-full bg-yoga-gold"></div>
              <div className="h-2 w-2 rounded-full bg-yoga-gold"></div>
              <div className="h-2 w-2 rounded-full bg-yoga-gold"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Chat Input */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
}
