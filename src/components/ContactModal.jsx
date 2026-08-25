import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, MapPin, Globe, Building2, Send, Clock } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enterprise Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '680px',
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
                <Building2 size={14} color="#00317A" />
                <span>PHNOM PENH CORPORATE OFFICE</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#00317A', marginBottom: '8px' }}>
                Contact ELITECH Distributor
              </h3>
              <p style={{ fontSize: '14px', color: '#6C6B6B', margin: 0 }}>
                Reach our sales, channel management, or technical support teams directly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '24px'
            }} className="contact-quick-grid">
              <div style={{
                backgroundColor: '#F8FAFC',
                padding: '14px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ color: '#F78F20', marginBottom: '4px' }}><Phone size={18} /></div>
                <div style={{ fontSize: '11px', color: '#6C6B6B', fontWeight: 700, textTransform: 'uppercase' }}>Phone</div>
                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} style={{ fontSize: '13px', fontWeight: 700, color: '#00317A', textDecoration: 'none' }}>
                  {siteInfo.phone}
                </a>
              </div>

              <div style={{
                backgroundColor: '#F8FAFC',
                padding: '14px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ color: '#F78F20', marginBottom: '4px' }}><Mail size={18} /></div>
                <div style={{ fontSize: '11px', color: '#6C6B6B', fontWeight: 700, textTransform: 'uppercase' }}>Email</div>
                <a href={`mailto:${siteInfo.email}`} style={{ fontSize: '13px', fontWeight: 700, color: '#00317A', textDecoration: 'none' }}>
                  {siteInfo.email}
                </a>
              </div>

              <div style={{
                backgroundColor: '#F8FAFC',
                padding: '14px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ color: '#F78F20', marginBottom: '4px' }}><Clock size={18} /></div>
                <div style={{ fontSize: '11px', color: '#6C6B6B', fontWeight: 700, textTransform: 'uppercase' }}>Hours</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#00317A' }}>
                  Mon–Fri: 8AM–5PM
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sokha Chan"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sokha@company.com.kh"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  <label className="form-label">Subject</label>
                  <select
                    className="form-control"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="General Enterprise Inquiry">General Enterprise Inquiry</option>
                    <option value="Product POC / Demo">Product POC / Demo Request</option>
                    <option value="Channel Partnership">Channel Partnership</option>
                    <option value="Technical Support">Tier-1 Technical Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can ELITECH assist your organization?"
                  className="form-control"
                  style={{ resize: 'vertical' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ marginTop: '20px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '17px', padding: '14px' }}
                >
                  Send Message
                  <Send size={16} />
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
              Message Dispatched
            </h3>

            <p style={{ fontSize: '15px', color: '#6C6B6B', lineHeight: 1.6, maxWidth: '460px', margin: '0 auto 28px' }}>
              Thank you for reaching out to ELITECH Distributor. Our team will review your inquiry and follow up promptly.
            </p>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn btn-primary"
              style={{ padding: '12px 32px' }}
            >
              Done
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-quick-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
