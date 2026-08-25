import React, { useState } from 'react';
import { X, CheckCircle2, Handshake, ArrowRight, Building2, User, Mail, Phone, MapPin } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function PartnerModal({ isOpen, onClose }) {
  const [partnerType, setPartnerType] = useState('System Integrator (SI)');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    yearsInBusiness: '3-5 years',
    primaryClients: ''
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

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div className="badge-tag" style={{ marginBottom: '10px' }}>
                <Handshake size={14} color="#00317A" />
                <span>ELITECH PARTNER ALLIANCE</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#00317A', marginBottom: '8px' }}>
                Apply to Become an Authorized Partner
              </h3>
              <p style={{ fontSize: '14px', color: '#6C6B6B', margin: 0 }}>
                Join Cambodia's premier cybersecurity partner ecosystem with protected margins, direct vendor licensing, and local pre-sales enablement.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Partner Business Model</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {['System Integrator (SI)', 'Value-Added Reseller (VAR)', 'MSP / Telco'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setPartnerType(type)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '10px',
                        border: partnerType === type ? '2px solid #00317A' : '1px solid #CBD5E1',
                        backgroundColor: partnerType === type ? '#00317A' : '#F8FAFC',
                        color: partnerType === type ? '#FFFFFF' : '#010000',
                        fontFamily: "'Barlow Semi Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Company Co., Ltd."
                    className="form-control"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Key Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="Director / Sales Lead"
                    className="form-control"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="partner@yourcompany.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Direct Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+855 12 888 999"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Core Target Sectors / Existing Client Focus</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Commercial banking accounts, government RFPs, MFI branches, manufacturing..."
                  className="form-control"
                  style={{ resize: 'vertical' }}
                  value={formData.primaryClients}
                  onChange={(e) => setFormData({ ...formData, primaryClients: e.target.value })}
                />
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '17px', padding: '14px' }}
                >
                  Submit Partner Application
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        ) : (
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
              Partner Application Submitted
            </h3>

            <p style={{ fontSize: '15px', color: '#6C6B6B', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 28px' }}>
              Thank you for applying, <strong>{formData.companyName}</strong>. Our Channel Partner Manager will reach out within 1 business day with your partner onboarding agreement, price book, and technical training schedule.
            </p>

            <button
              onClick={handleReset}
              className="btn btn-primary"
              style={{ padding: '12px 32px' }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
