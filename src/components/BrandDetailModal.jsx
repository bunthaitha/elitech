import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Globe2, Sparkles } from 'lucide-react';
import { brandsData } from '../data/siteData';

export default function BrandDetailModal({ brandId, onClose, onOpenQuoteWithBrand }) {
  if (!brandId) return null;
  const brand = brandsData.find(b => b.id === brandId) || brandsData[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 64px rgba(0, 34, 86, 0.35)',
          position: 'relative',
          padding: 'clamp(24px, 4vw, 40px)',
          border: '1px solid #E2E8F0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#00317A'
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '18px',
            backgroundColor: '#F1F5F9',
            border: '1.5px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 800,
            color: '#00317A'
          }}>
            {brand.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ fontSize: '30px', fontWeight: 800, color: '#00317A', margin: 0 }}>
                {brand.name}
              </h3>
              <span style={{
                fontSize: '11px',
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 700,
                color: '#00317A',
                backgroundColor: '#E9EDF2',
                padding: '4px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase'
              }}>
                Authorized in Cambodia
              </span>
            </div>
            <div style={{ fontSize: '15px', color: '#F78F20', fontWeight: 700, fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
              {brand.tagline}
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.65, marginBottom: '24px' }}>
          {brand.description}
        </p>

        {/* Highlight Box */}
        <div style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '16px',
          padding: '16px 20px',
          marginBottom: '24px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Sparkles size={20} color="#F78F20" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '14px', color: '#1E293B', fontWeight: 600 }}>
            <strong>Enterprise Highlight:</strong> {brand.keyHighlight}
          </div>
        </div>

        {/* Products List */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 800,
            fontSize: '14px',
            color: '#00317A',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '12px'
          }}>
            Available Modules & Technology Stack
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }} className="brand-modal-products">
            {brand.categories.map((cat, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                padding: '10px 14px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#1E293B'
              }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteWithBrand(brand.id);
            }}
            className="btn btn-primary"
            style={{ width: '100%', fontSize: '16px', padding: '14px' }}
          >
            Request Quotation & POC for {brand.name}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .brand-modal-products {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
