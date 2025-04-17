
import { useRef, useEffect } from "react";
import { Message } from "./types";

interface MessagesProps {
  messages: Message[];
}

const Messages = ({ messages }: MessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleString('de-DE', { 
      hour: 'numeric', 
      minute: '2-digit'
    });
  };

  return (
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
  );
};

export default Messages;
