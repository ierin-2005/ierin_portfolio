import {
  HeroData,
  SocialLinks,
  HydroGPTProject,
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  AchievementItem,
  CertificationItem,
} from '../types';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/ierin-2005',
  linkedin: 'https://www.linkedin.com/in/ierin-p-menachery-370483285/',
  email: 'ierinmenachery@gmail.com',
};

export const IS_SOCIAL_CONFIGURED = {
  github: true,
  linkedin: true,
};

export const HERO_DATA: HeroData = {
  name: 'Ierin P Menachery',
  initials: 'IPM',
  headline: 'Building Intelligent Solutions for Real-World Problems.',
  subHeadline:
    'Computer Science undergrad specializing in AI/ML, LLMs, and RAG. Built HydroGPT at Larsen & Toubro (L&T) and engineered practical solutions across mobile & IoT.',
  location: 'Kerala, India',
  email: 'ierinmenachery@gmail.com',
  resumeFileName: 'Ierin_P_Menachery_Resume.pdf',
  profileImage: 'ierin_portrait.jpg',
  highlights: [
    'AI/ML Intern at Larsen & Toubro (L&T)',
    'Creator of HydroGPT (Hydrology RAG QA System)',
    'Hands-on across AI/ML, LLMs & Android Apps',
  ],
  stats: [
    { value: '3+', label: 'Internships' },
    { value: '5+', label: 'Verified Projects' },
    { value: '10+', label: 'Certifications' },
    { value: '7.97', label: 'B.Tech CGPA' },
  ],
};

export const ABOUT_DATA = {
  summaryParagraphs: [
    'Computer Science undergraduate specializing in Machine Learning, Generative AI, and Retrieval-Augmented Generation (RAG). Focused on turning AI models into dependable, practical software.',
    'Previously AI/ML Intern at Larsen & Toubro (L&T), where I built HydroGPT for engineering teams in Mumbai, Delhi, and Chennai. Experienced across LLMs, Android development, and IoT prototyping.',
  ],
  pillars: [
    {
      title: 'AI & Machine Learning',
      description:
        'Predictive models, neural networks, and evaluation pipelines in Python & Scikit-learn.',
      icon: 'BrainCircuit',
    },
    {
      title: 'Generative AI & LLMs',
      description:
        'Domain RAG pipelines, dense FAISS vector indexing, and quantized local CPU inference (GGUF).',
      icon: 'Cpu',
    },
    {
      title: 'Software & App Development',
      description:
        'Native Android (Java/XML/SQLite), IoT microcontroller integration, and cryptographic security.',
      icon: 'Layers',
    },
  ],
  quickStats: [
    { label: 'Degree', value: 'B.Tech CSE', subtext: 'Jyothi Eng. College (CGPA 7.97)' },
    { label: 'Flagship System', value: 'HydroGPT', subtext: 'Presented to L&T Corporate depts' },
    { label: 'Internships', value: '3 Completed', subtext: 'L&T, CSEED, ICT Academy' },
    { label: 'Verified Projects', value: '4 Delivered', subtext: 'AI/ML, Crypto, IoT, Android' },
  ],
};

export const HYDRO_GPT_DATA: HydroGPTProject = {
  id: 'hydro-gpt',
  title: 'HydroGPT — AI-Powered Hydrology & Flood QA System',
  tagline:
    'Enterprise RAG pipeline delivering context-grounded answers from complex hydrology guidelines and flood records.',
  year: '2026',
  role: 'AI/ML Intern',
  organization: 'Larsen & Toubro (L&T)',
  location: 'Mumbai, India',
  duration: 'June 30, 2026 – August 29, 2026',
  summary:
    'Developed a domain-specific RAG system answering technical queries from hydrology and structural engineering documents.',
  presentationContext:
    "Presented live to L&T's Hydrology and Structural divisions across Mumbai, Delhi, and Chennai.",
  architectureSteps: [
    {
      id: 'step-1',
      label: 'Hydrology Docs',
      subLabel: 'Domain Reports & Data',
      description:
        'Ingests flood manuals, catchment logs, and technical engineering guidelines.',
      iconName: 'FileText',
    },
    {
      id: 'step-2',
      label: 'Semantic Chunking',
      subLabel: 'Parsing & Structuring',
      description:
        'Cleans and chunks documents while strictly preserving engineering tables and formulas.',
      iconName: 'Scissors',
    },
    {
      id: 'step-3',
      label: 'Embeddings',
      subLabel: 'Dense Vector Map',
      description:
        'Generates high-dimensional vector representations capturing hydrology terminology.',
      iconName: 'Network',
    },
    {
      id: 'step-4',
      label: 'FAISS Retrieval',
      subLabel: 'Sub-ms Similarity Search',
      description:
        'Identifies top-k nearest semantic context chunks with sub-millisecond query latency.',
      iconName: 'Search',
    },
    {
      id: 'step-5',
      label: 'Grounding Injection',
      subLabel: 'Fact Constraint',
      description:
        'Constrains the language model with verified domain context to eliminate hallucinations.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'step-6',
      label: 'Local LLM',
      subLabel: 'Qwen2.5 / GGUF CPU',
      description:
        'Qwen2.5-3B optimized via GGUF for private, cost-effective local CPU execution.',
      iconName: 'Bot',
    },
    {
      id: 'step-7',
      label: 'Verified Output',
      subLabel: 'Grounded Answer',
      description:
        'Delivers context-aware answers ready for engineering and structural review.',
      iconName: 'CheckCircle2',
    },
  ],
  whatIBuilt: [
    {
      title: 'RAG & Vector Retrieval',
      points: [
        'Engineered document ingestion, semantic chunking, and FAISS dense vector search.',
        'Implemented similarity thresholding to ensure only high-confidence context reaches the model.',
      ],
    },
    {
      title: 'Quantized CPU Inference',
      points: [
        'Explored Qwen2.5-3B-Instruct fine-tuning with QLoRA parameter adaptation.',
        'Configured lightweight GGUF format for private, zero-cloud local CPU inference.',
      ],
    },
    {
      title: 'Enterprise Department Showcase',
      points: [
        "Delivered a live demonstration to L&T's Hydrology and Structural engineering divisions.",
        'Conducted hybrid presentation with remote participation from senior teams in Delhi and Chennai.',
      ],
    },
  ],
  keyCapabilities: [
    'Retrieval-Augmented Generation (RAG)',
    'FAISS Vector Retrieval',
    'Embeddings & Document Processing',
    'Local CPU Inference (GGUF)',
    'Hydrology Knowledge Grounding',
  ],
  technologies: [
    'Python',
    'Large Language Models (LLMs)',
    'RAG',
    'FAISS',
    'Embeddings',
    'Qwen2.5-3B',
    'GGUF',
  ],
  isInternalLAndTProject: true,
  repoUrl: undefined,
  demoUrl: undefined,
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: 'blockchain-chain-of-custody',
    title: 'Blockchain-Based Chain of Custody System',
    year: '2026',
    category: 'Security & Integrity',
    problem: 'Critical digital records are vulnerable to untracked, unauthorized tampering.',
    contribution:
      'Built a cryptographic ledger using SHA-256 hashing to guarantee data integrity and maintain an immutable, tamper-evident audit trail.',
    technologies: ['Python', 'SHA-256 Hashing', 'Cryptography', 'Audit Logging', 'Data Integrity'],
    highlight: 'Cryptographic SHA-256 tamper-evident verification',
    isConceptOrPrototype: false,
  },
  {
    id: 'fraud-detection-tool',
    title: 'Fraud Detection Tool for Non-Technical Users',
    year: '2026',
    category: 'Security & Usability',
    problem: 'Phishing URLs and deceptive digital scams target non-technical users with complex threats.',
    contribution:
      'Created an accessible heuristic scanner with plain-language visual alerts and simplified indicators designed for elderly usability.',
    technologies: ['Python', 'Security Heuristics', 'URL Analysis', 'User-Centered Design'],
    highlight: 'Designed specifically for elderly and non-technical accessibility',
    isConceptOrPrototype: false,
  },
  {
    id: 'smart-iv-monitoring',
    title: 'Smart Intravenous Fluid Monitoring System',
    year: '2024',
    category: 'IoT & Embedded Systems',
    problem: 'Manual hospital IV monitoring risks air embolism when empty bags go unnoticed.',
    contribution:
      'Prototyped an automated load-cell telemetry sensor alerting nurses before fluids deplete. Presented at KSCSTE Tech Fest, IIT Palakkad.',
    technologies: ['IoT Prototyping', 'Load-Cell Sensor', 'Microcontroller', 'Embedded C/C++'],
    highlight: 'Presented prototype at KSCSTE Tech Fest, IIT Palakkad',
    isConceptOrPrototype: true,
  },
  {
    id: 'course-management-app',
    title: 'Course Management Android App',
    year: '2024',
    category: 'Mobile Engineering',
    problem: 'Students lack a lightweight, offline-capable mobile interface to navigate course modules.',
    contribution:
      'Built a native Android app in Java with multi-activity Intent flows and SQLite local persistence for offline course bookmarks.',
    technologies: ['Java', 'Android Studio', 'XML Layouts', 'SQLite', 'Git'],
    highlight: 'Built during ICT Academy of Kerala internship',
    isConceptOrPrototype: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'lt-internship',
    role: 'AI & Machine Learning Intern',
    organization: 'Larsen & Toubro (L&T)',
    location: 'Mumbai, India',
    period: '30 Jun 2026 – 29 Aug 2026',
    bullets: [
      'Developed HydroGPT, a domain-specific RAG system answering queries over environmental & flood records.',
      'Integrated dense FAISS vector search with quantized Qwen2.5 for fast local CPU inference.',
      'Presented system live to L&T engineering divisions across Mumbai, Delhi, and Chennai.',
    ],
    technologies: ['Python', 'LLMs', 'RAG', 'FAISS', 'Qwen2.5-3B', 'Data Preprocessing'],
    featuredTag: 'Flagship Corporate Internship',
  },
  {
    id: 'cseed-internship',
    role: 'Python & Single Board Computers Intern',
    organization: 'CSEED',
    location: 'Kerala, India',
    period: '16 Jun 2025 – 22 Jun 2025',
    bullets: [
      'Interfaced Python scripts with single-board microcomputers and sensor peripherals.',
      'Prototyped IoT data collection pipelines through guided hardware-software labs.',
    ],
    technologies: ['Python', 'Single Board Computers', 'Embedded Systems', 'IoT Prototyping'],
  },
  {
    id: 'ict-internship',
    role: 'Android App Development Intern',
    organization: 'ICT Academy of Kerala',
    location: 'Kerala, India',
    period: 'Jul 2024 – Aug 2024',
    bullets: [
      'Developed an offline-first Android course management app using Java and SQLite.',
      'Designed XML interfaces, handled multi-intent flows, and tested APK builds.',
    ],
    technologies: ['Android Studio', 'Java', 'XML Layouts', 'SQLite', 'Git'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & LLMs',
    description: 'RAG pipelines, vector retrieval, and quantized inference',
    icon: 'Sparkles',
    skills: [
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'FAISS Vector Search',
      'Embeddings',
      'Qwen2.5 / GGUF',
    ],
  },
  {
    title: 'Machine Learning',
    description: 'Predictive modeling, regression, neural networks, and evaluation',
    icon: 'Brain',
    skills: [
      'Machine Learning',
      'Predictive Modeling',
      'Neural Networks (ANN)',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Evaluation',
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for AI, systems, and application engineering',
    icon: 'Code2',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Libraries & Tools',
    description: 'Data science, numerical computation, and development environments',
    icon: 'Library',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'Git', 'Android Studio', 'Linux'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science (Third Year)',
    institution: 'Jyothi Engineering College',
    location: 'Thrissur, Kerala',
    period: 'Aug 2023 – Aug 2027',
    score: 'CGPA: 7.97 / 10',
    details: 'Coursework in AI/ML, Data Structures, Algorithms, DBMS, Operating Systems, and OOP.',
  },
  {
    degree: 'Higher Secondary (Computer Science)',
    institution: 'Sacred Heart C.G.H.S.',
    location: 'Thrissur, Kerala',
    period: '2020 – 2022',
    score: '96.3%',
    details: 'Specialization in Computer Science, Mathematics, Physics, and Chemistry.',
  },
  {
    degree: 'Diploma in Computer Application',
    institution: 'SCOLE Kerala',
    location: 'Thrissur, Kerala',
    period: '2020 – 2022',
    score: 'Grade A+',
    details: 'Foundational computer applications and practical computing fundamentals.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'State A Grade — IT Presentation',
    category: 'Academic & Technical',
    organizer: 'IT Mela (Kerala State)',
    description: 'Awarded State A Grade for technical demonstration of computer science concepts at the Kerala State IT Mela.',
    icon: 'Award',
  },
  {
    title: 'District 1st — Fencing & Mountaineering',
    category: 'Sports & Adventure',
    organizer: 'District Athletic Council',
    description: 'Secured First Place at district level across fencing and mountaineering competitions.',
    icon: 'Mountain',
  },
  {
    title: 'Rajya Puraskar Awardee',
    category: 'Leadership & Arts',
    organizer: 'Bharat Scouts & Guides',
    description: 'Honored with the Rajya Puraskar (Governor’s Award) for leadership and scouting excellence.',
    icon: 'Shield',
  },
  {
    title: 'State 2nd — Monoact Performance',
    category: 'Arts & Culture',
    organizer: 'Malayala Manorama',
    description: 'Won Second Prize at the state-wide theatrical competition organized by Malayala Manorama.',
    icon: 'Drama',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Sensors and Actuators',
    issuer: 'NPTEL, IISc Bangalore',
    score: 'Score: 61%',
    category: 'Embedded & Hardware',
  },
  {
    title: 'Embedded Systems Design',
    issuer: 'NPTEL, IIT Kharagpur',
    category: 'Embedded & Hardware',
  },
  {
    title: 'Web Development with AI',
    issuer: 'Internshala Trainings',
    score: 'Final Assessment: 81%',
    category: 'AI & Machine Learning',
  },
  {
    title: '5-Day AI Agents Intensive Course with Google',
    issuer: 'Google',
    year: '2025',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Artificial Intelligence for All',
    issuer: 'Infosys Springboard',
    year: '2025',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Development & Cyber',
  },
];
