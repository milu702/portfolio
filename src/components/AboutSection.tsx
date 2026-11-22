import React, { useState, useEffect, useRef } from 'react';
import { Compass, ArrowRight, ZoomIn, Sparkles, Terminal, RotateCcw, FastForward } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { MiluCharacter } from './MiluCharacter';
import { CinematicPhotoReveal, type PhotoRevealData } from './CinematicPhotoReveal';
import { soundEngine } from '../utils/audio';

const CREED_QUOTE = "Software must be as resilient as the earth it is designed to empower.";
const PHILOSOPHY_TEXT = "Turning domain challenges into resilient, human-centered digital platforms.";

interface TextChunk {
  text: string;
  type?: 'bold' | 'highlight' | 'normal';
}

const JOURNEY_PARAGRAPHS: TextChunk[][] = [
  // Paragraph 1: Roots & Engineering Conviction
  [
    { text: "Born and raised in ", type: 'normal' },
    { text: "Kattappana", type: 'bold' },
    { text: ", the spice heartland of the Western Ghats in Kerala, I grew up observing firsthand how vulnerable agricultural livelihoods are to sudden climatic disruptions. This environment forged my engineering conviction early on: software should not exist merely as an abstract exercise on a screen, but as a practical lever that protects, streamlines, and elevates everyday lives.", type: 'normal' }
  ],
  // Paragraph 2: Academic Distinctions
  [
    { text: "Currently in the final phase of my 5-year ", type: 'normal' },
    { text: "Integrated MCA at Amal Jyothi College of Engineering (Autonomous)", type: 'bold' },
    { text: ", I have maintained consistent academic distinction — earning places on the ", type: 'normal' },
    { text: "Director’s Honours List", type: 'highlight' },
    { text: " with a peak SGPA of ", type: 'normal' },
    { text: "9.30 (S6)", type: 'highlight' },
    { text: " and securing ", type: 'normal' },
    { text: "Semester Rank 1 (S4)", type: 'highlight' },
    { text: " and ", type: 'normal' },
    { text: "Semester Rank 2 (S3, S5, S7)", type: 'highlight' },
    { text: ".", type: 'normal' }
  ],
  // Paragraph 3: Industry & Community Impact
  [
    { text: "Beyond academics, I have applied my technical expertise in commercial industry settings at ", type: 'normal' },
    { text: "Ainsoft Solutions Pvt. Ltd.", type: 'bold' },
    { text: ", developing scalable REST APIs and responsive React components, and served my educational community by mentoring school students and managing institutional portals at ", type: 'normal' },
    { text: "Vijayamatha Public School", type: 'bold' },
    { text: ".", type: 'normal' }
  ]
];

// Pre-calculate paragraph lengths
const PARA_LENGTHS = JOURNEY_PARAGRAPHS.map((chunks) =>
  chunks.reduce((sum, chunk) => sum + chunk.text.length, 0)
);
const TOTAL_JOURNEY_CHARS = PARA_LENGTHS.reduce((a, b) => a + b, 0);

export const AboutSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoRevealData | null>(null);

  // Live Typewriter / Writing Animation State for Guiding Creed
  const [creedText, setCreedText] = useState<string>('');
  const [isTypingCreed, setIsTypingCreed] = useState<boolean>(true);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  // Typewriter Animation for Narrative Philosophy Headline
  const [philosophyText, setPhilosophyText] = useState<string>('');
  const [isTypingPhilosophy, setIsTypingPhilosophy] = useState<boolean>(true);

  // Live Typewriter Animation for Editorial Journey Paragraphs
  const [typedJourneyChars, setTypedJourneyChars] = useState<number>(0);
  const [isJourneyTyping, setIsJourneyTyping] = useState<boolean>(true);

  const creedIndexRef = useRef<number>(0);
  const philosophyIndexRef = useRef<number>(0);
  const journeyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Run Creed Typing Animation
  const startCreedTyping = () => {
    soundEngine.playPop();
    setCreedText('');
    setIsTypingCreed(true);
    creedIndexRef.current = 0;

    const interval = setInterval(() => {
      if (creedIndexRef.current < CREED_QUOTE.length) {
        setCreedText(CREED_QUOTE.slice(0, creedIndexRef.current + 1));
        creedIndexRef.current++;
      } else {
        setIsTypingCreed(false);
        clearInterval(interval);
      }
    }, 32);
  };

  // Run Philosophy Typing Animation
  const startPhilosophyTyping = () => {
    setPhilosophyText('');
    setIsTypingPhilosophy(true);
    philosophyIndexRef.current = 0;

    const interval = setInterval(() => {
      if (philosophyIndexRef.current < PHILOSOPHY_TEXT.length) {
        setPhilosophyText(PHILOSOPHY_TEXT.slice(0, philosophyIndexRef.current + 1));
        philosophyIndexRef.current++;
      } else {
        setIsTypingPhilosophy(false);
        clearInterval(interval);
      }
    }, 28);
  };

  // Run Editorial Journey Typing Animation
  const startJourneyTyping = () => {
    soundEngine.playPop();
    if (journeyIntervalRef.current) {
      clearInterval(journeyIntervalRef.current);
    }
    setTypedJourneyChars(0);
    setIsJourneyTyping(true);

    let currentChars = 0;
    journeyIntervalRef.current = setInterval(() => {
      currentChars += 3;
      if (currentChars >= TOTAL_JOURNEY_CHARS) {
        setTypedJourneyChars(TOTAL_JOURNEY_CHARS);
        setIsJourneyTyping(false);
        if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
        soundEngine.playChime();
      } else {
        setTypedJourneyChars(currentChars);
      }
    }, 14);
  };

  const skipJourneyTyping = () => {
    if (journeyIntervalRef.current) {
      clearInterval(journeyIntervalRef.current);
    }
    setTypedJourneyChars(TOTAL_JOURNEY_CHARS);
    setIsJourneyTyping(false);
  };

  // Initialize typing animations when mounted
  useEffect(() => {
    const timer1 = setTimeout(() => {
      startCreedTyping();
    }, 300);

    const timer2 = setTimeout(() => {
      startPhilosophyTyping();
    }, 600);

    const timer3 = setTimeout(() => {
      startJourneyTyping();
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    };
  }, []);

  // Cursor Blink Timer
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

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
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#818cf8]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Editorial Tag */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-600 dark:text-slate-300">
              01 // ORIGINS & PERSPECTIVE
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who is <span className="gradient-text-cyan">Milu Jiji?</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 font-jakarta max-w-2xl">
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
              className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#0284c7]/50 dark:hover:border-[#00e5ff]/50 bg-slate-100 dark:bg-[#070d18] shadow-2xl aspect-[3/4] max-w-sm mx-auto lg:max-w-none group cursor-pointer transition-all duration-500"
              title="Click to inspect photograph in interactive cinematic viewer"
            >
              <img
                src={personalInfo.avatarImage}
                alt="Milu Jiji portrait"
                className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#020408] via-transparent to-transparent opacity-70" />
              
              {/* Tap to Reveal Prompt */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#020408]/80 text-[#0284c7] dark:text-[#00e5ff] text-xs font-mono-code border border-[#0284c7]/30 dark:border-[#00e5ff]/30 opacity-90 group-hover:opacity-100 transition-opacity shadow-sm">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </div>

              {/* College Credentials Card at bottom of photo */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-[#020408]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={personalInfo.collegeLogo}
                    alt="Amal Jyothi College of Engineering logo"
                    className="w-10 h-10 object-contain p-1 rounded-lg bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10"
                  />
                  <div>
                    <h3 className="text-xs font-bold font-jakarta text-slate-900 dark:text-white">
                      Amal Jyothi Autonomous
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono-code">
                      Class of 2022 – 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Mascot Cameo Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 rounded-2xl overflow-hidden border border-[#0284c7]/30 dark:border-[#00e5ff]/30 shadow-2xl bg-white dark:bg-[#070d18] p-3 hidden sm:flex items-center gap-2.5 backdrop-blur-md">
              <MiluCharacter pose="curious" size="sm" mode="photo" interactive={false} className="w-12 h-12" />
              <div className="text-left pr-2">
                <span className="text-[9px] uppercase font-mono-code text-[#0284c7] dark:text-[#00e5ff] tracking-wider font-bold block">
                  Curious Mind
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Integrated MCA
                </span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-jakarta block">
                  Grade A+ · Autonomous
                </span>
              </div>
            </div>

            {/* Floating Quote Stamp with Live Writing / Typewriter Animation */}
            <div
              onClick={startCreedTyping}
              className="absolute -top-4 left-2 sm:-top-6 sm:-left-6 p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#070d18] border border-slate-200 dark:border-[#00e5ff]/40 shadow-xl backdrop-blur-md max-w-[210px] sm:max-w-[250px] cursor-pointer group transition-all duration-300 hover:scale-105 select-none"
              title="Click to replay writing animation"
            >
              <div className="flex items-center justify-between text-[#0284c7] dark:text-[#00e5ff] mb-1.5 pb-1 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider">
                    Guiding Creed
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono-code text-slate-500 dark:text-slate-400 group-hover:text-[#0284c7] dark:group-hover:text-[#00e5ff] transition-colors">
                  <Sparkles className="w-2.5 h-2.5 text-amber-500 dark:text-amber-400" />
                  <span>{isTypingCreed ? 'writing...' : 'replay'}</span>
                </div>
              </div>

              {/* Typed Out Quote Text with Live Blinking Cursor */}
              <p className="text-xs font-serif italic text-slate-800 dark:text-slate-200 leading-snug min-h-[3.6rem]">
                "{creedText}
                <span
                  className={`inline-block w-1.5 h-3.5 ml-0.5 bg-[#0284c7] dark:bg-[#00e5ff] align-baseline transition-opacity ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                />"
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Journey Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Live Writing Terminal Intro Banner */}
            <div
              onClick={startPhilosophyTyping}
              className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-[#00e5ff]/25 shadow-sm flex items-center gap-2.5 cursor-pointer group transition-all hover:border-[#0284c7]/50 dark:hover:border-[#00e5ff]/50"
              title="Click to replay live writing animation"
            >
              <Terminal className="w-4 h-4 text-[#0284c7] dark:text-[#00e5ff] shrink-0" />
              <div className="text-xs font-mono-code text-slate-700 dark:text-slate-300 flex-1">
                <span className="text-[#0284c7] dark:text-[#00e5ff] font-bold mr-1.5">&gt;</span>
                <span>{philosophyText}</span>
                <span
                  className={`inline-block w-1.5 h-3.5 ml-0.5 bg-[#0284c7] dark:bg-[#00e5ff] align-baseline transition-opacity ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              <span className="text-[10px] font-mono-code text-slate-500 dark:text-slate-400 group-hover:text-[#0284c7] dark:group-hover:text-[#00e5ff] shrink-0 transition-colors">
                {isTypingPhilosophy ? 'typing...' : 'click to replay'}
              </span>
            </div>

            {/* Narrative Live Writing Header Controls */}
            <div className="flex items-center justify-between pb-1 text-xs font-mono-code border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#00e5ff]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  {isJourneyTyping ? 'Live Narrative Writing...' : 'Author Editorial Narrative'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {isJourneyTyping ? (
                  <button
                    onClick={skipJourneyTyping}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-slate-200 transition-all font-semibold text-[11px]"
                    title="Skip typing animation to read immediately"
                  >
                    <FastForward className="w-3 h-3 text-[#0284c7] dark:text-[#00e5ff]" />
                    <span>Skip to End</span>
                  </button>
                ) : (
                  <button
                    onClick={startJourneyTyping}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/10 text-[#0284c7] dark:text-[#00e5ff] transition-all font-semibold text-[11px]"
                    title="Replay live typewriter animation"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Replay Writing</span>
                  </button>
                )}
              </div>
            </div>

            {/* Dynamic Typewriter Narrative Container for the 3 Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-jakarta leading-relaxed min-h-[16rem]">
              {JOURNEY_PARAGRAPHS.map((chunks, pIndex) => {
                // Calculate starting index and end for this paragraph
                const pStart = PARA_LENGTHS.slice(0, pIndex).reduce((a, b) => a + b, 0);
                const pLength = PARA_LENGTHS[pIndex];
                const pEnd = pStart + pLength;

                // Characters available for this paragraph
                const pChars = Math.max(0, Math.min(pLength, typedJourneyChars - pStart));
                if (pChars === 0) return null;

                const isCurrentlyActivePara = isJourneyTyping && typedJourneyChars >= pStart && typedJourneyChars < pEnd;

                let cumulativeChunkChars = 0;

                return (
                  <p key={pIndex}>
                    {chunks.map((chunk, cIndex) => {
                      const chunkStart = cumulativeChunkChars;
                      cumulativeChunkChars += chunk.text.length;

                      const visibleCount = Math.max(0, Math.min(chunk.text.length, pChars - chunkStart));
                      if (visibleCount === 0) return null;

                      const visibleText = chunk.text.slice(0, visibleCount);

                      if (chunk.type === 'bold') {
                        return (
                          <strong key={cIndex} className="text-slate-900 dark:text-white font-bold">
                            {visibleText}
                          </strong>
                        );
                      }
                      if (chunk.type === 'highlight') {
                        return (
                          <span key={cIndex} className="text-[#0284c7] dark:text-[#00e5ff] font-semibold">
                            {visibleText}
                          </span>
                        );
                      }
                      return <span key={cIndex}>{visibleText}</span>;
                    })}
                    {/* Live blinking typewriter cursor on currently typing paragraph */}
                    {isCurrentlyActivePara && (
                      <span
                        className={`inline-block w-2 h-4 sm:h-5 ml-1 bg-[#0284c7] dark:bg-[#00e5ff] align-middle rounded-xs transition-opacity ${
                          cursorVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    )}
                  </p>
                );
              })}
            </div>

            {/* Core Working Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              {personalInfo.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] border border-slate-200 dark:border-white/[0.06] hover:border-[#0284c7]/40 dark:hover:border-[#00e5ff]/30 shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0284c7] dark:bg-[#00e5ff]/60 group-hover:bg-[#0284c7] dark:group-hover:bg-[#00e5ff] transition-colors" />
                    <h3 className="font-space text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0284c7] dark:group-hover:text-[#00e5ff] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-jakarta leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Navigation Anchor */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284c7] dark:text-[#00e5ff] hover:text-[#0369a1] dark:hover:text-white transition-colors group"
              >
                <span>Discover the Cardora Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors group"
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
