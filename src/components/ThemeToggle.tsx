import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-slate-800/60 dark:hover:bg-slate-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12 text-indigo-600" />
      )}
    </button>
  );
};
