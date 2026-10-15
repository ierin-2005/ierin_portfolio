import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  FileDown,
  Send,
} from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS, IS_SOCIAL_CONFIGURED } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<'recruiter' | 'project' | 'general'>('recruiter');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(HERO_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getMailtoLink = () => {
    let subject = 'Regarding Opportunity / Collaboration — Ierin P Menachery';
    let body =
      'Hello Ierin,\n\nI reviewed your portfolio and would like to connect with you regarding...\n\nBest regards,';

    if (inquiryTopic === 'recruiter') {
      subject = 'Engineering Opportunity / Interview Invitation for Ierin';
      body =
        'Hi Ierin,\n\nI came across your portfolio and your work on HydroGPT and AI/ML at Larsen & Toubro. We are interested in discussing an opportunity with our engineering team...\n\nBest regards,';
    } else if (inquiryTopic === 'project') {
      subject = 'Technical Collaboration on AI / LLM Project';
      body =
        'Hi Ierin,\n\nI saw your work with RAG, FAISS, and Android development and would love to collaborate or discuss ideas on...\n\nBest regards,';
    }

    return `mailto:${HERO_DATA.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>08 / GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something <span className="text-gradient">Meaningful.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              I'm open to connecting with recruiters, AI/ML teams, developers, and people working on interesting technology projects.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl">
            {/* Quick Inquiry Selector */}
            <div className="mb-8 pb-6 border-b border-slate-800/80">
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 text-center sm:text-left">
                Select inquiry context to compose an instant email:
              </span>
              <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => setInquiryTopic('recruiter')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    inquiryTopic === 'recruiter'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Recruitment / Role Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryTopic('project')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    inquiryTopic === 'project'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  AI / Tech Collaboration
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryTopic('general')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    inquiryTopic === 'general'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  General Message
                </button>
              </div>
            </div>

            {/* Email & Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">
                    Direct Email Address
                  </span>
                  <a
                    href={getMailtoLink()}
                    className="text-lg sm:text-xl font-bold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {HERO_DATA.email}
                  </a>
                </div>
              </div>

              {/* Email CTAs: Copy and Launch Mail Client */}
              <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/60 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={getMailtoLink()}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/20 hover:-translate-y-0.5 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>

            {/* Location & Social Profiles */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Location */}
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-xs font-semibold text-slate-200">{HERO_DATA.location}</span>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      GitHub
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {IS_SOCIAL_CONFIGURED.github ? 'View Profile' : 'Configurable'}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-[#0a66c2] transition-colors flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      LinkedIn
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {IS_SOCIAL_CONFIGURED.linkedin ? 'View Profile' : 'Configurable'}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0a66c2]" />
              </a>
            </div>

            {/* Download Resume Alternate Action */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
              <span>Looking for an offline version of my verified credentials?</span>
              <a
                href={`./${HERO_DATA.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                download={HERO_DATA.resumeFileName}
                className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
