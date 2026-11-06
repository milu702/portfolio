import React, { useState } from 'react';
import { 
  Code, Layout, Server, Database, Cloud, Cpu, 
  Sparkles, Terminal, ArrowRight 
} from 'lucide-react';
import { skillsData, mindsetStatements } from '../data/skills';
import { MiluCharacter } from './MiluCharacter';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const icons = [Code, Layout, Server, Database, Cloud, Cpu];

  const currentCategory = skillsData[activeCategoryIndex];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] overflow-hidden">
      {/* Ambient background illumination */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#818cf8]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              02 // TECHNICAL LANDSCAPE
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Mindset & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">Technical Craft</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            A verified inventory of programming languages, architectures, frameworks, and tools applied in real academic research, industry internships, and production deployments.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {skillsData.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setSelectedSkill(null);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#00e5ff]/15 border-[#00e5ff] text-white shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                    : 'bg-white/[0.02] border-white/[0.07] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00e5ff]' : 'text-slate-400'}`} />
                <span>{cat.title}</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/10 font-mono-code">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Main Skills Matrix (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentCategory.skills.map((skill) => {
              const isSelected = selectedSkill === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative group ${
                    isSelected
                      ? 'bg-[#0b172a] border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.15)] ring-1 ring-[#00e5ff]/50'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.07] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                      <h4 className="font-space text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-white/10 text-slate-300 border border-white/10">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-jakarta leading-relaxed mt-2">
                    {skill.context}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#00e5ff] font-mono-code opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to inspect details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Terminal (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#070d18] border border-white/10 p-6 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00e5ff]" />
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-300">
                  SYSTEM_TELEMETRY.sh
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            <div className="font-mono-code text-xs space-y-3">
              <div>
                <span className="text-slate-500">// ACTIVE DOMAIN:</span>
                <p className="text-[#00e5ff] font-bold text-sm mt-0.5">{currentCategory.title}</p>
                <p className="text-slate-400 text-[11px] mt-0.5 leading-normal">{currentCategory.subtitle}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-slate-500">// SELECTED INSPECTOR:</span>
                {selectedSkill ? (
                  <div className="mt-2 p-3 rounded-lg bg-white/[0.03] border border-[#00e5ff]/30 text-slate-200">
                    <span className="text-white font-bold text-sm block">{selectedSkill}</span>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      {currentCategory.skills.find((s) => s.name === selectedSkill)?.context}
                    </p>
                    <div className="mt-2 text-[10px] text-[#00e5ff] uppercase tracking-wider font-semibold">
                      Status: Production Ready in Academic / Internship Projects
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-500 italic mt-1">
                    Select any skill node from the matrix on the left to review its applied context.
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400">
                <span className="text-slate-500 block mb-1">// PRINCIPLES:</span>
                <div className="space-y-1">
                  <div>✓ Strict defensive type safety & error handling</div>
                  <div>✓ Modular component encapsulation</div>
                  <div>✓ Zero fictional statistics or percentages</div>
                </div>
              </div>

              {/* Coding Mascot Cameo */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <MiluCharacter pose="coding" size="sm" className="w-12 h-16 shrink-0" />
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-[#00e5ff]/20 text-[11px] font-mono-code text-slate-300">
                  <span className="text-[#00e5ff] font-bold block mb-0.5">Milu is Coding:</span>
                  "Select any skill node to see how I implemented it in my projects!"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Defines My Working Style - Mindset Statements */}
        <div className="pt-12 border-t border-white/10 text-left">
          <div className="mb-8">
            <span className="text-xs font-mono-code text-[#00e5ff] tracking-widest uppercase font-semibold block mb-2">
              BEYOND SYNTAX // CORE WORKING STYLE
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Grounded in Real Experiences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mindsetStatements.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-300 relative group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#00e5ff]" />
                  <h4 className="font-space text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm font-medium text-slate-200 font-jakarta leading-relaxed mb-3">
                  "{item.statement}"
                </p>
                <p className="text-xs text-slate-400 font-jakarta border-l-2 border-white/10 pl-3 leading-relaxed">
                  <strong className="text-slate-300">Context: </strong>
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
