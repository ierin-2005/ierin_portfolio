import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#050811] text-slate-600 dark:text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand info */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-400 font-extrabold text-xs">
              {HERO_DATA.initials}
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 dark:text-slate-200 block">
                {HERO_DATA.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                AI &amp; Machine Learning · Full-Stack &amp; Android Development
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium" aria-label="Footer Navigation">
            <a href="#about" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#experience" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#education" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#achievements" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              Achievements
            </a>
            <a href="#contact" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 transition-colors ml-1"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© {currentYear} {HERO_DATA.name}. All rights reserved.</p>
          <div className="flex items-center space-x-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Designed and built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
