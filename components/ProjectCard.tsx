import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  data: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImgError(prev => ({ ...prev, [index]: true }));
  };

  const hasImages = data.imageUrls && data.imageUrls.length > 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">

      {/* Carousel Section */}
      {hasImages && (
        <div className="relative group/carousel">
          <div className="w-full h-48 md:h-64 bg-gray-50 flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {data.imageUrls!.map((url, idx) => (
              <div key={idx} className="w-full flex-shrink-0 snap-center h-full relative border-b border-gray-100">
                {!imgError[idx] ? (
                  <img
                    src={url}
                    alt={`${data.title} - view ${idx + 1}`}
                    className="w-full h-full object-cover"
                    // Note: object-cover looks best, but use object-contain if you don't want any cropping
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 flex-col gap-2">
                    <span className="text-4xl">🖼️</span>
                    <span className="text-xs uppercase tracking-widest font-semibold">Missing Image</span>
                    <span className="text-[10px] text-gray-300">Check {url}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dots Indicator (only if > 1 image) */}
          {data.imageUrls!.length > 1 && (
             <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
               {data.imageUrls!.map((_, idx) => (
                 <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-sm backdrop-blur-sm"></div>
               ))}
             </div>
          )}

          {/* Hint for interaction (optional) */}
          {data.imageUrls!.length > 1 && (
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/20 text-white rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity pointer-events-none md:hidden">
               <span className="text-xs">← Swipe →</span>
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