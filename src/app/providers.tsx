'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { Flex } from '@/once-ui/components';

// Styles et effets
const style = {
  neutral: 'zinc',
  brand: 'cyan',
  accent: 'orange',
  solid: 'color',
  solidStyle: 'default',
  theme: 'light',
  border: 'rounded',
  surface: 'default',
  transition: 'default',
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 480,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 20,
    colorStart: 'brand',
    colorEnd: 'accent',
    opacity: 20,
  },
  dots: {
    display: false,
    color: 'neutral',
    size: 'default',
    opacity: 20,
  },
  grid: {
    display: false,
    color: 'neutral',
    width: 'default',
    height: 'default',
    opacity: 20,
  },
  lines: {
    display: false,
    opacity: 20,
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Structure JSON-LD pour SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ethan Nicolas - Portfolio',
    url: 'https://ethancls.com',
    description: 'Portfolio d\'Ethan Nicolas, apprenti ingénieur informatique présentant ses projets et articles',
    author: {
      '@type': 'Person',
      name: 'Ethan Nicolas',
      url: 'https://ethancls.com/about',
      jobTitle: 'Apprenti ingénieur informatique'
    }
  };

  return (
    <Flex
      as="div"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      fillWidth
      fillHeight
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </Flex>
  );
} 