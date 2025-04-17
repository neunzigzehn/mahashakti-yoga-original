
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="pt-48 pb-24 bg-yoga-beige relative">
      <div className="container-custom">
        <h1 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-yoga-brown">{title}</h1>
        <div className="w-24 h-0.5 bg-yoga-gold mx-auto mt-6 mb-6"></div>
        {subtitle && (
          <p className="text-center text-yoga-brown/80 max-w-2xl mx-auto mt-4">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
