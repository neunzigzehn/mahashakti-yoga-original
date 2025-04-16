
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-fade-in');
          sectionRef.current?.classList.remove('opacity-0');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    }, 800);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-yoga-beige opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-yoga-brown">Connect With Mahashakti</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto">
            Ready to begin or deepen your yoga journey? 
            Reach out to learn more about classes, retreats, or to schedule a private session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yoga-gold mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Message Sent</h3>
                <p className="text-yoga-brown/80 mb-8">Thank you for reaching out. Mahashakti will respond to your inquiry soon.</p>
                <button 
                  onClick={() => setFormSubmitted(false)} 
                  className="yoga-button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-yoga-brown/90 text-sm font-medium mb-2">
                    Name
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
                <div className="mb-6">
                  <label htmlFor="email" className="block text-yoga-brown/90 text-sm font-medium mb-2">
                    Email
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
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-yoga-brown/90 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-yoga-tan focus:border-yoga-gold outline-none transition-colors duration-300 rounded-md"
                  >
                    <option value="">Select a topic</option>
                    <option value="Class Inquiry">Class Inquiry</option>
                    <option value="Private Session">Private Session</option>
                    <option value="Retreat Information">Retreat Information</option>
                    <option value="Teacher Training">Teacher Training</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-yoga-brown/90 text-sm font-medium mb-2">
                    Message
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
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Studio Location</h3>
              <p className="text-yoga-brown/80 mb-2">Rosenstraße 12</p>
              <p className="text-yoga-brown/80 mb-4">80331 München, Germany</p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.3832795782893!2d11.576019776592503!3d48.13728197130091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f626a1ca8d%3A0x93be7a6a7de8e355!2sMarienplatz%2C%20Altstadt-Lehel%2C%20Munich%2C%20Germany!5e0!3m2!1sen!2sus!4v1650913953646!5m2!1sen!2sus"
                  className="w-full h-64 border-0 rounded-lg shadow-sm"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio location map"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Contact Information</h3>
              <div className="space-y-4 text-yoga-brown/80">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-yoga-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@mahashakti-yoga.de</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-yoga-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+49 89 1234 5678</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-yoga-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Studio Hours:</p>
                    <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4 text-yoga-brown">Stay Connected</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-yoga-brown flex items-center justify-center text-white hover:bg-yoga-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-yoga-brown flex items-center justify-center text-white hover:bg-yoga-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-yoga-brown flex items-center justify-center text-white hover:bg-yoga-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
