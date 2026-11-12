import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
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

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* IPM Monogram Logo */}
          <a
            href="#"
            className="group flex items-center space-x-2.5 focus:outline-none focus:ring-1 focus:ring-orange"
            aria-label="Ierin P Menachery — Back to Top"
          >
            <div className="w-9 h-9 border border-white/20 group-hover:border-orange bg-dark-bg flex items-center justify-center transition-colors">
              <span className="font-display font-black text-sm text-white tracking-widest group-hover:text-orange transition-colors">
                {HERO_DATA.initials}
              </span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors py-1 relative ${
                    isActive
                      ? 'text-orange font-semibold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange" />
                  )}
                </a>
              );
            })}

            {/* Resume Link */}
            <a
              href={`./${HERO_DATA.resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              download={HERO_DATA.resumeFileName}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-white/20 hover:border-orange text-white hover:text-orange font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-orange" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-white/80 hover:text-orange transition-colors focus:outline-none focus:ring-1 focus:ring-orange"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#111111]/98 backdrop-blur-xl z-50 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6 pt-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="font-display font-bold text-2xl text-white/90 hover:text-orange uppercase tracking-tight transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10">
              <a
                href={`./${HERO_DATA.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                download={HERO_DATA.resumeFileName}
                onClick={closeMenu}
                className="inline-flex items-center space-x-2 px-5 py-3 bg-orange text-white font-mono text-xs uppercase tracking-wider font-bold"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>

          <div className="pt-8 border-t border-white/10 font-mono text-xs text-white/40">
            IERIN P MENACHERY &middot; KERALA, INDIA
          </div>
        </div>
      )}
    </header>
  );
};
