import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  data: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  return (
    <div className="group relative border-l-2 border-gray-100 pl-8 pb-10 last:pb-0 hover:border-gray-300 transition-colors duration-300">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 border-4 border-white group-hover:bg-blue-500 transition-colors duration-300"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900">{data.company}</h3>
        <span className="text-sm font-medium text-gray-400 tabular-nums">{data.period}</span>
      </div>
      
      <div className="mb-3 flex flex-wrap gap-2 items-center">
         <span className="text-lg font-semibold text-gray-800">{data.role}</span>
         {data.team && (
           <span className="text-sm px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
             {data.team}
           </span>
         )}
      </div>
      
      <p className="text-gray-600 mb-4 italic">
        {data.summary}
      </p>
      
      <ul className="space-y-2">
        {data.details.map((detail, idx) => (
          <li key={idx} className="text-gray-600 text-sm leading-relaxed flex gap-3">
             <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 block"></span>
             <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};