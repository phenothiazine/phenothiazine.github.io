import React from 'react';
import { Project } from '../types';
import { ImageCarousel } from './ImageCarousel';

interface ProjectCardProps {
  data: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const hasImages = data.imageUrls && data.imageUrls.length > 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">

      {/* Carousel Section */}
      {hasImages && (
        <ImageCarousel
          images={data.imageUrls!}
          altTitle={data.title}
          aspectRatio="h-48 md:h-64"
        />
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