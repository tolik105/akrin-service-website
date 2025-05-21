import React from 'react';

const KipLogo = ({ className = '', width = 100, height = 40 }: { className?: string; width?: number; height?: number }) => {
  return (
    <div style={{ width, height }} className={className}>
      <svg width={width} height={height} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* K letter */}
        <path d="M14 10V50H24V34L30 28L45 50H57L36 22L55 10H43L24 25V10H14Z" fill="#1E1E1E"/>
        {/* I letter */}
        <path d="M61 10V50H71V10H61Z" fill="#1E1E1E"/>
        {/* P letter */}
        <path d="M78 10V50H88V35H98C105 35 110 30 110 23V22C110 15 105 10 98 10H78ZM88 18H96C98 18 100 20 100 22V23C100 25 98 27 96 27H88V18Z" fill="#1E1E1E"/>
        {/* Dot above I */}
        <circle cx="66" cy="5" r="5" fill="#1E1E1E"/>
      </svg>
    </div>
  );
};

export default KipLogo;
