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

/**
 * =========================================================================
 * IERIN P MENACHERY - PORTFOLIO CONFIGURATION & DATA SOURCE OF TRUTH
 * =========================================================================
 * This configuration file powers the entire portfolio website.
 * Update your social links, repository URLs, and contact details here.
 */

export const SOCIAL_LINKS: SocialLinks = {
  // Update these URLs to your live LinkedIn and GitHub profiles:
  github: 'https://github.com/ierin-2005',
  linkedin: 'https://www.linkedin.com/in/ierin-p-menachery-370483285/',
  email: 'ierinmenachery@gmail.com',
};

// Flag indicating whether placeholder URLs need user modification
export const IS_SOCIAL_CONFIGURED = {
  github: true, // Set to true once you set your real GitHub link
  linkedin: true, // Set to true once you set your real LinkedIn link
};

export const HERO_DATA: HeroData = {
  name: 'Ierin P Menachery',
  initials: 'IPM',
  headline: 'Building Intelligent Solutions for Real-World Problems.',
  subHeadline:
    "I'm Ierin, a Computer Science undergraduate passionate about AI, Machine Learning, Generative AI, and software development. I enjoy turning complex technical ideas into practical, user-focused applications.",
  location: 'Kerala, India',
  email: 'ierinmenachery@gmail.com',
  resumeFileName: 'Ierin_P_Menachery_Resume.pdf',
  highlights: [
    'AI/ML Intern at Larsen & Toubro (L&T)',
    'Creator of HydroGPT, a hydrology-focused AI question-answering system',
    'Experience across AI/ML, LLMs, Android development, and application development',
  ],
};

export const ABOUT_DATA = {
  summaryParagraphs: [
    "I am a Computer Science undergraduate with hands-on experience in Machine Learning, Generative AI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG). My primary technical focus is bridging the gap between theoretical AI research and practical, reliable engineering.",
    "During my AI/ML internship at Larsen & Toubro (L&T), I developed HydroGPT—a domain-specific RAG system for hydrology and structural engineering teams across Mumbai, Delhi, and Chennai. Beyond AI, I have built hardware-software prototypes, Android applications using Java and SQLite, and cryptographic integrity tools.",
    "I thrive on understanding systems deeply, writing clean and maintainable code, and turning complex domain data into intuitive tools that solve real problems.",
  ],
  pillars: [
    {
      title: 'AI & Machine Learning',
      description:
        'Hands-on experience in predictive modeling, neural networks, feature engineering, data preprocessing, and model evaluation using Python, Scikit-learn, and PyTorch.',
      icon: 'BrainCircuit',
    },
    {
      title: 'Generative AI & LLMs',
      description:
        'Architecting Retrieval-Augmented Generation (RAG) pipelines, semantic embeddings, FAISS vector indexing, prompt engineering, and domain-grounded question-answering systems.',
      icon: 'Cpu',
    },
    {
      title: 'Software & Application Development',
      description:
        'Building usable client solutions across native Android (Java/XML/SQLite), single-board hardware integration (IoT/CSEED), and full-stack software development.',
      icon: 'Layers',
    },
  ],
  quickStats: [
    { label: 'Degree', value: 'B.Tech CSE', subtext: 'Jyothi Eng. College (CGPA 7.97)' },
    { label: 'Flagship System', value: 'HydroGPT', subtext: 'Presented to L&T Corporate depts' },
    { label: 'Internships', value: '3 Completed', subtext: 'L&T, CSEED, ICT Academy' },
    { label: 'Verified Projects', value: '5 Delivered', subtext: 'AI/ML, Crypto, IoT, Android' },
  ],
};

export const HYDRO_GPT_DATA: HydroGPTProject = {
  id: 'hydro-gpt',
  title: 'HydroGPT — AI-Powered Hydrology & Flood Question-Answering System',
  tagline:
    'Domain-specific question-answering system using LLMs and Retrieval-Augmented Generation (RAG) for grounded engineering insights.',
  year: '2026',
  role: 'AI/ML Intern',
  organization: 'Larsen & Toubro (L&T)',
  location: 'Mumbai, India',
  duration: 'June 30, 2026 – August 29, 2026',
  summary:
    'Developed a domain-specific AI question-answering system using large language models and retrieval-augmented generation to provide context-aware answers from hydrology knowledge.',
  presentationContext:
    "Presented HydroGPT to L&T's Hydrology and Structural departments, with specialized engineering teams from Delhi and Chennai participating remotely.",
  architectureSteps: [
    {
      id: 'step-1',
      label: 'Hydrology Documents',
      subLabel: 'Domain Reports & Data',
      description:
        'Hydrology guidelines, structural manuals, catchment parameters, and environmental flood datasets are collected and prepared.',
      iconName: 'FileText',
    },
    {
      id: 'step-2',
      label: 'Document Processing',
      subLabel: 'Parsing & Semantic Chunking',
      description:
        'Raw documentation is cleaned, normalized, and split into overlapping semantic chunks with metadata preservation.',
      iconName: 'Scissors',
    },
    {
      id: 'step-3',
      label: 'Text Chunks & Embeddings',
      subLabel: 'Dense Vector Representation',
      description:
        'High-dimensional domain embeddings are computed to capture hydrological terminology and contextual nuances.',
      iconName: 'Network',
    },
    {
      id: 'step-4',
      label: 'FAISS Retrieval',
      subLabel: 'Similarity Search Index',
      description:
        'User queries are mapped to vector space; FAISS identifies top-k nearest semantic chunks with sub-millisecond latency.',
      iconName: 'Search',
    },
    {
      id: 'step-5',
      label: 'Relevant Context',
      subLabel: 'Grounding Injection',
      description:
        'Retrieved evidence chunks are synthesized into an augmented prompt template to strictly constrain the model to factual data.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'step-6',
      label: 'Language Model',
      subLabel: 'Qwen2.5-3B / Quantized GGUF',
      description:
        'The LLM (fine-tuned with QLoRA / optimized via compact GGUF for local CPU inference) reasons over the verified context.',
      iconName: 'Bot',
    },
    {
      id: 'step-7',
      label: 'Grounded Answer',
      subLabel: 'Context-Aware Response',
      description:
        'Generates hydrology-related answers using retrieved information from technical documents, helping users access relevant engineering knowledge while acknowledging the limitations of LLM-generated responses.',
      iconName: 'CheckCircle2',
    },
  ],
  whatIBuilt: [
    {
      title: 'Domain-Specific Retrieval Pipeline',
      points: [
        'Structured ingestion and preprocessing for complex hydrology reports, structural documentation, and flood environmental data.',
        'Semantic chunking strategies preserving engineering formulas, tables, and domain terminology.',
      ],
    },
    {
      title: 'High-Performance Vector Indexing (FAISS)',
      points: [
        'Integrated dense embeddings with Facebook AI Similarity Search (FAISS) for rapid and precise semantic retrieval.',
        'Engineered similarity thresholding to ensure only high-confidence engineering context reaches the model.',
      ],
    },
    {
      title: 'LLM Fine-Tuning & Quantized Inference',
      points: [
        'Explored Qwen2.5-3B-Instruct with QLoRA parameter-efficient fine-tuning for domain adaptation.',
        'Implemented compact GGUF format for local CPU inference, enabling cost-effective, private, and lightweight deployment without requiring expensive cloud GPUs.',
      ],
    },
    {
      title: 'Enterprise Department Presentation',
      points: [
        "Delivered a live demonstration to Larsen & Toubro's Hydrology and Structural engineering departments.",
        'Successfully hosted hybrid presentation with remote participation from senior teams in Delhi and Chennai.',
      ],
    },
  ],
  keyCapabilities: [
    'Retrieval-Augmented Generation (RAG)',
    'FAISS-Based Vector Retrieval',
    'Embeddings & Document Processing',
    'Local CPU Inference via GGUF',
    'Hydrology & Environmental Knowledge',
  ],
  technologies: [
    'Python',
    'Large Language Models (LLMs)',
    'Retrieval-Augmented Generation (RAG)',
    'FAISS',
    'Embeddings',
    'Qwen2.5-3B-Instruct',
    'GGUF',
    'Machine Learning',
  ],
  isInternalLAndTProject: true,
  repoUrl: undefined, // Internal corporate project at L&T
  demoUrl: undefined,
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: 'blockchain-chain-of-custody',
    title: 'Blockchain-Based Chain of Custody System',
    year: '2026',
    category: 'Security & Integrity',
    problem:
      'Digital evidence and critical records require verifiable proof of authenticity, tamper-detection, and a continuous audit trail to prevent unauthorized alterations.',
    contribution:
      'Developed a blockchain-based system leveraging SHA-256 cryptographic hashing to guarantee data integrity, detect unauthorized modifications instantly, and maintain an immutable, verifiable audit trail for recorded events.',
    technologies: ['Python', 'SHA-256 Hashing', 'Cryptography', 'Audit Logging', 'Data Integrity'],
    highlight: 'Cryptographic SHA-256 tamper-evident verification',
    isConceptOrPrototype: false,
  },
  {
    id: 'fraud-detection-tool',
    title: 'Fraud Detection Tool for Non-Technical Users',
    year: '2026',
    category: 'Security & Usability',
    problem:
      'Elderly and non-technical internet users are disproportionately targeted by phishing URLs, spoofed messages, and deceptive digital communications, yet existing security tools are overly complex and intimidating.',
    contribution:
      'Developed an intuitive and accessible system designed specifically to identify fraudulent URLs, phishing messages, and scam communications, focusing on clear visual indicators, plain-language warnings, and effortless usability for non-technical individuals.',
    technologies: ['Python', 'Security Heuristics', 'URL Analysis', 'Pattern Recognition', 'User-Centered Design'],
    highlight: 'Designed specifically for elderly and non-technical accessibility',
    isConceptOrPrototype: false,
  },
  {
    id: 'smart-iv-monitoring',
    title: 'Smart Intravenous Fluid Monitoring System',
    year: '2024',
    category: 'IoT & Embedded Systems',
    problem:
      'Manual monitoring of intravenous (IV) fluid bags in busy hospital wards can lead to air embolism risks or delayed bag replacements if nurses are unavailable when the fluid empties.',
    contribution:
      'Designed a low-cost IoT prototype using a load-cell weight sensor, microcontroller, and automated alert mechanism to track fluid levels continuously and trigger timely notifications. Presented the engineered concept at KSCSTE Tech Fest, IIT Palakkad (2024).',
    technologies: ['IoT Prototyping', 'Load-Cell Sensor', 'Microcontroller', 'Embedded C/C++', 'Circuit Prototyping'],
    highlight: 'Presented prototype at KSCSTE Tech Fest, IIT Palakkad',
    isConceptOrPrototype: true,
  },
  {
    id: 'course-management-app',
    title: 'Course Management Android App',
    year: '2024',
    category: 'Mobile Engineering',
    problem:
      'Students and trainees need an organized, fast, and offline-capable mobile interface to navigate course catalogs, inspect module details, and bookmark local favorites.',
    contribution:
      'Built a native Android application using Java, Android Studio, and structured XML layouts. Implemented multiple Activities with Intent-based navigation, efficient UI components, and SQLite local database persistence for saving offline favorites.',
    technologies: ['Java', 'Android Studio', 'XML Layouts', 'SQLite', 'Intent Navigation', 'Git'],
    highlight: 'Built during ICT Academy of Kerala internship',
    isConceptOrPrototype: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'lt-internship',
    role: 'Artificial Intelligence & Machine Learning Intern',
    organization: 'Larsen & Toubro (L&T)',
    location: 'Mumbai, India',
    period: '30 Jun 2026 – 29 Aug 2026',
    bullets: [
      'Developed HydroGPT, a domain-specific LLM and RAG system, applying ML models to flood and environmental data using Python.',
      'Built a retrieval pipeline using domain-specific hydrology knowledge, integrating relevant information as context for improved response grounding.',
      "Presented HydroGPT to L&T's Hydrology and Structural departments, with teams from Delhi and Chennai joining remotely.",
    ],
    technologies: ['Python', 'LLMs', 'RAG', 'FAISS', 'Machine Learning', 'Qwen2.5-3B', 'Data Preprocessing'],
    featuredTag: 'Flagship Corporate Internship',
  },
  {
    id: 'cseed-internship',
    role: 'Python & Single Board Computers Intern',
    organization: 'CSEED',
    location: 'Kerala, India',
    period: '16 Jun 2025 – 22 Jun 2025',
    bullets: [
      'Explored hardware-software integration through guided laboratory exercises, gaining hands-on exposure to embedded systems and IoT prototyping concepts.',
      'Developed Python scripts to interface with single-board hardware and sensor peripherals.',
    ],
    technologies: ['Python', 'Single Board Computers', 'Embedded Systems', 'IoT Prototyping', 'Hardware-Software Integration'],
  },
  {
    id: 'ict-internship',
    role: 'Android App Development Intern',
    organization: 'ICT Academy of Kerala',
    location: 'Kerala, India',
    period: 'Jul 2024 – Aug 2024',
    bullets: [
      'Developed a Java-based Android course management app with multi-activity navigation and SQLite local favorites.',
      'Gained hands-on experience in Android Studio, Git version control, XML UI design, debugging, and APK testing.',
    ],
    technologies: ['Android Studio', 'Java', 'XML Layouts', 'SQLite', 'Git', 'APK Testing'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & LLMs',
    description: 'Specialized focus in retrieval architectures and domain-grounded models',
    icon: 'Sparkles',
    skills: [
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'Question Answering Systems',
      'Embeddings',
      'Information Retrieval',
      'Domain-Specific AI Applications',
    ],
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Classical & deep learning pipelines, data processing, and evaluation',
    icon: 'Brain',
    skills: [
      'Machine Learning',
      'Predictive Modeling',
      'Linear Regression',
      'Logistic Regression',
      'Artificial Neural Networks (ANN)',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Training',
      'Model Evaluation',
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for systems, data science, and application engineering',
    icon: 'Code2',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Libraries & Frameworks',
    description: 'Data science, numerical computation, and deep learning libraries',
    icon: 'Library',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'Matplotlib'],
  },
  {
    title: 'Mobile / Android Development',
    description: 'Native mobile development architecture and components',
    icon: 'Smartphone',
    skills: [
      'Android Studio',
      'Java for Android',
      'XML Layouts',
      'SQLite',
      'Activity & Navigation',
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Engineering development environments, VCS, and OS',
    icon: 'Terminal',
    skills: ['GitHub', 'VS Code', 'Android Studio', 'Linux', 'MySQL'],
  },
  {
    title: 'Computer Science Fundamentals',
    description: 'Core foundational principles of reliable software engineering',
    icon: 'BookOpen',
    skills: ['Object-Oriented Programming (OOP)', 'Data Structures', 'Database Management Systems (DBMS)'],
  },
  {
    title: 'Professional & Soft Skills',
    description: 'Interpersonal strengths verified across internships and team presentations',
    icon: 'Users',
    skills: ['Effective Communication', 'Problem-Solving', 'Leadership', 'Teamwork', 'Organization'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science (Third Year)',
    institution: 'Jyothi Engineering College',
    location: 'Thrissur, Kerala',
    period: 'Aug 2023 – Aug 2027',
    score: 'CGPA: 7.97 / 10',
    details: 'Coursework in AI/ML, Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Software Design.',
  },
  {
    degree: 'Higher Secondary (Computer Science Stream)',
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
    details: 'Foundational computer applications, office software suites, and practical computing fundamentals.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'State A Grade — IT Presentation',
    category: 'Academic & Technical',
    organizer: 'IT Mela (Kerala State)',
    description: 'Awarded State A Grade for technical presentation and demonstration of computer science concepts at the Kerala State IT Mela.',
    icon: 'Award',
  },
  {
    title: 'District 1st — Fencing & Mountaineering',
    category: 'Sports & Adventure',
    organizer: 'District Athletic / Adventure Council',
    description: 'Secured First Place at the district level across fencing and mountaineering competitions, demonstrating physical discipline and resilience.',
    icon: 'Mountain',
  },
  {
    title: 'Rajya Puraskar Awardee',
    category: 'Leadership & Arts',
    organizer: 'Bharat Scouts & Guides (Nanmamudra Unit)',
    description: 'Honored with the prestigious Rajya Puraskar (Governor’s Award) from Bharat Scouts & Guides in recognition of exemplary service, leadership, and scouting excellence.',
    icon: 'Shield',
  },
  {
    title: 'State 2nd — Monoact (Solo Acting)',
    category: 'Arts & Culture',
    organizer: 'Malayala Manorama',
    description: 'Won Second Prize at the state-wide competition organized by Malayala Manorama for theatrical monologue performance, demonstrating voice projection and expression.',
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
    title: 'Artificial Intelligence for All',
    issuer: 'Infosys Springboard',
    year: '2025',
    category: 'AI & Machine Learning',
  },
  {
    title: '5-Day AI Agents Intensive Course with Google',
    issuer: 'Google',
    year: '2025',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    year: '2026',
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
