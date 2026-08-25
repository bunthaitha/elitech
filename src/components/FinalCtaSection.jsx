import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function FinalCtaSection({ onOpenQuote }) {
  return (
    <section className="section-py bg-light" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
          className="contact-split-grid"
        >
          {/* Left: Call to Action */}
          <div>
            <span className="section-eyebrow eyebrow-primary">
              LET'S TALK
            </span>

            <h2 style={{
              color: '#00317A',
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              Have a cybersecurity or<br />technology requirement?
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#6C6B6B',
              marginBottom: '28px',
              maxWidth: '520px'
            }}>
              Speak directly with our local technology architects in Phnom Penh to secure your enterprise endpoints, data, and digital perimeter.
            </p>

            <div>
              <button
                onClick={onOpenQuote}
                className="btn btn-primary"
                style={{ padding: '14px 32px', fontSize: '16px' }}
              >
                Request a Quote
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Direct Contact Details */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderLeft: '1px solid #D8DFE8',
            paddingLeft: '32px'
          }} className="contact-details-col">
            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#6C6B6B',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '4px'
              }}>
                Phone
              </div>
              <a 
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#00317A',
                  textDecoration: 'none'
                }}
              >
                {siteInfo.phone}
              </a>
            </div>

            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#6C6B6B',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '4px'
              }}>
                Email
              </div>
              <a 
                href={`mailto:${siteInfo.email}`}
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#00317A',
                  textDecoration: 'none'
                }}
              >
                {siteInfo.email}
              </a>
            </div>

            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#6C6B6B',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '4px'
              }}>
                Office
              </div>
              <div style={{ fontSize: '15px', color: '#010000', fontWeight: 600 }}>
                {siteInfo.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-split-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .contact-details-col {
            border-left: none !important;
            border-top: 1px solid #D8DFE8 !important;
            padding-left: 0 !important;
            padding-top: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
