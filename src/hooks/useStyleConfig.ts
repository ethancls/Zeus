"use client";

import { useState, useEffect } from 'react';

interface StyleConfig {
  brand: string;
  accent: string;
  neutral: string;
  border: string;
  solid: string;
  solidStyle: string;
  surface: string;
  transition: string;
}

const defaultStyle: StyleConfig = {
  brand: "indigo",
  accent: "yellow",
  neutral: "slate",
  border: "playful",
  solid: "color",
  solidStyle: "flat",
  surface: "translucent",
  transition: "all",
};

const styleOptions = {
  brand: ["blue", "indigo", "violet", "magenta", "pink", "red", "orange", "yellow", "moss", "green", "emerald", "aqua", "cyan"],
  accent: ["blue", "indigo", "violet", "magenta", "pink", "red", "orange", "yellow", "moss", "green", "emerald", "aqua", "cyan"],
  neutral: ["sand", "gray", "slate"],
  border: ["rounded", "playful", "conservative"],
  solid: ["color", "contrast"],
  solidStyle: ["flat", "plastic"],
  surface: ["filled", "translucent"],
  transition: ["all", "micro", "macro"],
};

export const useStyleConfig = () => {
  const [styleConfig, setStyleConfig] = useState<StyleConfig>(defaultStyle);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Charger la configuration depuis localStorage
    if (typeof window !== 'undefined') {
      const savedConfig = localStorage.getItem('zeus-style-config');
      if (savedConfig) {
        try {
          const parsed = JSON.parse(savedConfig);
          setStyleConfig({ ...defaultStyle, ...parsed });
        } catch (error) {
          console.warn('Erreur lors du chargement de la configuration de style:', error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Sauvegarder dans localStorage
    localStorage.setItem('zeus-style-config', JSON.stringify(styleConfig));

    // Appliquer les data-attributes au document (sans toucher au theme)
    const root = document.documentElement;
    
    root.setAttribute('data-brand', styleConfig.brand);
    root.setAttribute('data-accent', styleConfig.accent);
    root.setAttribute('data-neutral', styleConfig.neutral);
    root.setAttribute('data-border', styleConfig.border);
    root.setAttribute('data-solid', styleConfig.solid);
    root.setAttribute('data-solid-style', styleConfig.solidStyle);
    root.setAttribute('data-surface', styleConfig.surface);
    root.setAttribute('data-transition', styleConfig.transition);
  }, [styleConfig, isLoaded]);

  const updateStyle = (key: keyof StyleConfig, value: string) => {
    setStyleConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetToDefaults = () => {
    setStyleConfig(defaultStyle);
  };

  return {
    styleConfig,
    updateStyle,
    resetToDefaults,
    styleOptions,
    isLoaded
  };
};
