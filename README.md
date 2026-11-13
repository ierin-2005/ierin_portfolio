# Ierin P Menachery — Portfolio

A responsive, editorial-style portfolio built with React, TypeScript, Vite and Framer Motion.

## Design direction

- High-contrast charcoal and warm-paper palette with a restrained vermilion accent
- Large editorial typography, narrow section markers and asymmetric project layouts
- Scroll-triggered reveals, parallax portrait, continuous focus marquee and animated project diagrams
- Reduced-motion support and responsive navigation
- No emoji or stock illustration dependencies

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy

The included GitHub Actions workflow builds the site and deploys the `dist` directory to GitHub Pages whenever changes are pushed to `main`.

The project uses relative asset paths so it works under the repository Pages path: `https://ierin-2005.github.io/ierin_portfolio/`.
