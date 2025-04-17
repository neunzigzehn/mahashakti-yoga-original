
interface Testimonial {
  id: number;
  content: string;
  author: string;
  date: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Liebe Veronika, lieben Dank für das schöne Retreat. Es war eine wunderschöne Zeit mit dir, du hast uns gefordert, man konnte dank deiner Hilfe, über sich hinauswachsen und du hast uns Raum zum Entspannen gegeben. Von allem war alles dabei. Du füllst den Raum mit so wundervoller Energie, dass man in jeder Sekunde sich getragen und gestärkt fühlt.",
      author: "Susanne Sch.",
      date: "Januar 2023"
    },
    {
      id: 2,
      content: "Veronika ist außergewöhnlich und ganz besonders; mit ihrem rießigen Schatz an Erfahrung, ihrer Freude, am Unterrichten und Bewegen. Völlig entspannt & ruhig unterrichtet sie und macht glasklare & hilfreiche Ansagen. In ihrem Unterricht kann man so viel genießen: wohlige Leichtigkeit, herrliche Tiefe, verspielte, ungewöhnliche Übergänge.",
      author: "Mimo R.",
      date: "Januar 2023"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="font-serif text-2xl mb-8 text-yoga-brown text-center">Feedback von Teilnehmern</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-yoga-beige/20 p-6 rounded-lg relative">
            <div className="text-yoga-gold text-4xl absolute top-4 right-6 opacity-20">"</div>
            <p className="text-yoga-brown/80 mb-4 relative z-10">
              {testimonial.content}
            </p>
            <div className="text-yoga-brown font-medium">{testimonial.author}, {testimonial.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
