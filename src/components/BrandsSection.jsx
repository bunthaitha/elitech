import React from 'react';

const partners = [
  { name: "ESET", id: "eset", color: "#00857C" },
  { name: "SAFETICA", id: "safetica", color: "#2F80ED" },
  { name: "HORNET SECURITY", id: "hornet", color: "#FF6600" },
  { name: "PRE SECURITY", id: "pre", color: "#8B5CF6" },
  { name: "CODERED ASM", id: "codered", color: "#EF4444" },
  { name: "SANGFOR", id: "sangfor", color: "#0EA5E9" }
];

export default function BrandsSection({ onSelectBrand }) {
  return (
    <section id="partners" className="section-py-sm bg-white" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-eyebrow eyebrow-primary">
            GLOBAL TECHNOLOGY PARTNERS
          </span>
          <p style={{ fontSize: '16px', color: '#6C6B6B', marginTop: '4px' }}>
            Bringing proven global technology to Cambodian businesses.
          </p>
        </div>

        {/* Clean Partner Grid (6 columns desktop, 3 tablet, 2 mobile) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            alignItems: 'center'
          }}
          className="partner-logos-grid"
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              onClick={() => {
                if (onSelectBrand) onSelectBrand(partner.id);
                const el = document.querySelector('#featured-technology');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 16px',
                border: '1px solid #D8DFE8',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: '#FFFFFF',
                transition: 'border-color 150ms ease, background-color 150ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00317A';
                e.currentTarget.style.backgroundColor = '#F4F6F9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D8DFE8';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              <span style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '18px',
                fontWeight: 800,
                letterSpacing: '0.8px',
                color: '#00317A',
                textAlign: 'center'
              }}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .partner-logos-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .partner-logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
