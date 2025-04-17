
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
}

export function ChatButton({ onClick, isOpen, className }: ChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="default"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 bg-yoga-brown hover:bg-yoga-gold transition-all duration-300",
        isOpen && "scale-0 opacity-0",
        className
      )}
      aria-label="Open chat"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
}
