import React from 'react';
import Image from 'next/image';

const Logo = ({ className = '', width = 120, height = 40 }: { className?: string; width?: number; height?: number }) => {
  return (
    <div className={className} style={{ width, height }}>
      <Image
        src="/images/logo/akrin-logo.png" 
        alt="Akrin Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
