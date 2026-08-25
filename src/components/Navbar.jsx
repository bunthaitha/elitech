import React, { useState } from 'react';
import { 
  ChevronDown, 
  Menu as MenuIcon, 
  X,
  Search,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';

export default function Navbar({ onOpenQuote, onOpenContact, onSelectSolution, onSelectBrand, onGoHome }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMegaMenu = (menuKey) => {
    if (activeMegaMenu === menuKey) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuKey);
    }
  };

  const scrollToSection = (id) => {
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
    if (onGoHome) {
      onGoHome();
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          const headerOffset = 78;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    } else {
      const element = document.querySelector(id);
      if (element) {
        const headerOffset = 78;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="navbar-root">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Corporate Logo on White */}
          <Logo light={false} onClick={onGoHome} />

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" style={{ height: '100%' }}>
            <ul className="navbar-nav">
              <li 
                className={`navbar-nav-item ${activeMegaMenu === 'solutions' ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveMegaMenu('solutions')}
              >
                <button
                  className={`navbar-link ${activeMegaMenu === 'solutions' ? 'active' : ''}`}
                  onClick={() => toggleMegaMenu('solutions')}
                  aria-expanded={activeMegaMenu === 'solutions'}
                >
                  Solutions
                  <ChevronDown size={14} style={{ transform: activeMegaMenu === 'solutions' ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }} />
                </button>
              </li>

              <li 
                className={`navbar-nav-item ${activeMegaMenu === 'products' ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveMegaMenu('products')}
              >
                <button
                  className={`navbar-link ${activeMegaMenu === 'products' ? 'active' : ''}`}
                  onClick={() => toggleMegaMenu('products')}
                  aria-expanded={activeMegaMenu === 'products'}
                >
                  Products
                  <ChevronDown size={14} style={{ transform: activeMegaMenu === 'products' ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }} />
                </button>
              </li>

              <li className="navbar-nav-item">
                <button 
                  className="navbar-link"
                  onClick={() => scrollToSection('#industries')}
                >
                  Industries
                </button>
              </li>

              <li className="navbar-nav-item">
                <button 
                  className="navbar-link"
                  onClick={() => scrollToSection('#partners')}
                >
                  Partners
                </button>
              </li>

              <li className="navbar-nav-item">
                <button 
                  className="navbar-link"
                  onClick={() => scrollToSection('#company')}
                >
                  About ELITECH
                </button>
              </li>

              <li className="navbar-nav-item">
                <button 
                  className="navbar-link"
                  onClick={() => scrollToSection('#faq')}
                >
                  Resources
                </button>
              </li>
            </ul>
          </nav>

          {/* Right Utility Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Icon */}
            <button
              onClick={() => scrollToSection('#solutions')}
              aria-label="Search"
              style={{
                background: 'none',
                border: 'none',
                color: '#00317A',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
              className="d-none-mobile"
            >
              <Search size={19} />
            </button>

            {/* Rounded Navy Pill CTA Button with Chevron Right */}
            <button 
              onClick={onOpenQuote}
              className="btn btn-sm btn-navy"
              style={{
                fontSize: '14px',
                padding: '10px 22px',
                borderRadius: '64px',
                fontWeight: 800,
                letterSpacing: '0.5px'
              }}
            >
              <span>REQUEST A QUOTE</span>
              <ChevronRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="mobile-toggle-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: '#00317A',
                padding: '6px',
                cursor: 'pointer'
              }}
            >
              {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <MegaMenu 
        activeMenu={activeMegaMenu} 
        onClose={() => setActiveMegaMenu(null)}
        onSelectSolution={onSelectSolution}
        onSelectBrand={onSelectBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: '0',
            top: '68px',
            backgroundColor: '#FFFFFF',
            zIndex: 999,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderTop: '2px solid #F78F20'
          }}
        >
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onSelectSolution('endpoint');
            }}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#00317A', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            Solutions
          </button>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onSelectBrand('eset');
            }}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#00317A', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('#industries')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#00317A', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('#partners')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#00317A', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            Partners
          </button>
          <button 
            onClick={() => scrollToSection('#company')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#00317A', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            About ELITECH
          </button>
          <button 
            onClick={() => scrollToSection('#faq')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#00317A', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            Resources
          </button>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#F78F20', fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', padding: '10px 0', borderBottom: '1px solid #E9EDF2' }}
          >
            Contact Us
          </button>

          <div style={{ marginTop: '16px' }}>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenQuote(); }}
              className="btn btn-navy"
              style={{ width: '100%', padding: '14px', fontSize: '16px', borderRadius: '64px' }}
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
          .d-none-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
