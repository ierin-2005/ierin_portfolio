import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { HERO_DATA } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy for active section highlight
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a12]/85 dark:bg-[#070a12]/85 light:bg-white/85 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Monogram Logo */}
          <a
            href="#"
            className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
            aria-label="Ierin P Menachery Homepage"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900 dark:to-slate-950 light:from-slate-100 light:to-slate-200 border border-slate-700/80 group-hover:border-cyan-400/80 shadow-md transition-all duration-300">
              <span className="font-extrabold text-base tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 group-hover:scale-105 transition-transform">
                {HERO_DATA.initials}
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-slate-950 animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight group-hover:text-cyan-400 transition-colors">
                {HERO_DATA.name}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                AI/ML · Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 shadow-sm'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-300 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={`./${HERO_DATA.resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              download={HERO_DATA.resumeFileName}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#070a12]/95 dark:bg-[#070a12]/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800/90 dark:border-slate-800/90 light:border-slate-200/90 px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-300 hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col space-y-3">
              <a
                href={`./${HERO_DATA.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                download={HERO_DATA.resumeFileName}
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 shadow-md shadow-cyan-500/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white border border-slate-700/80 hover:bg-slate-800/50"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
