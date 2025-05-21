// Logo removed as requested
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroFeatures from "./HeroFeatures";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = ({ dict }: { dict: any }) => {
  return (
    <div className="relative pb-10 flex flex-col items-center justify-center  md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        {/* Logo removed as requested */}
        <div className="mb-14">
          <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-center text-zinc-700 px-4 flex flex-col md:flex-row md:items-center md:justify-center gap-2 flex-wrap">
            <span>{dict.hero.line1}</span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">{dict.hero.line2}</span>
            <span>{dict.hero.line3}</span>
            <span className="block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 animate-pulse bg-zinc-700 hidden md:inline-block"></span>
          </div>
        </div>
        <h2 className="relative font-regular text-base text-zinc-500 tracking-wide mb-20 text-center max-w-3xl mx-auto antialiased">
          {dict.hero.subheading}
        </h2>
      </div>
      <HeroFeatures dict={dict} />
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        {/* Primary CTA */}
        <button className="relative z-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a
            className="relative z-10 px-6 py-3 bg-white text-zinc-700 font-bold rounded-lg block"
            href="#contact"
          >
            {dict.hero.ctaPrimary}
          </a>
        </button>
        
        {/* Secondary CTA */}
        <button className="relative z-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <a
            className="relative z-10 px-6 py-3 bg-white/95 text-zinc-700 font-medium rounded-lg block border border-zinc-200"
            href="#beta"
          >
            {dict.hero.ctaSecondary}
          </a>
        </button>
      </div>

    </div>
  );
};

export default Hero;
