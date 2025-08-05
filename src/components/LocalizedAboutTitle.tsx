"use client";

import { useLanguage } from "@/hooks/useLanguage";

// Contenu temporaire pour about titles
const aboutTitles = {
  fr: "À propos",
  en: "About", 
  es: "Acerca de",
  ja: "私について"
};

export function LocalizedAboutTitle() {
  const { locale } = useLanguage();

  return <>{aboutTitles[locale] || aboutTitles.fr}</>;
}
