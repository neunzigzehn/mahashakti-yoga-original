
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-yoga-gold hover:bg-yoga-gold/90 text-white z-50"
      size="icon"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
    </Button>
  );
}
