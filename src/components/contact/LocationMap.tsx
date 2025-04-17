
import React from 'react';

interface LocationMapProps {
  title?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ title = "Besuche uns" }) => {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl mb-6 text-yoga-brown">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5142520077986!2d11.57564587659239!3d48.13484607128872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758a1a8be2ad%3A0xae873c22f11cbc27!2sRosenstra%C3%9Fe%2012%2C%2080331%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1743368976543!5m2!1sen!2sus"
          className="w-full h-[400px] border-0 rounded-lg shadow-sm"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio location map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
