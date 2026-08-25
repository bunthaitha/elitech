import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, Phone, User, Sparkles } from 'lucide-react';
import { brandsData, solutionsData, siteInfo } from '../data/siteData';

export default function QuoteModal({ isOpen, onClose, defaultBrandId = '' }) {
  const [selectedBrand, setSelectedBrand] = useState(defaultBrandId || 'eset');
  const [selectedSolution, setSelectedSolution] = useState('01');
  const [seats, setSeats] = useState('50-250');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    requirements: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 64px rgba(0, 34, 86, 0.35)',
          position: 'relative',
          padding: 'clamp(24px, 4vw, 40px)',
          border: '1px solid #E2E8F0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
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
            color: '#00317A',
            transition: 'all 150ms ease'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
              <div className="badge-tag" style={{ marginBottom: '10px' }}>
                <ShieldCheck size={14} color="#00317A" />
                <span>OFFICIAL QUOTATION & SIZING</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#00317A', marginBottom: '8px' }}>
                Request Technology Quotation
              </h3>
              <p style={{ fontSize: '14px', color: '#6C6B6B', margin: 0 }}>
                Get certified bill-of-materials, tier-1 distributor pricing, and migration advisory from ELITECH.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Technology Solution Selector */}
              <div className="form-group">
                <label className="form-label">Primary Solution Required</label>
                <select 
                  className="form-control"
                  value={selectedSolution}
                  onChange={(e) => setSelectedSolution(e.target.value)}
                >
                  <option value="01">Endpoint Security & EDR / XDR</option>
                  <option value="02">Email Security & Cloud Defense (M365)</option>
                  <option value="03">Data Protection & DLP (Safetica)</option>
                  <option value="04">AI-Native SecOps (PRE CyberAI™)</option>
                  <option value="05">Digital Risk & External ASM (CodeRed)</option>
                  <option value="all">Enterprise Comprehensive Multi-Layer Defense</option>
                </select>
              </div>

              {/* Brand Preference */}
              <div className="form-group">
                <label className="form-label">Preferred Technology Brand</label>
                <select 
                  className="form-control"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="eset">ESET (Endpoint, Mail, Server, XDR)</option>
                  <option value="safetica">Safetica (Data Loss Prevention)</option>
                  <option value="hornet">Hornetsecurity (Cloud Email & M365)</option>
                  <option value="pre">PRE Security (CyberAI™ Agentic SecOps)</option>
                  <option value="codered">CodeRed ASM (External Attack Surface)</option>
                  <option value="sangfor">Sangfor Technologies (NGAF / HCI / NDR)</option>
                  <option value="recommend">Let ELITECH Recommend Best Architecture</option>
                </select>
              </div>

              {/* Number of Endpoints / Seats */}
              <div className="form-group">
                <label className="form-label">Approximate Endpoints / User Seats</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['10-50', '50-250', '250-1000', '1000+'].map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setSeats(range)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '10px',
                        border: seats === range ? '2px solid #00317A' : '1px solid #CBD5E1',
                        backgroundColor: seats === range ? '#00317A' : '#F8FAFC',
                        color: seats === range ? '#FFFFFF' : '#010000',
                        fontFamily: "'Barlow Semi Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: 'pointer'
                      }}
                    >
                      {range} seats
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sokha Chan"
                    className="form-control"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sokha@company.com.kh"
                    className="form-control"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+855 12 345 678"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Company or Bank name"
                    className="form-control"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details / Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your timeline, renewal schedule, or specific compliance targets..."
                  className="form-control"
                  style={{ resize: 'vertical' }}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                />
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '17px', padding: '14px' }}
                >
                  Submit Quotation Request
                  <ArrowRight size={18} />
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '12px', color: '#6C6B6B' }}>
                🔒 Your request is handled confidentially by ELITECH Phnom Penh Pre-Sales Engineers.
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success View */
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={42} />
            </div>

            <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#00317A', marginBottom: '12px' }}>
              Quotation Request Received
            </h3>

            <p style={{ fontSize: '15px', color: '#6C6B6B', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 28px' }}>
              Thank you, <strong>{formData.fullName || 'Valued Customer'}</strong>. Our certified pre-sales engineering team at ELITECH Phnom Penh will review your <strong>{seats}</strong> configuration and deliver an authorized quotation within 2–4 business hours.
            </p>

            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '18px 24px',
              marginBottom: '28px',
              textAlign: 'left',
              border: '1px solid #E2E8F0',
              fontSize: '14px'
            }}>
              <div style={{ fontWeight: 700, color: '#00317A', marginBottom: '4px' }}>Need urgent assistance?</div>
              <div style={{ color: '#6C6B6B' }}>
                Call our direct hotline: <strong style={{ color: '#00317A' }}>{siteInfo.phone}</strong> or email <strong style={{ color: '#00317A' }}>{siteInfo.email}</strong>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-primary"
              style={{ padding: '12px 32px' }}
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
