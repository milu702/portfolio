import React, { useState } from 'react';
import { 
  BookOpen, Users, Compass, ShieldCheck, 
  Sparkles, HeartHandshake, Lightbulb, GitBranch 
} from 'lucide-react';

interface MindsetPillar {
  number: string;
  title: string;
  coreStatement: string;
  groundedExperience: string;
  icon: typeof BookOpen;
  tags: string[];
}

export const MindsetSection: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const pillars: MindsetPillar[] = [
    {
      number: '01',
      title: 'Problem-Solving & Systems Architecture',
      coreStatement: 'Deconstructing multidimensional real-world challenges into deterministic, resilient software algorithms.',
      groundedExperience: 'Demonstrated in Cardora: analyzing the agro-climatic fragility of cardamom crops and translating weather telemetry into precise, actionable irrigation and pesticide schedules.',
      icon: Lightbulb,
      tags: ['Algorithmic Logic', 'Cardora Engine', 'Systems Decomposition']
    },
    {
      number: '02',
      title: 'Teaching & Knowledge Sharing',
      coreStatement: 'Explaining intricate technical and scientific concepts with absolute clarity, empathy, and patience.',
      groundedExperience: 'Developed as Teaching Intern at Vijayamatha Public School: instructing classes 5–7 in Mathematics and Science, simplifying difficult curricula through visual pedagogy.',
      icon: BookOpen,
      tags: ['STEM Mentorship', 'Pedagogical Clarity', 'Patience']
    },
    {
      number: '03',
      title: 'Servant Leadership & Governance',
      coreStatement: 'Leading from within the team, removing roadblocks, and maintaining calm resolve during high-stakes milestones.',
      groundedExperience: 'Elected Class Representative for the Integrated MCA batch at Amal Jyothi; appointed Head of the Medical Core Committee overseeing public safety during Azure cultural fest.',
      icon: Compass,
      tags: ['Elected CR', 'Azure Festival Head', 'Safety Logistics']
    },
    {
      number: '04',
      title: 'Collaborative Teamwork',
      coreStatement: 'Fostering unified psychological safety, shared code ownership, and high-velocity sprint execution.',
      groundedExperience: 'Steered interdisciplinary teams as Team Lead in the NASA Space Apps Challenge and SIH Tech Tacticians, orchestrating parallel development under strict deadlines.',
      icon: Users,
      tags: ['NASA Hackathon', 'Tech Tacticians', 'Sprint Synergy']
    },
    {
      number: '05',
      title: 'Continuous Learning & Synthesis',
      coreStatement: 'Relentlessly pursuing emerging technologies, from cloud infrastructure to foundational AI paradigms.',
      groundedExperience: 'Attained verified certifications in Oracle Cloud AI Foundations, AWS Fundamentals, and Scrum delivery while maintaining top departmental semester ranks.',
      icon: Sparkles,
      tags: ['Oracle AI', 'AWS Cloud', 'Scrum Certified']
    },
    {
      number: '06',
      title: 'Resilient Adaptability',
      coreStatement: 'Quickly absorbing unfamiliar tech stacks and thriving across disparate working environments.',
      groundedExperience: 'Seamlessly transitioned between hybrid software engineering at Ainsoft Solutions, classroom pedagogy at Vijayamatha, and academic research at Amal Jyothi.',
      icon: GitBranch,
      tags: ['Hybrid Internship', 'Context Switching', 'Rapid Absorption']
    },
    {
      number: '07',
      title: 'Empathetic Communication',
      coreStatement: 'Bridging the linguistic gap between technical engineers, non-technical clients, and institutional leaders.',
      groundedExperience: 'Acted as official student liaison between the MCA department head, faculty council, and student body, ensuring mutual alignment and conflict resolution.',
      icon: HeartHandshake,
      tags: ['Liaison Stewardship', 'Active Listening', 'Conflict Resolution']
    },
    {
      number: '08',
      title: 'Rigorous Organization & Discipline',
      coreStatement: 'Maintaining meticulous code documentation, strict version control, and dependable execution standards.',
      groundedExperience: 'Instilled through National Cadet Corps (NCC) drill discipline and applied daily in Git branch management, database normalization, and structured Postman API testing.',
      icon: ShieldCheck,
      tags: ['NCC Discipline', 'Defensive Coding', 'Postman Testing']
    }
  ];

  const activePillar = pillars[activePillarIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <section id="mindset" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              08 // PRINCIPLES & STRENGTHS
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            What Defines <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">My Approach?</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Eight authentic working principles forged through academic leadership, corporate internships, hackathon stewardship, and civic service.
          </p>
        </div>

        {/* Interactive Kinetic Pillar Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Pillar Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-2 text-left">
            {pillars.map((pillar, idx) => {
              const isCurrent = activePillarIndex === idx;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex items-center justify-between group ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[#071329] to-[#0b1c3d] border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.15)] translate-x-2'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-slate-500 group-hover:text-[#00e5ff]">
                      {pillar.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#00e5ff]' : 'text-slate-400'}`} />
                    <span className={`font-space text-sm font-semibold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                      {pillar.title.split('&')[0]}
                    </span>
                  </div>
                  <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#00e5ff]' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Expanded Cinematic Showcase Display (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#071329] to-[#040814] border border-white/15 p-8 sm:p-10 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 shadow-sm">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono-code uppercase tracking-widest text-[#00e5ff]">
                    PILLAR {activePillar.number} OF 08
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                    {activePillar.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Core Engineering Philosophy
                </span>
                <p className="font-space text-lg sm:text-xl font-medium text-white leading-relaxed">
                  "{activePillar.coreStatement}"
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#38bdf8] block mb-2 font-semibold">
                  Grounded Real-World Experience
                </span>
                <p className="text-sm text-slate-300 font-jakarta leading-relaxed">
                  {activePillar.groundedExperience}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Key Verification Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {activePillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono-code bg-white/[0.05] text-slate-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
