import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Layers, Building2 } from 'lucide-react';
import { solutionsData, siteInfo } from '../data/siteData';

export default function SolutionDetailPage({ solutionId, onBack, onSelectSolution, onSelectBrand, onOpenQuote }) {
  const solution = solutionsData.find(s => s.code === solutionId || s.id === solutionId) || solutionsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [solutionId]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '80vh', paddingBottom: '72px' }}>
      {/* Top Breadcrumb Bar */}
      <div style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6C6B6B' }}>
            <button 
              onClick={onBack}
              style={{ background: 'none', border: 'none', color: '#00317A', fontWeight: 700, cursor: 'pointer', padding: 0 }}
            >
              Home
            </button>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span style={{ color: '#00317A', fontWeight: 700 }}>{solution.title}</span>
          </div>

          <button
            onClick={onBack}
            className="btn btn-sm btn-secondary"
            style={{ padding: '6px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={14} />
            <span>Back to All Solutions</span>
          </button>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section style={{ backgroundColor: '#00317A', color: '#FFFFFF', padding: '56px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{
                backgroundColor: 'rgba(247, 143, 32, 0.2)',
                color: '#F78F20',
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '64px'
              }}>
                {solution.badge}
              </span>
            </div>

            <h1 style={{
              color: '#FFFFFF',
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '14px',
              letterSpacing: '-0.015em'
            }}>
              {solution.title}
            </h1>

            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.5,
              marginBottom: '28px'
            }}>
              {solution.shortDesc}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote(solution.brands[0]?.toLowerCase() || 'eset')}
                className="btn btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <span>Request {solution.title} Quote</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="#details"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '12px 20px'
                }}
              >
                Explore Architecture ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Solution Breakdown */}
      <div id="details" className="container" style={{ paddingTop: '56px' }}>
        {/* Split Editorial Description */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
          marginBottom: '56px'
        }} className="solution-split">
          <div>
            <span className="section-eyebrow eyebrow-primary">
              DEFENSE ARCHITECTURE
            </span>
            <h2 style={{ color: '#00317A', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '18px' }}>
              Proactive & Scalable Security for Modern Cambodian Enterprises
            </h2>
            <p style={{ fontSize: '16px', color: '#6C6B6B', lineHeight: 1.65, marginBottom: '24px' }}>
              {solution.fullDesc}
            </p>

            {/* Distributed Brands in this solution */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '20px 24px',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#00317A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                Distributed Vendor Technologies
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {solution.brands.map((bName, idx) => (
                  <span
                    key={idx}
                    onClick={() => onSelectBrand(bName.toLowerCase().split(' ')[0])}
                    style={{
                      backgroundColor: '#00317A',
                      color: '#FFFFFF',
                      fontFamily: "'Barlow Semi Condensed', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      padding: '6px 16px',
                      borderRadius: '64px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>{bName}</span>
                    <ArrowRight size={13} color="#F78F20" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <img 
              src={solution.image} 
              alt={solution.title}
              className="radius-image"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                display: 'block',
                border: '1px solid #D8DFE8'
              }}
            />
          </div>
        </div>

        {/* Key Features & Capabilities Checklist */}
        <div style={{ backgroundColor: '#F8FAFC', borderRadius: '24px', padding: 'clamp(28px, 4vw, 44px)', border: '1px solid #D8DFE8', marginBottom: '56px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span className="section-eyebrow eyebrow-primary">
              CORE CAPABILITIES
            </span>
            <h3 style={{ color: '#00317A', fontSize: '28px', fontWeight: 800 }}>
              What This Solution Delivers
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {solution.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={20} color="#F78F20" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#1E293B', lineHeight: 1.4 }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Solutions Horizontal Selector */}
        <div style={{ borderTop: '1px solid #D8DFE8', paddingTop: '40px' }}>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#00317A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Explore Other Solutions
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {solutionsData.filter(s => s.code !== solution.code).map(s => (
              <button
                key={s.code}
                onClick={() => onSelectSolution(s.code)}
                className="btn btn-sm btn-white"
                style={{ border: '1px solid #D8DFE8', fontSize: '14px', color: '#00317A' }}
              >
                {s.title} →
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .solution-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
