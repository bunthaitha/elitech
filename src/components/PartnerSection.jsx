import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PartnerSection({ onBecomePartner }) {
  return (
    <section 
      style={{
        backgroundColor: '#00317A',
        color: '#FFFFFF',
        padding: '56px 0',
        minHeight: '280px',
        maxHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
      }}
      className="partner-cta-section"
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{
          color: '#FFFFFF',
          fontSize: 'clamp(32px, 3.6vw, 44px)',
          fontWeight: 800,
          marginBottom: '12px',
          letterSpacing: '-0.015em'
        }}>
          Grow with ELITECH
        </h2>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.88)',
          marginBottom: '28px',
          lineHeight: 1.5
        }}>
          Partner with us to bring leading technology solutions to Cambodian businesses.
        </p>

        <div>
          <button
            onClick={onBecomePartner}
            className="btn btn-primary"
            style={{ padding: '14px 36px', fontSize: '16px' }}
          >
            Become a Partner
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .partner-cta-section {
            max-height: none !important;
            padding: 48px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
