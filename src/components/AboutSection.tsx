import React, { useState } from 'react';
import { Compass, ArrowRight, ZoomIn } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { MiluCharacter } from './MiluCharacter';
import { CinematicPhotoReveal, type PhotoRevealData } from './CinematicPhotoReveal';
import { soundEngine } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoRevealData | null>(null);

  const handlePhotoClick = () => {
    soundEngine.playChime();
    setSelectedPhoto({
      src: personalInfo.avatarImage,
      alt: "Milu Jiji Academic Portrait at Amal Jyothi College",
      title: "Academic Scholar Portrait",
      caption: "Official academic portrait at Amal Jyothi College of Engineering (Autonomous), Department of Computer Applications.",
      location: "Kanjirappally, Kottayam, Kerala",
      date: "Class of 2022 – 2027",
      coordinates: "9.5342° N, 76.8228° E",
      mascotNote: "Studying here in the Integrated MCA programme has shaped my foundation in computer science and practical software architecture!",
    });
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712]">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#818cf8]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Editorial Tag */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              01 // ORIGINS & PERSPECTIVE
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">Milu Jiji?</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            A synthesis of academic excellence, high-range heritage, and an obsessive drive to build software that creates tangible human value.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Layered Photography & Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Layered Image with Click to Reveal */}
            <div
              onClick={handlePhotoClick}
              className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#00e5ff]/50 bg-[#070d18] shadow-2xl aspect-[3/4] max-w-sm mx-auto lg:max-w-none group cursor-pointer transition-all duration-500"
              title="Click to inspect photograph in interactive cinematic viewer"
            >
              <img
                src={personalInfo.avatarImage}
                alt="Milu Jiji portrait"
                className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-70" />
              
              {/* Tap to Reveal Prompt */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020408]/80 text-[#00e5ff] text-xs font-mono-code border border-[#00e5ff]/30 opacity-80 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#020408]/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={personalInfo.collegeLogo}
                    alt="Amal Jyothi College of Engineering logo"
                    className="w-10 h-10 object-contain p-1 rounded-lg bg-white/10 border border-white/10"
                  />
                  <div>
                    <h3 className="text-xs font-bold font-jakarta text-white">Amal Jyothi Autonomous</h3>
                    <p className="text-[11px] text-slate-400 font-mono-code">Class of 2022 – 2027</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Mascot Cameo Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 rounded-2xl overflow-hidden border border-[#00e5ff]/30 shadow-2xl bg-[#070d18]/95 p-3 hidden sm:flex items-center gap-2.5 backdrop-blur-md">
              <MiluCharacter pose="curious" size="sm" interactive={false} className="w-12 h-16" />
              <div className="text-left pr-2">
                <span className="text-[9px] uppercase font-mono-code text-[#00e5ff] tracking-wider font-bold block">
                  Curious Mind
                </span>
                <span className="text-xs font-bold text-white block">
                  Integrated MCA
                </span>
                <span className="text-[10px] text-slate-400 font-jakarta block">
                  Grade A+ · Autonomous
                </span>
              </div>
            </div>

            {/* Floating Quote Stamp */}
            <div className="absolute -top-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-[#070d18]/95 border border-[#00e5ff]/30 shadow-2xl backdrop-blur-md max-w-[220px]">
              <div className="flex items-center gap-2 text-[#00e5ff] mb-1">
                <Compass className="w-4 h-4" />
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider">
                  Guiding Creed
                </span>
              </div>
              <p className="text-xs font-serif italic text-slate-200 leading-snug">
                "Software must be as resilient as the earth it is designed to empower."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Journey Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="space-y-4 text-base sm:text-lg text-slate-300 font-jakarta leading-relaxed">
              <p>
                Born and raised in <strong className="text-white">Kattappana</strong>, the spice heartland of the Western Ghats in Kerala, I grew up observing firsthand how vulnerable agricultural livelihoods are to sudden climatic disruptions. This environment forged my engineering conviction early on: software should not exist merely as an abstract exercise on a screen, but as a practical lever that protects, streamlines, and elevates everyday lives.
              </p>
              <p>
                Currently in the final phase of my 5-year <strong className="text-white">Integrated MCA at Amal Jyothi College of Engineering (Autonomous)</strong>, I have maintained consistent academic distinction — earning places on the <span className="text-[#00e5ff] font-semibold">Director’s Honours List</span> with a peak SGPA of <span className="text-[#00e5ff] font-semibold">9.30 (S6)</span> and securing <span className="text-[#00e5ff] font-semibold">Semester Rank 1 (S4)</span> and <span className="text-[#00e5ff] font-semibold">Semester Rank 2 (S3, S5, S7)</span>.
              </p>
              <p>
                Beyond academics, I have applied my technical expertise in commercial industry settings at <strong className="text-white">Ainsoft Solutions Pvt. Ltd.</strong>, developing scalable REST APIs and responsive React components, and served my educational community by mentoring school students and managing institutional portals at <strong className="text-white">Vijayamatha Public School</strong>.
              </p>
            </div>

            {/* Core Working Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {personalInfo.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#00e5ff]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff]/60 group-hover:bg-[#00e5ff] transition-colors" />
                    <h3 className="font-space text-sm font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-jakarta leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Navigation Anchor */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e5ff] hover:text-white transition-colors group"
              >
                <span>Discover the Cardora Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors group"
              >
                <span>Inspect System Diagrams</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Photo Reveal */}
      <CinematicPhotoReveal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
