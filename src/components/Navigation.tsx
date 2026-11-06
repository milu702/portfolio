import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { soundEngine } from '../utils/audio';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle atmospheric web audio synthesizer for cinematic experience
  const toggleSound = () => {
    if (!soundEnabled) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        
        // Gentle cinematic drone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, ctx.currentTime); // A2 fundamental
        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        setAudioCtx(ctx);
        setSoundEnabled(true);
        soundEngine.toggle(true);
      } catch {
        setSoundEnabled(false);
        soundEngine.toggle(false);
      }
    } else {
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
      setSoundEnabled(false);
      soundEngine.toggle(false);
    }
  };

  const navLinks = [
    { label: 'Introduction', href: '#hero' },
    { label: 'Who Am I', href: '#about' },
    { label: 'Mindset', href: '#skills' },
    { label: 'Cinematic Worlds', href: '#projects' },
    { label: 'Timeline', href: '#journey' },
    { label: 'Milestones', href: '#achievements' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Architecture', href: '#gallery' },
    { label: 'Connect', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#020408]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 cursor-pointer select-none"
            aria-label="Milu Jiji Home"
          >
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#00e5ff]/20 to-[#818cf8]/20 border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00e5ff]/40">
              <span className="font-cinzel text-sm font-black text-white tracking-wider">MJ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-sm font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#00e5ff] transition-colors">
                  Milu Jiji
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
              </div>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono-code">
                Integrated MCA · AJCE
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/20 shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Audio, Resume, Contact & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Atmosphere */}
            <button
              onClick={toggleSound}
              type="button"
              className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-[#00e5ff] transition-colors"
              title={soundEnabled ? 'Mute Ambient Atmosphere' : 'Enable Ambient Cinematic Drone'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#00e5ff] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePdf}
              download="Milu_Jiji_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.06] hover:bg-[#00e5ff]/15 border border-white/10 hover:border-[#00e5ff]/40 text-slate-200 hover:text-white transition-all duration-300 group shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#00e5ff] group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-[#020408]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 border-b border-white/10 animate-fadeIn">
          <div className="flex flex-col gap-2 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 text-base font-medium tracking-wider uppercase text-slate-300 hover:text-[#00e5ff] hover:bg-white/[0.04] rounded-lg transition-colors border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3 border-t border-white/10">
            <a
              href={personalInfo.resumePdf}
              download="Milu_Jiji_Resume.pdf"
              className="w-full py-3 rounded-xl bg-white/[0.06] border border-white/10 text-center text-sm font-semibold tracking-wider uppercase text-white flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#00e5ff]" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-center text-sm font-bold tracking-wider uppercase text-[#020408]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};
