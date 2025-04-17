
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type MessageType = "user" | "assistant";

export interface ChatMessageProps {
  content: string;
  type: MessageType;
  timestamp?: Date;
}

export function ChatMessage({ content, type, timestamp }: ChatMessageProps) {
  const isUser = type === "user";
  const time = timestamp ? new Intl.DateTimeFormat("en", { 
    hour: "numeric", 
    minute: "numeric",
    hour12: true 
  }).format(timestamp) : "";

  return (
    <div className={cn("flex items-start gap-3 px-4", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8 mt-0.5">
        {isUser ? (
          <AvatarFallback className="bg-primary text-primary-foreground">
            YU
          </AvatarFallback>
        ) : (
          <>
            <AvatarImage src="/logo.png" alt="Mahashakti AI" />
            <AvatarFallback className="bg-yoga-gold text-white">MA</AvatarFallback>
          </>
        )}
      </Avatar>
      <div className="flex flex-col max-w-[80%]">
        <div 
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted"
          )}
        >
          {content}
        </div>
        {timestamp && (
          <span className="text-xs text-muted-foreground mt-1 px-2">
            {time}
          </span>
        )}
      </div>
    </div>
  );
}
