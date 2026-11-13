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
  name: 'IERIN P MENACHERY',
  initials: 'IPM',
  headline: 'I BUILD INTELLIGENT THINGS.',
  subHeadline: 'AI / MACHINE LEARNING / GENERATIVE AI',
  description: 'Computer Science undergraduate exploring AI, LLMs and intelligent software solutions.',
  location: 'KERALA, INDIA',
  email: 'ierinmenachery@gmail.com',
  resumeFileName: 'Ierin_P_Menachery_Resume.pdf',
  profileImage: 'ierin_portrait.jpg',
  highlights: [
    'AI/ML Intern at Larsen & Toubro (L&T)',
    'Creator of HydroGPT (Hydrology RAG System)',
    'Hands-on across AI, Systems & Mobile Engineering',
  ],
};

export const ABOUT_DATA = {
  sectionLabel: '01 / ABOUT ME',
  heading: 'Curious about intelligence. Driven by creation.',
  paragraphs: [
    "I'm a Computer Science undergraduate interested in Artificial Intelligence, Machine Learning, and Generative AI. I enjoy exploring how intelligent systems can solve practical, real-world problems.",
    'From building domain-specific AI assistants to developing mobile and IoT prototypes, I enjoy turning ideas into working solutions.',
  ],
  facts: [
    { label: 'Degree', value: 'B.Tech Computer Science & Engineering' },
    { label: 'Institution', value: 'Jyothi Engineering College' },
    { label: 'Period', value: '2023–2027' },
    { label: 'Academics', value: 'CGPA: 7.97 / 10' },
    { label: 'Location', value: 'Based in Kerala, India' },
  ],
};

export const HYDRO_GPT_DATA: HydroGPTProject = {
  id: 'hydro-gpt',
  title: 'HydroGPT',
  subtitle: 'AI-powered Hydrology & Flood Question Answering System.',
  tagline: 'A domain-specific AI assistant that retrieves information from technical hydrology documents and generates context-grounded answers.',
  label: 'AI / LLMs / RAG',
  highlight: 'Developed during my AI & ML internship at Larsen & Toubro (L&T).',
  year: '2026',
  role: 'AI & Machine Learning Intern',
  organization: 'Larsen & Toubro (L&T)',
  location: 'Mumbai, India',
  duration: '30 June 2026 – 29 August 2026',
  presentationContext: "Presented live to L&T's Hydrology and Structural engineering teams, with participants from Mumbai, Delhi, and Chennai.",
  architectureSteps: [
    {
      id: 'step-1',
      label: 'Hydrology Documents',
      subLabel: 'Domain manuals & flood records',
      description: 'Ingests complex technical guidelines and catchment reports.',
      iconName: 'FileText',
    },
    {
      id: 'step-2',
      label: 'Document Processing',
      subLabel: 'Chunking & structuring',
      description: 'Cleans, tokenizes, and segments documents into contextual chunks.',
      iconName: 'Scissors',
    },
    {
      id: 'step-3',
      label: 'Embeddings',
      subLabel: 'Dense vector representation',
      description: 'Transforms text into mathematical embeddings preserving engineering semantics.',
      iconName: 'Network',
    },
    {
      id: 'step-4',
      label: 'FAISS Retrieval',
      subLabel: 'Similarity indexing',
      description: 'Retrieves top-k context passages using sub-millisecond vector similarity search.',
      iconName: 'Search',
    },
    {
      id: 'step-5',
      label: 'LLM Reasoning',
      subLabel: 'Qwen2.5-3B-Instruct (GGUF)',
      description: 'Generates context-grounded answers running on local CPU without cloud dependency.',
      iconName: 'Cpu',
    },
    {
      id: 'step-6',
      label: 'Grounded Answer',
      subLabel: 'Context-accurate output',
      description: 'Delivers factual, domain-constrained responses for engineering review.',
      iconName: 'CheckCircle2',
    },
  ],
  whatIBuilt: [
    {
      title: 'Domain RAG Pipeline',
      points: [
        'Designed end-to-end retrieval pipeline indexing technical hydrology documents.',
        'Applied semantic chunking and FAISS dense vector indexing for fast query matching.',
      ],
    },
    {
      title: 'Quantized CPU Inference',
      points: [
        'Utilized Qwen2.5-3B-Instruct fine-tuning with QLoRA parameter adaptation.',
        'Deployed GGUF format for zero-cloud local CPU inference to protect sensitive data.',
      ],
    },
  ],
  technologies: [
    'Python',
    'Retrieval-Augmented Generation (RAG)',
    'FAISS',
    'Embeddings',
    'Qwen2.5-3B-Instruct',
    'QLoRA',
    'GGUF',
    'LLMs',
  ],
  isInternalLAndTProject: true,
  repoUrl: undefined,
  demoUrl: undefined,
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: 'blockchain-chain-of-custody',
    title: 'Chain of Custody',
    category: 'Blockchain / Security / Cryptography',
    year: '2026',
    problem: 'Critical evidence logs and digital records are vulnerable to untracked, unauthorized tampering.',
    contribution: 'A prototype for maintaining digital record integrity through SHA-256 hashing and tamper-evident audit trails.',
    technologies: ['Python', 'SHA-256', 'Cryptography', 'SQLite', 'Audit Logging'],
    highlight: 'Cryptographic SHA-256 tamper-evident verification',
    isConceptOrPrototype: false,
  },
  {
    id: 'fraud-detection-tool',
    title: 'Fraud Detection',
    category: 'Security / Python',
    year: '2026',
    problem: 'Deceptive phishing attacks and malicious links frequently mislead non-technical users.',
    contribution: 'A simple fraud and phishing detection tool designed to make suspicious URLs easier to understand through accessible alerts.',
    technologies: ['Python', 'URL Analysis', 'Security Heuristics'],
    highlight: 'Plain-language heuristic warning system',
    isConceptOrPrototype: false,
  },
  {
    id: 'smart-iv-monitoring',
    title: 'Smart IV Monitoring',
    category: 'IoT / Embedded Systems',
    year: '2024',
    problem: 'Manual IV fluid monitoring in hospitals risks dangerous air embolism when fluid depletes.',
    contribution: 'An IoT prototype that uses load-cell sensing to monitor IV fluid levels and alert when fluid is running low.',
    technologies: ['IoT', 'Load Cell Sensor', 'Microcontroller', 'Embedded C/C++'],
    highlight: 'Presented at KSCSTE Tech Fest, IIT Palakkad',
    isConceptOrPrototype: true,
  },
  {
    id: 'course-management-app',
    title: 'Course Management App',
    category: 'Android / Mobile Development',
    year: '2024',
    problem: 'Students require lightweight offline access to syllabus modules and bookmarks.',
    contribution: 'A native Android application for managing course modules and offline bookmarks.',
    technologies: ['Java', 'Android Studio', 'XML', 'SQLite'],
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
    period: '30 June 2026 – 29 August 2026',
    bullets: [
      "Developed HydroGPT, a domain-specific RAG-based AI assistant for technical hydrology queries.",
      "Presented the system to L&T's Hydrology and Structural engineering teams, with participants from Mumbai, Delhi, and Chennai.",
    ],
    technologies: ['Python', 'RAG', 'FAISS', 'Qwen2.5-3B', 'Embeddings', 'GGUF'],
    featuredTag: 'Flagship Corporate Internship',
  },
  {
    id: 'cseed-internship',
    role: 'Python & Single Board Computers Intern',
    organization: 'CSEED',
    location: 'Kerala, India',
    period: '16 June 2025 – 22 June 2025',
    bullets: [
      'Worked with Python, single-board computers, sensor peripherals, and introductory IoT prototyping.',
    ],
    technologies: ['Python', 'Single Board Computers', 'Sensors', 'IoT Prototyping'],
  },
  {
    id: 'ict-internship',
    role: 'Android App Development Intern',
    organization: 'ICT Academy of Kerala',
    location: 'Kerala, India',
    period: 'July 2024 – August 2024',
    bullets: [
      'Developed an Android course management application using Java, XML, and SQLite.',
    ],
    technologies: ['Java', 'Android Studio', 'XML', 'SQLite'],
  },
];

export const TOOLKIT_CATEGORIES = [
  {
    title: 'AI & Generative AI',
    description: 'LLM architectures, retrieval systems, and vector search',
    skills: [
      'Machine Learning',
      'Large Language Models',
      'RAG',
      'Prompt Engineering',
      'FAISS',
      'Embeddings',
      'Qwen2.5',
      'GGUF',
    ],
  },
  {
    title: 'Programming',
    description: 'Languages for AI, backend systems, and mobile software',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL'],
  },
  {
    title: 'Libraries & Frameworks',
    description: 'Scientific computing, data manipulation, and deep learning',
    skills: ['PyTorch', 'NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Development Tools',
    description: 'Version control, operating systems, and development suites',
    skills: ['Git', 'Linux', 'Android Studio', 'HTML', 'CSS'],
  },
];

// Preserved for any legacy components if needed
export const SKILL_CATEGORIES: SkillCategory[] = TOOLKIT_CATEGORIES.map((cat) => ({
  title: cat.title,
  description: cat.description,
  icon: 'Sparkles',
  skills: cat.skills,
}));

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Jyothi Engineering College',
    location: 'Kerala, India',
    period: '2023–2027',
    score: 'CGPA: 7.97 / 10',
    details: 'Coursework in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, DBMS, and Operating Systems.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'State A Grade — IT Presentation',
    category: 'Technical Presentation',
    organizer: 'Kerala State IT Mela',
    description: 'Awarded State A Grade for technical demonstration of computer science concepts.',
    icon: 'Award',
  },
  {
    title: 'District 1st — Fencing & Mountaineering',
    category: 'Athletics & Adventure',
    organizer: 'District Athletic Council',
    description: 'Secured First Place at the district level across fencing and mountaineering events.',
    icon: 'Mountain',
  },
  {
    title: 'Rajya Puraskar Awardee',
    category: 'Leadership & Honor',
    organizer: 'Bharat Scouts & Guides',
    description: "Honored with the Governor's Rajya Puraskar award for scouting and leadership.",
    icon: 'Shield',
  },
];


export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: '5-Day AI Agents Intensive Course',
    issuer: 'Google',
    year: '2025',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Web Development with AI',
    issuer: 'Internshala Trainings · Final Assessment: 81%',
    category: 'Development & Cyber',
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
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
    title: 'Sensors and Actuators',
    issuer: 'NPTEL · IISc Bangalore · Score: 61%',
    category: 'Embedded & Hardware',
  },
  {
    title: 'Embedded Systems Design',
    issuer: 'NPTEL · IIT Kharagpur',
    category: 'Embedded & Hardware',
  },
];
