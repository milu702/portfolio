import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../types';

interface ImageLightboxProps {
  image: GalleryImage | null;
  images: GalleryImage[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  image,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#020408]/95 backdrop-blur-2xl animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-[#070d18]/80 hover:bg-[#070d18] text-white border border-white/20 transition-all hover:scale-110"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-[#070d18]/80 hover:bg-[#070d18] text-white border border-white/20 transition-all hover:scale-110"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate('next')}
        className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-[#070d18]/80 hover:bg-[#070d18] text-white border border-white/20 transition-all hover:scale-110"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div className="relative max-w-5xl max-h-[85vh] z-10 flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-[#070d18]">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[70vh] w-auto object-contain filter contrast-[1.03]"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 p-4 rounded-xl bg-[#070d18]/90 border border-white/10 backdrop-blur-md max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40">
              {image.category}
            </span>
            <span className="text-white font-space font-bold text-sm">
              {image.title}
            </span>
          </div>
          <p className="text-xs text-slate-300 font-jakarta">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
};
