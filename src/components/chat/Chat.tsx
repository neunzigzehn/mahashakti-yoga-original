
import { useState } from "react";
import { ChatButton } from "./ChatButton";
import { ChatInterface } from "./ChatInterface";

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <ChatButton onClick={toggleChat} isOpen={isOpen} />
      <ChatInterface isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
