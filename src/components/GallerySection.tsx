import React, { useState } from 'react';
import { ZoomIn, Camera, Sparkles } from 'lucide-react';
import { galleryData } from '../data/gallery';
import type { GalleryImage } from '../types';
import { ImageLightbox } from './ImageLightbox';
import { CinematicPhotoReveal, type PhotoRevealData } from './CinematicPhotoReveal';
import { soundEngine } from '../utils/audio';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoRevealData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Profile & Leadership',
    'Field & Industry',
    'Architecture',
    'Cloud & AI',
    'Systems Design'
  ];

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((img) => img.category === activeCategory);

  const handleItemClick = (image: GalleryImage) => {
    soundEngine.playChime();
    // If it's a real photograph of Milu or leadership/workstation
    if (image.category === 'Profile & Leadership' || image.category === 'Field & Industry') {
      let coordinates = undefined;
      let location = "Kerala, India";
      let mascotNote = "Authentic photo archive from my software engineering journey!";

      if (image.id === 'gal-ainsoft-desk') {
        coordinates = "Lat 8.501338° N, Long 76.968442° E";
        location = "Ainsoft Solutions Pvt. Ltd., Cotton Hill, Vazhuthacaud, Thiruvananthapuram";
        mascotNote = "Coding backend REST endpoints and React web components at my Ainsoft workstation!";
      } else if (image.id === 'gal-azure-badge') {
        location = "Amal Jyothi College of Engineering, Kanjirappally";
        mascotNote = "Proudly headed the Medical Core Committee for the Azure intercollegiate festival!";
      } else if (image.id === 'gal-college-portrait') {
        location = "Department of Computer Applications, Amal Jyothi College (Autonomous)";
        mascotNote = "Representing my MCA cohort where I maintained continuous Honours distinction!";
      } else if (image.id === 'gal-milu-executive') {
        mascotNote = "Executive portrait ready to build scalable, production software!";
      }

      setSelectedPhoto({
        src: image.src,
        alt: image.alt,
        title: image.title,
        caption: image.description,
        location,
        coordinates,
        mascotNote,
      });
    } else {
      // Architecture diagrams
      setSelectedImage(image);
    }
  };

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#818cf8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              07 // VISUAL ARCHIVE & EVIDENCE
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Visual Evidence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">System Diagrams</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Authentic photographs of leadership service, commercial industry engineering workstations, and detailed technical architecture blueprints.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {categories.map((cat) => {
              const count = cat === 'All' ? galleryData.length : galleryData.filter((i) => i.category === cat).length;
              if (count === 0 && cat !== 'All') return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all border flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] border-transparent font-bold shadow-md shadow-[#00e5ff]/20'
                      : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-code ${
                      activeCategory === cat ? 'bg-[#020408]/20 text-[#020408]' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Asymmetric Masonry Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => {
            const isTall = image.aspectRatio === 'portrait';
            const isPhoto = image.category === 'Profile & Leadership' || image.category === 'Field & Industry';

            return (
              <div
                key={image.id}
                onClick={() => handleItemClick(image)}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-[#070d18] shadow-xl transition-all duration-500 cursor-pointer hover:border-[#00e5ff]/50 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div className={`w-full overflow-hidden ${isTall ? 'h-full min-h-[380px] sm:min-h-[460px]' : 'h-64'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/30 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#020408]/85 text-[#00e5ff] border border-[#00e5ff]/40 backdrop-blur-md flex items-center gap-1">
                    {isPhoto ? <Camera className="w-3 h-3 text-[#00e5ff]" /> : <Sparkles className="w-3 h-3 text-[#38bdf8]" />}
                    <span>{image.category}</span>
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-full bg-[#020408]/80 text-white backdrop-blur-md border border-white/20 inline-block">
                    <ZoomIn className="w-4 h-4 text-[#00e5ff]" />
                  </span>
                </div>

                {/* Bottom Story Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-left transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-space text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors leading-tight">
                    {image.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-jakarta mt-1 line-clamp-2 opacity-90">
                    {image.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox for System Diagrams */}
      <ImageLightbox
        image={selectedImage}
        images={filteredImages}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
      />

      {/* Cinematic Photo Reveal for Real Photography */}
      <CinematicPhotoReveal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
