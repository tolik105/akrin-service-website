"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function LogoCloudMarquee() {
  // First set of logos for the top marquee - using logo.dev service
  const logosTop = [
    { 
      name: 'Microsoft', 
      src: 'https://img.logo.dev/microsoft.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Apple', 
      src: 'https://img.logo.dev/apple.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Office 365', 
      src: 'https://img.logo.dev/microsoft365.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'HP', 
      src: 'https://img.logo.dev/hp.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Lenovo', 
      src: 'https://img.logo.dev/lenovo.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Dell', 
      src: 'https://img.logo.dev/dell.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Cisco', 
      src: 'https://img.logo.dev/cisco.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
  ];
  
  // Second set of logos for the bottom marquee
  const logosBottom = [
    { 
      name: 'Zscaler', 
      src: 'https://img.logo.dev/zscaler.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Sophos', 
      src: 'https://img.logo.dev/sophos.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'NinjaOne', 
      src: 'https://img.logo.dev/ninjaone.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Atera', 
      src: 'https://img.logo.dev/atera.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Ekahau', 
      src: 'https://img.logo.dev/ekahau.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Fortinet', 
      src: 'https://img.logo.dev/fortinet.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'VMware', 
      src: 'https://img.logo.dev/vmware.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'APC', 
      src: 'https://img.logo.dev/apc.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
    { 
      name: 'Fluke', 
      src: 'https://img.logo.dev/fluke.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA&colored=true&retina=true&size=120', 
    },
  ];

  return (
    <div className="relative z-20 px-4 py-12 md:px-8 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="bg-gradient-to-br from-blue-700 to-blue-500 bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-4xl">
          Trusted Technology Partners
        </h2>
        <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4"></div>
        <p className="mt-6 text-center font-sans text-base text-zinc-700 max-w-2xl mx-auto">
          Akrin IT Services partners with industry leaders to deliver enterprise-grade solutions for global teams in Japan.
        </p>

        <div className="mt-14 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 overflow-hidden">
          <div className="relative mx-auto flex h-full w-full max-w-7xl flex-wrap justify-center">
            <Marquee pauseOnHover direction="right" speed={40} gradient={false}>
              {/* Display logos twice to ensure no gaps */}
              {[...logosTop, ...logosTop].map((logo, idx) => (
                <div key={logo.name + "-logo-marquee-" + idx} className="mx-6 hover:scale-110 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={50}
                    className="h-12 w-auto object-contain"
                    unoptimized={true}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        
          <div className="relative mx-auto mt-8 flex h-full w-full max-w-7xl flex-wrap justify-center">
            <Marquee pauseOnHover direction="left" speed={30} gradient={false}>
              {/* Display logos twice to ensure no gaps */}
              {[...logosBottom, ...logosBottom].map((logo, idx) => (
                <div key={logo.name + "-logo-marquee-bottom-" + idx} className="mx-6 hover:scale-110 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={50}
                    className="h-12 w-auto object-contain"
                    unoptimized={true}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      
      {/* ISO certification badge moved to footer */}
    </div>
  );
}
