import React from 'react';

export default function TrustIntro() {
  return (
    <section id="company" className="section-py" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E9EDF2' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            minHeight: '380px'
          }}
          className="editorial-split"
        >
          {/* Left Column: Short editorial text */}
          <div>
            <span className="section-eyebrow eyebrow-primary">
              ABOUT ELITECH
            </span>

            <h2 
              style={{
                color: '#00317A',
                fontSize: 'clamp(28px, 3.2vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.015em'
              }}
            >
              Technology that protects<br />business and enables growth.
            </h2>

            <p 
              className="body-large"
              style={{
                color: '#6C6B6B',
                lineHeight: 1.6,
                maxWidth: '560px'
              }}
            >
              ELITECH Distributor Co., Ltd. is a Cambodia-based technology distributor connecting global technology innovation with local businesses.
            </p>
          </div>

          {/* Right Column: Clean single professional image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
              alt="ELITECH Enterprise Collaboration"
              className="radius-image"
              style={{
                width: '100%',
                height: '380px',
                maxHeight: '420px',
                objectFit: 'cover',
                display: 'block',
                border: '1px solid #D8DFE8'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .editorial-split {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .editorial-split img {
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
