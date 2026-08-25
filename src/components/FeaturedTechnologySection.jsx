import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { brandsData } from '../data/siteData';

export default function FeaturedTechnologySection({ onSelectBrand, onOpenQuote }) {
  const [activeBrandId, setActiveBrandId] = useState('eset');
  const activeBrand = brandsData.find(b => b.id === activeBrandId) || brandsData[0];

  return (
    <section id="featured-technology" className="section-py bg-light" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        {/* Main Split Featured Box */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #D8DFE8',
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
              minHeight: '400px'
            }}
            className="featured-split-grid"
          >
            {/* Left: Professional Brand / Product Image */}
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <img 
                src={activeBrand.image} 
                alt={activeBrand.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Right: Featured Technology Editorial Info */}
            <div style={{ padding: 'clamp(28px, 4vw, 44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-eyebrow eyebrow-primary">
                FEATURED TECHNOLOGY
              </span>

              <h2 style={{
                color: '#00317A',
                fontSize: 'clamp(28px, 3.2vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                margin: '6px 0 12px'
              }}>
                {activeBrand.name}
              </h2>

              <p style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#010000',
                marginBottom: '10px',
                lineHeight: 1.4
              }}>
                {activeBrand.tagline}
              </p>

              <p style={{
                color: '#6C6B6B',
                fontSize: '15px',
                lineHeight: 1.55,
                marginBottom: '20px'
              }}>
                {activeBrand.description}
              </p>

              {/* Capabilities list */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginBottom: '24px' }}>
                {activeBrand.categories.slice(0, 3).map((cat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#00317A', fontWeight: 600 }}>
                    <Check size={14} color="#F78F20" />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div>
                <button
                  onClick={() => {
                    if (onSelectBrand) onSelectBrand(activeBrand.id);
                  }}
                  className="btn btn-primary btn-sm"
                  style={{ fontSize: '14px', padding: '10px 22px' }}
                >
                  Explore {activeBrand.name}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Horizontal Product Selector */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #D8DFE8',
            borderRadius: '64px',
            padding: '6px 12px'
          }}
          className="brand-selector-bar"
        >
          {brandsData.map((b) => {
            const isSelected = b.id === activeBrandId;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBrandId(b.id)}
                style={{
                  background: isSelected ? '#00317A' : 'none',
                  color: isSelected ? '#FFFFFF' : '#6C6B6B',
                  border: 'none',
                  borderRadius: '64px',
                  padding: '8px 18px',
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {b.name}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .featured-split-grid {
            grid-template-columns: 1fr !important;
          }
          .brand-selector-bar {
            border-radius: 16px !important;
            justifyContent: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
