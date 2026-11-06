import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, MapPin, Sparkles, ExternalLink, Calendar } from 'lucide-react';
import { MiluCharacter } from './MiluCharacter';
import { soundEngine } from '../utils/audio';

export interface PhotoRevealData {
  src: string;
  title: string;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
  coordinates?: string;
  mascotNote?: string;
}

interface CinematicPhotoRevealProps {
  photo: PhotoRevealData | null;
  onClose: () => void;
}

export const CinematicPhotoReveal: React.FC<CinematicPhotoRevealProps> = ({ photo, onClose }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden';
      soundEngine.playChime();
    } else {
      document.body.style.overflow = 'auto';
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [photo]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#020408]/92 backdrop-blur-2xl overflow-y-auto animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Cinematic Frame */}
      <div className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#070d18] border border-white/20 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden z-10 text-left flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#00e5ff] block font-bold">
                Photographic Archive // Authentic Record
              </span>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-tight">
                {photo.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
              title={isZoomed ? 'Reset Zoom' : 'Zoom in on photo'}
              aria-label="Toggle Zoom"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
              aria-label="Close Photo View"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Photograph Area with Ambient Light */}
        <div className="relative p-4 sm:p-6 flex items-center justify-center bg-[#030610] overflow-hidden flex-grow min-h-[300px]">
          {/* Ambient Spotlight */}
          <div className="absolute inset-0 bg-gradient-radial from-[#00e5ff]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl max-h-[55vh] flex items-center justify-center">
            <img
              src={photo.src}
              alt={photo.alt}
              className={`max-h-[55vh] w-auto object-contain transition-transform duration-500 filter contrast-[1.03] ${
                isZoomed ? 'scale-150 cursor-grab active:cursor-grabbing' : 'scale-100'
              }`}
            />
          </div>

          {/* Floating Mascot Cameo Commenting on the Photo */}
          <div className="absolute bottom-4 left-4 sm:left-6 z-20 flex items-end gap-3 pointer-events-none">
            <MiluCharacter
              pose="celebrating"
              size="sm"
              interactive={false}
              className="w-14 h-18 drop-shadow-xl"
            />
            {photo.mascotNote && (
              <div className="p-3 rounded-2xl bg-[#070d18]/95 border border-[#00e5ff]/40 shadow-xl backdrop-blur-md max-w-xs text-left animate-fadeIn pointer-events-auto">
                <span className="text-[9px] font-mono-code font-bold uppercase text-[#00e5ff] block mb-0.5">
                  Milu's Note:
                </span>
                <p className="text-xs text-slate-200 font-jakarta leading-snug">
                  "{photo.mascotNote}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Metadata & Caption Bottom Bar */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
          <div className="text-left max-w-xl">
            <p className="text-xs sm:text-sm text-slate-300 font-jakarta leading-relaxed">
              {photo.caption}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono-code text-slate-400">
              {photo.location && (
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>{photo.location}</span>
                </span>
              )}
              {photo.coordinates && (
                <span className="text-[#38bdf8] font-bold">
                  [{photo.coordinates}]
                </span>
              )}
              {photo.date && (
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{photo.date}</span>
                </span>
              )}
            </div>
          </div>

          <a
            href={photo.src}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-[#00e5ff]/20 border border-white/10 hover:border-[#00e5ff]/40 text-slate-200 hover:text-white text-xs font-mono-code uppercase font-semibold transition-all shrink-0"
          >
            <span>Open High-Res</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00e5ff]" />
          </a>
        </div>
      </div>
    </div>
  );
};
