"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ToggleButton, Flex, Text } from '@/once-ui/components';
import { useLanguage, Locale } from '@/hooks/useLanguage';
import styles from './LanguageSelector.module.scss';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const languages = [
    { code: 'fr' as Locale, flag: '🇫🇷', name: t('language.french') },
    { code: 'en' as Locale, flag: '🇺🇸', name: t('language.english') },
    { code: 'es' as Locale, flag: '🇪🇸', name: t('language.spanish') },
    { code: 'ja' as Locale, flag: '🇯🇵', name: t('language.japanese') },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleLanguageSelect = (langCode: Locale) => {
    setLocale(langCode);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.languageSelector} ${className || ''}`} ref={dropdownRef}>
      <ToggleButton
        prefixIcon="globe"
        onClick={() => setIsOpen(!isOpen)}
        selected={false}
        aria-label="Sélectionner la langue"
      />
      
      {isOpen && (
        <div className={styles.dropdown}>
          <Flex direction="column" background="surface" border="neutral-medium" radius="s" shadow="l" padding="4">
            {languages.map((language) => (
              <div
                key={language.code}
                className={`${styles.languageOption} ${locale === language.code ? styles.selected : ''}`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <Flex horizontal="space-between" vertical="center" padding="8" gap="8">
                  <Flex vertical="center" gap="8">
                    <span className={styles.flag}>{language.flag}</span>
                    <Text variant="body-default-s">{language.name}</Text>
                  </Flex>
                  {locale === language.code && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </Flex>
              </div>
            ))}
          </Flex>
        </div>
      )}
    </div>
  );
};
