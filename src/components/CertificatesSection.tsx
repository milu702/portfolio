import React, { useState } from 'react';
import { ShieldCheck, ArrowUpRight, ExternalLink } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import type { CertificateItem } from '../types';
import { CertificateModal } from './CertificateModal';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Academic Honours',
    'Cloud & AI',
    'Software Engineering',
    'Agile & Management',
    'Data & AI',
    'Foundations'
  ];

  const filteredCertificates = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === activeCategory);

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return certificatesData.length;
    return certificatesData.filter((c) => c.category === cat).length;
  };

  return (
    <section id="certificates" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              06 // ACCREDITED CREDENTIALS & HONOURS
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">Archive</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Official verifiable accreditations across Academic Honours, Cloud Architectures, Artificial Intelligence, Agile Delivery, and Software Engineering.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              if (count === 0 && cat !== 'All') return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all border flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] border-transparent font-bold shadow-md shadow-[#00e5ff]/20'
                      : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-code ${
                      activeCategory === cat
                        ? 'bg-[#020408]/20 text-[#020408]'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Certificate Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#00e5ff]/40 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top ambient glow for Academic Honours */}
              {cert.category === 'Academic Honours' && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-xl border group-hover:scale-105 transition-transform ${
                      cert.category === 'Academic Honours'
                        ? 'bg-amber-400/15 text-amber-300 border-amber-400/30'
                        : 'bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/20'
                    }`}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {cert.verificationUrl && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono-code font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        Verified
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-white/[0.05] text-[#00e5ff] border border-white/10">
                      {cert.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-space text-base sm:text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono-code text-slate-400 mt-1">
                  Issued by <span className="text-white font-medium">{cert.issuer}</span> · <span className="text-[#38bdf8]">{cert.issueDate}</span>
                </p>

                <p className="text-xs text-slate-300 font-jakarta mt-3 line-clamp-3 leading-relaxed">
                  {cert.summary}
                </p>

                {/* Topics preview */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {cert.skillsCovered.slice(0, 3).map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.02] text-slate-500">
                      +{cert.skillsCovered.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-code text-[#00e5ff]">
                <span className="group-hover:underline">View Credential Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Verification Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono-code uppercase tracking-wider text-emerald-400 font-bold">
                Live Verification Hub
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white">
              Official Amal Jyothi AES Academic Honours Portal
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-jakarta mt-1 max-w-2xl">
              All semester honours certificates (Semesters 1 through 6, up to SGPA 9.30) and the Gold Achiever Badge are cryptographically verified by the Autonomous Controller of Examinations on the live AES portal.
            </p>
          </div>
          <a
            href="https://www.aesajce.in/honourcertificates.php?id=QUxmdDhuS0F4SkNVZlB2R1BWbjRsQT09"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] text-xs font-mono-code font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all shrink-0 hover:scale-105"
          >
            <span>Verify Live AES Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
