import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/siteData';

const faqs = [
  {
    q: "What does ELITECH Distributor do?",
    a: "ELITECH Distributor Co., Ltd. is Cambodia's premier technology value-added distributor connecting global cybersecurity innovators with local businesses, financial institutions, and certified channel partners."
  },
  {
    q: "Which brands does ELITECH distribute?",
    a: "We are the authorized distributor in Cambodia for ESET, Safetica, Hornet Security, PRE Security, CodeRed ASM, and Sangfor Technologies."
  },
  {
    q: "Do you provide partner training?",
    a: "Yes. We offer regular hands-on technical workshops, product certifications, pre-sales architecture guidance, and POC assistance for system integrators and reseller partners."
  },
  {
    q: "Which industries do you serve?",
    a: "We protect organizations across Banking & Financial Services, Microfinance (MFI), Enterprise Conglomerates, SMEs, Government & Public Sector, Logistics, and Education."
  },
  {
    q: "How can I request a quotation?",
    a: "Click 'Request a Quote' on our website or email info@elitech-dist.com. Our pre-sales engineering team will reach out with a tailored proposal within 2 to 4 business hours."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-py bg-white" style={{ borderBottom: '1px solid #D8DFE8' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow eyebrow-primary">
            FAQ
          </span>
          <h2 style={{ color: '#00317A', fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 800 }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Flat Accordion with Thin Dividers */}
        <div style={{ borderTop: '1px solid #D8DFE8' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                style={{ borderBottom: '1px solid #D8DFE8' }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{
                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                    fontSize: '19px',
                    fontWeight: 700,
                    color: isOpen ? '#00317A' : '#010000',
                    paddingRight: '16px'
                  }}>
                    {faq.q}
                  </span>

                  <span style={{
                    color: isOpen ? '#F78F20' : '#6C6B6B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 0 18px 0',
                    fontSize: '15px',
                    color: '#6C6B6B',
                    lineHeight: 1.6
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
