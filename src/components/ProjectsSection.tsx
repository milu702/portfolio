import React, { useState } from 'react';
import { ExternalLink, Layers, QrCode, ArrowRight, ArrowUpRight, Wind, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { MiluCharacter } from './MiluCharacter';
import { soundEngine } from '../utils/audio';

interface ClimateScenario {
  id: string;
  label: string;
  weather: string;
  temp: string;
  humidity: string;
  moisture: string;
  advisory: string;
  statusColor: string;
}

const climateScenarios: ClimateScenario[] = [
  {
    id: 'optimal',
    label: 'Western Ghats Mist',
    weather: 'Cool Fog & Gentle Drizzle',
    temp: '19.4°C',
    humidity: '88%',
    moisture: '68% (Ideal)',
    advisory: 'Optimal Sprouting Phase: Maintain canopy density. Zero chemical spray required.',
    statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
  },
  {
    id: 'monsoon',
    label: 'Heavy Monsoon Torrent',
    weather: 'High Rainfall Spike (48mm/hr)',
    temp: '17.2°C',
    humidity: '98%',
    moisture: '94% (Saturated)',
    advisory: 'Root Rot Hazard: Trigger sub-surface trench drainage. Suspend foliar feeding.',
    statusColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
  },
  {
    id: 'drought',
    label: 'Dry High-Range Heat',
    weather: 'Intense Solar Radiation',
    temp: '29.8°C',
    humidity: '42%',
    moisture: '28% (Deficit)',
    advisory: 'Capsule Drop Threat: Initiate 45-min micro-sprinkler cycle before 11:00 AM.',
    statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
  },
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeClimate, setActiveClimate] = useState<ClimateScenario>(climateScenarios[0]);

  const flagshipProject = projectsData.find((p) => p.id === 'cardora') || projectsData[0];
  const categories = ['All', 'Flagship', 'Cloud & AI', 'Full Stack', 'Backend / API', 'Hackathon'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const handleClimateChange = (scenario: ClimateScenario) => {
    soundEngine.playPop();
    setActiveClimate(scenario);
  };

  const handleOpenProject = (project: ProjectItem) => {
    soundEngine.playChime();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              03 // PROJECTS AS INTERACTIVE WORLDS
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Digital Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">& Flagships</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Each project is built around real problems — combining domain research, full-stack architecture, defensive engineering, and verified outcomes.
          </p>
        </div>

        {/* FLAGSHIP SPOTLIGHT: CARDORA WITH INTERACTIVE AGRO-CLIMATIC ENGINE */}
        <div className="mb-24 relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0b172a] via-[#071322] to-[#040814] shadow-2xl">
          {/* Subtle botanical leaves ambient background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            {/* Left: Project Details & Story (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              {/* Mascot Cameo for Cardora */}
              <div className="flex items-center gap-3">
                <MiluCharacter pose="cardora-plant" size="sm" className="w-14 h-18 shrink-0" />
                <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-emerald-400 block mb-0.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" /> Cardora Story:
                  </span>
                  <p className="text-xs text-slate-200 font-jakarta leading-snug">
                    "Cardamom plants are exceptionally sensitive to sudden micro-climate shifts in the Western Ghats. Cardora turns weather telemetry into actionable agronomic rules!"
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40 shadow-sm">
                  Flagship Academic Capstone
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Live on Vercel
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  Amal Jyothi Autonomous
                </span>
              </div>

              <div>
                <h3 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Cardora
                </h3>
                <p className="font-space text-base sm:text-lg text-[#00e5ff] font-medium mt-1">
                  A Smart Digital Ecosystem for Cardamom Plantation Management & Decision Support
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-jakarta leading-relaxed">
                Cardora addresses the acute agro-climatic fragility of cardamom cultivation in the Western Ghats. By integrating real-time weather API telemetry with calibrated agronomic decision rules, the system synthesizes intelligent irrigation, fertilizer, and pest management advisories — mitigating up to 40% of preventable harvest loss.
              </p>

              {/* LIVE INTERACTIVE TELEMETRY SIMULATOR WIDGET */}
              <div className="w-full rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#00e5ff] flex items-center gap-1.5">
                    <Wind className="w-4 h-4 text-[#00e5ff]" />
                    Interactive Agro-Climatic Rule Simulator
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-400">
                    Test Scenarios:
                  </span>
                </div>

                {/* Scenario Toggle Buttons */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {climateScenarios.map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => handleClimateChange(sc)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-semibold transition-all ${
                        activeClimate.id === sc.id
                          ? 'bg-[#00e5ff] text-[#020408] font-bold shadow-md'
                          : 'bg-white/[0.05] text-slate-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>

                {/* Live Telemetry Display */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-3 text-center">
                  <div>
                    <span className="text-[10px] uppercase font-mono-code text-slate-400 block">Temperature</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono-code">{activeClimate.temp}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono-code text-slate-400 block">Air Humidity</span>
                    <span className="text-xs sm:text-sm font-bold text-[#00e5ff] font-mono-code">{activeClimate.humidity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono-code text-slate-400 block">Soil Moisture</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono-code">{activeClimate.moisture}</span>
                  </div>
                </div>

                {/* Dynamic Rule Output */}
                <div className={`p-3 rounded-xl border text-xs font-jakarta ${activeClimate.statusColor}`}>
                  <span className="font-mono-code font-bold uppercase tracking-wider text-[10px] block mb-0.5">
                    Live Rule Engine Advisory:
                  </span>
                  <p className="leading-snug">
                    {activeClimate.advisory}
                  </p>
                </div>
              </div>

              {/* Flagship CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={flagshipProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all hover:scale-105"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => handleOpenProject(flagshipProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md transition-all hover:scale-105"
                >
                  <Layers className="w-4 h-4 text-[#00e5ff]" />
                  <span>View Full Case Study</span>
                </button>

                <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 text-xs font-mono-code">
                  <QrCode className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>Vercel Verified</span>
                </div>
              </div>
            </div>

            {/* Right: Layered UI Visuals & QR Code (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div
                onClick={() => handleOpenProject(flagshipProject)}
                className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#020408] group cursor-pointer"
                title="Click to view full case study"
              >
                <img
                  src={flagshipProject.coverImage}
                  alt="Cardora Application Interface"
                  className="w-full h-84 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-80" />

                {/* Floating QR Code Thumbnail */}
                <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-[#020408]/90 backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-xl">
                  <img
                    src={flagshipProject.qrCodeUrl}
                    alt="Cardora Deployment QR"
                    className="w-12 h-12 rounded-lg bg-white p-0.5"
                  />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono-code text-slate-400 block font-semibold">
                      Scan to Test
                    </span>
                    <span className="text-xs font-mono-code text-[#00e5ff] font-bold block">
                      Mobile PWA
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-md bg-[#020408]/80 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono-code text-slate-200">
                    Telemetry Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-white/10 border-[#00e5ff] text-white shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                    : 'bg-white/[0.02] border-white/[0.07] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono-code text-slate-400">
            Showing {filteredProjects.length} Verified Systems
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#00e5ff]/40 overflow-hidden shadow-lg transition-all duration-400 cursor-pointer flex flex-col h-full hover:-translate-y-1.5"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#070d18]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#020408]/80 text-[#00e5ff] border border-[#00e5ff]/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="p-2 rounded-full bg-[#020408]/80 text-slate-300 group-hover:text-white group-hover:bg-[#00e5ff]/20 transition-all inline-block">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h4 className="font-space text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono-code text-slate-400 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-300 font-jakarta line-clamp-3 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.02] text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-code text-[#00e5ff]">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
