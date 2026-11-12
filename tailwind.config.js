/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F5F4F0',
          card: '#FFFFFF',
          border: '#E5E3DC',
          muted: '#73726E',
          dark: '#111111',
        },
        dark: {
          bg: '#111111',
          surface: '#181818',
          card: '#1F1F1F',
          border: '#2A2A2A',
          muted: '#8E8D8A',
        },
        orange: {
          DEFAULT: '#F15A29',
          hover: '#D94819',
          subtle: 'rgba(241, 90, 41, 0.1)',
          glow: 'rgba(241, 90, 41, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin 40s linear infinite reverse',
      },
      boxShadow: {
        'orange-glow': '0 0 50px -10px rgba(241, 90, 41, 0.45)',
        'orange-subtle': '0 4px 20px -2px rgba(241, 90, 41, 0.15)',
        'editorial': '0 20px 40px -15px rgba(17, 17, 17, 0.07)',
      },
    },
  },
  plugins: [],
};
