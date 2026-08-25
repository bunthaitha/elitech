import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const solutionsList = [
  {
    num: "01",
    title: "Endpoint Security",
    desc: "Protect devices and users across your organization with next-gen multi-layered defenses.",
    id: "endpoint"
  },
  {
    num: "02",
    title: "Email Security",
    desc: "Stop phishing, malicious attachments, and executive impersonation before reaching inboxes.",
    id: "email"
  },
  {
    num: "03",
    title: "Data Protection",
    desc: "Protect sensitive business information and prevent internal and external data loss.",
    id: "data"
  },
  {
    num: "04",
    title: "EDR & XDR",
    desc: "Detect, hunt, and automatically respond to advanced threats across endpoints and networks.",
    id: "edr"
  },
  {
    num: "05",
    title: "Digital Risk Protection",
    desc: "Monitor external attack surfaces, dark web leaks, scam sites, and brand exposure.",
    id: "digital-risk"
  }
];

export default function SolutionsSection({ onOpenQuote, onSelectSolution }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="solutions" style={{ backgroundColor: '#F8FAFC', padding: '48px 0 52px', borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '26px' }}>
          <span className="section-eyebrow eyebrow-primary" style={{ fontSize: '13px', marginBottom: '6px' }}>
            OUR SOLUTIONS
          </span>
          <h2 style={{ color: '#00317A', fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: 800, lineHeight: 1.15 }}>
            Security built around your business needs.
          </h2>
        </div>

        {/* Balanced Horizontal Navigation List */}
        <div style={{ borderTop: '1px solid #D8DFE8' }}>
          {solutionsList.map((sol, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={sol.num}
                onClick={() => {
                  if (onSelectSolution) onSelectSolution(sol.id);
                  const ft = document.querySelector('#featured-technology');
                  if (ft) ft.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px minmax(200px, 0.9fr) minmax(280px, 2fr) auto',
                  alignItems: 'center',
                  gap: '20px',
                  minHeight: '66px',
                  padding: '13px 18px',
                  borderBottom: '1px solid #E2E8F0',
                  backgroundColor: isHovered ? 'rgba(0, 49, 122, 0.05)' : 'transparent',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 150ms ease, transform 150ms ease'
                }}
                className="solution-row"
              >
                {/* Number */}
                <div style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontSize: '18px',
                  fontWeight: 800,
                  color: isHovered ? '#F78F20' : '#6C6B6B',
                  transition: 'color 150ms ease'
                }}>
                  {sol.num}
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontSize: '18px',
                  fontWeight: 800,
                  color: isHovered ? '#00317A' : '#010000',
                  transition: 'color 150ms ease'
                }}>
                  {sol.title}
                </div>

                {/* Description */}
                <div style={{
                  fontSize: '15px',
                  color: '#6C6B6B',
                  lineHeight: 1.45
                }} className="solution-desc">
                  {sol.desc}
                </div>

                {/* Small Orange Arrow */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  color: isHovered ? '#F78F20' : '#94A3B8',
                  transform: isHovered ? 'translateX(3px)' : 'none',
                  transition: 'all 150ms ease'
                }}>
                  <ArrowRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .solution-row {
            grid-template-columns: 45px 1fr auto !important;
            gap: 12px !important;
            padding: 12px 10px !important;
            min-height: 54px !important;
          }
          .solution-desc {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
