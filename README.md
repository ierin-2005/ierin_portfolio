# Premium Recruiter-Focused Developer Portfolio — Ierin P Menachery

> **Production-grade personal portfolio website for Ierin P Menachery**, Computer Science Undergraduate specializing in Artificial Intelligence, Machine Learning, Generative AI (LLMs & RAG), and Full-Stack & Android Development. Built strictly from the verified curriculum vitae.

---

## 🌟 Key Highlights & Visual Showcase

- **Visual Direction:** Premium Dark Theme default with deep midnight navy (`#070a12`), electric cyan (`#06b6d4`), teal (`#14b8a6`), subtle violet glows, fine grid patterns, and glassmorphism.
- **Theme Toggle:** Clean Dark / Light mode toggle with automatic persistence and zero flicker.
- **Interactive Flagship Feature (HydroGPT):**
  - Interactive End-to-End System Architecture Flow (`Hydrology Documents → Processing → Text Chunks & Embeddings → FAISS Retrieval → Relevant Context → Language Model → Grounded Answer`).
  - Active Stage Inspector for each architecture node.
  - "What I Built" breakdown highlighting RAG, FAISS indexing, Qwen2.5-3B-Instruct fine-tuning, and compact GGUF CPU inference.
  - Context from Larsen & Toubro (L&T) internship presentation to Hydrology and Structural engineering teams in Mumbai, Delhi, and Chennai.
- **Custom Visual Compositions for Every Project:**
  - **Blockchain Chain of Custody (2026):** SHA-256 cryptographic hashing & tamper-evident audit trail visual.
  - **Fraud Detection Tool (2026):** Accessible phishing & fraud heuristic scanner visual designed for non-technical/elderly users.
  - **Smart IV Fluid Monitoring (2024):** IoT load-cell telemetry & microcontroller alert visual (presented at KSCSTE Tech Fest, IIT Palakkad).
  - **Course Management Android App (2024):** Native Android Studio architecture with Multi-Activity Intent navigation and SQLite offline caching.
- **Editorial Experience Timeline:** Chronological timeline of internships (Larsen & Toubro, CSEED, ICT Academy of Kerala).
- **Searchable Technical Competencies:** 8 categorized skill groups without arbitrary percentages, with instant live search.
- **Filterable Certifications Grid:** Searchable credentials from IISc Bangalore (NPTEL), IIT Kharagpur (NPTEL), Google, Infosys Springboard, Cisco Networking Academy, and Internshala.
- **Recruiter Contact Suite:** One-click copy email button with visual feedback, pre-populated recruiter/collaboration mailto templates, and prominent resume download action.
- **Privacy & Ground Truth Protection:** Referees' personal contact details are completely omitted from the public site. Only verified CV facts are displayed.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite 5 (configured with relative asset paths for seamless GitHub Pages deployment under any repository name or subpath)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React
- **Animations & Interactivity:** Framer Motion & CSS custom keyframes
- **Deployment:** GitHub Pages (Automated GitHub Actions workflow included)

---

## 📁 Project Structure

```text
ierin-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Monogram "IPM" vector favicon
│   ├── og-image.svg            # Open Graph social preview banner (1200x630)
│   └── Ierin_P_Menachery_Resume.pdf  # Verified resume PDF (773 KB)
├── src/
│   ├── components/
│   │   ├── About.tsx           # Grounded 2-column narrative & 3 core pillars
│   │   ├── Achievements.tsx    # State A Grade, District 1st, Rajya Puraskar
│   │   ├── ArchitectureFlow.tsx# Interactive RAG system flow visualizer
│   │   ├── BackToTop.tsx       # Floating scroll-to-top button
│   │   ├── Certifications.tsx  # Searchable & filterable certification cards
│   │   ├── Contact.tsx         # Copy email, recruiter mailto templates, socials
│   │   ├── Education.tsx       # B.Tech CS (Jyothi Engg), Higher Sec, DCA
│   │   ├── Experience.tsx      # L&T, CSEED, and ICT Academy internships
│   │   ├── FeaturedProject.tsx # Dedicated HydroGPT marquee card
│   │   ├── Footer.tsx          # Dynamic copyright, monogram, navigation links
│   │   ├── Hero.tsx            # Headline, highlights, CTAs, social buttons
│   │   ├── HeroVisual.tsx      # Technical AI/RAG interactive telemetry illustration
│   │   ├── Navbar.tsx          # Monogram IPM, scroll spy, mobile drawer, resume CTA
│   │   ├── Projects.tsx        # Project catalog container
│   │   ├── ProjectVisuals.tsx  # Custom SVG illustrations for each project
│   │   ├── Skills.tsx          # Categorized skills with live search
│   │   └── ThemeToggle.tsx     # Dark/Light theme switch
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme provider with localStorage persistence
│   ├── data/
│   │   └── portfolioData.ts    # Centralized single source of truth for all content & URLs
│   ├── types/
│   │   └── index.ts            # Complete TypeScript interface definitions
│   ├── App.tsx                 # Root application composition
│   ├── index.css               # Tailwind directives, custom glassmorphism, scrollbars
│   └── main.tsx                # React DOM root entry
├── index.html                  # SEO, OpenGraph, Twitter metadata, fonts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts              # Configured for GitHub Pages compatibility
```

---

## ⚙️ How to Customize Your Links & Profile

All user-configurable details are consolidated inside:
👉 `src/data/portfolioData.ts`

```typescript
// Open src/data/portfolioData.ts
export const SOCIAL_LINKS: SocialLinks = {
  // Replace these with your actual profiles:
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  email: 'ierinmenachery@gmail.com',
};

// Set these to true after updating your URLs:
export const IS_SOCIAL_CONFIGURED = {
  github: true,
  linkedin: true,
};
```

### Updating Your Downloadable Resume
The downloadable PDF is located at:
👉 `public/Ierin_P_Menachery_Resume.pdf`

If you ever wish to update your resume, simply overwrite this file with your new PDF (keeping the exact filename `Ierin_P_Menachery_Resume.pdf`).

---

## 🚀 Local Development

1. Open your terminal in the project directory:
   ```bash
   cd ierin-portfolio
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Launch local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Run the production build test:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to GitHub Pages (Step-by-Step)

The portfolio includes an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

### Step 1: Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Ierin P Menachery Developer Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository in your web browser.
2. Click **Settings** (gear icon at the top right).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml`.

### Step 3: Access Your Live Portfolio
Within 1–2 minutes, your site will be live at:
```text
https://<your-username>.github.io/<your-repo-name>/
```
(Or `https://<your-username>.github.io/` if using `<your-username>.github.io` as the repository name).

You can now share this live link directly on LinkedIn, in job applications, and on your resume!

---

## 🔒 Confidentiality & Verification Note
In strict accordance with recruitment and privacy standards:
- Professional references' personal phone numbers and direct contact details from the CV are omitted from the public portfolio.
- All qualifications, metrics (7.97 CGPA, 96.3% Higher Secondary, Grade A+ DCA), internships (L&T, CSEED, ICT Academy), and project architectures match the verified CV.
