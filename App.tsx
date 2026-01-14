import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard';
import { 
  EXPERIENCE, 
  PROJECTS, 
  EDUCATION, 
  PUBLICATIONS, 
  SKILLS 
} from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Education moved before Experience */}
        <Section title="Education" id="education">
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-gray-900">{edu.school}</h3>
                   <span className="text-xs font-semibold bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-600">
                     {edu.rank}
                   </span>
                </div>
                <p className="text-gray-800 font-medium mb-1">{edu.degree} · {edu.major}</p>
                <p className="text-sm text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title="Experience" id="experience">
          <div className="pl-2">
            {EXPERIENCE.map((exp) => (
              <ExperienceItem key={exp.id} data={exp} />
            ))}
          </div>
        </Section>
        
        <Section title="Projects" id="projects">
          <div className="grid gap-8">
            {PROJECTS.map((proj) => (
              <ProjectCard key={proj.id} data={proj} />
            ))}
          </div>
        </Section>
        
        <Section title="Selected Publications" id="publications">
           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
             {PUBLICATIONS.map((pub) => (
               <div key={pub.id} className="flex flex-col gap-3">
                 <p className="text-gray-800 leading-relaxed font-serif text-lg">
                   {pub.citation}
                 </p>
                 <div className="flex gap-3 items-center">
                   <span className="self-start text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wide">
                     {pub.tag}
                   </span>
                   {pub.url && (
                     <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener"
                      className="text-xs font-medium text-gray-500 hover:text-blue-600 underline underline-offset-2 flex items-center gap-1"
                     >
                       {pub.url.includes('doi.org')
                         ? `DOI: ${pub.url.split('doi.org/')[1]} ↗`
                         : 'View Paper ↗'}
                     </a>
                   )}
                 </div>
               </div>
             ))}
           </div>
        </Section>

        <Section title="Skills" className="pb-24">
          <div className="space-y-8">
            {SKILLS.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:border-gray-400 hover:bg-gray-50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">
        <p>© {new Date().getFullYear()} Xu Jiajun. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;