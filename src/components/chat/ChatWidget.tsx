
import { useState } from "react";
import { ChatButton } from "./ChatButton";
import { ChatDialog } from "./ChatDialog";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <>
      <ChatButton onClick={toggleChat} isOpen={isOpen} />
      <ChatDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
