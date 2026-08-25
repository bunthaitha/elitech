import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Hero({ onExploreSolutions, onOpenContact }) {
  return (
    <section 
      style={{
        position: 'relative',
        height: '460px',
        maxHeight: '480px',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#00317A',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
      className="homepage-hero"
    >
      {/* High-quality Corporate/Cyber Photography Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.18,
          filter: 'grayscale(30%)'
        }}
      />

      {/* Corporate Blue Gradient Overlay for Crystal Clear Typography */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0, 34, 86, 0.95) 0%, rgba(0, 49, 122, 0.85) 55%, rgba(0, 49, 122, 0.6) 100%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '720px' }}>
          {/* Eyebrow */}
          <div 
            style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#F78F20',
              marginBottom: '10px',
              display: 'inline-block'
            }}
          >
            {siteInfo.tagline}
          </div>

          {/* Main H1 Headline */}
          <h1 
            style={{ 
              color: '#FFFFFF',
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              marginBottom: '12px',
              textWrap: 'balance'
            }}
          >
            Securing Cambodia's Digital Future
          </h1>

          {/* Short Subheading Description */}
          <p 
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.5,
              marginBottom: '24px',
              maxWidth: '560px'
            }}
          >
            Trusted cybersecurity and technology solutions for Cambodian businesses.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button 
              onClick={onExploreSolutions}
              className="btn btn-primary"
              style={{ padding: '11px 26px', fontSize: '15px' }}
            >
              <span>Explore Solutions</span>
              <ArrowRight size={15} />
            </button>

            <button 
              onClick={onOpenContact}
              className="btn btn-outline-white"
              style={{ padding: '11px 26px', fontSize: '15px' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .homepage-hero {
            height: auto !important;
            min-height: 340px !important;
            max-height: 400px !important;
            padding: 40px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
