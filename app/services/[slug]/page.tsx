import { services } from "../../../constants/services";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServiceContent, ServiceContent } from "@/utils/markdown";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";

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

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: generateSlug(service.title),
  }));
}

// Custom content for specific services
const serviceContent: Record<string, {
  introduction: string;
  offerings: Array<{
    title: string;
    description: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  approach: Array<{
    title: string;
    description: string;
  }>;
  advantages: Array<string>;
  industries: Array<string>;
  ctaText: string;
}> = {
  "managed-it-services": {
    introduction: "In today's technology-dependent business environment, maintaining a reliable, secure, and efficient IT infrastructure is essential for operational success. Our Managed IT Services provide comprehensive IT management solutions that optimize your technology infrastructure while reducing operational costs for small and medium-sized businesses in Japan. We understand that organizations need proactive IT support that prevents problems before they impact operations, rather than simply reacting to issues as they arise. Our expert team delivers end-to-end management of your technology environment, from network and server administration to cybersecurity and user support. Through 24/7 monitoring, regular maintenance, and strategic planning, we ensure your IT systems operate at peak performance, allowing you to focus on your core business objectives without the distraction of technology challenges.",
    offerings: [
      {
        title: "Proactive System Monitoring",
        description: "24/7 oversight of your entire IT infrastructure to identify and address potential issues before they cause disruptions"
      },
      {
        title: "Network Management",
        description: "Configuration, optimization, and maintenance of your network infrastructure for maximum reliability and performance"
      },
      {
        title: "Server Administration",
        description: "Comprehensive management of physical and virtual servers, including updates, security patches, and performance tuning"
      },
      {
        title: "Cybersecurity Management",
        description: "Multi-layered security approach including firewalls, antivirus, intrusion detection, and vulnerability assessments"
      },
      {
        title: "Cloud Services Management",
        description: "Administration and optimization of cloud-based resources and applications"
      },
      {
        title: "Data Backup and Recovery",
        description: "Automated backup solutions with regular testing and rapid restoration capabilities"
      },
      {
        title: "Help Desk Support",
        description: "Responsive technical assistance for end-users through multiple communication channels"
      },
      {
        title: "Software Updates and Patch Management",
        description: "Timely deployment of critical updates to maintain security and functionality"
      },
      {
        title: "IT Documentation",
        description: "Comprehensive record-keeping of your technology environment, configurations, and procedures"
      },
      {
        title: "Strategic IT Planning",
        description: "Forward-looking technology roadmaps aligned with your business objectives"
      }
    ],
    benefits: [
      {
        title: "Predictable IT Costs",
        description: "Convert variable IT expenses to fixed monthly costs, making budgeting more predictable and eliminating unexpected repair bills."
      },
      {
        title: "Reduced Downtime",
        description: "Minimize business disruptions through proactive maintenance and rapid response to emerging issues."
      },
      {
        title: "Enhanced Security Posture",
        description: "Protect your business data and systems with continuously updated security measures and monitoring."
      },
      {
        title: "Improved Performance",
        description: "Optimize your technology infrastructure for maximum speed, reliability, and efficiency."
      },
      {
        title: "Strategic Technology Alignment",
        description: "Ensure your IT investments support your business goals through expert guidance and planning."
      },
      {
        title: "Focus on Core Business",
        description: "Free your internal resources from routine IT maintenance to concentrate on strategic initiatives and revenue-generating activities."
      }
    ],
    approach: [
      {
        title: "Initial Assessment",
        description: "We begin with a comprehensive evaluation of your current IT environment, identifying strengths, weaknesses, and opportunities for improvement."
      },
      {
        title: "Service Level Agreement",
        description: "Based on our assessment, we develop a tailored service agreement that clearly defines responsibilities, response times, and performance metrics."
      },
      {
        title: "Technology Standardization",
        description: "We implement consistent configurations and best practices across your environment to improve reliability and simplify management."
      },
      {
        title: "Monitoring Implementation",
        description: "We deploy advanced monitoring tools that provide real-time visibility into the health and performance of your entire IT infrastructure."
      },
      {
        title: "Documentation Development",
        description: "We create detailed documentation of your technology environment to ensure consistent service delivery and knowledge retention."
      },
      {
        title: "Proactive Maintenance",
        description: "We establish regular maintenance schedules for all critical systems to prevent issues and optimize performance."
      },
      {
        title: "Continuous Improvement",
        description: "We regularly review service metrics and system performance, identifying opportunities to enhance your technology environment."
      }
    ],
    advantages: [
      "Proactive Philosophy: Focus on preventing issues rather than simply reacting to problems after they occur",
      "Comprehensive Coverage: End-to-end management of your entire technology environment without gaps in protection",
      "Transparent Reporting: Regular service metrics and performance reports that demonstrate the value of our partnership",
      "Local Presence: Japan-based technical team with understanding of local business practices and requirements",
      "Scalable Solutions: Service offerings that grow and adapt as your business evolves",
      "Bilingual Support: Technical assistance available in both Japanese and English"
    ],
    industries: [
      "Professional services firms",
      "Financial services and accounting",
      "Healthcare and medical practices",
      "Manufacturing and distribution",
      "Retail and e-commerce",
      "Non-profit organizations"
    ],
    ctaText: "Ready to transform your approach to IT management?"
  }
};

export default async function ServicePage(
  { params }: { params: { slug: string } }
) {
  // Using async function as recommended by Next.js for dynamic route handlers
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  
  const service = services.find(
    (service) => generateSlug(service.title) === slug
  );

  if (!service) {
    notFound();
  }
  
  // Try to get markdown content based on mapping
  const markdownMapping: Record<string, string> = {
    // Original mappings
    "it-security": "it_security",
    "managed-it-services": "service_desk_services",
    "cloud-services": "cloud_services",
    "cybersecurity-consulting": "cybersecurity_training",
    "data-backup-and-recovery": "data_backup_recovery",
    "it-consulting": "it_consulting",
    "network-infrastructure": "it_networking",
    "onsite-dispatch": "onsite_dispatch",
    "onsite-support": "onsite_support",
    "hardware-software-migrations": "hardware_software_migrations",
    "virtualization-solutions": "virtualization_services",
    "wireless-networking": "wireless_survey",
    "voip-telephony": "voip_solutions",
    "it-project-management": "it_project_management",
    "access-control-surveillance": "access_control_surveillance",
    "asset-management": "asset_management",
    "hardware-maintenance": "hardware_maintenance",
    "e-waste-management": "e_waste_management",
    "audio-visual-solutions": "audio_visual_solutions",
    "it-equipment-services": "it_equipment_services",
    "relocation-service": "relocation_service",
    "citrix-workspace-services": "citrix_workspace_services",
    "fluke-testing-and-survey": "fluke_tester_survey",
    
    // New SEO-friendly mappings
    "bilingual-helpdesk-support-247": "247_help_desk_jpen",
    "same-day-onsite-it-support": "onsite_support",
    "multi-layer-cybersecurity-protection": "multi_layer_security_shield",
    "bilingual-it-strategy-consulting-japan": "bilingual_it_strategy",
    "enterprise-wifi-network-cabling": "office_cabling_wifi_rollouts",
    "it-equipment-lifecycle-management": "lifecycle_equipment_management",
    "proactive-it-maintenance-services": "preventive_maintenance_program",
    "enterprise-network-design-infrastructure": "enterprise_network_design",
    "bilingual-it-support-japan": "service_desk_services",
    "zero-downtime-office-relocation": "zero_downtime_office_moves",
    "secure-data-destruction-compliance": "secure_data_destruction",
    "hardware-procurement-setup-services": "it_equipment_services",
    "legacy-system-modernization-upgrade": "hardware_software_migrations",
    "hybrid-cloud-migration-services": "cloud_services",
  };

  // Get markdown content if available
  let markdownContent = null;
  if (markdownMapping[slug]) {
    markdownContent = await getServiceContent(markdownMapping[slug]);
  }

  // Get custom content for this service if available
  const customContent = serviceContent[slug];
  
  // Merge content sources with priority: markdown > hardcoded > default
  const mergedContent = {   
    introduction: markdownContent?.introduction || customContent?.introduction || service.description,
    offerings: markdownContent?.offerings || customContent?.offerings || [],
    benefits: markdownContent?.benefits || (customContent?.benefits || []).map(b => b.description),
    approach: markdownContent?.approach || (customContent?.approach || []).map(a => a.description),
    advantages: markdownContent?.advantages || customContent?.advantages || [],
    industries: markdownContent?.industries || customContent?.industries || [],
    ctaText: customContent?.ctaText || "Contact us to learn more about our services."
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-2xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="mb-6 inline-block p-4 bg-white rounded-xl shadow-sm">
              {service.icon}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-zinc-600 mb-6">
              {mergedContent.introduction}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zinc-700 to-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:from-zinc-800 hover:to-zinc-950 shadow-md hover:shadow-zinc-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="flex-1 w-full h-64 relative bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Service illustration */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
              <div className="p-8 transform scale-150">{service.icon}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* What We Offer Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mergedContent.offerings.length > 0 ? 
            // Use actual content from the data structure
            mergedContent.offerings.map((offering: { title: string; description: string }, i: number) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {offering.title}
                </h3>
                <p className="text-zinc-600">
                  {offering.description}
                </p>
              </div>
            )) : 
            // Fallback to generic placeholder content
            Array(3).fill(null).map((_, i: number) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {`${['System Management', 'Network Optimization', 'Security Protection'][i % 3]} for ${service.title}`}
                </h3>
                <p className="text-zinc-600">
                  Detailed explanation of how this feature benefits your business and improves operations.
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Benefits for Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mergedContent.benefits.length > 0 ? 
            // Handle both array types - either objects with title/description or simple strings
            mergedContent.benefits.slice(0, 4).map((benefit, i) => {
              // Check if the benefit is an object or a string
              const isObjectBenefit = typeof benefit === 'object' && benefit !== null;
              
              return (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold mb-2">
                    {isObjectBenefit && 'title' in benefit 
                      ? (benefit as {title: string}).title 
                      : ['Cost Efficiency', 'Enhanced Security', 'Improved Performance', 'Business Continuity'][i]}
                  </h3>
                  <p className="text-zinc-600">
                    {isObjectBenefit && 'description' in benefit 
                      ? (benefit as {description: string}).description 
                      : typeof benefit === 'string' ? benefit : "Detailed explanation of how this benefit impacts your business operations."}
                  </p>
                </div>
              );
            })
          : 
            // Use fallback benefit titles if no custom content
            Array(4).fill(null).map((_, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="font-semibold mb-2">{['Cost Efficiency', 'Enhanced Security', 'Improved Performance', 'Business Continuity'][i]}</h3>
                <p className="text-zinc-600">
                  Detailed explanation of how this benefit impacts your business operations and bottom line.
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Our Approach Section */}
      {(mergedContent.approach.length > 0 || customContent?.approach) && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {(mergedContent.approach.length > 0 ? 
                mergedContent.approach.map((description, i) => ({ title: `Step ${i+1}`, description }))
                : customContent.approach
              ).map((step: { title: string; description: string }, i: number) => (
                <div key={i} className="relative">
                  {/* Step number */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-zinc-800 text-white rounded-full flex items-center justify-center text-sm font-bold transform md:-translate-x-1/2 z-10">
                    {i + 1}
                  </div>
                  
                  {/* Step content */}
                  <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-zinc-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      {(mergedContent.advantages.length > 0 || customContent?.advantages) && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(mergedContent.advantages.length > 0 ? mergedContent.advantages : customContent.advantages).map((advantage: string, i: number) => (
                <div key={i} className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-lg hover:border-zinc-200 transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-zinc-700 font-medium">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Industries We Serve Section */}
      {(mergedContent.industries.length > 0 || customContent?.industries) && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(mergedContent.industries.length > 0 ? mergedContent.industries : customContent.industries).map((industry: string, i: number) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 text-center hover:shadow-lg hover:border-zinc-200 transition-all duration-300 transform hover:-translate-y-1">
                <p className="font-medium text-zinc-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-zinc-800 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {mergedContent.ctaText || `Ready to transform your business with ${service.title}?`}
        </h2>
        <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
          Contact our team today to schedule a comprehensive IT assessment and learn how our {service.title} can reduce costs, improve reliability, and align your technology infrastructure with your business objectives.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zinc-700 to-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:from-zinc-800 hover:to-zinc-950 shadow-md hover:shadow-zinc-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <span>Get Started Today</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      {/* Related Services */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Related Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services
            .filter((s) => s.id !== service.id)
            .slice(0, 3)
            .map((relatedService) => (
              <Link 
                href={`/services/${generateSlug(relatedService.title)}`}
                key={relatedService.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                  {relatedService.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {relatedService.title}
                </h3>
                <p className="text-zinc-600 mb-4">
                  {relatedService.description}
                </p>
                <span className="text-zinc-800 font-medium">Learn more →</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Resolve params to ensure they're properly awaited
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  // Get the service data by slug
  const service = services.find(
    (service) => generateSlug(service.title) === slug
  );

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  // Map specific services to SEO-optimized descriptions
  const seoDescriptions: Record<string, string> = {
    "bilingual-helpdesk-support-247": "24/7 bilingual IT support in Japanese and English for businesses in Japan. Enhance productivity with round-the-clock technical assistance.",
    "multi-layer-cybersecurity-protection": "Comprehensive cybersecurity protection with multiple defense layers against ransomware, phishing, and network intrusions for Japanese businesses.",
    "enterprise-wifi-network-cabling": "Professional Wi-Fi and network cabling solutions for offices in Japan. Eliminate dead zones and ensure reliable connectivity throughout your workspace.",
    "it-equipment-lifecycle-management": "Strategic IT asset management from procurement to retirement. Prevent costly emergency upgrades with proactive technology lifecycle planning.",
    "proactive-it-maintenance-services": "Prevent IT issues before they impact operations with our comprehensive preventive maintenance program. Extend equipment life and reduce downtime.",
    "enterprise-network-design-infrastructure": "Custom-built network architecture design that eliminates bottlenecks and scales with your business growth. Enterprise-grade solutions for Japanese companies.",
    "zero-downtime-office-relocation": "Relocate your entire IT infrastructure with zero business disruption. Weekend moves with Monday-ready systems for companies in Japan.",
    "secure-data-destruction-compliance": "Guaranteed data elimination with certified compliance documentation. Meet stringent Japanese regulatory requirements for secure information disposal.",
  };

  // Get custom description or fall back to service description
  const description = seoDescriptions[slug] || service.description;

  // Build metadata
  return {
    title: `${service.title} | IT Services in Japan`,
    description: description,
    openGraph: {
      title: `${service.title} | Professional IT Services for Businesses in Japan`,
      description: description,
      type: 'website',
      locale: 'en_US',
      siteName: 'Akrin IT Services',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: description,
    },
  };
}
