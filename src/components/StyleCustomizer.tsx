"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button, Icon, Flex, Text, Badge } from '@/once-ui/components';
import { useStyleConfig } from '@/hooks/useStyleConfig';
import styles from './StyleCustomizer.module.scss';

interface StyleCustomizerProps {
  className?: string;
}

export const StyleCustomizer: React.FC<StyleCustomizerProps> = ({ className }) => {
  const { styleConfig, updateStyle, resetToDefaults, styleOptions, isLoaded } = useStyleConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('colors');
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  if (!isLoaded) return null;

  const sections = [
    { id: 'colors', label: 'Couleurs', icon: 'palette' },
    { id: 'layout', label: 'Design', icon: 'grid' },
    { id: 'effects', label: 'Effets', icon: 'sparkles' },
  ];

  const renderColorSection = () => (
    <Flex direction="column" gap="20">
      {/* Couleur principale */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Couleur principale
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.brand}
          </Text>
        </Flex>
        <Flex wrap gap="8">
          {styleOptions.brand.map((color) => (
            <Button
              key={color}
              size="s"
              variant={styleConfig.brand === color ? "primary" : "tertiary"}
              onClick={() => updateStyle('brand', color)}
              style={{
                minWidth: '70px',
                textTransform: 'capitalize'
              }}
            >
              {color}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Couleur d'accent */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Couleur d'accent
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.accent}
          </Text>
        </Flex>
        <Flex wrap gap="8">
          {styleOptions.accent.map((color) => (
            <Button
              key={color}
              size="s"
              variant={styleConfig.accent === color ? "primary" : "tertiary"}
              onClick={() => updateStyle('accent', color)}
              style={{
                minWidth: '70px',
                textTransform: 'capitalize'
              }}
            >
              {color}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Couleur neutre */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Couleur neutre
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.neutral}
          </Text>
        </Flex>
        <Flex gap="8">
          {styleOptions.neutral.map((neutral) => (
            <Button
              key={neutral}
              size="s"
              variant={styleConfig.neutral === neutral ? "primary" : "tertiary"}
              onClick={() => updateStyle('neutral', neutral)}
              style={{
                minWidth: '70px',
                textTransform: 'capitalize'
              }}
            >
              {neutral}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );

  const renderLayoutSection = () => (
    <Flex direction="column" gap="20">
      {/* Bordures */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Style des bordures
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.border}
          </Text>
        </Flex>
        <Flex gap="8">
          {styleOptions.border.map((border) => (
            <Button
              key={border}
              size="s"
              variant={styleConfig.border === border ? "primary" : "tertiary"}
              onClick={() => updateStyle('border', border)}
              style={{
                minWidth: '100px',
                textTransform: 'capitalize'
              }}
            >
              {border}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Surface */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Type de surface
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.surface}
          </Text>
        </Flex>
        <Flex gap="8">
          {styleOptions.surface.map((surface) => (
            <Button
              key={surface}
              size="s"
              variant={styleConfig.surface === surface ? "primary" : "tertiary"}
              onClick={() => updateStyle('surface', surface)}
              style={{
                minWidth: '110px',
                textTransform: 'capitalize'
              }}
            >
              {surface}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Style solide */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Style des boutons
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.solidStyle}
          </Text>
        </Flex>
        <Flex gap="8">
          {styleOptions.solidStyle.map((solidStyle) => (
            <Button
              key={solidStyle}
              size="s"
              variant={styleConfig.solidStyle === solidStyle ? "primary" : "tertiary"}
              onClick={() => updateStyle('solidStyle', solidStyle)}
              style={{
                minWidth: '80px',
                textTransform: 'capitalize'
              }}
            >
              {solidStyle}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );

  const renderEffectsSection = () => (
    <Flex direction="column" gap="20">
      {/* Transitions */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Animations
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.transition}
          </Text>
        </Flex>
        <Flex gap="8">
          {styleOptions.transition.map((transition) => (
            <Button
              key={transition}
              size="s"
              variant={styleConfig.transition === transition ? "primary" : "tertiary"}
              onClick={() => updateStyle('transition', transition)}
              style={{
                minWidth: '70px',
                textTransform: 'capitalize'
              }}
            >
              {transition}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Style solide */}
      <Flex direction="column" gap="12">
        <Flex horizontal="space-between" vertical="center">
          <Text variant="body-default-s" color="neutral-strong">
            Contraste
          </Text>
          <Text variant="body-default-xs" color="neutral-medium">
            {styleConfig.solid}
          </Text>
        </Flex>
        <Flex gap="8">
          {styleOptions.solid.map((solid) => (
            <Button
              key={solid}
              size="s"
              variant={styleConfig.solid === solid ? "primary" : "tertiary"}
              onClick={() => updateStyle('solid', solid)}
              style={{
                minWidth: '90px',
                textTransform: 'capitalize'
              }}
            >
              {solid}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'colors':
        return renderColorSection();
      case 'layout':
        return renderLayoutSection();
      case 'effects':
        return renderEffectsSection();
      default:
        return renderColorSection();
    }
  };

  return (
    <>
      {/* Icône flottante */}
      <Flex
        className={`${styles.floatingButton} ${className || ''}`}
        onClick={() => setIsOpen(!isOpen)}
        background="surface"
        border="neutral-medium"
        radius="full"
        shadow="l"
        padding="12"
        horizontal="center"
        vertical="center"
        style={{ 
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
        aria-label="Personnaliser les styles"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <Icon 
          name="settings" 
          size="m"
          style={{ 
            transition: 'all 0.3s ease'
          }}
        />
      </Flex>

      {/* Menu de personnalisation */}
      {isOpen && (
        <Flex
          ref={menuRef}
          className={styles.customizeMenu}
          direction="column"
          background="surface"
          border="neutral-medium"
          radius="l"
          shadow="xl"
          padding="0"
          style={{
            minWidth: '420px',
            maxWidth: '520px',
            maxHeight: '75vh',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <Flex 
            padding="20"
            horizontal="space-between"
            vertical="center"
            border="neutral-weak"
            style={{ borderBottom: '1px solid' }}
          >
            <Flex direction="column" gap="4">
              <Text variant="heading-strong-s">Personnaliser le style</Text>
              <Text variant="body-default-xs" color="neutral-medium">
                Modifiez l'apparence de votre portfolio
              </Text>
            </Flex>
            <Flex gap="8">
              <Button
                size="s"
                variant="tertiary"
                onClick={resetToDefaults}
                prefixIcon="refresh"
                aria-label="Réinitialiser"
              />
              <Button
                size="s"
                variant="tertiary"
                onClick={() => setIsOpen(false)}
                prefixIcon="close"
                aria-label="Fermer"
              />
            </Flex>
          </Flex>

          {/* Navigation des sections */}
          <Flex 
            padding="16"
            gap="8"
            border="neutral-weak"
            style={{ borderBottom: '1px solid' }}
          >
            {sections.map((section) => (
              <Button
                key={section.id}
                size="s"
                variant={activeSection === section.id ? "primary" : "tertiary"}
                onClick={() => setActiveSection(section.id)}
                prefixIcon={section.icon}
              >
                {section.label}
              </Button>
            ))}
          </Flex>

          {/* Contenu de la section active */}
          <Flex 
            direction="column"
            padding="16"
            style={{ 
              flex: 1,
              overflow: 'auto'
            }}
          >
            {renderActiveSection()}
          </Flex>

          {/* Footer avec info actuelle */}
          <Flex 
            padding="16"
            horizontal="space-between"
            vertical="center"
            border="neutral-weak"
            style={{ borderTop: '1px solid' }}
          >
            <Badge title={`${styleConfig.brand} × ${styleConfig.accent}`} />
          </Flex>
        </Flex>
      )}
    </>
  );
};
