import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Globe, Building2, Award } from 'lucide-react';
import { brandsData, siteInfo } from '../data/siteData';

export default function ProductDetailPage({ brandId, onBack, onSelectBrand, onOpenQuote }) {
  const brand = brandsData.find(b => b.id === brandId) || brandsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [brandId]);

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
            <span>Products</span>
            <span>/</span>
            <span style={{ color: '#00317A', fontWeight: 700 }}>{brand.name}</span>
          </div>

          <button
            onClick={onBack}
            className="btn btn-sm btn-secondary"
            style={{ padding: '6px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={14} />
            <span>Back to All Overview</span>
          </button>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section style={{ backgroundColor: '#00317A', color: '#FFFFFF', padding: '56px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
                Authorized Distribution Partner
              </span>
              <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Globe size={14} color="#F78F20" />
                {brand.country}
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
              {brand.name}
            </h1>

            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.5,
              marginBottom: '28px'
            }}>
              {brand.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote(brand.id)}
                className="btn btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <span>Request {brand.name} Quote</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="#specs"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '12px 20px'
                }}
              >
                View Capabilities ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial & Capabilities Content */}
      <div className="container" style={{ paddingTop: '56px' }}>
        {/* Split Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
          marginBottom: '56px'
        }} className="product-split">
          <div>
            <span className="section-eyebrow eyebrow-primary">
              TECHNOLOGY OVERVIEW
            </span>
            <h2 style={{ color: '#00317A', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '18px' }}>
              Enterprise Grade Protection Powered by {brand.name}
            </h2>
            <p style={{ fontSize: '16px', color: '#6C6B6B', lineHeight: 1.65, marginBottom: '20px' }}>
              {brand.description}
            </p>
            <div style={{
              backgroundColor: '#F8FAFC',
              borderLeft: '4px solid #F78F20',
              padding: '16px 20px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '24px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#00317A', marginBottom: '4px' }}>
                Key Technology Highlight
              </div>
              <div style={{ fontSize: '15px', color: '#010000', fontWeight: 500, lineHeight: 1.4 }}>
                {brand.keyHighlight}
              </div>
            </div>
          </div>

          <div>
            <img 
              src={brand.image} 
              alt={brand.name}
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

        {/* Product Suite Capabilities */}
        <div id="specs" style={{ backgroundColor: '#F8FAFC', borderRadius: '24px', padding: 'clamp(28px, 4vw, 44px)', border: '1px solid #D8DFE8', marginBottom: '56px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span className="section-eyebrow eyebrow-primary">
              PORTFOLIO MODULES
            </span>
            <h3 style={{ color: '#00317A', fontSize: '28px', fontWeight: 800 }}>
              Available {brand.name} Product Categories
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {brand.categories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={20} color="#F78F20" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#00317A' }}>
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cambodia Distribution Advantage by ELITECH */}
        <div style={{ borderTop: '1px solid #D8DFE8', paddingTop: '48px', marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <span className="section-eyebrow eyebrow-primary">
              LOCAL ADVANTAGE
            </span>
            <h3 style={{ color: '#00317A', fontSize: '32px', fontWeight: 800 }}>
              Why Deploy {brand.name} via ELITECH
            </h3>
            <p style={{ color: '#6C6B6B', fontSize: '15px' }}>
              We provide full lifecycle distribution support directly within Cambodia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="local-adv-grid">
            <div style={{ padding: '20px', border: '1px solid #E2E8F0', borderRadius: '16px', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '20px', fontWeight: 800, color: '#00317A', marginBottom: '8px' }}>
                01. Local POC & Architecture
              </div>
              <p style={{ fontSize: '14px', color: '#6C6B6B', lineHeight: 1.5, margin: 0 }}>
                Free proof-of-concept installation and tailored sizing for your IT infrastructure.
              </p>
            </div>

            <div style={{ padding: '20px', border: '1px solid #E2E8F0', borderRadius: '16px', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '20px', fontWeight: 800, color: '#00317A', marginBottom: '8px' }}>
                02. Tier-1 Support in Phnom Penh
              </div>
              <p style={{ fontSize: '14px', color: '#6C6B6B', lineHeight: 1.5, margin: 0 }}>
                Certified bilingual engineers providing fast escalation and technical troubleshooting.
              </p>
            </div>

            <div style={{ padding: '20px', border: '1px solid #E2E8F0', borderRadius: '16px', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '20px', fontWeight: 800, color: '#00317A', marginBottom: '8px' }}>
                03. Reseller & Partner Margins
              </div>
              <p style={{ fontSize: '14px', color: '#6C6B6B', lineHeight: 1.5, margin: 0 }}>
                Deal registration discounts, protected margins, and local training for Cambodian SI partners.
              </p>
            </div>
          </div>
        </div>

        {/* Other Brands Horizontal Selector */}
        <div style={{ borderTop: '1px solid #D8DFE8', paddingTop: '40px' }}>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#00317A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Explore Other Authorized Brands
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {brandsData.filter(b => b.id !== brand.id).map(b => (
              <button
                key={b.id}
                onClick={() => onSelectBrand(b.id)}
                className="btn btn-sm btn-white"
                style={{ border: '1px solid #D8DFE8', fontSize: '14px', color: '#00317A' }}
              >
                {b.name} →
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .product-split {
            grid-template-columns: 1fr !important;
          }
          .local-adv-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
