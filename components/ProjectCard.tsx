import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  data: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      
      {/* Image Section */}
      {data.imageUrl && (
        <div className="w-full h-48 md:h-64 bg-gray-50 overflow-hidden relative border-b border-gray-100">
          {!imgError ? (
            <img 
              src={data.imageUrl} 
              alt={data.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              onError={() => setImgError(true)}
            />
          ) : (
             // Fallback if image not found
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 flex-col gap-2">
              <span className="text-4xl">🖼️</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Image Placeholder</span>
              <span className="text-[10px] text-gray-300">Put {data.id}.png in /public/images/</span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{data.title}</h3>
            <p className="text-blue-600 font-medium mt-1">{data.role}</p>
          </div>
          <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap">
            {data.period}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {data.intro}
        </p>
        
        <div className="space-y-3">
          {data.highlights.map((highlight, idx) => (
            <div key={idx} className="flex gap-3 text-sm text-gray-700">
               <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
               </svg>
               <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};