import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070a12] dark:bg-[#070a12] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Skip to main content accessible link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Floating Action Button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
