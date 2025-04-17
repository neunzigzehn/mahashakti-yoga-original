
interface ScheduleItem {
  time: string;
  activity: string;
}

const ScheduleOverview = () => {
  const scheduleItems: ScheduleItem[] = [
    {
      time: "08:00-09:30",
      activity: "Eine Yoga-Stunde mit unterschiedlichen Schwerpunkten (Meditation, Atemtechniken, Sonnengrüße, verschiedene Asanas, Savasana)"
    },
    {
      time: "bis 11:00",
      activity: "Frühstück/Brunch zusammen in der Gruppe oder alleine oder mit Freunden/Familie"
    },
    {
      time: "ab 11:30",
      activity: "Wandern, Ausflüge, Massage, Wellness, andere Aktivitäten oder einfach die Seele baumeln lassen"
    },
    {
      time: "17:00-18:30",
      activity: "Eine weitere Yoga-Stunde mit unterschiedlichen Themen und Übungen, einmal auch Yin Yoga"
    },
    {
      time: "Abend",
      activity: "Gemeinsames oder individuelles Abendessen, Sauna, Entspannung oder geselliges Beisammensein"
    }
  ];

  return (
    <div className="mb-16 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-yoga-tan/20 py-6 px-8">
        <h2 className="font-serif text-2xl text-yoga-brown text-center">Ein typischer Yoga-Tag</h2>
      </div>
      <div className="p-8">
        <ul className="space-y-4 text-yoga-brown/80">
          {scheduleItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yoga-gold mr-3 font-medium">{item.time}</span>
              <span>{item.activity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-yoga-brown/80 italic">
          Fixpunkt sind die Yoga-Stunden mit Veronika. Das Programm dazwischen stellst du dir selbst zusammen oder machen wir uns in der Gruppe aus.
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;
