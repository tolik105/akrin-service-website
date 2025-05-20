import { services } from "../../../constants/services";
import React from "react";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

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
