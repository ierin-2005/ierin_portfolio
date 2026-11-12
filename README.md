# Ierin P Menachery — Portfolio

A responsive, recruiter-focused portfolio for AI, machine learning and software projects.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Update portfolio content

Edit `src/data/portfolioData.ts` to update profile details, links, education, skills, internships and projects.

## Important files

- `public/Ierin_P_Menachery_Resume.pdf` — downloadable résumé
- `public/ierin_portrait.jpg` — profile portrait
- `src/App.tsx` — page structure and interactions
- `src/index.css` — layout, colors, responsive styles and animations
- `vite.config.ts` — relative asset paths for GitHub Pages

## GitHub Pages

The project includes a GitHub Actions workflow in `.github/workflows/deploy.yml`. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. Push commits to `main` to trigger deployment.
