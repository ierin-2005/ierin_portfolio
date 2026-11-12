import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  FileDown,
  ArrowUpRight,
  ArrowUp,
} from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(HERO_DATA.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copy email:', HERO_DATA.email);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-dark-bg text-white pt-24 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-dark-border"
    >
      {/* Background Cinematic Luminous Orange Flare */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[350px] rounded-[100%] bg-orange opacity-20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-8"
        >
          <span className="w-2.5 h-0.5 bg-orange" />
          <span className="font-mono text-xs sm:text-sm tracking-widest text-orange uppercase font-bold">
            06 / GET IN TOUCH
          </span>
        </motion.div>

        {/* Dramatic Oversized Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display font-black text-hero-title tracking-tighter text-white uppercase max-w-5xl">
            Let's build <br />
            something <br />
            <span className="text-orange hover:text-[#FFA07A] transition-colors">
              intelligent.
            </span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
            Have an interesting project, opportunity, or idea? Let's connect.
          </p>
        </motion.div>

        {/* Massive Interactive Contact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#181818] border border-[#2A2A2A] p-6 sm:p-10 lg:p-12 mb-16 sm:mb-24 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-2">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${HERO_DATA.email}?subject=Opportunity%20/%20Collaboration%20for%20Ierin%20P%20Menachery`}
                className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white hover:text-orange transition-colors break-all"
              >
                {HERO_DATA.email}
              </a>
            </div>

            {/* Actions: Copy & Direct Send */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center space-x-2 px-6 py-3.5 sm:py-4 bg-[#222222] border border-[#333333] hover:border-orange text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-orange" />
                    <span className="text-orange font-bold">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/60" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${HERO_DATA.email}?subject=Opportunity%20/%20Collaboration%20for%20Ierin%20P%20Menachery`}
                className="inline-flex items-center space-x-2 px-7 py-3.5 sm:py-4 bg-orange hover:bg-orange-hover text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(241,90,41,0.3)]"
              >
                <Mail className="w-4 h-4" />
                <span>COMPOSE EMAIL</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Resume Strip */}
          <div className="mt-8 pt-8 border-t border-[#2A2A2A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center space-x-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/70 hover:text-orange transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 text-white/40" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/70 hover:text-orange transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 text-white/40" />
              </a>
            </div>

            <a
              href={`./${HERO_DATA.resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              download={HERO_DATA.resumeFileName}
              className="inline-flex items-center space-x-2 text-orange hover:text-white font-bold transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
            </a>
          </div>
        </motion.div>

        {/* Minimal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 font-mono text-xs text-white/40 gap-4">
          <div>
            IERIN P MENACHERY &copy; 2026 &middot; Designed &amp; Built with curiosity.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="group flex items-center space-x-2 text-white/50 hover:text-orange transition-colors focus:outline-none"
            aria-label="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-orange" />
          </button>
        </div>
      </div>
    </footer>
  );
};
