import React from 'react';
import Image from 'next/image';

const ProofBar = () => {
  const partners = [
    { 
      name: 'Microsoft', 
      logo: 'https://img.logo.dev/microsoft.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 120 
    },
    { 
      name: 'Office 365', 
      logo: 'https://img.logo.dev/microsoft365.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 120 
    },
    { 
      name: 'HP', 
      logo: 'https://img.logo.dev/hp.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 80 
    },
    { 
      name: 'Lenovo', 
      logo: 'https://img.logo.dev/lenovo.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 100 
    },
    { 
      name: 'Dell', 
      logo: 'https://img.logo.dev/dell.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 80 
    },
    { 
      name: 'Cisco', 
      logo: 'https://img.logo.dev/cisco.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 100 
    },
    { 
      name: 'APC', 
      logo: 'https://img.logo.dev/apc.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 80 
    },
    { 
      name: 'Zscaler', 
      logo: 'https://img.logo.dev/zscaler.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 120 
    },
    { 
      name: 'Sophos', 
      logo: 'https://img.logo.dev/sophos.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 100 
    },
    { 
      name: 'NinjaOne', 
      logo: 'https://img.logo.dev/ninjaone.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 100 
    },
    { 
      name: 'Atera', 
      logo: 'https://img.logo.dev/atera.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&size=72&retina=true', 
      width: 90 
    },
  ];

  return (
    <div className="w-full py-8 bg-zinc-50 border-t border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-6">Trusted Technology Partners</h3>
          
          {/* Partner logos in a scrollable container on mobile, multi-row on desktop */}
          <div className="w-full overflow-x-auto pb-4 md:pb-0 md:overflow-visible scrollbar-hide">
            <div className="flex md:flex-wrap items-center justify-start md:justify-center gap-6 md:gap-8 min-w-max md:min-w-0">
              {partners.map((partner) => (
                <div key={partner.name} className="flex-shrink-0 flex items-center">
                  <div className="h-7 md:h-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                    <Image 
                      src={partner.logo}
                      alt={partner.name} 
                      width={partner.width} 
                      height={28} 
                      className="object-contain h-full"
                      unoptimized={true} // Required for external images
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* ISO Badge centered below partners */}
        <div className="flex justify-center">
          <div className="flex items-center px-4 py-2 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-full shadow-sm border border-zinc-200 hover:border-green-200 transition-colors duration-300">
            <div className="flex items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-green-500 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04A11.95 11.95 0 014.1 13.798c1.53 4.177 5.177 7.534 7.9 8.873 2.722-1.339 6.37-4.696 7.9-8.873a11.95 11.95 0 011.718-5.814z" />
              </svg>
              <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-xs font-medium text-zinc-700 tracking-wide">ISO 27001 <span className="text-green-600 font-semibold">in progress</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofBar;
