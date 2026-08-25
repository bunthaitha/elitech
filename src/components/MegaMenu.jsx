import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function MegaMenu({ activeMenu, onClose, onSelectSolution, onSelectBrand, onOpenQuote }) {
  if (!activeMenu) return null;

  return (
    <div
      className="megamenu-panel"
      onMouseLeave={onClose}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '48px',
          alignItems: 'stretch'
        }}>
          {/* Left Column: PhillipBank-Style Featured Visual Card with Image & Translucent Pill Button */}
          <div 
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '28px 24px',
              boxShadow: '0 10px 30px rgba(0, 49, 122, 0.12)'
            }}
          >
            {/* High-quality Professional Background Photography */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="ELITECH Enterprise Cybersecurity"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0
              }}
            />

            {/* Dark Gradient Overlay for Crisp Text Readability */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0, 34, 86, 0.88) 0%, rgba(0, 49, 122, 0.45) 45%, rgba(0, 24, 60, 0.92) 100%)',
                zIndex: 1
              }}
            />

            {/* Card Content Top */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '22px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                lineHeight: 1.15,
                marginBottom: '10px'
              }}>
                ELITECH BUSINESS
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '14px',
                lineHeight: 1.45,
                fontWeight: 500,
                margin: 0
              }}>
                Manage and protect your business cybersecurity on one secure, all-in-one platform.
              </p>
            </div>

            {/* Card Content Bottom: Translucent Frosted Pill Button */}
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <button
                onClick={() => {
                  onClose();
                  if (onSelectSolution) onSelectSolution('suite');
                }}
                className="glass-promo-btn"
              >
                <span>LEARN MORE</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Columns: Multi-Column Clean Categorized Link Lists */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '36px'
          }}>
            {/* Column 1: Core Solutions */}
            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '15px',
                fontWeight: 800,
                color: '#00317A',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                SOLUTIONS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Endpoint Security', code: 'endpoint' },
                  { name: 'Email Security & M365', code: 'email' },
                  { name: 'Data Protection (DLP)', code: 'data' },
                  { name: 'Network Perimeter Defense', code: 'network' },
                  { name: 'Cloud Infrastructure Security', code: 'cloud' },
                  { name: 'ELITECH Business Suite', code: 'suite' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectSolution) onSelectSolution(item.code);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        width: '100%',
                        padding: '4px 0'
                      }}
                      className="megamenu-link"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Advanced Security & Digital Risk */}
            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '15px',
                fontWeight: 800,
                color: '#00317A',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                ADVANCED SECURITY
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                {[
                  { name: 'EDR & XDR Extended Detection', code: 'edr' },
                  { name: 'AI-Native SecOps (PRE)', code: 'ai-secops' },
                  { name: 'Continuous Threat Hunting', code: 'threat' },
                  { name: 'Corporate Managed SOC', code: 'soc' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectSolution) onSelectSolution(item.code);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        width: '100%',
                        padding: '4px 0'
                      }}
                      className="megamenu-link"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '15px',
                fontWeight: 800,
                color: '#00317A',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                DIGITAL RISK
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Attack Surface Management', code: 'asm' },
                  { name: 'Dark Web Monitoring', code: 'darkweb' },
                  { name: 'Executive Brand Defense', code: 'brand' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectSolution) onSelectSolution(item.code);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        width: '100%',
                        padding: '4px 0'
                      }}
                      className="megamenu-link"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Authorized Brands & Services */}
            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '15px',
                fontWeight: 800,
                color: '#00317A',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                AUTHORIZED BRANDS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                {[
                  { name: 'ESET Enterprise', id: 'eset' },
                  { name: 'Safetica DLP', id: 'safetica' },
                  { name: 'Hornet Security', id: 'hornet' },
                  { name: 'PRE CyberAI™', id: 'pre' },
                  { name: 'CodeRed ASM', id: 'codered' },
                  { name: 'Sangfor Technologies', id: 'sangfor' }
                ].map((b, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectBrand) onSelectBrand(b.id);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        width: '100%',
                        padding: '4px 0'
                      }}
                      className="megamenu-link"
                    >
                      {b.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '15px',
                fontWeight: 800,
                color: '#00317A',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                SERVICES & SUPPORT
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Local Pre-Sales Architecture', code: 'presales' },
                  { name: 'Partner Training & Lab', code: 'training' },
                  { name: 'Phnom Penh Tier-1 Support', code: 'support' }
                ].map((s, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectSolution) onSelectSolution(s.code);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        width: '100%',
                        padding: '4px 0'
                      }}
                      className="megamenu-link"
                    >
                      {s.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
