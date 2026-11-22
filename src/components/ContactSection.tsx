import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  CheckCircle2, 
  Copy, 
  Loader2, 
  ExternalLink, 
  MessageSquare, 
  RotateCcw
} from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== 'false') {
        soundEngine.playFanfare();
        try {
          confetti({
            particleCount: 50,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#00e5ff', '#38bdf8', '#818cf8', '#fbbf24', '#10b981']
          });
        } catch {}
        setSubmitted(true);
        setSubmitSuccess(true);
      } else {
        throw new Error(data?.message || 'Submission service returned unexpected status');
      }
    } catch {
      // Graceful fallback: If an ad blocker or network policy intercepts the AJAX call,
      // present the verified multi-channel direct dispatch panel so the inquiry is never lost.
      soundEngine.playFanfare();
      try {
        confetti({
          particleCount: 35,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
      setSubmitted(true);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopySummary = () => {
    const summaryText = `From: ${formData.name} (${formData.email})\nTo: ${personalInfo.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitted(false);
    setSubmitSuccess(false);
  };

  // Pre-compiled direct delivery URLs
  const encodedSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
  const encodedBody = encodeURIComponent(
    `Hi Milu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`
  );
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodedSubject}&body=${encodedBody}`;
  const whatsappUrl = `https://wa.me/918330813606?text=${encodeURIComponent(
    `Hi Milu, my name is ${formData.name} (${formData.email}).\n\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#030712] overflow-hidden transition-colors">
      {/* Background illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0284c7]/5 dark:bg-[#00e5ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#00e5ff]" />
            <span className="text-xs font-mono-code font-semibold tracking-[0.2em] uppercase text-slate-600 dark:text-slate-300">
              09 // INITIATE DIALOGUE
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build the <span className="gradient-text-cyan">Next Chapter</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 font-jakarta max-w-2xl">
            Open for software developer roles, graduate engineering opportunities, internships, and technical collaborations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Direct Coordinates & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#070d18] border border-slate-200 dark:border-white/10 shadow-md dark:shadow-xl space-y-6">
              <h3 className="font-space text-xl font-bold text-slate-900 dark:text-white">
                Direct Communication Coordinates
              </h3>

              <div className="space-y-4">
                {/* Email Address with Copy Button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#00e5ff]/15 dark:bg-[#00e5ff]/10 text-[#0284c7] dark:text-[#00e5ff]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase text-slate-500 dark:text-slate-400 block font-bold">Primary Email</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#0284c7] dark:hover:text-[#00e5ff] transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telephone / WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#38bdf8]/15 dark:bg-[#38bdf8]/10 text-[#0284c7] dark:text-[#38bdf8]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase text-slate-500 dark:text-slate-400 block font-bold">Mobile & WhatsApp</span>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918330813606"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono-code font-bold transition-colors flex items-center gap-1"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Geographical Location */}
                <div className="flex items-center p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/15 dark:bg-[#818cf8]/10 text-indigo-600 dark:text-[#818cf8]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code uppercase text-slate-500 dark:text-slate-400 block font-bold">Current Base</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {personalInfo.hometown}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#0077b5]/15 dark:bg-white/[0.04] dark:hover:bg-[#0077b5]/20 border border-slate-200 hover:border-[#0077b5]/50 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-mono-code text-slate-800 dark:text-slate-200 transition-colors font-medium"
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
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.1] border border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-white/30 flex items-center justify-center gap-2 text-xs font-mono-code text-slate-800 dark:text-slate-200 transition-colors font-medium"
                >
                  <svg className="w-4 h-4 fill-current text-slate-900 dark:text-white" viewBox="0 0 24 24">
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
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] dark:from-[#00e5ff] dark:to-[#38bdf8] text-white dark:text-[#020408] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(2,132,199,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <a
                  href={personalInfo.cvPdf}
                  download="Milu_Jiji_CV.pdf"
                  className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form / Confirmed State (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#070d18] border border-slate-200 dark:border-white/10 p-8 sm:p-10 shadow-md dark:shadow-xl">
            <h3 className="font-space text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Message or Project Brief
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-jakarta mb-6">
              Fill out the form below to dispatch an inquiry directly to Milu's inbox.
            </p>

            {submitted ? (
              <div className="space-y-6">
                {/* Confirmation Card */}
                <div className={`p-6 sm:p-8 rounded-2xl border text-left ${
                  submitSuccess
                    ? 'bg-emerald-500/[0.08] dark:bg-emerald-500/[0.12] border-emerald-500/30'
                    : 'bg-sky-500/[0.08] dark:bg-sky-500/[0.12] border-sky-500/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <MiluCharacter pose="celebrating" size="sm" mode="photo" interactive={false} className="w-14 h-14 shrink-0 rounded-2xl shadow-md border border-white/20" />
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {submitSuccess ? "Dispatched to Milu's Inbox" : 'Ready for Instant Delivery'}
                      </div>
                      <h4 className="font-space text-lg font-bold text-slate-900 dark:text-white">
                        Thank you, {formData.name}!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-jakarta leading-relaxed">
                        {submitSuccess
                          ? `Your inquiry has been dispatched directly to ${personalInfo.email}. Milu usually reviews and responds within 24 hours.`
                          : `Your message is ready! Choose your preferred direct delivery method below for 1-click confirmation.`}
                      </p>
                    </div>
                  </div>

                  {/* Message Summary Preview */}
                  <div className="mt-5 p-4 rounded-xl bg-white dark:bg-[#030712]/60 border border-slate-200 dark:border-white/10 space-y-2 text-xs font-jakarta shadow-sm">
                    <div className="flex flex-wrap justify-between gap-1 text-slate-500 dark:text-slate-400 font-mono-code text-[11px]">
                      <span>From: <strong className="text-slate-900 dark:text-white">{formData.name}</strong> ({formData.email})</span>
                      <span>To: <strong className="text-[#0284c7] dark:text-[#00e5ff]">{personalInfo.email}</strong></span>
                    </div>
                    {formData.subject && (
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        Subject: {formData.subject}
                      </div>
                    )}
                    <div className="text-slate-700 dark:text-slate-300 italic pt-1 border-t border-slate-100 dark:border-white/5 whitespace-pre-wrap">
                      "{formData.message}"
                    </div>
                  </div>

                  {/* Multi-Channel Quick Action Buttons */}
                  <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-white/10 space-y-3">
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-slate-600 dark:text-slate-400 block font-semibold">
                      Direct Action Links:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {/* WhatsApp Direct */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono-code tracking-wider uppercase transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>

                      {/* Open in Gmail Web */}
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] dark:from-[#00e5ff] dark:to-[#38bdf8] text-white dark:text-[#020408] font-bold text-xs font-mono-code tracking-wider uppercase transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open in Gmail Web</span>
                      </a>

                      {/* Copy Message to Clipboard */}
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-xs font-mono-code transition-all cursor-pointer"
                      >
                        {copiedSummary ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedSummary ? 'Copied Details!' : 'Copy to Clipboard'}</span>
                      </button>

                      {/* Send Another Message */}
                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-xs font-mono-code transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono-code uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#0284c7] dark:focus:border-[#00e5ff] focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-jakarta disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono-code uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5 font-bold">
                      Your Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#0284c7] dark:focus:border-[#00e5ff] focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-jakarta disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono-code uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5 font-bold">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Opportunity / Capstone Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#0284c7] dark:focus:border-[#00e5ff] focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-jakarta disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono-code uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1.5 font-bold">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#0284c7] dark:focus:border-[#00e5ff] focus:ring-2 focus:ring-[#0284c7]/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-jakarta resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] dark:from-[#00e5ff] dark:to-[#38bdf8] text-white dark:text-[#020408] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(2,132,199,0.3)] dark:hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting to Milu's Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message Directly</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Cinematic Closing Statement */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-300 italic tracking-wider">
            "Every project is another step in the journey."
          </p>
          <span className="text-xs font-mono-code text-[#0284c7] dark:text-[#00e5ff] tracking-widest uppercase block mt-2 font-bold">
            MILU JIJI // 2026–2027
          </span>
        </div>
      </div>
    </section>
  );
};
