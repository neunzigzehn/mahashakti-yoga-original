
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Für wen sind die Ausbildungen geeignet?",
      answer: "Unsere Ausbildungen richten sich an Praktizierende aller Levels, die ihr Wissen und ihre Praxis vertiefen möchten. Für die Grundausbildung empfehlen wir mindestens ein Jahr regelmäßige Yoga-Praxis."
    },
    {
      question: "Wie ist der Ablauf der Ausbildung?",
      answer: "Die Ausbildung umfasst theoretischen Unterricht, praktische Übungen, Lehrproben und Selbststudium. Die genauen Zeitpläne werden vor Beginn der Ausbildung mitgeteilt."
    },
    {
      question: "Gibt es Zahlungserleichterungen?",
      answer: "Ja, wir bieten Ratenzahlungen an. Bitte kontaktiere uns für weitere Details zu den Finanzierungsoptionen."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="font-serif text-3xl mb-8 text-yoga-brown">Häufig gestellte Fragen</h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white shadow-sm rounded-lg overflow-hidden">
            <AccordionTrigger className="font-serif text-xl px-6 py-4 text-yoga-brown">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-yoga-brown/80">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
