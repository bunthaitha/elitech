import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Terminal, 
  Flame,
  Clock
} from 'lucide-react';

export default function PreSecuritySection({ onOpenQuote }) {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const workflows = [
    {
      title: "Agentic Autonomous Triage",
      tag: "10x Speed",
      desc: "CyberAI™ correlates thousands of raw alerts into singular actionable threat incidents within 300ms, eliminating 95% of analyst alert fatigue.",
      metric: "95% Alert Noise Reduction"
    },
    {
      title: "Autonomous Threat Hunting",
      tag: "Agentic Loop",
      desc: "Continuous proactive probing across endpoint, cloud, and identity telemetry using LLM-guided threat reasoning and MITRE ATT&CK techniques.",
      metric: "Sub-Second Ingestion & Reasoning"
    },
    {
      title: "Self-Executing Remediation",
      tag: "Zero-Downtime",
      desc: "Isolates compromised endpoints, invalidates hijacked session tokens, and updates firewall ACLs instantaneously without waiting for manual human shifts.",
      metric: "Instant Containment"
    }
  ];

  return (
    <section 
      id="pre-security" 
      className="section-py"
      style={{
        backgroundColor: '#00317A',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Abstract AI / SecOps Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-150px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247, 143, 32, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
          gap: 'clamp(36px, 6vw, 64px)',
          alignItems: 'center'
        }} className="pre-security-grid">
          {/* Left Column: Vision & CyberAI Architecture */}
          <div>
            <div 
              className="badge-tag"
              style={{
                backgroundColor: 'rgba(247, 143, 32, 0.18)',
                color: '#F78F20',
                border: '1px solid rgba(247, 143, 32, 0.3)',
                marginBottom: '20px'
              }}
            >
              <Cpu size={14} color="#F78F20" />
              <span>AI-NATIVE SECOPS · PRE SECURITY</span>
            </div>

            <h2 style={{
              color: '#FFFFFF',
              marginBottom: '20px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.12
            }}>
              The Next Era of <br className="d-none-sm" />
              Cybersecurity Operations
            </h2>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '8px 18px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <Sparkles size={18} color="#F78F20" />
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.5px' }}>
                Powered by CyberAI™ Architecture
              </span>
            </div>

            <p className="body-large" style={{ color: 'rgba(255, 255, 255, 0.88)', marginBottom: '20px', lineHeight: 1.6 }}>
              PRE Security revolutionizes modern Security Operations Centers (SOC) through purpose-built agentic AI architecture. Rather than drowning security teams in false positives, CyberAI™ autonomously parses telemetry, investigates malicious breadcrumbs, and executes targeted containment in real-time.
            </p>

            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '15px', lineHeight: 1.65, marginBottom: '32px' }}>
              Built specifically to bridge the critical cybersecurity talent shortage, PRE Security empowers Cambodian enterprise IT teams to operate with the agility and defense maturity of a tier-1 global 24/7 intelligence center.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <button
                onClick={onOpenQuote}
                className="btn btn-lg btn-primary"
                style={{
                  boxShadow: '0 12px 30px rgba(247, 143, 32, 0.35)',
                }}
              >
                Explore PRE Security
                <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                <Clock size={16} color="#F78F20" />
                <span>Live Interactive POC Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Agentic AI Architecture Visualizer */}
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: 'rgba(0, 22, 56, 0.75)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '28px',
              padding: '32px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)'
            }}>
              {/* Header inside visual card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(247, 143, 32, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Bot size={18} color="#F78F20" />
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                      CyberAI™ AGENTIC ENGINE
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                      Multi-Stage Reasoning Loop
                    </div>
                  </div>
                </div>

                <span style={{
                  fontSize: '11px',
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                  fontWeight: 700,
                  backgroundColor: 'rgba(247, 143, 32, 0.2)',
                  color: '#F78F20',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  border: '1px solid rgba(247, 143, 32, 0.4)'
                }}>
                  ACTIVE REASONING
                </span>
              </div>

              {/* Interactive Agentic Workflows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                {workflows.map((item, idx) => {
                  const isSelected = activeWorkflow === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveWorkflow(idx)}
                      style={{
                        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                        border: isSelected ? '1.5px solid #F78F20' : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '18px 20px',
                        cursor: 'pointer',
                        transition: 'all 200ms ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
                          {item.title}
                        </div>
                        <span style={{
                          fontSize: '11px',
                          color: isSelected ? '#F78F20' : 'rgba(255,255,255,0.6)',
                          fontWeight: 700,
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          padding: '2px 8px',
                          borderRadius: '6px'
                        }}>
                          {item.tag}
                        </span>
                      </div>

                      <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.45, margin: '0 0 10px' }}>
                        {item.desc}
                      </p>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: isSelected ? '#F78F20' : 'rgba(255,255,255,0.5)'
                      }}>
                        <CheckCircle2 size={13} />
                        <span>Impact: {item.metric}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Telemetry Bar */}
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'monospace'
              }}>
                <span>SecOps State: Autonomous Triage</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>● Connected to SOC Grid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .pre-security-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
