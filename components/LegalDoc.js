import Head from 'next/head';
import React from 'react';

export default function LegalDoc({ title, text }) {
  // Parse the text into structured React elements
  const parseText = (content) => {
    if (!content) return null;
    const blocks = content.split(/\n\s*\n/);
    
    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      
      // If it starts with a number followed by a dot, it's a heading
      if (/^\d+\.\s/.test(trimmed)) {
        return <h2 key={index}>{trimmed}</h2>;
      }
      
      // If it's short and all caps (with some exceptions), it's a subtitle/heading
      if (trimmed === trimmed.toUpperCase() && trimmed.length > 5 && trimmed.length < 60 && !trimmed.includes('HTTP')) {
        return <h3 key={index}>{trimmed}</h3>;
      }
      
      // If it starts with a bullet point, it's a list item
      if (/^[•-]\s/.test(trimmed)) {
        return (
          <ul key={index}>
            <li>{trimmed.substring(2)}</li>
          </ul>
        );
      }
      
      // Otherwise, it's a paragraph
      return <p key={index}>{trimmed}</p>;
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
