import React, { useEffect } from 'react';
import { X, Download, ExternalLink, CheckCircle2, ShieldCheck, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { CertificateItem } from '../types';
import { MiluCharacter } from './MiluCharacter';
import { soundEngine } from '../utils/audio';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = 'hidden';
      soundEngine.playFanfare();

      // Launch joyful present-opening confetti burst!
      try {
        confetti({
          particleCount: 45,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#00e5ff', '#fbbf24', '#f59e0b', '#38bdf8', '#a855f7'],
          disableForReducedMotion: true,
        });
      } catch {
        // Non-blocking
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [certificate]);

  if (!certificate) return null;

  const isImageBadge = /\.(jpeg|jpg|png|webp|svg)$/i.test(certificate.pdfPath);

  const getPortalLabel = (url: string) => {
    if (url.includes('aesajce.in')) return 'Verify on Amal Jyothi AES Portal';
    if (url.includes('badges.aesajce.in')) return 'Verify Gold Badge on AES';
    if (url.includes('coursera.org')) return 'Verify on Coursera';
    if (url.includes('scrumstudy.com')) return 'Verify on SCRUMstudy';
    if (url.includes('onwingspan.com')) return 'Verify on Infosys Springboard';
    if (url.includes('oracle.com')) return 'Verify on Oracle';
    return 'Verify Online Credential';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#020408]/92 backdrop-blur-2xl overflow-y-auto animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl my-auto rounded-3xl bg-[#070d18] border border-[#fbbf24]/30 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden z-10 text-left max-h-[92vh] flex flex-col">
        {/* Top Gold Ribbon Seal Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#00e5ff] via-[#fbbf24] to-[#f59e0b]" />

        {/* Modal Header with Mascot Cameo */}
        <div className="p-5 sm:p-7 border-b border-white/10 flex items-start justify-between bg-white/[0.02] shrink-0">
          <div className="flex items-start gap-4">
            {/* Mascot celebrating the achievement */}
            <div className="hidden sm:block shrink-0 -mt-2">
              <MiluCharacter pose="certificate" size="sm" interactive={false} className="w-14 h-18" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#fbbf24]" />
                  <span>{certificate.category}</span>
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  Verified Credential // {certificate.issueDate}
                </span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                {certificate.title}
              </h3>
              <p className="text-xs sm:text-sm font-space text-[#38bdf8] font-semibold mt-1">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors shrink-0 ml-4"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto">
          {/* Visual preview for image badges (like Oracle AI badge) */}
          {isImageBadge && (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center">
              <img
                src={certificate.pdfPath}
                alt={certificate.title}
                className="max-h-48 object-contain rounded-xl shadow-lg border border-white/10"
              />
            </div>
          )}

          <p className="text-sm text-slate-300 font-jakarta leading-relaxed">
            {certificate.summary}
          </p>

          {/* Verification Box */}
          {(certificate.credentialId || certificate.verificationUrl) && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-[#00e5ff]/30 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono-code uppercase text-slate-400 block font-semibold">
                  {certificate.credentialId ? 'Official Credential Verification ID' : 'Live Institutional Registry'}
                </span>
                <span className="font-mono-code text-xs sm:text-sm font-bold text-[#00e5ff] mt-0.5 block break-all">
                  {certificate.credentialId || 'Direct Institutional Autonomous Record'}
                </span>
              </div>
              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00e5ff]/15 hover:bg-[#00e5ff]/25 border border-[#00e5ff]/40 text-[#00e5ff] text-xs font-mono-code font-bold transition-all hover:scale-105"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{getPortalLabel(certificate.verificationUrl)}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Core Competencies Tested */}
          <div>
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#fbbf24]" />
              <span>Competencies & Topics Validated</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certificate.skillsCovered.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-jakarta bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-7 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center gap-4 shrink-0">
          <a
            href={certificate.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all hover:scale-105"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Document Viewer</span>
          </a>

          <a
            href={certificate.pdfPath}
            download={`${certificate.title.replace(/[^a-zA-Z0-9]/g, '_')}${isImageBadge ? '.jpeg' : '.pdf'}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-semibold tracking-wider uppercase transition-all"
          >
            <Download className="w-3.5 h-3.5 text-slate-300" />
            <span>Download Asset</span>
          </a>
        </div>
      </div>
    </div>
  );
};
