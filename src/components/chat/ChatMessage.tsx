
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-3 py-4",
        isUser && "justify-end"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 border bg-yoga-cream">
          <div className="flex h-full w-full items-center justify-center bg-yoga-gold text-white">
            M
          </div>
        </Avatar>
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-3 max-w-[80%]",
          isUser
            ? "bg-yoga-brown text-white"
            : "bg-yoga-cream/80 text-yoga-brown"
        )}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 border">
          <div className="flex h-full w-full items-center justify-center bg-yoga-sage text-white">
            U
          </div>
        </Avatar>
      )}
    </div>
  );
}
