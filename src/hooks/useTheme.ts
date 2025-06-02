"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark'); // Default from config

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      updateDataAttribute(savedTheme);
    } else {
      // Use system preference as fallback
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      updateDataAttribute(systemTheme);
    }
  }, []);

  const updateDataAttribute = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    updateDataAttribute(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}
