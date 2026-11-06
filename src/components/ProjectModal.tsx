import React, { useEffect } from 'react';
import { X, ExternalLink, QrCode, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#020408]/90 backdrop-blur-2xl overflow-y-auto animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#070d18] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 text-left">
        {/* Top Header Banner with Cover Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0b1426]">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#070d18]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#020408]/80 hover:bg-[#020408] text-white border border-white/20 transition-all hover:scale-110"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status Pill */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold tracking-wider uppercase bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40 backdrop-blur-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono-code font-medium tracking-wider uppercase bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md">
              {project.status}
            </span>
          </div>

          {/* Project Title & Tagline in Header */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-space text-sm sm:text-base text-slate-300 mt-1 max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <span className="text-[10px] font-mono-code uppercase text-slate-400 block">Role</span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono-code uppercase text-slate-400 block">Timeline</span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{project.timeline}</span>
            </div>
            {project.metrics?.map((m, idx) => (
              <div key={idx}>
                <span className="text-[10px] font-mono-code uppercase text-slate-400 block">{m.label}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#00e5ff] mt-0.5 block">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repository</span>
              </a>
            )}
            {project.qrCodeUrl && (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 text-xs">
                <QrCode className="w-4 h-4 text-[#00e5ff]" />
                <span className="font-mono-code">Mobile Deployment QR Verified</span>
              </div>
            )}
          </div>

          {/* Problem & Solution Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-red-500/20">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-4 h-4" /> The Problem & Motivation
              </span>
              <p className="text-sm text-slate-300 font-jakarta leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-[#00e5ff]/20">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#00e5ff] flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4" /> The Engineering Solution
              </span>
              <p className="text-sm text-slate-300 font-jakarta leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Architecture Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono-code font-medium bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Implemented */}
          <div>
            <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Features Implemented
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Contributions */}
          <div className="p-5 rounded-2xl bg-[#00e5ff]/[0.03] border border-[#00e5ff]/20">
            <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#00e5ff] mb-3">
              Milu's Specific Contributions
            </h3>
            <ul className="space-y-2">
              {project.contributions.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Technical Learnings */}
          <div>
            <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400 mb-3">
              Challenges Overcome & Technical Learnings
            </h3>
            <ul className="space-y-2">
              {project.challengesLearnings.map((ch, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-400 border-l-2 border-white/10 pl-3">
                  {ch}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery / Secondary Screenshots if available */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div>
              <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400 mb-3">
                Project Screenshots & Visual Verification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.secondaryImages.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-[#020408]">
                    <img src={img} alt="Verification" className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
