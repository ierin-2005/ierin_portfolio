# Ierin P Menachery — Portfolio

A responsive, recruiter-focused portfolio highlighting AI/ML work, internships, selected projects and education. The interface uses motion-based section reveals, subtle floating elements, animated workflow details and responsive navigation. No emoji assets are used.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Update content

Edit `src/data/portfolioData.ts` to update profile details, social links, education, skills, internships, projects and recognition.

## Important files

- `public/Ierin_P_Menachery_Resume.pdf` — downloadable résumé
- `public/ierin_portrait.jpg` — profile portrait
- `src/App.tsx` — sections, navigation and interactions
- `src/index.css` — visual design, responsive layout and animations
- `vite.config.ts` — relative asset paths for GitHub Pages
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment

## Deploy to the existing GitHub Pages site

1. Extract the ZIP.
2. Copy the contents of the `ierin_portfolio` folder into the existing cloned repository, replacing files but preserving the repository's `.git` folder.
3. Commit and push to `main`.
4. In GitHub, confirm **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The configured site URL is `https://ierin-2005.github.io/ierin_portfolio/`.
