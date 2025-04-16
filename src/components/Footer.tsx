
import { useState } from 'react';

const Footer = () => {
  const [showImprint, setShowImprint] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const toggleImprint = () => {
    setShowImprint(!showImprint);
    if (showPrivacy) setShowPrivacy(false);
  };

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
    if (showImprint) setShowImprint(false);
  };
  
  return (
    <footer className="bg-yoga-brown text-white pt-16 pb-8 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 pr-4">
            <h3 className="text-2xl font-serif mb-6">Mahashakti Yoga</h3>
            <p className="mb-6 text-white/80 leading-relaxed">
              Erleben Sie die Kraft authentischen Yoga-Unterrichts in der Tradition von Tantra, Kundalini und Hatha Yoga. Seit 2002 begleitet Veronika Rössl Menschen auf ihrem Weg zu mehr Bewusstsein, Kraft und Lebensfreude.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mahashakti_yoga/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yoga-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/mahashaktiyoga/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yoga-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/user/mahashaktiyoga" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yoga-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif mb-4">Kontakt</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-yoga-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Westermühlstr. 25<br />80469 München</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yoga-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+49 (0) 89 74809953</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yoga-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@mahashakti-yoga.de" className="hover:text-yoga-gold transition-colors">info@mahashakti-yoga.de</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif mb-4">Kurszeiten</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>7:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span>9:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span>10:00 - 19:00</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#schedule" className="text-white hover:text-yoga-gold transition-colors text-sm uppercase tracking-wider flex items-center">
                Vollständiger Kursplan
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mahashakti Yoga. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleImprint} 
              className="text-white/60 hover:text-yoga-gold text-sm transition-colors"
            >
              Impressum
            </button>
            <button 
              onClick={togglePrivacy} 
              className="text-white/60 hover:text-yoga-gold text-sm transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>

      {/* Impressum Modal */}
      {showImprint && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-yoga-brown rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative">
            <button 
              onClick={toggleImprint}
              className="absolute top-4 right-4 text-yoga-brown/60 hover:text-yoga-brown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-serif mb-6">Impressum</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Angaben gemäß § 5 TMG</h3>
                <p>Veronika Rössl<br />
                Mahashakti Yoga<br />
                Westermühlstr. 25<br />
                80469 München</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Kontakt</h3>
                <p>Telefon: +49 (0) 89 74809953<br />
                E-Mail: info@mahashakti-yoga.de</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>Veronika Rössl<br />
                Westermühlstr. 25<br />
                80469 München</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Haftungsausschluss</h3>
                <p className="text-sm">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-yoga-brown rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative">
            <button 
              onClick={togglePrivacy}
              className="absolute top-4 right-4 text-yoga-brown/60 hover:text-yoga-brown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-serif mb-6">Datenschutzerklärung</h2>
            <div className="space-y-4 text-sm">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
              </p>
              
              <div>
                <h3 className="font-medium mb-2 text-base">Kontakt mit uns</h3>
                <p>
                  Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-base">Cookies</h3>
                <p>
                  Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-base">Web-Analyse</h3>
                <p>
                  Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Dazu werden Cookies verwendet, die eine Analyse der Benutzung der Website durch Ihre Benutzer ermöglicht. Die dadurch erzeugten Informationen werden auf den Server des Anbieters übertragen und dort gespeichert.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-base">Ihre Rechte</h3>
                <p>
                  Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-base">Kontakt zum Datenschutz</h3>
                <p>
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:<br />
                  <br />
                  Veronika Rössl<br />
                  Mahashakti Yoga<br />
                  Westermühlstr. 25<br />
                  80469 München<br />
                  info@mahashakti-yoga.de
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
