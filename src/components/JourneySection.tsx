import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award, Download, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/timeline';

export const JourneySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'experience' | 'education'>('both');

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] overflow-hidden">
      {/* Background atmospheric gradient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#818cf8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              04 // TEMPORAL CONTINUUM
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            My Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">Through Time</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Connecting industry software development internships with academic distinction at Amal Jyothi College of Engineering.
          </p>

          {/* Tab Filter */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'both'
                  ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Unified Timeline
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education & Academics
            </button>
          </div>
        </div>

        {/* Unified Two-Column Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* LEFT: PROFESSIONAL INTERNSHIPS (Distinct Tech Terminal Visual Treatment) */}
          {(activeTab === 'both' || activeTab === 'experience') && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-space text-2xl font-bold text-white">
                    Industry Experience & Internships
                  </h3>
                  <span className="text-xs font-mono-code text-slate-400">
                    Commercial development & pedagogy
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 sm:p-8 rounded-2xl bg-[#070d18] border border-white/10 hover:border-[#00e5ff]/40 shadow-xl transition-all duration-300 relative group"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30">
                        {item.highlightBadge}
                      </span>
                      <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.period}
                      </span>
                    </div>

                    <h4 className="font-space text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                      {item.title}
                    </h4>

                    <div className="text-sm font-medium text-slate-300 mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-[#38bdf8] font-semibold">{item.organization}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono-code">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-jakarta mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Contributions Checklist */}
                    <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-jakarta">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    {item.technologies && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.04] text-slate-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Certificate Download Action */}
                    {item.certificateUrl && (
                      <div className="mt-4 pt-3 border-t border-white/[0.06]">
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono-code text-[#00e5ff] hover:text-white transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>View Official Internship Certificate</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RIGHT: ACADEMIC PEDIGREE (Distinct Editorial Parchment / Honours Treatment) */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-[#818cf8]/10 text-[#818cf8] border border-[#818cf8]/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-space text-2xl font-bold text-white">
                    Academic Pedigree & Honors
                  </h3>
                  <span className="text-xs font-mono-code text-slate-400">
                    Scholastic distinction from high school to postgrad
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {educationData.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#818cf8]/40 shadow-xl transition-all duration-300 relative group"
                  >
                    {/* Top Score / Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-[#818cf8]/15 text-[#818cf8] border border-[#818cf8]/30">
                        {item.highlightBadge}
                      </span>
                      <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.period}
                      </span>
                    </div>

                    <h4 className="font-space text-xl font-bold text-white group-hover:text-[#818cf8] transition-colors">
                      {item.title}
                    </h4>

                    <div className="text-sm font-medium text-slate-300 mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-white font-semibold">{item.organization}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono-code">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    {item.scoreOrRole && (
                      <div className="mt-2 inline-block px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono-code font-bold text-[#00e5ff]">
                        Result: {item.scoreOrRole}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 font-jakarta mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Academic Distinctions Checklist */}
                    <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-jakarta">
                          <Award className="w-3.5 h-3.5 text-[#818cf8] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Foundational Coursework */}
                    {item.technologies && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Academic Distinction Portal Verification */}
                    {item.certificateUrl && (
                      <div className="mt-4 pt-3 border-t border-white/[0.06]">
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono-code text-[#818cf8] hover:text-white transition-colors"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Verify Live Academic Honours Portal (AES)</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
