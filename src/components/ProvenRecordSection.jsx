import React from 'react';

const stats = [
  { value: "150+", label: "Customers" },
  { value: "10+", label: "Industries" },
  { value: "2020", label: "Established" },
  { value: "GLOBAL", label: "Partners" }
];

export default function ProvenRecordSection() {
  return (
    <section className="section-py-sm bg-white" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            alignItems: 'center',
            textAlign: 'center'
          }}
          className="stats-horizontal-bar"
        >
          {stats.map((stat, idx) => (
            <div key={idx} style={{ padding: '8px 12px' }}>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 800,
                color: '#00317A',
                lineHeight: 1,
                marginBottom: '6px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                color: '#6C6B6B',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-horizontal-bar {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
