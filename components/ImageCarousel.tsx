import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  altTitle: string;
  className?: string;
  imageClassName?: string;
  // Controls the height of the image container
  aspectRatio?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  altTitle,
  className = "",
  imageClassName = "object-cover",
  aspectRatio = "h-48 md:h-64"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageError = (index: number) => {
    setImgError(prev => ({ ...prev, [index]: true }));
  };

  const openModal = (index: number) => {
    if (!imgError[index]) {
      setCurrentIndex(index);
      setIsOpen(true);
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnail Carousel */}
      <div className={`relative group/carousel ${className}`}>
        <div className={`w-full ${aspectRatio} bg-gray-50 flex overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-lg border border-gray-100`}>
          {images.map((url, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 snap-center h-full relative cursor-zoom-in"
              onClick={() => openModal(idx)}
            >
              {!imgError[idx] ? (
                <>
                  <img
                    src={url}
                    alt={`${altTitle} ${idx + 1}`}
                    className={`w-full h-full ${imageClassName}`}
                    onError={() => handleImageError(idx)}
                  />
                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover/carousel:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100">
                    <Maximize2 className="text-white drop-shadow-md w-8 h-8 opacity-90" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 flex-col gap-2 cursor-default">
                  <span className="text-4xl">🖼️</span>
                  <span className="text-xs uppercase tracking-widest font-semibold">Missing</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Indicators (Dots) */}
        {images.length > 1 && (
           <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 pointer-events-none z-10">
             {images.map((_, idx) => (
               <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-md backdrop-blur-sm"></div>
             ))}
           </div>
        )}

        {/* Mobile Hint */}
        {images.length > 1 && (
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/20 text-white rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity pointer-events-none md:hidden">
             <span className="text-xs">← Swipe →</span>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-20 transition-colors rounded-full hover:bg-white/10"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Prev Button */}
             {images.length > 1 && (
               <button
                 onClick={prevImage}
                 className="absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors p-2 z-20"
               >
                 <ChevronLeft size={40} />
               </button>
             )}

             {/* Main Image */}
             <img
               src={images[currentIndex]}
               alt={`${altTitle} fullscreen`}
               className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
             />

             {/* Next Button */}
             {images.length > 1 && (
               <button
                 onClick={nextImage}
                 className="absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors p-2 z-20"
               >
                 <ChevronRight size={40} />
               </button>
             )}

             {/* Counter */}
             <div className="absolute -bottom-10 left-0 right-0 text-center text-white/50 text-sm font-medium tracking-widest">
               {currentIndex + 1} / {images.length}
             </div>
          </div>
        </div>
      )}
    </>
  );
};