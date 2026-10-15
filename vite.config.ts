import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative base ensures assets load properly both locally and on GitHub Pages (subpaths or custom domains)
  base: process.env.VITE_BASE_PATH || './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
});
