import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-warm-dark font-sans antialiased relative selection:bg-orange selection:text-white">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-orange text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg"
      >
        Skip to main content
      </a>

      {/* Minimal Sticky Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* 1. Cinematic Black & Orange Hero Opening */}
        <Hero />

        {/* 2. 01 / ABOUT ME (Warm White Editorial Layout) */}
        <About />

        {/* 3. 02 / SELECTED WORK (HydroGPT + Asymmetric Project Showcases) */}
        <Projects />

        {/* 4. 03 / EXPERIENCE (Clean Editorial Timeline) */}
        <Experience />

        {/* 5. 04 / TOOLKIT (4 Compact Technical Categories) */}
        <Skills />

        {/* 6. 05 / BACKGROUND (Education, Honors & Selected Credentials) */}
        <Education />

        {/* 7. 06 / GET IN TOUCH (Dramatic Cinematic Ending & Footer) */}
        <Contact />
      </main>
    </div>
  );
};

export default App;
