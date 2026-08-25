import React, { useState } from 'react';
import { 
  Radar, 
  Eye, 
  ShieldAlert, 
  Globe, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Lock, 
  Layers,
  Headphones
} from 'lucide-react';

export default function CodeRedAsmSection({ onOpenQuote }) {
  const [activeRiskTab, setActiveRiskTab] = useState(0);

  const capabilities = [
    {
      title: "External Attack Surface Management (EASM)",
      desc: "Continuous automated scanning of all internet-facing IPs, domains, subdomains, open ports, and legacy shadow IT assets without installing agents.",
      icon: <Globe size={18} />,
      status: "Continuous Discovery"
    },
    {
      title: "Dark Web & Breach Monitoring",
      desc: "Instant alerts whenever corporate email credentials, executive logins, or proprietary source code appear on illicit underground forums or Telegram channels.",
      icon: <Eye size={18} />,
      status: "Deep Forum Indexing"
    },
    {
      title: "Phishing & Scam Site Interception",
      desc: "Proactive tracking of lookalike typo-squatted domains and malicious cloned portals targeting your bank customers, partners, and employees.",
      icon: <ShieldAlert size={18} />,
      status: "Automated Takedown"
    },
    {
      title: "Brand & VIP Executive Protection",
      desc: "Protects executive identities, trademarks, and corporate reputations from impersonation campaigns, rogue social profiles, and fraudulent apps.",
      icon: <Lock size={18} />,
      status: "Zero-Day Impersonation"
    },
    {
      title: "Sensitive Data Leak Detection",
      desc: "Identifies exposed cloud storage buckets (AWS S3, Azure Blobs), unsecured API endpoints, and leaked internal documents indexed by search crawlers.",
      icon: <Layers size={18} />,
      status: "Public Exposure Scan"
    },
    {
      title: "24/7 Managed SOC & Fast Takedowns",
      desc: "Backed by seasoned threat analysts who validate severe vulnerabilities and execute rapid international takedown notices on your organization's behalf.",
      icon: <Headphones size={18} />,
      status: "Human-in-the-Loop SOC"
    }
  ];

  return (
    <section id="codered-asm" className="section-py bg-white" style={{ borderBottom: '1px solid #E9EDF2' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ maxWidth: '820px' }}>
            <div className="badge-tag" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#DC2626' }}>
              <Radar size={14} color="#DC2626" />
              <span>DIGITAL RISK PROTECTION · CODERED ASM</span>
            </div>

            <h2 style={{ color: '#00317A', marginBottom: '16px', fontWeight: 800 }}>
              See Your Digital Risk Before Attackers Do
            </h2>

            <p className="body-large" style={{ color: '#6C6B6B' }}>
              Modern threat actors rarely breach the hardened perimeter; they exploit forgotten subdomains, leaked credentials, and third-party SaaS exposures. CodeRed ASM continuously monitors your entire digital footprint from the outside in.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenQuote}
              className="btn btn-primary"
            >
              Request Free Attack Surface Scan
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Large Layout: 6 Core Digital Risk Pillars + Interactive Attack Surface Simulation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
          gap: '36px',
          alignItems: 'stretch'
        }} className="codered-grid">
          {/* Left: 6 Digital Risk Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="codered-pillars-grid">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '20px',
                  border: '1.5px solid #E2E8F0',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00317A';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 49, 122, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 49, 122, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00317A'
                    }}>
                      {cap.icon}
                    </div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#00317A',
                      backgroundColor: '#E2E8F0',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {cap.status}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#00317A', marginBottom: '8px', lineHeight: 1.25 }}>
                    {cap.title}
                  </h4>

                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Attack Surface Visual Representation */}
          <div style={{
            backgroundColor: '#002256',
            borderRadius: '28px',
            padding: '32px',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Radar Conic Waves */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px dashed rgba(255, 255, 255, 0.1)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              border: '1px solid rgba(247, 143, 32, 0.2)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    boxShadow: '0 0 10px #10B981'
                  }} />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    OUTSIDE-IN THREAT TOPOLOGY
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#F78F20', backgroundColor: 'rgba(247, 143, 32, 0.15)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700 }}>
                  ZERO AGENT INSTALL
                </span>
              </div>

              {/* Simulated Attack Surface Nodes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', zIndex: 2 }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10B981', fontSize: '16px' }}>✓</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>Primary Domain & SSL Health</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Valid Certs · A+ Security Headers · TLS 1.3</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>SECURED</span>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  border: '1px solid rgba(247, 143, 32, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#F78F20', fontSize: '16px' }}>⚡</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>Exposed Staging Subdomain</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>dev-portal.company.com.kh · Port 8080 open</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#F78F20', fontWeight: 700 }}>ALERT SENT</span>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#EF4444', fontSize: '16px' }}>⚠</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>Lookalike Phishing Domain</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Registered in Panama · Active cloned login</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 700 }}>TAKEDOWN INITIATED</span>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              borderRadius: '16px',
              padding: '18px 20px',
              marginTop: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                Cambodian Enterprise Protection Report
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', margin: 0, lineHeight: 1.4 }}>
                ELITECH delivers executive-level external threat reports within 24 hours of onboarding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .codered-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .codered-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
