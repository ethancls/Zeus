"use client";

import React from 'react';
import { ToggleButton } from '@/once-ui/components';
import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const icon = isDark ? 'sun' : 'moon';
  const label = isDark ? 'Mode clair' : 'Mode sombre';

  return (
    <ToggleButton
      className={className}
      prefixIcon={icon}
      onClick={toggleTheme}
      aria-label={label}
      selected={false} // Jamais selected pour éviter la couleur de thème
    />
  );
};
