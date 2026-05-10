import Head from 'next/head';
import React from 'react';

export default function LegalDoc({ title, text }) {
  const parseText = (content) => {
    if (!content) return null;
    
    let rawBlocks = content.split(/\n\s*\n/);
    rawBlocks = rawBlocks.map(b => b.trim()).filter(b => b);

    const mergedBlocks = [];
    for (let i = 0; i < rawBlocks.length; i++) {
      let current = rawBlocks[i];
      while (i < rawBlocks.length - 1) {
        const next = rawBlocks[i + 1];
        if (/[.:;!?]\s*$/.test(current)) {
          break;
        }
        if (/^\d+\.\s/.test(next) || /^\d+\.\d+\s/.test(next) || (next === next.toUpperCase() && next.length > 5 && next.length < 60)) {
          break;
        }
        if (/^\d+\.\s/.test(current) || /^\d+\.\d+\s/.test(current) || (current === current.toUpperCase() && current.length > 5 && current.length < 60)) {
           break;
        }
        current = current + " " + next;
        i++;
      }
      mergedBlocks.push(current);
    }
    
    return mergedBlocks.map((block, index) => {
      if (/^\d+\.\s/.test(block) || /^\d+\.\d+\s/.test(block)) {
        return <h2 key={index}>{block}</h2>;
      }
      if (block === block.toUpperCase() && block.length > 4 && block.length < 60 && !block.includes('HTTP')) {
        return <h3 key={index}>{block}</h3>;
      }
      if (/^[•-]\s/.test(block)) {
        return (
          <ul key={index}>
            <li>{block.substring(2)}</li>
          </ul>
        );
      }
      return <p key={index}>{block}</p>;
    });
  };

  return (
    <div className="legal-page-wrapper">
      <Head>
        <title>{title} | PoHo</title>
        <meta name="description" content={`${title} for PoHo Mobile App`} />
      </Head>
      
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">{title}</h1>
          <div className="legal-meta">
            <span>Effective: 1 January 2025</span>
            <span>•</span>
            <span>Version 1.0</span>
            <span>•</span>
            <span>contact@poho.world</span>
          </div>
        </div>
        
        <div className="legal-content">
          {parseText(text)}
        </div>
      </div>
    </div>
  );
}
