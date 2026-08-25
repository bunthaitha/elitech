import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Server, 
  Mail, 
  KeyRound, 
  Cloud, 
  Activity, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export default function EsetFeatureSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(0);

  const esetModules = [
    {
      title: "Endpoint Security",
      desc: "Multi-layered machine learning and behavioral inspection that detects zero-day ransomware and memory exploits before damage occurs.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Mail Security",
      desc: "Comprehensive perimeter protection for Exchange and cloud mail, eliminating spam, phishing payloads, and weaponized macros.",
      icon: <Mail size={20} />
    },
    {
      title: "File Server Security",
      desc: "High-throughput real-time scanning optimized for enterprise network shares, virtualized clusters, and multi-tenant file servers.",
      icon: <Server size={20} />
    },
    {
      title: "Endpoint Encryption",
      desc: "Full disk (FDE) and removable media military-grade encryption managed centrally to satisfy regulatory data compliance.",
      icon: <KeyRound size={20} />
    },
    {
      title: "Office 365 Protection",
      desc: "Advanced cloud-to-cloud security for Microsoft 365 OneDrive, Teams, SharePoint, and Exchange with autonomous sandboxing.",
      icon: <Cloud size={20} />
    },
    {
      title: "EDR & XDR (ESET Inspect)",
      desc: "Enterprise detection and response engine providing complete visibility, telemetry anomaly hunting, and instant remote remediation.",
      icon: <Activity size={20} />
    }
  ];

  return (
    <section id="eset" className="section-py bg-elevated" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container">
        {/* Large Editorial Split Container */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 20px 48px rgba(0, 49, 122, 0.08)',
          border: '1px solid #D8DFE8'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            minHeight: '600px'
          }} className="eset-split-grid">
            {/* Left Photographic / Architectural Showcase */}
            <div style={{
              position: 'relative',
              backgroundColor: '#00317A',
              color: '#FFFFFF',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(28px, 4vw, 48px)'
            }}>
              {/* Background Image with Dark Blue Tone */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.28,
                mixBlendMode: 'overlay'
              }} />

              {/* Top Partner Branding */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="badge-tag badge-light" style={{ marginBottom: '16px' }}>
                  <span>ESET FLAGSHIP PARTNER</span>
                </div>
                <h3 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15 }}>
                  Proven European Cybersecurity Engineered for Enterprise Scale
                </h3>
              </div>

              {/* Bottom Quote & Trust Pill */}
              <div style={{ position: 'relative', zIndex: 2, marginTop: '40px' }}>
                <div style={{
                  backgroundColor: 'rgba(0, 22, 56, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      boxShadow: '0 0 10px #10B981'
                    }} />
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>
                      30+ Years Global Track Record
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                    Distributed across Cambodia with direct local licensing, turnkey deployment, and localized engineer support by ELITECH.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Editorial Breakdown of the 6 Core Protection Pillars */}
            <div style={{
              padding: 'clamp(32px, 4.5vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{
                    color: '#F78F20',
                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    COMPREHENSIVE DEFENSE SUITE
                  </span>
                </div>

                <h2 style={{
                  color: '#00317A',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800,
                  marginBottom: '16px',
                  lineHeight: 1.12
                }}>
                  Advanced Protection from ESET
                </h2>

                <p style={{
                  fontSize: '16px',
                  color: '#6C6B6B',
                  lineHeight: 1.6,
                  marginBottom: '32px'
                }}>
                  From workstations and mail gateways to cloud collaboration suites and sophisticated XDR threat response, ESET delivers unified security with an ultra-lightweight system footprint.
                </p>

                {/* 6 Protection Layers Editorial Row List (Not tiny cards) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  marginBottom: '36px'
                }} className="eset-modules-grid">
                  {esetModules.map((mod, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '16px 18px',
                        borderRadius: '16px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        transition: 'all 200ms ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00317A';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 49, 122, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.backgroundColor = '#F8FAFC';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <div style={{ color: '#00317A' }}>
                          {mod.icon}
                        </div>
                        <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#00317A', margin: 0 }}>
                          {mod.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                        {mod.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Actions */}
              <div style={{
                paddingTop: '20px',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary"
                >
                  Request ESET Trial & Quotation
                  <ArrowRight size={16} />
                </button>

                <span style={{ fontSize: '13px', color: '#6C6B6B', fontWeight: 600 }}>
                  Includes free migration assistance & Cambodian engineer onboarding.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .eset-split-grid {
            grid-template-columns: 1fr !important;
          }
          .eset-modules-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
