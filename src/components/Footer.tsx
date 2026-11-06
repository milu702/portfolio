import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#020408] border-t border-white/[0.08] text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00e5ff]/20 to-[#818cf8]/20 border border-white/10 flex items-center justify-center">
            <span className="font-cinzel text-base font-bold text-white tracking-widest">MJ</span>
          </div>
          <div>
            <span className="font-cinzel text-sm font-bold tracking-widest text-white uppercase block">
              Milu Jiji
            </span>
            <span className="text-[11px] font-mono-code text-slate-400">
              Integrated MCA · Amal Jyothi College of Engineering (Autonomous)
            </span>
          </div>
        </div>

        {/* Center: Live Telemetry Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono-code text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTFOLIO_CORE // STABLE</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">KERALA, INDIA</span>
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono-code text-slate-500">
            © {new Date().getFullYear()} Milu Jiji
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#00e5ff]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
