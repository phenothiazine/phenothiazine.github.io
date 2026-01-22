import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
  data: ResumeData['personalInfo'];
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    // Reduced top padding substantially to bring content up
    <section className="pt-24 pb-6 md:pt-32 md:pb-10 px-6 max-w-4xl mx-auto flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-10 animate-fade-in-up">
      <div className="flex-1 order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">
          {data.name} <span className="text-gray-400 font-medium text-2xl md:text-4xl">{data.secondaryName}</span>
        </h1>

        <p className="text-lg text-gray-700 font-medium mb-5">
          {data.title}
        </p>

        {/* Contact Info Columns - Compact & Professional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full max-w-lg mx-auto md:mx-0">
          <div className="flex items-center gap-3 bg-white border border-gray-200 p-3 rounded-lg shadow-sm hover:border-blue-300 transition-colors">
            <div className="bg-blue-50 p-2 rounded-full text-blue-600">
              <Phone size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">TEL / WeChat</p>
              <p className="text-sm font-medium text-gray-900">{data.phone}</p>
            </div>
          </div>

          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-3 bg-white border border-gray-200 p-3 rounded-lg shadow-sm hover:border-blue-300 transition-colors group"
          >
            <div className="bg-blue-50 p-2 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Email</p>
              <p className="text-sm font-medium text-gray-900">{data.email}</p>
            </div>
          </a>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-2xl mb-6 text-sm md:text-base">
          {data.summary}
        </p>

        <div className="flex gap-3 justify-center md:justify-start">
          {data.socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Avatar Section */}
      <div className="order-1 md:order-2 mb-6 md:mb-0 shrink-0 relative group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 relative z-10">
           {/* Pointing to local image in public folder */}
           <img
             src="/images/avatar.JPG"
             alt={data.name}
             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
             onError={(e) => {
               // Fallback if image not found
               (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Xu+Jiajun&background=0D8ABC&color=fff&size=256";
             }}
           />
        </div>
        <div className="absolute inset-0 rounded-full bg-blue-400 scale-105 -z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
      </div>
    </section>
  );
};