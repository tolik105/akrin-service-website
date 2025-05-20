export const products = [
  {
    id: 0,
    title: "Enterprise Network Infrastructure",
    description: (
      <>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Complete network overhaul for a financial services firm with 500+ employees
          across 3 locations in Tokyo.
        </p>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Implemented redundant fiber connectivity, enterprise-grade firewalls, and
          segmented VLANs for enhanced security and performance.
        </p>
      </>
    ),
    link: "#",
    images: [
      "/images/products/invoker.png", // This image needs replacement with network infrastructure visuals
      "/images/products/invoker2.png", // This image needs replacement with network infrastructure visuals
    ],
  },
  {
    id: 1,
    title: "Cloud Migration & Disaster Recovery",
    description: (
      <>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Migrated a manufacturing company's critical ERP systems from on-premises
          to a hybrid cloud environment with Azure.
        </p>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Implemented geo-redundant disaster recovery with 15-minute RTO and
          automated failover capabilities.
        </p>
      </>
    ),
    link: "#",
    images: [
      "/images/products/tailwindmasterkit.png", // Reusing existing images for now
      "/images/products/tailwindmasterkit3.png",
    ],
  },

  {
    id: 3,
    title: "Security Operations Center",
    description: (
      <>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Designed and implemented a 24/7 SOC for a healthcare provider, ensuring
          compliance with industry regulations.
        </p>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Integrated SIEM solutions, endpoint protection, and automated threat
          response for comprehensive cybersecurity monitoring.
        </p>
      </>
    ),
    link: "#",
    images: [
      "/images/products/cremedigital3.png", // Reusing existing images for now
      "/images/products/cremedigital.png",
    ],
  },

  {
    id: 40,
    title: "Virtualization & Server Consolidation",
    description: (
      <>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Consolidated 45 physical servers to a high-performance VMware cluster
          for a logistics company in Osaka.
        </p>
        <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          Achieved 68% reduction in power consumption and cooling costs while
          improving system reliability and deployment speed.
        </p>
      </>
    ),
    link: "#",
    images: ["/images/products/invoker.png", "/images/products/invoker2.png"], // Reusing existing images for now
  },
];
