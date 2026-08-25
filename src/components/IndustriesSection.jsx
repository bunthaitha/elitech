import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: "Banking & Financial Services", desc: "Core banking protection, PCI-DSS compliance & fraud defense." },
  { name: "Microfinance (MFI)", desc: "Branch network security, tablet endpoint defense & borrower data safety." },
  { name: "Enterprise & Conglomerates", desc: "Unified multi-cloud security & threat hunting across subsidiaries." },
  { name: "Small & Medium Enterprises (SME)", desc: "Cost-effective, cloud-managed cybersecurity suites." },
  { name: "Government & Public Sector", desc: "Sovereign data safeguards & institutional infrastructure resilience." },
  { name: "Trading & Logistics", desc: "Supply chain continuity, ERP protection & ransomware defense." },
  { name: "Higher Education & Healthcare", desc: "Campus BYOD boundaries & confidential medical record safety." }
];

export default function IndustriesSection({ onOpenQuote }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="industries" className="section-py bg-white" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.95fr) minmax(0, 1.05fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
          className="industries-split-grid"
        >
          {/* Left: One large high quality image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
              alt="Industries We Serve in Cambodia"
              className="radius-image"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                display: 'block',
                border: '1px solid #D8DFE8'
              }}
            />
          </div>

          {/* Right: Industry List (40-50px height per item) */}
          <div>
            <span className="section-eyebrow eyebrow-primary">
              SECTORS
            </span>

            <h2 style={{
              color: '#00317A',
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              fontWeight: 800,
              marginBottom: '20px',
              letterSpacing: '-0.015em'
            }}>
              Industries We Serve
            </h2>

            <div style={{ borderTop: '1px solid #D8DFE8' }}>
              {industries.map((ind, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={onOpenQuote}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      minHeight: '46px',
                      padding: '10px 12px',
                      borderBottom: '1px solid #D8DFE8',
                      cursor: 'pointer',
                      backgroundColor: isHovered ? 'rgba(0, 49, 122, 0.04)' : 'transparent',
                      transition: 'background-color 150ms ease'
                    }}
                  >
                    <div style={{
                      fontFamily: "'Barlow Semi Condensed', sans-serif",
                      fontSize: '18px',
                      fontWeight: 700,
                      color: isHovered ? '#00317A' : '#010000',
                      transition: 'color 150ms ease'
                    }}>
                      {ind.name}
                    </div>

                    <ArrowRight 
                      size={18} 
                      color={isHovered ? '#F78F20' : '#6C6B6B'} 
                      style={{
                        transform: isHovered ? 'translateX(4px)' : 'none',
                        transition: 'all 150ms ease'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .industries-split-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .industries-split-grid img {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
