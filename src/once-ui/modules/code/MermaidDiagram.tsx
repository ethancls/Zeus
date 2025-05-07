"use client";

import React, { useEffect, useRef, CSSProperties } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  id?: string;
  className?: string;
  config?: object;
  backgroundColor?: string;
  style?: CSSProperties;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ 
  chart, 
  id = `mermaid-${Math.random().toString(36).substr(2, 9)}`,
  className = '',
  config = { 
    theme: 'default',
    securityLevel: 'loose',
    startOnLoad: true
  },
  backgroundColor = '#f8fafc',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      ...config
    });
    
    if (containerRef.current) {
      mermaid.render(id, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
          
          // Ajouter un style au SVG pour qu'il prenne toute la largeur
          const svgElement = containerRef.current.querySelector('svg');
          if (svgElement) {
            svgElement.style.width = '100%';
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = 'auto';
          }
        }
      });
    }
  }, [chart, id, config]);

  const containerStyle: CSSProperties = {
    backgroundColor,
    borderRadius: '8px',
    padding: '16px',
    marginTop: '16px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    overflow: 'auto',
    ...style
  };

  return (
    <div className={className} ref={containerRef} style={containerStyle} />
  );
};

export default MermaidDiagram; 