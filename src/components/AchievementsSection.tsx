import React, { useState } from 'react';
import { Award, Trophy, Users, Shield, Rocket } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export const AchievementsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academics', 'Leadership', 'Hackathon', 'Extracurricular'];

  const filteredAchievements = activeCategory === 'All'
    ? achievementsData
    : achievementsData.filter((a) => a.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Academics': return Award;
      case 'Leadership': return Users;
      case 'Hackathon': return Rocket;
      case 'Extracurricular': return Shield;
      default: return Trophy;
    }
  };

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              05 // MILESTONES & LEADERSHIP
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Scholastic Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">Leadership</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Verified milestones demonstrating academic consistency, hackathon stewardship, and institutional service.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] border-transparent font-bold shadow-md shadow-[#00e5ff]/20'
                    : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Statistics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-[#00e5ff]">
              Rank 1 & 2
            </span>
            <p className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mt-1">
              Department Ranks (S4, S3, S5, S7)
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-white">
              NASA Lead
            </span>
            <p className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mt-1">
              Space Apps Team Lead
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-[#818cf8]">
              Elected CR
            </span>
            <p className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mt-1">
              Class Representative (IMCA)
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-emerald-400">
              Azure Head
            </span>
            <p className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mt-1">
              Medical Core Committee
            </p>
          </div>
        </div>

        {/* Editorial Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredAchievements.map((item) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#070d18] border border-white/[0.08] hover:border-[#00e5ff]/40 shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#00e5ff] border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-white/[0.05] text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-space text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <span className="text-xs font-mono-code text-[#38bdf8] block mt-1">
                    {item.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 font-jakarta mt-3 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-code text-slate-400">
                  <span className="text-slate-500 font-semibold uppercase">{item.category}</span>
                  <span className="text-[#00e5ff]">{item.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
