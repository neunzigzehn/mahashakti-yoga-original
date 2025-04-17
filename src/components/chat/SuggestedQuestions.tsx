
import { Separator } from "../ui/separator";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
}

const SuggestedQuestions = ({ questions, onSelectQuestion }: SuggestedQuestionsProps) => {
  return (
    <div className="px-3 py-2 bg-yoga-cream border-t border-yoga-gold/30">
      <p className="text-xs font-serif text-yoga-brown/80 mb-2">Vorgeschlagene Fragen:</p>
      <Separator className="mb-2 bg-yoga-gold/20" />
      <div className="flex flex-col gap-1.5">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelectQuestion(question)}
            className="text-xs font-sans py-1.5 px-3 rounded-full bg-yoga-beige/80 text-yoga-brown hover:bg-yoga-gold/20 transition-colors text-left overflow-hidden text-ellipsis border border-yoga-gold/10"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
