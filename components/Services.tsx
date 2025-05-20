"use client";
import { services, categories } from "constants/services";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { GridPattern } from "./GridPattern";
import Link from "next/link";

// Helper function to generate slugs consistently
function generateSlug(title: string): string {
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
        <p className="mt-2 text-lg text-gray-600">
          {dict.services.subheading}
        </p>
      </div>

      {/* Display services grouped by category */}
      {categories.map((category) => (
        <div key={category.id} className="mb-16">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-medium tracking-tight text-gray-900 mr-4">
              {category.name}
            </h3>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3"
          >
            {services
              .filter((service) => service.category === category.id)
              .map((service, idx) => (
                <Service key={`service-${category.id}-${idx}`} service={service} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Service = ({ service }: any) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <li
      onMouseMove={onMouseMove}
      className="group rounded-2xl border border-gray-200 p-8 relative hover:border-gray-300 hover:shadow-sm transition-all duration-300"
    >
      <ServicePattern {...service.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
        <span>{service.icon}</span>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased">
          {service.description}
        </p>
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
