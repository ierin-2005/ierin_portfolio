import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Smartphone,
  Terminal,
  Workflow,
  X,
} from 'lucide-react';
import {
  ACHIEVEMENTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  EXPERIENCES,
  HERO_DATA,
  HYDRO_GPT_DATA,
  OTHER_PROJECTS,
  SOCIAL_LINKS,
  TOOLKIT_CATEGORIES,
} from './data/portfolioData';

const resumeHref = `./${HERO_DATA.resumeFileName}`;
const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

const iconForSkill = [BrainCircuit, Code2, Layers3, Terminal];
const projectIcons = [ShieldCheck, Network, Smartphone, BookOpen];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="nav-shell">
        <a className="brand-mark" href="#home" aria-label="Ierin P Menachery home">IP<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a className="nav-resume" href={resumeHref} download={HERO_DATA.resumeFileName}>
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map(([label, href], index) => (
              <a key={label} href={href} onClick={closeMenu}>
                <span>0{index + 1}</span>{label}<ArrowUpRight size={17} />
              </a>
            ))}
            <a className="mobile-resume" href={resumeHref} download={HERO_DATA.resumeFileName} onClick={closeMenu}>
              Download résumé <Download size={16} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SocialLinksRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? 'social-links--compact' : ''}`}>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /><span>GitHub</span><ExternalLink size={11} /></a>
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /><span>LinkedIn</span><ExternalLink size={11} /></a>
      <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email"><Mail size={17} /><span>Email</span></a>
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="hero-grid" />
      <Navbar />
      <div className="hero-shell page-shell">
        <div className="hero-copy">
          <motion.div
            className="availability-label"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <span className="availability-pulse" /> COMPUTER SCIENCE UNDERGRADUATE · 2027
          </motion.div>
          <motion.p
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Hello, I’m <span>Ierin P Menachery</span>
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            Building useful<br /><span className="gradient-text">AI systems.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
          >
            I turn ideas into practical software — from LLM-powered applications to data-driven tools.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
          >
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-secondary" href={resumeHref} download={HERO_DATA.resumeFileName}><Download size={16} /> Download résumé</a>
          </motion.div>
          <motion.div
            className="hero-social-wrap"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SocialLinksRow />
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, x: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="visual-orbit visual-orbit--outer" />
          <div className="visual-orbit visual-orbit--inner" />
          <div className="visual-cross visual-cross--one" />
          <div className="visual-cross visual-cross--two" />
          <motion.div
            className="portrait-card"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="./ierin_portrait.jpg" alt="Portrait" />
            <div className="portrait-overlay" />
            <div className="portrait-caption"><span>IERIN P MENACHERY</span><span>KERALA, INDIA</span></div>
          </motion.div>
          <motion.div
            className="float-card float-card--top"
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="float-icon"><BrainCircuit size={17} /></span>
            <span><strong>AI / ML</strong><small>Building intelligent tools</small></span>
          </motion.div>
          <motion.div
            className="float-card float-card--bottom"
            animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="float-icon float-icon--blue"><Workflow size={17} /></span>
            <span><strong>RAG SYSTEMS</strong><small>From documents to answers</small></span>
          </motion.div>
          <div className="visual-index">01 <span>/</span> 05</div>
        </motion.div>
      </div>
      <div className="hero-bottom page-shell">
        <span><MapPin size={14} /> {HERO_DATA.location}</span>
        <a href="#about">Scroll to explore <ArrowDown size={14} /></a>
        <span className="hero-bottom-note">AI · ENGINEERING · PRODUCT THINKING</span>
      </div>
    </section>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  note,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <p className="section-eyebrow"><span>{index}</span> {eyebrow}</p>
        <h2>{title} {accent && <em>{accent}</em>}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="page-shell">
        <SectionHeading
          index="01"
          eyebrow="ABOUT ME"
          title="Curious by nature."
          accent="Practical by design."
          note="A little context behind the work."
        />
        <div className="about-grid">
          <Reveal className="about-statement">
            <p>
              I’m a Computer Science undergraduate at Jyothi Engineering College, focused on Artificial Intelligence, Machine Learning and Generative AI. I enjoy building software that makes complex information easier to use.
            </p>
            <div className="about-signature"><span>IPM</span><small>LEARN · BUILD · IMPROVE</small></div>
          </Reveal>
          <div className="about-highlights">
            <Reveal className="highlight-card" delay={0.06}>
              <div className="highlight-icon"><BriefcaseBusiness size={19} /></div>
              <div><strong>Industry experience</strong><p>AI &amp; ML internship at Larsen &amp; Toubro.</p></div>
              <span className="highlight-arrow"><ArrowUpRight size={17} /></span>
            </Reveal>
            <Reveal className="highlight-card" delay={0.12}>
              <div className="highlight-icon highlight-icon--blue"><BrainCircuit size={19} /></div>
              <div><strong>Applied AI</strong><p>Built HydroGPT, a document-grounded hydrology assistant.</p></div>
              <span className="highlight-arrow"><ArrowUpRight size={17} /></span>
            </Reveal>
            <Reveal className="highlight-card" delay={0.18}>
              <div className="highlight-icon highlight-icon--teal"><Code2 size={19} /></div>
              <div><strong>Hands-on development</strong><p>Projects across AI, blockchain, Android and IoT.</p></div>
              <span className="highlight-arrow"><ArrowUpRight size={17} /></span>
            </Reveal>
          </div>
        </div>
        <div className="quick-facts">
          <div><strong>03</strong><span>INTERNSHIPS</span></div>
          <div><strong>05</strong><span>SELECTED PROJECTS</span></div>
          <div><strong>2027</strong><span>EXPECTED GRADUATION</span></div>
          <div><strong>7.97</strong><span>CGPA / 10</span></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <div className="page-shell">
        <SectionHeading
          index="02"
          eyebrow="TECHNICAL SKILLS"
          title="Tools I use to"
          accent="make things work."
          note="A focused, growing toolkit."
        />
        <div className="skills-grid">
          {TOOLKIT_CATEGORIES.map((category, index) => {
            const Icon = iconForSkill[index] || Code2;
            return (
              <Reveal className="skill-card" key={category.title} delay={index * 0.07}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="skill-tags">
                  {category.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <div className="page-shell">
        <SectionHeading
          index="03"
          eyebrow="EXPERIENCE"
          title="Learning through"
          accent="real work."
          note="Internships and practical exposure."
        />
        <div className="experience-timeline">
          {EXPERIENCES.map((item, index) => (
            <Reveal className={`experience-item ${index === 0 ? 'experience-item--featured' : ''}`} key={item.id} delay={index * 0.08}>
              <div className="experience-marker"><span /></div>
              <div className="experience-card">
                <div className="experience-meta"><span>{item.period}</span><span><MapPin size={12} /> {item.location}</span></div>
                <div className="experience-main-row">
                  <div>
                    <p className="experience-company">{item.organization}</p>
                    <h3>{item.role}</h3>
                  </div>
                  {index === 0 && <span className="featured-label">FEATURED</span>}
                </div>
                <p className="experience-summary">{item.bullets[0]}</p>
                {index === 0 && item.bullets[1] && <p className="experience-summary experience-summary--secondary">{item.bullets[1]}</p>}
                <div className="experience-tags">{item.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HydroDiagram() {
  const steps = [
    { icon: FileText, title: 'Documents', subtitle: 'Hydrology PDFs' },
    { icon: Network, title: 'Embeddings', subtitle: 'Semantic vectors' },
    { icon: Database, title: 'FAISS', subtitle: 'Context retrieval' },
    { icon: BrainCircuit, title: 'LLM', subtitle: 'Qwen2.5' },
  ];
  return (
    <div className="hydro-diagram">
      <div className="diagram-head"><span>HYDROGPT / SYSTEM FLOW</span><span>RAG PIPELINE</span></div>
      <div className="diagram-flow">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.title}>
              <motion.div
                className="diagram-node"
                initial={{ opacity: 0.35, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.14, duration: 0.5 }}
              >
                <span className="diagram-node-icon"><Icon size={20} /></span>
                <strong>{step.title}</strong>
                <small>{step.subtitle}</small>
              </motion.div>
              {index < steps.length - 1 && <div className="diagram-connector"><span /></div>}
            </React.Fragment>
          );
        })}
      </div>
      <div className="diagram-output"><span className="output-check"><Check size={14} /></span><span><strong>Grounded answer</strong><small>Response based on retrieved source context</small></span><ArrowUpRight size={16} /></div>
      <div className="diagram-foot"><span>RETRIEVE</span><span>RANK</span><span>GENERATE</span><span>RESPOND</span></div>
    </div>
  );
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="page-shell">
        <SectionHeading
          index="04"
          eyebrow="SELECTED PROJECTS"
          title="Ideas turned into"
          accent="working prototypes."
          note="A few things I’ve built and explored."
        />
        <Reveal className="featured-project">
          <div className="featured-project-content">
            <div className="project-kicker"><span>01 / FEATURED</span><span>{HYDRO_GPT_DATA.year}</span></div>
            <p className="project-category">AI ENGINEERING · LLM · RAG</p>
            <h3>Hydro<span>GPT</span></h3>
            <p className="featured-project-description">An AI assistant that searches technical hydrology documents and generates context-grounded answers.</p>
            <div className="project-context"><BriefcaseBusiness size={14} /> Developed during my AI &amp; ML internship at <strong>L&amp;T</strong>.</div>
            <div className="tech-list">{['Python', 'FAISS', 'Qwen2.5', 'QLoRA', 'GGUF', 'Embeddings'].map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="text-link" href="#experience">View internship details <ArrowUpRight size={15} /></a>
          </div>
          <HydroDiagram />
          <div className="featured-project-foot"><span>DOCUMENTS → RETRIEVAL → ANSWERS</span><span>AI / 2026</span></div>
        </Reveal>
        <div className="project-grid">
          {OTHER_PROJECTS.map((project, index) => {
            const Icon = projectIcons[index] || Code2;
            return (
              <Reveal className="project-card" key={project.id} delay={index * 0.06}>
                <div className="project-card-top"><span className="project-card-icon"><Icon size={21} /></span><span>{project.year} / 0{index + 2}</span></div>
                <p className="project-card-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-card-description">{project.contribution}</p>
                <div className="project-card-footer">
                  <div className="project-card-tags">{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <ArrowUpRight size={18} className="project-card-arrow" />
                </div>
                {project.highlight && <div className="project-highlight">{project.highlight}</div>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EducationAndRecognition() {
  const education = EDUCATION_DATA[0];
  const certifications = CERTIFICATIONS_DATA.filter((cert) => !cert.title.toLowerCase().includes('cybersecurity'));
  return (
    <section className="content-section background-section" id="background">
      <div className="page-shell">
        <SectionHeading
          index="05"
          eyebrow="EDUCATION & RECOGNITION"
          title="The foundation"
          accent="behind the work."
          note="Learning, recognition and continuous growth."
        />
        <div className="background-grid">
          <Reveal className="education-card">
            <div className="education-card-head"><span><GraduationCap size={19} /></span><small>EDUCATION / 2023—2027</small></div>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <div className="education-card-bottom"><span>{education.location}</span><strong>{education.score}</strong></div>
          </Reveal>
          <Reveal className="recognition-card" delay={0.1}>
            <div className="recognition-heading"><Award size={18} /><span>SELECTED RECOGNITION</span></div>
            {ACHIEVEMENTS_DATA.map((item, index) => (
              <div className="recognition-row" key={item.title}>
                <span className="recognition-index">0{index + 1}</span>
                <div><strong>{item.title}</strong><small>{item.organizer}</small></div>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal className="certifications-block" delay={0.08}>
          <div className="certifications-heading"><span>CERTIFICATIONS</span><span>{String(certifications.length).padStart(2, '0')} SELECTED</span></div>
          <div className="certifications-list">
            {certifications.map((cert) => (
              <div className="certification-item" key={cert.title}>
                <div><strong>{cert.title}</strong><small>{cert.issuer}</small></div>
                {cert.score && <span>{cert.score}</span>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SOCIAL_LINKS.email}`;
    }
  };

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-glow" />
      <div className="page-shell contact-shell">
        <div className="contact-topline"><span>06 / CONTACT</span><span><span className="availability-pulse" /> OPEN TO OPPORTUNITIES</span></div>
        <Reveal className="contact-main">
          <p className="section-eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>
          <h2>Let’s build<br /><span>something useful.</span></h2>
          <p className="contact-description">Interested in AI engineering, internships and collaborative projects.</p>
          <a className="contact-email" href={`mailto:${SOCIAL_LINKS.email}`}>{SOCIAL_LINKS.email}<ArrowUpRight size={23} /></a>
          <button className="copy-email" type="button" onClick={copyEmail}>
            {copied ? <Check size={14} /> : <Mail size={14} />}{copied ? 'COPIED' : 'COPY EMAIL'}
          </button>
        </Reveal>
        <div className="contact-bottom">
          <SocialLinksRow compact />
          <a className="footer-resume" href={resumeHref} download={HERO_DATA.resumeFileName}><FileText size={15} /> Download résumé <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="footer-meta page-shell"><span>IERIN P MENACHERY © 2026</span><span>DESIGNED WITH INTENTION.</span><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  );
}

export const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Ierin P Menachery | AI & Machine Learning';
  }, []);

  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <Hero />
      <main id="main-content">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationAndRecognition />
      </main>
      <Contact />
    </div>
  );
};

export default App;
