
import { useEffect, useRef, useState } from "react";
import { SendIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, ChatMessageProps } from "./ChatMessage";
import { cn } from "@/lib/utils";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// Example predefined questions
const SAMPLE_QUESTIONS = [
  "What classes do you offer?",
  "Tell me about your retreat program",
  "What's your teaching philosophy?",
  "How do I book a class?",
  "Are you offering private sessions?"
];

export function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      content: "Hello! I'm Mahashakti's virtual assistant. How can I help you today?",
      type: "assistant",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessageProps = {
      content: input,
      type: "user",
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Simulate assistant response after a delay
    setTimeout(() => {
      let responseContent = "Thank you for your question. Our yoga instructor will address this in detail during your next class.";
      
      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes("class")) {
        responseContent = "We offer various classes including Hatha, Vinyasa, Yin, and Restorative yoga. Check our schedule page for timings.";
      } else if (input.toLowerCase().includes("retreat")) {
        responseContent = "Our retreats are held quarterly in serene locations. They include daily yoga, meditation, healthy meals, and nature walks.";
      } else if (input.toLowerCase().includes("book")) {
        responseContent = "You can book a class directly through our website by visiting the Schedule page and clicking on your preferred class time.";
      }
      
      const assistantResponse: ChatMessageProps = {
        content: responseContent,
        type: "assistant",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, assistantResponse]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 w-[380px] rounded-lg shadow-lg bg-background border border-border z-50 flex flex-col transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 scale-100 h-[540px]" : "opacity-0 scale-90 h-0 pointer-events-none"
      )}
      style={{ maxHeight: "80vh" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-serif text-lg font-light">Mahashakti Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <XIcon className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Message area */}
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col space-y-6">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Suggested questions */}
      {messages.length < 3 && (
        <div className="px-4 py-3 border-t">
          <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_QUESTIONS.map((question, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(question)}
                className="text-xs bg-muted rounded-full px-3 py-1 hover:bg-accent transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input area */}
      <div className="p-4 border-t flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <Button 
          onClick={handleSend} 
          size="icon" 
          className="bg-yoga-gold hover:bg-yoga-brown text-white"
          disabled={!input.trim()}
        >
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
