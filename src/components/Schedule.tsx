
import { useState, useRef, useEffect } from 'react';

interface ClassSchedule {
  id: number;
  day: string;
  time: string;
  title: string;
  level: string;
  duration: string;
  instructor: string;
}

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [activeDay, setActiveDay] = useState('Monday');
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

  const scheduleData: Record<string, ClassSchedule[]> = {
    Monday: [
      { id: 1, day: 'Monday', time: '7:00 AM', title: 'Morning Flow', level: 'All Levels', duration: '60 min', instructor: 'Nina' },
      { id: 2, day: 'Monday', time: '12:00 PM', title: 'Lunch Express Flow', level: 'Intermediate', duration: '45 min', instructor: 'Nina' },
      { id: 3, day: 'Monday', time: '6:00 PM', title: 'Gentle Evening Practice', level: 'All Levels', duration: '75 min', instructor: 'Nina' },
    ],
    Tuesday: [
      { id: 4, day: 'Tuesday', time: '9:00 AM', title: 'Mindful Vinyasa', level: 'Intermediate', duration: '75 min', instructor: 'Nina' },
      { id: 5, day: 'Tuesday', time: '5:30 PM', title: 'Yin & Meditation', level: 'All Levels', duration: '90 min', instructor: 'Nina' },
    ],
    Wednesday: [
      { id: 6, day: 'Wednesday', time: '7:00 AM', title: 'Morning Flow', level: 'All Levels', duration: '60 min', instructor: 'Nina' },
      { id: 7, day: 'Wednesday', time: '12:00 PM', title: 'Lunch Express Flow', level: 'Intermediate', duration: '45 min', instructor: 'Nina' },
      { id: 8, day: 'Wednesday', time: '7:00 PM', title: 'Restorative Evening', level: 'All Levels', duration: '90 min', instructor: 'Nina' },
    ],
    Thursday: [
      { id: 9, day: 'Thursday', time: '9:00 AM', title: 'Gentle Flow', level: 'Beginner', duration: '60 min', instructor: 'Nina' },
      { id: 10, day: 'Thursday', time: '5:30 PM', title: 'Mindful Vinyasa', level: 'Intermediate', duration: '75 min', instructor: 'Nina' },
    ],
    Friday: [
      { id: 11, day: 'Friday', time: '7:00 AM', title: 'Morning Flow', level: 'All Levels', duration: '60 min', instructor: 'Nina' },
      { id: 12, day: 'Friday', time: '12:00 PM', title: 'Lunch Express Flow', level: 'Intermediate', duration: '45 min', instructor: 'Nina' },
      { id: 13, day: 'Friday', time: '6:00 PM', title: 'Weekend Wind Down', level: 'All Levels', duration: '90 min', instructor: 'Nina' },
    ],
    Saturday: [
      { id: 14, day: 'Saturday', time: '9:00 AM', title: 'Weekend Vinyasa', level: 'All Levels', duration: '90 min', instructor: 'Nina' },
      { id: 15, day: 'Saturday', time: '11:00 AM', title: 'Beginners Workshop', level: 'Beginner', duration: '120 min', instructor: 'Nina' },
    ],
    Sunday: [
      { id: 16, day: 'Sunday', time: '10:00 AM', title: 'Slow Flow Sunday', level: 'All Levels', duration: '90 min', instructor: 'Nina' },
      { id: 17, day: 'Sunday', time: '5:00 PM', title: 'Restorative & Meditation', level: 'All Levels', duration: '90 min', instructor: 'Nina' },
    ],
  };

  return (
    <section id="schedule" ref={sectionRef} className="py-24 bg-yoga-beige opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-yoga-brown">Class Schedule</h2>
          <p className="text-yoga-brown/80 max-w-2xl mx-auto">
            Join us for regular classes throughout the week. 
            Whether you're an early bird or prefer evening practice, 
            we have options to suit your schedule.
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 md:justify-center mb-8 scrollbar-none">
          <div className="flex space-x-1 md:space-x-2">
            {days.map((day) => (
              <button
                key={day}
                className={`px-4 py-2 font-sans text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-yoga-brown text-white'
                    : 'bg-white text-yoga-brown hover:bg-yoga-tan/50'
                }`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-yoga-brown text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Class</th>
                  <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Level</th>
                  <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-left font-medium text-sm uppercase tracking-wider">Instructor</th>
                  <th className="px-6 py-4 text-right font-medium text-sm uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yoga-beige">
                {scheduleData[activeDay]?.map((classItem) => (
                  <tr key={classItem.id} className="hover:bg-yoga-beige/30 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-yoga-brown">{classItem.time}</td>
                    <td className="px-6 py-4 text-yoga-brown">{classItem.title}</td>
                    <td className="px-6 py-4 text-yoga-brown/80">{classItem.level}</td>
                    <td className="px-6 py-4 text-yoga-brown/80">{classItem.duration}</td>
                    <td className="px-6 py-4 text-yoga-brown/80">{classItem.instructor}</td>
                    <td className="px-6 py-4 text-right">
                      <a href="#contact" className="text-yoga-gold hover:text-yoga-brown transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
                        Book
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing section */}
        <div className="mt-24">
          <h3 className="text-center font-serif text-2xl mb-12 text-yoga-brown">Pricing Options</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <h4 className="font-serif text-xl mb-2 text-yoga-brown">Single Class</h4>
              <p className="text-yoga-gold text-3xl font-light mb-6">$20</p>
              <ul className="text-yoga-brown/80 space-y-2 mb-8">
                <li>Access to one class</li>
                <li>Mat rental included</li>
                <li>Perfect for first-time visitors</li>
              </ul>
              <a href="#contact" className="yoga-button inline-block w-full">Book Now</a>
            </div>

            <div className="bg-yoga-tan/30 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center relative transform md:scale-105">
              <div className="absolute top-0 right-0 bg-yoga-gold text-white px-4 py-1 text-xs uppercase tracking-wider">Most Popular</div>
              <h4 className="font-serif text-xl mb-2 text-yoga-brown">Class Pack</h4>
              <p className="text-yoga-gold text-3xl font-light mb-6">$100</p>
              <ul className="text-yoga-brown/80 space-y-2 mb-8">
                <li>10 classes (save $100)</li>
                <li>Valid for 3 months</li>
                <li>Mat rental included</li>
                <li>10% off workshops</li>
              </ul>
              <a href="#contact" className="yoga-button bg-yoga-brown text-white hover:bg-yoga-brown/80 border-yoga-brown inline-block w-full">Purchase</a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <h4 className="font-serif text-xl mb-2 text-yoga-brown">Monthly Unlimited</h4>
              <p className="text-yoga-gold text-3xl font-light mb-6">$150</p>
              <ul className="text-yoga-brown/80 space-y-2 mb-8">
                <li>Unlimited classes for 30 days</li>
                <li>Mat rental included</li>
                <li>15% off workshops</li>
                <li>1 guest pass included</li>
              </ul>
              <a href="#contact" className="yoga-button inline-block w-full">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
