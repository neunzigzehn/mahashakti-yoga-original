
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="pt-48 pb-24 bg-yoga-beige relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yoga-gold/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yoga-gold/5 rounded-full -translate-x-1/2 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yoga-gold/3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-yoga-gold/3 rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container-custom relative z-10">
        <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">{title}</h1>
        <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-6"></div>
        {subtitle && (
          <p className="text-center text-yoga-brown/80 max-w-2xl mx-auto mt-4 text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
