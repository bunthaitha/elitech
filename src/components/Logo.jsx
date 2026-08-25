import React from 'react';

export default function Logo({ light = true, size = 'default', onClick }) {
  const isDefault = size === 'default';
  const textColor = light ? '#FFFFFF' : '#00317A';
  const subTextColor = light ? 'rgba(255, 255, 255, 0.75)' : '#6C6B6B';

  return (
    <a 
      href="#" 
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="logo-brand" 
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', cursor: 'pointer' }}
    >
      <div style={{
        width: isDefault ? '42px' : '36px',
        height: isDefault ? '42px' : '36px',
        borderRadius: '12px',
        backgroundColor: light ? 'rgba(255,255,255,0.12)' : '#00317A',
        border: light ? '1.5px solid rgba(255,255,255,0.3)' : '1.5px solid #00317A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: light ? '0 4px 12px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,49,122,0.2)'
      }}>
        {/* Geometric Tech Monogram for ELITECH */}
        <svg width={isDefault ? "26" : "22"} height={isDefault ? "26" : "22"} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* E geometric bars */}
          <path d="M5 5H21V8.5H10V11H19V14.5H10V17.5H21V21H5V5Z" fill="#FFFFFF" />
          {/* Orange Accent Node */}
          <circle cx="21" cy="6.5" r="3" fill="#F78F20" />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: "'Barlow Semi Condensed', sans-serif",
          fontSize: isDefault ? '24px' : '20px',
          fontWeight: 800,
          letterSpacing: '0.04em',
          lineHeight: 1,
          color: textColor,
          display: 'flex',
          alignItems: 'center'
        }}>
          ELITECH
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#F78F20',
            marginLeft: '3px'
          }}></span>
        </div>
        <span style={{
          fontFamily: "'Barlow Semi Condensed', sans-serif",
          fontSize: isDefault ? '10px' : '9px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: subTextColor,
          textTransform: 'uppercase',
          marginTop: '2px'
        }}>
          DISTRIBUTOR
        </span>
      </div>
    </a>
  );
}
