import React from 'react';
import Logo from './Logo';
import { siteInfo } from '../data/siteData';

export default function Footer({ onOpenQuote, onOpenContact, onSelectBrand, onSelectSolution, onGoHome }) {
  const scrollTo = (id) => {
    if (onGoHome) {
      onGoHome();
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: '#002256',
        color: '#FFFFFF',
        padding: '56px 0 32px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container">
        {/* 4-Column Compact Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) repeat(3, minmax(0, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo light={true} onClick={onGoHome} />
            </div>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.55,
              maxWidth: '280px',
              marginBottom: '20px'
            }}>
              Cambodia's trusted technology distributor connecting global innovation with local businesses.
            </p>
            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
              Phnom Penh, Kingdom of Cambodia
            </div>
          </div>

          {/* Column 2: Solutions & Offerings */}
          <div>
            <div style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              color: '#F78F20',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>
              Solutions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Endpoint Security', code: 'endpoint' },
                { name: 'Email Security', code: 'email' },
                { name: 'Data Protection (DLP)', code: 'data' },
                { name: 'EDR & XDR', code: 'edr-xdr' },
                { name: 'Digital Risk Protection', code: 'digital-risk' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSelectSolution ? onSelectSolution(item.code) : scrollTo('#solutions')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '14px',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F78F20'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Authorized Brands */}
          <div>
            <div style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              color: '#F78F20',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>
              Products
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'ESET Enterprise', id: 'eset' },
                { name: 'Safetica DLP', id: 'safetica' },
                { name: 'Hornetsecurity', id: 'hornet' },
                { name: 'PRE Security (CyberAI)', id: 'pre' },
                { name: 'CodeRed ASM', id: 'codered' },
                { name: 'Sangfor Technologies', id: 'sangfor' }
              ].map((b, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSelectBrand ? onSelectBrand(b.id) : scrollTo('#featured-technology')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '14px',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F78F20'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    {b.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <div style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              color: '#F78F20',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <a 
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 600 }}
              >
                {siteInfo.phone}
              </a>
              <a 
                href={`mailto:${siteInfo.email}`}
                style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}
              >
                {siteInfo.email}
              </a>
              <div style={{ marginTop: '8px' }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-sm btn-primary"
                  style={{ fontSize: '13px', padding: '8px 18px' }}
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <div>
            © {new Date().getFullYear()} ELITECH Distributor Co., Ltd. All rights reserved.
          </div>
          <div>
            Global Technology · Local Expertise
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
