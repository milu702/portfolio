import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, Copy } from 'lucide-react';
import { personalInfo } from '../data/personal';

import confetti from 'canvas-confetti';
import { MiluCharacter } from './MiluCharacter';
import { soundEngine } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundEngine.playFanfare();
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00e5ff', '#38bdf8', '#818cf8', '#fbbf24']
      });
    } catch {}

    // Construct genuine mailto link with encoded parameters to ensure 100% reliable real delivery
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoLink, '_blank');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-300">
              09 // INITIATE DIALOGUE
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-cyan-300">Next Chapter</span>
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-jakarta max-w-2xl">
            Open for software developer roles, graduate engineering opportunities, internships, and technical collaborations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Direct Coordinates & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#070d18] border border-white/10 shadow-xl space-y-6">
              <h3 className="font-space text-xl font-bold text-white">
                Direct Communication Coordinates
              </h3>

              <div className="space-y-4">
                {/* Email Address with Copy Button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase text-slate-400 block">Primary Email</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-[#00e5ff] transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telephone */}
                <div className="flex items-center p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase text-slate-400 block">Mobile Telephone</span>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-[#38bdf8] transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Geographical Location */}
                <div className="flex items-center p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#818cf8]/10 text-[#818cf8]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase text-slate-400 block">Current Base</span>
                      <span className="text-sm font-semibold text-white">
                        {personalInfo.hometown}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/50 flex items-center justify-center gap-2 text-xs font-mono-code text-slate-200 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/30 flex items-center justify-center gap-2 text-xs font-mono-code text-slate-200 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* Download Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={personalInfo.resumePdf}
                  download="Milu_Jiji_Resume.pdf"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <a
                  href={personalInfo.cvPdf}
                  download="Milu_Jiji_CV.pdf"
                  className="flex-1 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#070d18] border border-white/10 p-8 sm:p-10 shadow-xl">
            <h3 className="font-space text-xl font-bold text-white mb-2">
              Send a Message or Project Brief
            </h3>
            <p className="text-xs text-slate-400 font-jakarta mb-6">
              Fill out the form below to dispatch an inquiry directly to Milu's inbox.
            </p>

            {submitted && (
              <div className="p-4 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4 text-emerald-300 text-xs font-mono-code">
                <MiluCharacter pose="celebrating" size="sm" interactive={false} className="w-12 h-16 shrink-0" />
                <div>
                  <span className="font-bold text-emerald-400 block mb-1">🎉 Message Dispatch Initiated!</span>
                  <span>
                    Thank you! Your email client has been prepared. If your mail client did not open automatically, you can reach out directly to{' '}
                    <strong className="underline text-white">{personalInfo.email}</strong>.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00e5ff] transition-colors text-sm font-jakarta"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00e5ff] transition-colors text-sm font-jakarta"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Developer Opportunity / Capstone Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00e5ff] transition-colors text-sm font-jakarta"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-1.5">
                  Message Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team opportunity, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00e5ff] transition-colors text-sm font-jakarta resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#020408] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Message Directly</span>
              </button>
            </form>
          </div>
        </div>

        {/* Cinematic Closing Statement */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <p className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 italic tracking-wider">
            "Every project is another step in the journey."
          </p>
          <span className="text-xs font-mono-code text-[#00e5ff] tracking-widest uppercase block mt-2">
            MILU JIJI // 2026–2027
          </span>
        </div>
      </div>
    </section>
  );
};
