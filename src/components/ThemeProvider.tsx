"use client";

import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

export function ThemeProvider() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
}
