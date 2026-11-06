import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, ChevronDown, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MiluCharacter } from './MiluCharacter';
import type { CharacterPose } from './MiluCharacter';
import { soundEngine } from '../utils/audio';

interface MiluCompanionProps {
  activeSection: string;
}

interface SectionDialogue {
  pose: CharacterPose;
  title: string;
  message: string;
  actionText?: string;
  actionHref?: string;
}

const sectionDialogues: Record<string, SectionDialogue> = {
  hero: {
    pose: 'wave',
    title: 'Welcome to my world!',
    message: "Hi! I'm Milu Jiji ✨ Integrated MCA student & software builder. Scroll down or click me to explore!",
    actionText: 'Explore Cardora',
    actionHref: '#projects',
  },
  about: {
    pose: 'curious',
    title: 'Roots & Heritage',
    message: "Born in Kattappana, Kerala. I believe software should solve tangible, real-world human challenges.",
    actionText: 'View Life in Frames',
    actionHref: '#gallery',
  },
  skills: {
    pose: 'coding',
    title: 'Engineering Workbench',
    message: "Coding in Java, Python, React & Node. Cloud architectures on AWS & scalable REST APIs!",
  },
  projects: {
    pose: 'cardora-plant',
    title: 'Flagship Showcase: Cardora 🌱',
    message: "My smart cardamom ecosystem with real-time weather telemetry and agronomic rule engines!",
    actionText: 'View Cardora Specs',
    actionHref: '#projects',
  },
  journey: {
    pose: 'pointing',
    title: 'Temporal Continuum',
    message: "From top semester ranks at Amal Jyothi to full-stack engineering internships at Ainsoft Solutions!",
  },
  achievements: {
    pose: 'celebrating',
    title: 'Milestones & Honors 🏆',
    message: "6 consecutive semesters of Academic Honours, 9.30 peak SGPA, and NASA Space Apps team leadership!",
    actionText: 'Verify AES Portal',
    actionHref: '#certificates',
  },
  certificates: {
    pose: 'certificate',
    title: 'Accredited Credentials 📜',
    message: "Click on any certificate to unbox the official verified credential with live portal records!",
  },
  gallery: {
    pose: 'curious',
    title: 'Photographic Evidence 📸',
    message: "Real photos from my Ainsoft internship workstation, Azure Core Committee badge, and campus life!",
  },
  mindset: {
    pose: 'coding',
    title: 'Core Working Principles',
    message: "Pragmatic engineering, empathetic collaboration, and relentless curiosity in every line of code.",
  },
  contact: {
    pose: 'wave',
    title: "Let's Build Together! 🚀",
    message: "Open for software engineering opportunities, internships, and collaborative research initiatives!",
    actionText: 'Send a Message',
    actionHref: '#contact',
  },
};

const funEasterEggQuotes = [
  "✨ Fun fact: Cardora was inspired by cardamom farmers in my hometown of Kattappana!",
  "💻 I love clean code, modular architecture, and zero-compromise type safety!",
  "🏆 My academic honours from Amal Jyothi are cryptographically verified on the AES portal!",
  "🌱 Tip: Try clicking on any certificate card for a celebratory unboxing experience!",
  "🛰️ In NASA Space Apps 2024, our team tackled complex planetary telemetry data!",
  "🚀 You've discovered an easter egg! Keep exploring my digital world!",
];

export const MiluCompanion: React.FC<MiluCompanionProps> = ({ activeSection }) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showBubble, setShowBubble] = useState<boolean>(true);
  const [customQuoteIndex, setCustomQuoteIndex] = useState<number>(-1);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(false);
  const [bounceActive, setBounceActive] = useState<boolean>(false);

  // Sync section dialogue
  const currentDialogue = sectionDialogues[activeSection] || sectionDialogues.hero;

  // Auto-show bubble with gentle animation on section change
  useEffect(() => {
    setShowBubble(true);
    setCustomQuoteIndex(-1);
    const timer = setTimeout(() => {
      // Keep visible without auto-dismissing unless user minimizes
    }, 8000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleCharacterClick = () => {
    soundEngine.playPop();
    setBounceActive(true);
    setTimeout(() => setBounceActive(false), 600);

    // Trigger subtle confetti burst around character
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: 0.9, y: 0.85 },
        colors: ['#00e5ff', '#38bdf8', '#818cf8', '#fbbf24'],
        disableForReducedMotion: true,
      });
    } catch {
      // Non-blocking
    }

    // Cycle easter egg quotes
    setCustomQuoteIndex((prev) => (prev + 1) % funEasterEggQuotes.length);
    setShowBubble(true);
  };

  const handleAudioToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const state = soundEngine.toggle();
    setIsAudioOn(state);
  };

  return (
    <aside
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-none select-none transition-all duration-300"
      aria-label="Interactive Portfolio Mascot Companion"
    >
      {/* Speech Dialogue Bubble */}
      {!isMinimized && showBubble && (
        <div className="pointer-events-auto mb-3 max-w-xs sm:max-w-sm rounded-2xl bg-[#070d18]/95 border border-[#00e5ff]/30 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fadeIn text-left relative">
          {/* Top Companion Header */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
              <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#00e5ff]">
                Milu's Mascot Companion
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleAudioToggle}
                className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title={isAudioOn ? 'Mute Sound Effects' : 'Enable Polite Audio Effects'}
                aria-label="Toggle Sound"
              >
                {isAudioOn ? (
                  <Volume2 className="w-3.5 h-3.5 text-[#00e5ff]" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                onClick={() => setShowBubble(false)}
                className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Dismiss speech bubble"
                aria-label="Close message"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dialogue Message */}
          <h4 className="font-space text-xs font-bold text-white mb-1">
            {customQuoteIndex >= 0 ? '✨ Quick Insight' : currentDialogue.title}
          </h4>
          <p className="text-xs text-slate-300 font-jakarta leading-relaxed">
            {customQuoteIndex >= 0
              ? funEasterEggQuotes[customQuoteIndex]
              : currentDialogue.message}
          </p>

          {/* Contextual Action Link */}
          {currentDialogue.actionHref && currentDialogue.actionText && customQuoteIndex < 0 && (
            <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <a
                href={currentDialogue.actionHref}
                className="inline-flex items-center gap-1 text-[11px] font-mono-code font-bold text-[#00e5ff] hover:text-white transition-colors"
              >
                <span>{currentDialogue.actionText}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[10px] text-slate-400 font-mono-code">Click me for tips</span>
            </div>
          )}

          {/* Speech Bubble Arrow */}
          <div className="absolute -bottom-2 right-10 w-4 h-4 bg-[#070d18] border-r border-b border-[#00e5ff]/30 transform rotate-45" />
        </div>
      )}

      {/* Mascot Dock Container */}
      <div className="pointer-events-auto flex items-end gap-2">
        {/* Toggle Minimize Button */}
        <button
          onClick={() => {
            soundEngine.playPop();
            setIsMinimized(!isMinimized);
            if (isMinimized) setShowBubble(true);
          }}
          className="p-2 rounded-full bg-[#070d18]/90 hover:bg-[#070d18] border border-white/15 text-slate-400 hover:text-[#00e5ff] shadow-lg backdrop-blur-md transition-all hover:scale-110 mb-2"
          title={isMinimized ? 'Wake Milu Mascot' : 'Minimize Mascot'}
          aria-label="Toggle mascot companion"
        >
          {isMinimized ? <Sparkles className="w-4 h-4 text-[#00e5ff]" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Character Avatar Icon / Full Figure */}
        {isMinimized ? (
          <button
            onClick={() => {
              soundEngine.playPop();
              setIsMinimized(false);
              setShowBubble(true);
            }}
            className="group relative p-2 rounded-2xl bg-[#070d18] border border-[#00e5ff]/40 shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            title="Expand Milu Mascot Companion"
          >
            <MiluCharacter pose="wave" size="sm" interactive={false} className="w-8 h-10" />
            <span className="text-[11px] font-mono-code font-bold text-[#00e5ff] pr-1">Milu</span>
          </button>
        ) : (
          <div
            onClick={handleCharacterClick}
            className={`group cursor-pointer relative transition-transform duration-300 ${
              bounceActive ? 'animate-bounce' : 'hover:scale-105'
            }`}
            title="Click me for a playful reaction or tip!"
          >
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-[#00e5ff]/20 rounded-full blur-xl group-hover:bg-[#00e5ff]/35 transition-colors pointer-events-none" />

            {/* Render Character with current section pose */}
            <MiluCharacter
              pose={currentDialogue.pose}
              size="md"
              interactive={true}
              className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            />

            {/* Click Me Badge Tooltip */}
            <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono-code font-bold uppercase bg-white text-[#020408] shadow-md flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                Tap!
              </span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
