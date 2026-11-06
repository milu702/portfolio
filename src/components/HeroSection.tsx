import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Download, Layers, Send, ExternalLink, MapPin, ZoomIn } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { MiluCharacter } from './MiluCharacter';
import { CinematicPhotoReveal, type PhotoRevealData } from './CinematicPhotoReveal';
import { soundEngine } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoRevealData | null>(null);
  const [mascotBubble, setMascotBubble] = useState<string>("Hi! I'm Milu ✨ Welcome to my living world!");

  // Subtle interactive particle canvas for cinematic ambient light
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ['#00e5ff', '#818cf8', '#38bdf8', '#c084fc'];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient radial gradient behind center
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        50,
        width * 0.5,
        height * 0.4,
        width * 0.6
      );
      gradient.addColorStop(0, 'rgba(14, 30, 64, 0.35)');
      gradient.addColorStop(0.5, 'rgba(6, 12, 28, 0.15)');
      gradient.addColorStop(1, 'rgba(2, 4, 8, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particles and faint connective lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#00e5ff';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handlePortraitClick = () => {
    soundEngine.playChime();
    setSelectedPhoto({
      src: personalInfo.portraitImage,
      alt: "Milu Jiji Executive Corporate Portrait",
      title: "Executive Professional Portrait",
      caption: "Official formal portrait of Milu Jiji, aspiring software developer and Integrated MCA scholar at Amal Jyothi College of Engineering (Autonomous).",
      location: "Kerala, India",
      date: "2026 Academic Season",
      coordinates: "9.7499° N, 77.1354° E",
      mascotNote: "This is my executive portrait! Ready for software engineering and real-world impact!",
    });
  };

  const handleMascotGreet = () => {
    soundEngine.playPop();
    const greetings = [
      "Hi! Tap my photo on the right for a cinematic reveal! 📸",
      "I built Cardora for cardamom farmers in my hometown of Kattappana! 🌱",
      "Check out my verified 9.30 SGPA on the AES portal in Certificates! 🏆",
      "I love full-stack engineering with React, Node, and Python! 💻",
    ];
    setMascotBubble(greetings[Math.floor(Math.random() * greetings.length)]);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408]/40 to-[#020408] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00e5ff]/10 via-[#3b82f6]/10 to-[#818cf8]/10 rounded-full blur-[140px] pointer-events-none animate-ambient z-0" />

      {/* Main Content Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Editorial Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          {/* Animated Mascot Cameo Greeting Header */}
          <div className="flex items-center gap-3 mb-6">
            <div onClick={handleMascotGreet} className="cursor-pointer group relative">
              <MiluCharacter pose="wave" size="sm" className="w-14 h-18 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[8px] font-mono-code font-bold bg-[#00e5ff] text-[#020408] shadow">
                Tap!
              </span>
            </div>

            <div className="relative p-3 rounded-2xl bg-white/[0.04] border border-[#00e5ff]/30 backdrop-blur-md shadow-lg max-w-sm">
              <span className="text-[10px] font-mono-code uppercase text-[#00e5ff] block font-bold mb-0.5">
                Milu Says:
              </span>
              <p className="text-xs text-slate-200 font-jakarta leading-snug">
                "{mascotBubble}"
              </p>
            </div>
          </div>

          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6 shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
            <span className="text-xs font-mono-code font-medium text-slate-300 tracking-wider uppercase">
              Integrated MCA Scholar · Amal Jyothi Autonomous
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono-code text-[#00e5ff] flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Kattappana, Kerala
            </span>
          </div>

          {/* Oversized Cinematic Typography Name */}
          <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 tracking-tight leading-[1.05] mb-4">
            MILU JIJI
          </h1>

          {/* Sub-headline & Vision Statement */}
          <div className="relative pl-5 border-l-2 border-[#00e5ff] mb-6">
            <p className="font-space text-xl sm:text-2xl lg:text-3xl font-medium text-white tracking-wide">
              {personalInfo.tagline}
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-400 font-jakarta max-w-2xl leading-relaxed">
              Aspiring software developer with a practical mindset for full-stack engineering, 
              scalable REST APIs, and applied agricultural computing. Architect of{' '}
              <a href="#projects" className="text-[#00e5ff] hover:underline font-semibold">
                Cardora
              </a>
              {' '}— a smart agro-climatic decision support system.
            </p>
          </div>

          {/* Metric Highlights Pill Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl mb-8">
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="font-mono-code text-lg sm:text-2xl font-bold text-[#00e5ff]">
                Rank 1 & 2
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-jakarta mt-0.5">
                Semester Top Ranker
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="font-mono-code text-lg sm:text-2xl font-bold text-white">
                Full-Stack
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-jakarta mt-0.5">
                React · Node · Python
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="font-mono-code text-lg sm:text-2xl font-bold text-[#818cf8]">
                2022–2027
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-jakarta mt-0.5">
                Integrated MCA Batch
              </div>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] text-sm font-bold tracking-wider uppercase hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-[#020408]" />
              <span>Explore My World</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#00e5ff]/50 text-white text-sm font-semibold tracking-wider uppercase backdrop-blur-md transition-all duration-300"
            >
              <Layers className="w-4 h-4 text-[#00e5ff]" />
              <span>View Projects</span>
            </a>

            <a
              href={personalInfo.resumePdf}
              download="Milu_Jiji_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Right Column: Actual Portrait Revealed with Mask & Depth (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div
            onClick={handlePortraitClick}
            className="relative w-full max-w-md aspect-[4/5] group perspective-1000 cursor-pointer"
            title="Click to reveal photograph in interactive cinematic viewer"
          >
            {/* Ambient Background Aura behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-b from-[#00e5ff]/25 via-[#3b82f6]/20 to-[#818cf8]/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700" />

            {/* Angular Frame Border */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 group-hover:border-[#00e5ff]/60 bg-[#070d18] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              {/* Actual High Resolution Portrait of Milu Jiji */}
              <img
                src={personalInfo.portraitImage}
                alt="Milu Jiji — Aspiring Software Developer"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />

              {/* Cinematic Vignette & Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-80" />

              {/* Click to Expand Prompt */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020408]/80 text-[#00e5ff] text-xs font-mono-code border border-[#00e5ff]/30 opacity-90 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </div>

              {/* Editorial Frame Watermark */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-md bg-[#020408]/70 backdrop-blur-md border border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                <span className="text-[11px] font-mono-code font-semibold tracking-widest uppercase text-slate-200">
                  PORTFOLIO // 2026–27
                </span>
              </div>

              {/* Lower Badge Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-[#020408]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-white font-cinzel text-base font-bold tracking-wider">
                    Milu Jiji
                  </h2>
                  <p className="text-xs text-[#00e5ff] font-mono-code mt-0.5">
                    MCA Scholar · Amal Jyothi
                  </p>
                </div>
                <div
                  className="p-2.5 rounded-lg bg-white/[0.08] hover:bg-[#00e5ff]/20 text-white hover:text-[#00e5ff] border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Floating Technical Coordinate Badge */}
            <div className="absolute -bottom-5 -right-4 hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-[#070d18]/90 border border-[#00e5ff]/30 shadow-xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-mono-code uppercase tracking-wider">Coordinates</div>
                <div className="text-xs font-mono-code font-bold text-white">9.7499° N, 77.1354° E</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Bottom Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer text-slate-400 hover:text-[#00e5ff] transition-colors"
        aria-label="Scroll to Explore"
      >
        <span className="text-[10px] uppercase font-mono-code tracking-[0.25em] text-slate-400 group-hover:text-[#00e5ff] transition-colors">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#00e5ff]/50 flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full bg-[#00e5ff] animate-bounce" />
        </div>
      </a>

      {/* Interactive Photo Reveal Modal */}
      <CinematicPhotoReveal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
