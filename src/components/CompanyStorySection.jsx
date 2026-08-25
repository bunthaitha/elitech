import React from 'react';
import { ArrowRight } from 'lucide-react';

const storySteps = [
  { step: "2020", title: "Established in Cambodia", desc: "Founded in Phnom Penh with focus on enterprise cybersecurity." },
  { step: "02", title: "Global Partnerships", desc: "Forged direct distribution alliances with global technology leaders." },
  { step: "03", title: "Cybersecurity Portfolio", desc: "Expanded into EDR/XDR, DLP, AI-Native SecOps, and Attack Surface Management." },
  { step: "04", title: "Growing Customer Base", desc: "Protecting 150+ financial, enterprise, and public sector institutions across Cambodia." }
];

export default function CompanyStorySection() {
  return (
    <section className="section-py bg-light" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <span className="section-eyebrow eyebrow-primary">
            OUR STORY
          </span>
          <h2 style={{ color: '#00317A', fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800 }}>
            Building Cambodia's Cyber Resilience
          </h2>
        </div>

        {/* Clean Horizontal Timeline Sequence */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            borderTop: '1px solid #D8DFE8',
            paddingTop: '28px',
            position: 'relative'
          }}
          className="story-timeline-grid"
        >
          {storySteps.map((item, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '18px',
                fontWeight: 800,
                color: '#F78F20',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{item.step}</span>
              </div>

              <h3 style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '20px',
                fontWeight: 800,
                color: '#00317A',
                marginBottom: '6px'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#6C6B6B',
                lineHeight: 1.5
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .story-timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 540px) {
          .story-timeline-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
