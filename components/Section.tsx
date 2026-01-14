import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id, className = "" }) => {
  return (
    // Reduced padding further: py-8/16 -> py-6/10 to make it compact
    <section id={id} className={`py-6 md:py-10 max-w-4xl mx-auto px-6 ${className}`}>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6 border-b border-gray-100 pb-2">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};