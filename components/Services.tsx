"use client";
import { services, categories } from "constants/services";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { GridPattern } from "./GridPattern";
import Link from "next/link";

// Helper function to generate slugs consistently
function generateSlug(title: string): string {
  // Map service titles to optimized SEO slugs
  const seoSlugs: Record<string, string> = {
    "24/7 Help-Desk (JP/EN)": "bilingual-helpdesk-support-247",
    "Same-Day Onsite Response": "same-day-onsite-it-support",
    "Multi-Layer Security Shield": "multi-layer-cybersecurity-protection",
    "Bilingual IT Strategy": "bilingual-it-strategy-consulting-japan",
    "Office Cabling & Wi-Fi Roll-outs": "enterprise-wifi-network-cabling",
    "Lifecycle Equipment Management": "it-equipment-lifecycle-management",
    "Preventive Maintenance Program": "proactive-it-maintenance-services",
    "Enterprise Network Design": "enterprise-network-design-infrastructure",
    "Japanese/English Support Desk": "bilingual-it-support-japan",
    "Zero-Downtime Office Moves": "zero-downtime-office-relocation",
    "Secure Data Destruction": "secure-data-destruction-compliance",
    "Hardware Procurement & Setup": "hardware-procurement-setup-services",
    "Legacy System Modernization": "legacy-system-modernization-upgrade",
    "Hybrid-Cloud Migration": "hybrid-cloud-migration-services",
    // Add more mappings for other services
  };
  
  // If we have a custom SEO slug, use it
  if (seoSlugs[title]) {
    return seoSlugs[title];
  }
  
  // Otherwise, fall back to the original slug generation logic
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export const Services = ({ dict, locale }: { dict: any; locale: string }) => {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <div
      id="services"
      className="max-w-7xl mx-auto antialiased py-10 md:py-20"
    >
      <div className="mx-auto max-w-3xl sm:text-center pb-10">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          {dict.services.heading}
        </h2>
        <p className="mt-2 text-base text-gray-600">
          {dict.services.subheading}
        </p>
      </div>

      {/* Display services grouped by category */}
      {categories.map((category) => (
        <div key={category} className="mb-16">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-medium tracking-tight text-gray-900 mr-4">
              {category}
            </h3>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3"
          >
            {services
              .filter((service) => service.category === category)
              .map((service) => (
                <Service key={`service-${service.id}`} service={service} prefix={prefix} dict={dict} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Service = ({ service, prefix, dict }: { service: any; prefix: string; dict: any }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Create a pattern object for consistency with existing pattern rendering
  const pattern = {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ],
  };

  return (
    <li
      onMouseMove={onMouseMove}
      className="group rounded-2xl border border-gray-200 p-8 relative hover:border-gray-300 hover:shadow-sm transition-all duration-300"
    >
      <ServicePattern {...pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
        <div className="h-8 w-8 text-gray-500 flex items-center justify-center">
          <span className="text-lg font-bold">{service.id.charAt(0).toUpperCase()}</span>
        </div>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-600">{service.summary}</p>
        <div className="mt-4">
          <div className="font-medium text-xs uppercase text-gray-500 mb-1">Outcome:</div>
          <div className="text-sm font-medium text-gray-900">{service.outcome}</div>
        </div>
        <div className="flex justify-center mt-6">
          <Link
            href={`${prefix}/services/${generateSlug(service.title)}`}
            className="relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-zinc-700 to-zinc-900 hover:shadow-md hover:shadow-zinc-500/30 transition duration-200"
          >
            <span className="w-24 h-10 flex items-center justify-center bg-zinc-100 rounded-full mx-0.5">
              {dict.services.learnMore}
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

function ServicePattern({ mouseX, mouseY, ...gridProps }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 "
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 "
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 "
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

export const HiddenClassesHack = () => {
  return (
    <div className="text-green-500 h-8 w-8 hidden text-gray-500 stroke-gray-500"></div>
  );
};
