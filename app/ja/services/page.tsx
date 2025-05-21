import { services } from "../../../constants/services";
import React from "react";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

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
  return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

// Export metadata for SEO
export const metadata: Metadata = {
  title: 'ビジネス向けITサービス | バイリンガルサポート',
  description: '国際企業と日本企業向けのバイリンガルサポート付き総合ITサービス。ネットワーク設計、セキュリティ、機器管理、24時間サポートを提供。',
  openGraph: {
    title: '日本語/英語対応のプロフェッショナルITサービス',
    description: '日本でビジネスを展開する企業向けのマネージドITサービス、サイバーセキュリティ、インフラ設計、技術サポート。日本語と英語のバイリンガル対応。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Akrin ITサービス',
  },
  twitter: {
    card: 'summary_large_image',
    title: '日本でのビジネス向けITサービス',
    description: '日本で事業を展開する企業向けの、日本語/英語バイリンガル対応の総合ITソリューション。',
  },
  keywords: 'ITサービス 日本, バイリンガルITサポート, 日本語英語ヘルプデスク, ネットワークインフラ 日本, マネージドITサービス 東京, サイバーセキュリティ 日本',
  alternates: {
    languages: {
      'en': '/services',
      'ja': '/ja/services',
    },
  },
};

export default function ServicesPageJa() {
  const dict = getDictionary('ja');
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
          {dict.services.pageHeading}
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          {dict.services.pageSubheading}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            href={`/ja/services/${generateSlug(service.title)}`}
            key={service.id}
            className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="mb-6 inline-block p-4 bg-zinc-50 rounded-xl">
              {service.icon}
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
              {service.title}
            </h2>
            <p className="text-zinc-600 mb-6">
              {service.description}
            </p>
            <span className="text-zinc-800 font-medium flex items-center gap-2">
              {dict.services.viewDetails}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
