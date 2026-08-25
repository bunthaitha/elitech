import React from 'react';

const whyPoints = [
  {
    num: "01",
    title: "Global Technology",
    desc: "Leading international security solutions from proven technology leaders."
  },
  {
    num: "02",
    title: "Local Expertise",
    desc: "Knowledge of Cambodia's market, regulations, and business requirements."
  },
  {
    num: "03",
    title: "Partner Enablement",
    desc: "Technical certification, sales training, POC support, and margin protection."
  },
  {
    num: "04",
    title: "Customer Success",
    desc: "Long-term relationships with fast Tier-1 local response in Phnom Penh."
  }
];

export default function WhyElitechSection() {
  return (
    <section id="why-elitech" className="section-py bg-light" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        {/* Large Statement */}
        <div style={{ marginBottom: '40px' }}>
          <span className="section-eyebrow eyebrow-primary">
            WHY ELITECH
          </span>
          <h2 style={{
            color: '#00317A',
            fontSize: 'clamp(28px, 3.8vw, 44px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.015em'
          }}>
            Global technology.<br />
            Local expertise.<br />
            Trusted relationships.
          </h2>
        </div>

        {/* 4 Compact Horizontal Points (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            borderTop: '1px solid #D8DFE8',
            paddingTop: '28px'
          }}
          className="why-points-grid"
        >
          {whyPoints.map((point) => (
            <div key={point.num} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '22px',
                fontWeight: 800,
                color: '#F78F20',
                marginBottom: '6px'
              }}>
                {point.num}
              </div>

              <h3 style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '20px',
                fontWeight: 800,
                color: '#00317A',
                marginBottom: '6px'
              }}>
                {point.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#6C6B6B',
                lineHeight: 1.5
              }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .why-points-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 540px) {
          .why-points-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
