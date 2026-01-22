import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  navLabels: {
    education: string;
    experience: string;
    projects: string;
    publications: string;
    resumeBtn: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, navLabels }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: navLabels.education, href: '#education' },
    { name: navLabels.experience, href: '#experience' },
    { name: navLabels.projects, href: '#projects' },
    { name: navLabels.publications, href: '#publications' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight text-gray-900">
          XU.
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors"
          >
            {lang === 'zh' ? 'En' : '中'}
          </button>

          <a
             href="/resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md hidden sm:block"
          >
            {navLabels.resumeBtn}
          </a>
        </div>
      </nav>
    </header>
  );
};