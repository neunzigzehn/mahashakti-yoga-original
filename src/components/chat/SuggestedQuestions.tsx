
import { Separator } from "../ui/separator";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
}

const SuggestedQuestions = ({ questions, onSelectQuestion }: SuggestedQuestionsProps) => {
  return (
    <div className="suggested-questions-container">
      <p className="text-xs font-serif text-yoga-brown/80 mb-2">Vorgeschlagene Fragen:</p>
      <Separator className="mb-2 bg-yoga-gold/20" />
      <div className="flex flex-col gap-1.5">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelectQuestion(question)}
            className="suggested-question-button"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
