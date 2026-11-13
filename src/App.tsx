import React, { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react';
import {
  ACHIEVEMENTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  EXPERIENCES,
  HERO_DATA,
  SOCIAL_LINKS,
  TOOLKIT_CATEGORIES,
} from './data/portfolioData';

const resumeHref = `./${HERO_DATA.resumeFileName}`;
const navigation = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Toolkit', '#toolkit'],
  ['Contact', '#contact'],
];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) {
  const reduced = useReducedMotion();
  const offsets = { up: { x: 0, y: 34 }, left: { x: -38, y: 0 }, right: { x: 38, y: 0 } };
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, ...offsets[direction], clipPath: 'inset(0 0 12% 0)' }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
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
  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="wordmark" href="#home" aria-label="Ierin P Menachery home">
          <span>IERIN</span><i> / </i><span>PM</span><b>.</b>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href], index) => (
            <a href={href} key={label}><small>0{index + 1}</small>{label}</a>
          ))}
          <a className="nav-resume" href={resumeHref} download={HERO_DATA.resumeFileName}>Résumé <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}>
            {navigation.map(([label, href], index) => (
              <a href={href} key={label} onClick={close}><span>0{index + 1}</span>{label}<ArrowUpRight size={16} /></a>
            ))}
            <a className="mobile-resume" href={resumeHref} download={HERO_DATA.resumeFileName} onClick={close}>Download résumé <Download size={16} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Socials({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`socials ${footer ? 'socials-footer' : ''}`}>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><ArrowUpRight size={12} /></a>
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={12} /></a>
      <a href={`mailto:${SOCIAL_LINKS.email}`}><Mail size={17} /><span>Email</span><ArrowUpRight size={12} /></a>
    </div>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  const heroRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 92]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-noise" />
      <div className="hero-streak hero-streak-one" />
      <div className="hero-streak hero-streak-two" />
      <Header />
      <div className="hero-inner">
        <div className="hero-main">
          <motion.div className="hero-kicker" initial={reduced ? false : { opacity: 0, y: 16 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <span className="kicker-line" /> COMPUTER SCIENCE · CLASS OF 2027
          </motion.div>
          <motion.p className="hero-intro" initial={reduced ? false : { opacity: 0, y: 18 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }}>Hello, I’m Ierin.</motion.p>
          <div className="hero-title-mask">
            <motion.h1 initial={reduced ? false : { y: '105%' }} animate={reduced ? undefined : { y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}>
              Building <em>useful</em><br />intelligence<span className="hero-period">.</span>
            </motion.h1>
          </div>
          <motion.p className="hero-summary" initial={reduced ? false : { opacity: 0, y: 18 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.56 }}>
            I work across AI, machine learning and software — turning complex information into practical tools.
          </motion.p>
          <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0, y: 14 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.68 }}>
            <a className="button button-light" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
            <a className="button button-outline" href={resumeHref} download={HERO_DATA.resumeFileName}>Download résumé <Download size={15} /></a>
          </motion.div>
          <motion.div className="hero-social-wrap" initial={reduced ? false : { opacity: 0 }} animate={reduced ? undefined : { opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}><Socials /></motion.div>
        </div>
        <motion.div className="hero-art" initial={reduced ? false : { opacity: 0, scale: 0.94, x: 28 }} animate={reduced ? undefined : { opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.05, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="hero-art-inner" style={reduced ? undefined : { y: portraitY, rotate: photoRotate }}>
            <div className="orange-disc" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="portrait-wrap"><img src="./ierin_portrait.jpg" alt="Ierin P Menachery" /><span className="portrait-stamp">IERIN P. MENACHERY<br />AI / ML · INDIA</span></div>
            <motion.div className="art-label art-label-top" animate={reduced ? undefined : { y: [0, -9, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><span>01</span><strong>AI / ML</strong><small>Build with purpose</small></motion.div>
            <motion.div className="art-label art-label-bottom" animate={reduced ? undefined : { y: [0, 8, 0] }} transition={{ duration: 5.3, repeat: Infinity, ease: 'easeInOut' }}><span>02</span><strong>LLM SYSTEMS</strong><small>Grounded in context</small></motion.div>
            <div className="art-vertical">KERALA, INDIA — 10° N</div>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero-footer">
        <span>PORTFOLIO / 2026</span><a href="#about">SCROLL TO DISCOVER <span className="scroll-arrow"><ArrowDownRight size={15} /></span></a><span>INDEPENDENT THINKING. PRACTICAL BUILDING.</span>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ['ARTIFICIAL INTELLIGENCE', 'MACHINE LEARNING', 'RETRIEVAL SYSTEMS', 'SOFTWARE DEVELOPMENT'];
  return <div className="marquee" aria-label="Areas of focus"><div className="marquee-track">{[0, 1].map((copy) => <div className="marquee-group" key={copy} aria-hidden={copy === 1}>{words.map((word) => <span key={`${copy}-${word}`}>{word}<i /></span>)}</div>)}</div></div>;
}

function SideLabel({ children, number }: { children: string; number: string }) {
  return <div className="side-label"><span>{number}</span><i />{children}</div>;
}

function SectionHeader({ eyebrow, title, accent, note }: { eyebrow: string; title: string; accent?: string; note?: string }) {
  return <div className="section-header">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}{accent && <> <em>{accent}</em></>}</h2>
    {note && <p className="section-note">{note}</p>}
  </div>;
}

function About() {
  return (
    <section className="about-section light-section" id="about">
      <SideLabel number="01">ABOUT ME</SideLabel>
      <div className="section-content about-content">
        <Reveal className="about-heading"><SectionHeader eyebrow="A LITTLE CONTEXT" title="I make technology" accent="make sense." note="Curiosity is the starting point. Building is how I learn." /></Reveal>
        <div className="about-grid">
          <Reveal className="about-copy" delay={0.08}>
            <p className="about-lead">I’m a Computer Science undergraduate at Jyothi Engineering College, focused on AI and machine learning.</p>
            <p>I enjoy building systems that connect data, models and people — from document-grounded AI assistants to practical software prototypes.</p>
            <div className="about-facts">
              <div><small>EDUCATION</small><strong>B.Tech, CSE</strong></div>
              <div><small>GRADUATION</small><strong>2027</strong></div>
              <div><small>BASED IN</small><strong>Kerala, India</strong></div>
            </div>
          </Reveal>
          <Reveal className="about-visual" direction="right" delay={0.16}>
            <div className="about-image-frame"><img src="./ierin_portrait.jpg" alt="Portrait of Ierin" /></div>
            <div className="about-image-note"><span>01 / 03</span><strong>Learn → Build → Improve</strong></div>
            <div className="about-outline" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HydroArtwork() {
  const reduced = useReducedMotion();
  const nodes = [
    { n: '01', title: 'SOURCE', detail: 'Technical PDFs' },
    { n: '02', title: 'RETRIEVE', detail: 'FAISS + embeddings' },
    { n: '03', title: 'GENERATE', detail: 'Qwen2.5 LLM' },
  ];
  return (
    <div className="hydro-artwork">
      <div className="hydro-art-top"><span>HYDROGPT / SYSTEM MAP</span><span>2026</span></div>
      <div className="hydro-signal signal-one" /><div className="hydro-signal signal-two" />
      <motion.div className="hydro-orbit" animate={reduced ? undefined : { rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }} />
      <div className="hydro-center"><BrainCircuit size={34} strokeWidth={1.2} /><strong>HydroGPT</strong><small>DOMAIN AI ASSISTANT</small></div>
      <div className="hydro-flow">
        {nodes.map((node, index) => <React.Fragment key={node.n}>
          <motion.div className="hydro-node" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.18, duration: 0.6 }}>
            <small>{node.n}</small><strong>{node.title}</strong><span>{node.detail}</span>
          </motion.div>
          {index < nodes.length - 1 && <div className="hydro-connector"><i /></div>}
        </React.Fragment>)}
      </div>
      <div className="hydro-art-foot"><span>RETRIEVAL-AUGMENTED GENERATION</span><span>LOCAL INFERENCE</span></div>
    </div>
  );
}

const projectDetails = [
  {
    number: '02', title: 'Chain of Custody', category: 'BLOCKCHAIN / DATA INTEGRITY', year: '2026',
    description: 'A prototype for tamper-evident digital records using SHA-256 hashes and audit trails.',
    tags: ['Python', 'SHA-256', 'SQLite'], visual: 'chain', icon: ShieldCheck,
  },
  {
    number: '03', title: 'Fraud Detection', category: 'PYTHON / URL ANALYSIS', year: '2026',
    description: 'A lightweight tool that flags suspicious links and explains potential risks in plain language.',
    tags: ['Python', 'URL Analysis', 'Heuristics'], visual: 'fraud', icon: Network,
  },
  {
    number: '04', title: 'Smart IV Monitoring', category: 'IOT / EMBEDDED SYSTEMS', year: '2024',
    description: 'An IoT prototype that monitors IV fluid levels and alerts when the fluid runs low.',
    tags: ['Sensors', 'Microcontroller', 'Embedded C'], visual: 'iot', icon: Database,
  },
  {
    number: '05', title: 'Course Management App', category: 'ANDROID / MOBILE', year: '2024',
    description: 'An Android app for organising course modules and keeping bookmarks available offline.',
    tags: ['Java', 'Android', 'SQLite'], visual: 'mobile', icon: Smartphone,
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'chain') return <div className="project-visual visual-chain"><div className="chain-grid" /><div className="hash-card hash-card-a"><small>RECORD / 001</small><strong>8F2A · 9C11</strong><span>SHA-256 VERIFIED</span></div><div className="hash-link"><i /><i /><i /></div><div className="hash-card hash-card-b"><small>RECORD / 002</small><strong>4B70 · D2E8</strong><span>INTEGRITY CHECK</span></div><span className="visual-caption">TAMPER-EVIDENT LOG</span></div>;
  if (type === 'fraud') return <div className="project-visual visual-fraud"><div className="scan-ring scan-ring-a" /><div className="scan-ring scan-ring-b" /><div className="url-window"><span className="window-dots">•••</span><small>URL INSPECTION</small><strong>https://example-check...</strong><div className="scan-line" /><div className="risk-line"><i /><span>RISK SIGNALS ANALYSED</span></div></div><span className="visual-caption">LINK ANALYSIS</span></div>;
  if (type === 'iot') return <div className="project-visual visual-iot"><div className="iv-bag"><div className="iv-liquid" /><span>IV</span></div><div className="sensor-line" /><div className="sensor-box"><span>SENSOR</span><strong>LEVEL / MONITOR</strong><i /></div><div className="iot-wave wave-a" /><div className="iot-wave wave-b" /><span className="visual-caption">REAL-TIME LEVEL ALERT</span></div>;
  return <div className="project-visual visual-mobile"><div className="phone-frame"><div className="phone-notch" /><small>MY COURSES</small><strong>Semester modules</strong><div className="phone-row"><i /><span>Data Structures</span></div><div className="phone-row"><i /><span>Database Systems</span></div><div className="phone-row"><i /><span>Operating Systems</span></div><div className="phone-tab"><span /><span /><span /></div></div><span className="visual-caption">OFFLINE-FIRST LEARNING</span></div>;
}

function Work() {
  return (
    <section className="work-section light-section" id="work">
      <SideLabel number="02">SELECTED WORK</SideLabel>
      <div className="section-content">
        <Reveal><SectionHeader eyebrow="PROJECTS / 2024—2026" title="Selected" accent="work." note="A few things I’ve designed, built and learned from." /></Reveal>
        <Reveal className="featured-work" delay={0.08}>
          <div className="featured-copy">
            <div className="project-meta"><span>01 / FEATURED PROJECT</span><span>2026</span></div>
            <p className="project-category">AI ENGINEERING · LLM · RAG</p>
            <h3>Hydro<span>GPT</span></h3>
            <p className="featured-description">A hydrology assistant that finds evidence in technical documents and generates context-grounded answers.</p>
            <div className="project-role"><span className="role-dot" /> BUILT DURING AI / ML INTERNSHIP AT L&amp;T</div>
            <div className="project-tags"><span>Python</span><span>FAISS</span><span>Qwen2.5</span><span>QLoRA</span><span>GGUF</span></div>
            <a className="project-text-link" href="#experience">See internship <ArrowUpRight size={15} /></a>
          </div>
          <HydroArtwork />
        </Reveal>
        <div className="project-list">
          {projectDetails.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal className="project-row" key={project.title} delay={index * 0.06}>
                <div className="project-row-info">
                  <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-row-art"><ProjectVisual type={project.visual} /><div className="project-row-icon"><Icon size={19} /></div></div>
                <span className="project-row-arrow"><ArrowUpRight size={20} /></span>
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
    <section className="experience-section dark-section" id="experience">
      <SideLabel number="03">EXPERIENCE</SideLabel>
      <div className="section-content">
        <Reveal><SectionHeader eyebrow="WHERE I’VE LEARNED" title="Experience in" accent="practice." note="Real teams. Real constraints. Meaningful learning." /></Reveal>
        <div className="experience-list">
          {EXPERIENCES.map((item, index) => (
            <Reveal className={`experience-row ${index === 0 ? 'experience-featured' : ''}`} key={item.id}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <p>{item.organization} <span>· {item.location}</span></p>
                <h3>{item.role}</h3>
                <div className="experience-detail">{item.bullets[0]}</div>
                {index === 0 && <div className="experience-detail extra-detail">Presented HydroGPT to Hydrology and Structural teams across L&amp;T offices.</div>}
                <div className="experience-tags">{item.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
              <div className="experience-period">{item.period}</div>
              <ArrowUpRight className="experience-arrow" size={18} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  const icons = [BrainCircuit, Code2, Layers3, Database];
  return (
    <section className="toolkit-section light-section" id="toolkit">
      <SideLabel number="04">TOOLKIT</SideLabel>
      <div className="section-content">
        <Reveal><SectionHeader eyebrow="TOOLS & TECHNOLOGIES" title="The tools behind" accent="the work." note="A practical toolkit, growing with every project." /></Reveal>
        <div className="toolkit-grid">
          {TOOLKIT_CATEGORIES.map((category, index) => {
            const Icon = icons[index] || Code2;
            return (
              <Reveal className="toolkit-card" key={category.title} delay={index * 0.07}>
                <div className="toolkit-card-head"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="toolkit-tags">{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </Reveal>
            );
          })}
        </div>
        <div className="education-strip">
          <Reveal className="education-main">
            <p className="eyebrow">EDUCATION</p>
            <h3>{EDUCATION_DATA[0].degree}</h3>
            <p>{EDUCATION_DATA[0].institution} <span>· Kerala, India</span></p>
            <div className="education-meta"><span>2023—2027</span><strong>{EDUCATION_DATA[0].score}</strong></div>
          </Reveal>
          <Reveal className="recognition-main" delay={0.1}>
            <p className="eyebrow">SELECTED RECOGNITION</p>
            {ACHIEVEMENTS_DATA.map((item, index) => <div className="recognition-line" key={item.title}><span>0{index + 1}</span><div><strong>{item.title}</strong><small>{item.organizer}</small></div></div>)}
          </Reveal>
        </div>
        <Reveal className="certification-line">
          <div className="cert-heading"><span>CERTIFICATIONS</span><span>{CERTIFICATIONS_DATA.filter((item) => !item.title.toLowerCase().includes('cybersecurity')).length} SELECTED</span></div>
          <div className="cert-items">{CERTIFICATIONS_DATA.filter((item) => !item.title.toLowerCase().includes('cybersecurity')).map((item) => <div key={item.title}><strong>{item.title}</strong><small>{item.issuer}{item.score ? ` · ${item.score}` : ''}</small></div>)}</div>
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
      window.setTimeout(() => setCopied(false), 1700);
    } catch {
      window.location.href = `mailto:${SOCIAL_LINKS.email}`;
    }
  };
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-orbit contact-orbit-a" /><div className="contact-orbit contact-orbit-b" />
      <div className="contact-inner">
        <Reveal className="contact-content">
          <p className="eyebrow">05 / START A CONVERSATION</p>
          <h2>Have a good<br /><em>problem to solve?</em></h2>
          <p className="contact-copy">I’m open to AI / ML internships, early-career opportunities and thoughtful collaborations.</p>
          <a className="contact-email" href={`mailto:${SOCIAL_LINKS.email}`}>{SOCIAL_LINKS.email}<ArrowUpRight size={20} /></a>
          <button className="copy-button" onClick={copyEmail}>{copied ? <Check size={13} /> : <Mail size={13} />}{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</button>
        </Reveal>
        <div className="contact-bottom"><Socials footer /><a className="resume-footer" href={resumeHref} download={HERO_DATA.resumeFileName}>Download résumé <Download size={14} /></a></div>
        <div className="footer-credits"><span>IERIN P MENACHERY © 2026</span><span>AI · MACHINE LEARNING · SOFTWARE</span><a href="#home">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => { document.title = 'Ierin P Menachery — AI & Machine Learning'; }, []);
  return (
    <div className="portfolio-site">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Hero />
      <Marquee />
      <main id="main-content"><About /><Work /><Experience /><Toolkit /></main>
      <Contact />
    </div>
  );
}
