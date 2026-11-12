import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Database, Download, ExternalLink, FileText, Github, GraduationCap,
  Layers3, Linkedin, Mail, MapPin, Menu, Network, Smartphone, Terminal, Workflow, X,
} from 'lucide-react';
import {
  ACHIEVEMENTS_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA, EXPERIENCES, HERO_DATA,
  HYDRO_GPT_DATA, OTHER_PROJECTS, SOCIAL_LINKS, TOOLKIT_CATEGORIES,
} from './data/portfolioData';

const resumeHref = `./${HERO_DATA.resumeFileName}`;
const navItems = [
  ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'],
  ['Education', '#education'], ['Contact', '#contact'],
];
const skillIcons = [BrainCircuit, Code2, Terminal, Layers3];
const projectIcons = [Database, Workflow, Smartphone, Code2];

function Reveal({ children, className = '', delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);
  const close = () => setMenuOpen(false);
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="nav-shell">
        <a className="brand-mark" href="#home" aria-label="Ierin P Menachery home"><span className="brand-code">&lt;</span>IPM<span className="brand-dot">.</span><span className="brand-code">/&gt;</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a className="nav-resume" href={resumeHref} download={HERO_DATA.resumeFileName}>Resume <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.24 }}>
          {navItems.map(([label, href], i) => <a key={label} href={href} onClick={close}><span>0{i + 1}</span>{label}<ArrowUpRight size={16} /></a>)}
          <a className="mobile-resume" href={resumeHref} download={HERO_DATA.resumeFileName} onClick={close}>Download résumé <Download size={16} /></a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`social-links ${compact ? 'social-links--compact' : ''}`}>
    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /><span>GitHub</span><ExternalLink size={11} /></a>
    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /><span>LinkedIn</span><ExternalLink size={11} /></a>
    <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email"><Mail size={18} /><span>Email</span></a>
  </div>;
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return <section className="hero-section" id="home">
    <div className="hero-grid" />
    <div className="hero-glow hero-glow--left" /><div className="hero-glow hero-glow--right" />
    <Navbar />
    <div className="hero-shell page-shell">
      <div className="hero-copy">
        <motion.div className="availability-label" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .55, delay: .1 }}>
          <span className="availability-pulse" /> COMPUTER SCIENCE UNDERGRADUATE · 2027
        </motion.div>
        <motion.p className="hero-greeting" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .55, delay: .18 }}>Hello, I’m <strong>Ierin P Menachery.</strong></motion.p>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25, ease: [0.22, 1, .36, 1] }}>
          I build <span className="gradient-text">practical AI</span><br />for real-world problems.
        </motion.h1>
        <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .6, delay: .38 }}>
          Focused on machine learning, LLM applications and software development.
        </motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .55, delay: .48 }}>
          <a className="button button-primary" href="#projects">View projects <ArrowRight size={17} /></a>
          <a className="button button-secondary" href={resumeHref} download={HERO_DATA.resumeFileName}><Download size={16} /> Download résumé</a>
        </motion.div>
        <motion.div className="hero-social-wrap" initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} transition={{ duration: .5, delay: .65 }}><SocialLinks /></motion.div>
      </div>
      <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: .94, x: 18 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }} transition={{ duration: .85, delay: .2, ease: [0.22, 1, .36, 1] }}>
        <div className="visual-ring visual-ring--one" /><div className="visual-ring visual-ring--two" /><div className="visual-ring visual-ring--three" />
        <motion.div className="portrait-frame" animate={reduceMotion ? undefined : { y: [0, -9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <img src="./ierin_portrait.jpg" alt="Portrait of Ierin P Menachery" />
          <div className="portrait-caption"><span>IERIN P MENACHERY</span><span>KERALA · INDIA</span></div>
        </motion.div>
        <motion.div className="floating-note floating-note--top" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="floating-icon"><BrainCircuit size={18} /></span><span><strong>AI / ML</strong><small>Applied intelligence</small></span>
        </motion.div>
        <motion.div className="floating-note floating-note--bottom" animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="floating-icon floating-icon--blue"><Network size={18} /></span><span><strong>RAG SYSTEMS</strong><small>Knowledge to answers</small></span>
        </motion.div>
        <div className="visual-coordinate">10.52° N <span>/</span> 76.21° E</div>
      </motion.div>
    </div>
    <div className="hero-bottom page-shell"><span><MapPin size={14} /> {HERO_DATA.location}</span><a href="#what-i-do">Explore my work <ArrowDown size={14} /></a><span className="hero-bottom-note">AI ENGINEERING · LLMs · SOFTWARE</span></div>
  </section>;
}

function SectionHeading({ number, label, title, accent, note }: { number: string; label: string; title: string; accent?: string; note?: string }) {
  return <div className="section-heading">
    <div><p className="section-eyebrow"><span>{number}</span> / {label}</p><h2>{title} {accent && <em>{accent}</em>}</h2></div>
    {note && <p className="section-note">{note}</p>}
  </div>;
}

function WhatIDo() {
  const focusAreas = [
    { icon: BrainCircuit, title: 'AI & machine learning', text: 'Build and evaluate practical ML solutions.' },
    { icon: Network, title: 'LLM applications', text: 'Connect language models with useful knowledge.' },
    { icon: Code2, title: 'Software development', text: 'Turn ideas into clear, working applications.' },
  ];
  return <section className="content-section what-section" id="what-i-do"><div className="page-shell">
    <SectionHeading number="01" label="WHAT I DO" title="Curiosity meets" accent="implementation." note="A simple view of where I focus." />
    <div className="what-grid">
      <Reveal className="what-visual">
        <div className="what-visual-top"><span>WORKING PRINCIPLE</span><span>01—03</span></div>
        <div className="work-stack">
          <div className="work-node work-node--main"><span><BrainCircuit size={24} /></span><div><small>CORE INTEREST</small><strong>Applied AI</strong></div><span className="node-state">FOCUS</span></div>
          <div className="work-connector"><i /><i /><i /></div>
          <div className="work-node"><span><Database size={21} /></span><div><small>METHOD</small><strong>Data + retrieval</strong></div></div>
          <div className="work-connector"><i /><i /><i /></div>
          <div className="work-node"><span><Workflow size={21} /></span><div><small>OUTCOME</small><strong>Useful applications</strong></div></div>
        </div>
        <div className="visual-footer"><span>LEARN</span><span>BUILD</span><span>REFINE</span></div>
      </Reveal>
      <div className="what-content">
        <Reveal><p className="what-lead">I’m a Computer Science undergraduate interested in building technology that solves practical problems.</p></Reveal>
        <div className="focus-list">{focusAreas.map((item, i) => { const Icon = item.icon; return <Reveal className="focus-row" key={item.title} delay={i * .08}><span className="focus-icon"><Icon size={20} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="focus-index">0{i + 1}</span></Reveal>; })}</div>
      </div>
    </div>
  </div></section>;
}

function Skills() {
  return <section className="content-section skills-section" id="skills"><div className="page-shell">
    <SectionHeading number="02" label="TOOLKIT" title="Tools I build" accent="with." note="A focused toolkit that keeps growing." />
    <div className="skills-grid">{TOOLKIT_CATEGORIES.map((category, index) => { const Icon = skillIcons[index] || Code2; return <Reveal className="skill-card" key={category.title} delay={index * .08}>
      <div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="skill-number">0{index + 1}</span></div>
      <h3>{category.title}</h3><p>{category.description}</p>
      <div className="skill-tags">{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </Reveal>; })}</div>
  </div></section>;
}

function Experience() {
  return <section className="content-section experience-section" id="experience"><div className="page-shell">
    <SectionHeading number="03" label="EXPERIENCE" title="Learning by" accent="building." note="Industry exposure and hands-on work." />
    <div className="experience-grid">{EXPERIENCES.map((item, i) => <Reveal className={`experience-card ${i === 0 ? 'experience-card--featured' : ''}`} key={item.id} delay={i * .08}>
      <div className="experience-card-head"><span className="experience-monogram">{i === 0 ? 'L&T' : i === 1 ? 'CS' : 'ICT'}</span><span className="experience-period">{item.period}</span></div>
      <p className="experience-company">{item.organization} <span>· {item.location}</span></p><h3>{item.role}</h3>
      <p className="experience-description">{item.bullets[0]}</p>
      {i === 0 && <p className="experience-description experience-description--extra">Presented the system to Hydrology and Structural teams across L&T offices.</p>}
      <div className="experience-tags">{item.technologies.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div>
    </Reveal>)}</div>
  </div></section>;
}

function HydroDiagram() {
  const steps = [{ icon: FileText, label: 'Documents' }, { icon: Network, label: 'Embeddings' }, { icon: Database, label: 'FAISS search' }, { icon: BrainCircuit, label: 'LLM answer' }];
  return <div className="hydro-diagram"><div className="diagram-label"><span>HYDROGPT</span><span>RAG WORKFLOW</span></div>
    <div className="diagram-flow">{steps.map((step, i) => { const Icon = step.icon; return <React.Fragment key={step.label}><motion.div className="diagram-step" initial={{ opacity: .25, y: 7 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: i * .14 }}><span><Icon size={21} /></span><strong>{step.label}</strong></motion.div>{i < steps.length - 1 && <div className="diagram-link"><i /></div>}</React.Fragment>; })}</div>
    <div className="diagram-result"><span><Check size={15} /></span><div><strong>Grounded response</strong><small>Answers based on retrieved document context</small></div><ArrowUpRight size={17} /></div>
  </div>;
}

function Projects() {
  return <section className="content-section projects-section" id="projects"><div className="page-shell">
    <SectionHeading number="04" label="SELECTED WORK" title="Projects with" accent="purpose." note="A few solutions and prototypes I’ve worked on." />
    <Reveal className="featured-project">
      <div className="featured-project-copy"><div className="project-kicker"><span>FEATURED PROJECT</span><span>{HYDRO_GPT_DATA.year}</span></div><p className="project-category">AI ENGINEERING · LLM · RAG</p><h3>Hydro<span>GPT</span></h3>
        <p className="featured-project-description">A hydrology assistant that retrieves technical document evidence and generates grounded answers.</p>
        <div className="project-context"><BriefcaseBusiness size={15} /> Built during my AI &amp; ML internship at <strong>L&amp;T</strong>.</div>
        <div className="tech-list">{['Python', 'FAISS', 'Qwen2.5', 'QLoRA', 'GGUF'].map((t) => <span key={t}>{t}</span>)}</div>
        <a className="text-link" href="#experience">Internship details <ArrowUpRight size={15} /></a>
      </div>
      <HydroDiagram />
      <div className="featured-project-foot"><span>DOCUMENTS → RETRIEVAL → ANSWERS</span><span>01 / 05</span></div>
    </Reveal>
    <div className="project-grid">{OTHER_PROJECTS.map((project, i) => { const Icon = projectIcons[i] || Code2; return <Reveal className="project-card" key={project.id} delay={i * .06}>
      <div className="project-card-top"><span className="project-card-icon"><Icon size={21} /></span><span>{project.year} / 0{i + 2}</span></div>
      <p className="project-card-category">{project.category}</p><h3>{project.title}</h3><p className="project-card-description">{project.contribution}</p>
      <div className="project-card-tags">{project.technologies.slice(0, 3).map((t) => <span key={t}>{t}</span>)}</div>
      {project.highlight && <p className="project-highlight">{project.highlight}</p>}
    </Reveal>; })}</div>
  </div></section>;
}

function EducationAndRecognition() {
  const education = EDUCATION_DATA[0];
  const certifications = CERTIFICATIONS_DATA.filter((cert) => !cert.title.toLowerCase().includes('cybersecurity'));
  return <section className="content-section education-section" id="education"><div className="page-shell">
    <SectionHeading number="05" label="EDUCATION & RECOGNITION" title="Built on a strong" accent="foundation." note="Learning, milestones and continuous growth." />
    <div className="education-grid"><Reveal className="education-card"><div className="education-card-top"><span><GraduationCap size={21} /></span><small>2023—2027</small></div><p className="education-label">BACHELOR OF TECHNOLOGY</p><h3>{education.degree}</h3><p className="education-institution">{education.institution}</p><div className="education-card-foot"><span>{education.location}</span><strong>{education.score}</strong></div></Reveal>
      <Reveal className="recognition-card" delay={.08}><div className="recognition-title"><Award size={19} /><span>SELECTED RECOGNITION</span></div>{ACHIEVEMENTS_DATA.map((item, i) => <div className="recognition-row" key={item.title}><span>0{i + 1}</span><div><strong>{item.title}</strong><small>{item.organizer}</small></div></div>)}</Reveal></div>
    <Reveal className="certifications-block"><div className="certifications-heading"><span>CERTIFICATIONS</span><span>{certifications.length} SELECTED</span></div><div className="certifications-list">{certifications.map((cert) => <div className="certification-item" key={cert.title}><div><strong>{cert.title}</strong><small>{cert.issuer}</small></div>{cert.score && <span>{cert.score}</span>}</div>)}</div></Reveal>
  </div></section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { try { await navigator.clipboard.writeText(SOCIAL_LINKS.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${SOCIAL_LINKS.email}`; } };
  return <footer className="contact-section" id="contact"><div className="contact-glow" /><div className="page-shell">
    <div className="contact-topline"><span>06 / CONTACT</span><span><i className="availability-pulse" /> OPEN TO OPPORTUNITIES</span></div>
    <Reveal className="contact-main"><p className="section-eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let’s make<br /><span>something useful.</span></h2><p className="contact-description">Open to AI/ML internships, entry-level opportunities and meaningful collaborations.</p><a className="contact-email" href={`mailto:${SOCIAL_LINKS.email}`}>{SOCIAL_LINKS.email}<ArrowUpRight size={22} /></a><button className="copy-email" type="button" onClick={copyEmail}>{copied ? <Check size={14} /> : <Mail size={14} />}{copied ? 'COPIED' : 'COPY EMAIL'}</button></Reveal>
    <div className="contact-bottom"><SocialLinks compact /><a className="footer-resume" href={resumeHref} download={HERO_DATA.resumeFileName}><FileText size={15} /> Download résumé <ArrowUpRight size={14} /></a></div>
    <div className="footer-meta"><span>IERIN P MENACHERY © 2026</span><span>AI · ENGINEERING · LEARNING</span><a href="#home">BACK TO TOP ↑</a></div>
  </div></footer>;
}

export const App: React.FC = () => {
  useEffect(() => { document.title = 'Ierin P Menachery | AI & Machine Learning'; }, []);
  return <div className="portfolio-site"><a className="skip-link" href="#main-content">Skip to content</a><ScrollProgress /><Hero /><main id="main-content"><WhatIDo /><Skills /><Experience /><Projects /><EducationAndRecognition /></main><Contact /></div>;
};

export default App;
