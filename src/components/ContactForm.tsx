
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset the form after 5 seconds to allow user to send another message if needed
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <>
      {formSubmitted ? (
        <div className="text-center py-6 bg-white border border-yoga-gold/20 rounded-lg shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yoga-gold mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Nachricht gesendet</h3>
          <p className="text-yoga-brown/80 mb-8">Vielen Dank für deine Anfrage. Mahashakti wird dir in Kürze antworten.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-yoga-brown/90 text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-yoga-tan focus:border-yoga-gold outline-none transition-colors duration-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-yoga-brown/90 text-sm font-medium mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-yoga-tan focus:border-yoga-gold outline-none transition-colors duration-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-yoga-brown/90 text-sm font-medium mb-2">
              Betreff *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-yoga-tan focus:border-yoga-gold outline-none transition-colors duration-300 rounded-md"
            >
              <option value="">Thema auswählen</option>
              <option value="Kursanfrage">Kursanfrage</option>
              <option value="Private Sitzung">Private Sitzung</option>
              <option value="Retreat Informationen">Retreat Informationen</option>
              <option value="Yogalehrer-Ausbildung">Yogalehrer-Ausbildung</option>
              <option value="Allgemeine Frage">Allgemeine Frage</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-yoga-brown/90 text-sm font-medium mb-2">
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-3 border border-yoga-tan focus:border-yoga-gold outline-none transition-colors duration-300 rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="yoga-button w-full bg-yoga-brown text-white hover:bg-yoga-brown/80 border-yoga-brown">
            Nachricht senden
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
