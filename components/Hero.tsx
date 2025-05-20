// Logo removed as requested
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroFeatures from "./HeroFeatures";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {
  return (
    <div className="relative pb-10 flex flex-col items-center justify-center  md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        {/* Logo removed as requested */}
        <div className="mb-14">
          <TypewriterEffectSmooth
            words={[
              { text: "Bilingual IT Operations" },
              { 
                text: "& Cybersecurity",
                className: "relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10"
              },
              { text: "for Global Teams in Japan" }
            ]}
            className="text-3xl md:text-5xl font-bold relative text-center text-zinc-700"
            cursorClassName="bg-zinc-700"
          />
        </div>
        <h2 className="relative font-regular text-base text-zinc-500 tracking-wide mb-20 text-center max-w-3xl mx-auto antialiased">
          Automation-ready, 24 × 7 — pilot our AI help-desk beta. From bilingual on-site engineering to zero-downtime Microsoft 365 / Azure migrations and enterprise-grade security hardening—Akrin handles the stack so you can focus on the business.
        </h2>
      </div>
      <HeroFeatures />
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        {/* Primary CTA */}
        <button className="relative z-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a
            className="relative z-10 px-6 py-3 bg-white text-zinc-700 font-bold rounded-lg block"
            href="#contact"
          >
            Book a 15-min Discovery Call
          </a>
        </button>
        
        {/* Secondary CTA */}
        <button className="relative z-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <a
            className="relative z-10 px-6 py-3 bg-white/95 text-zinc-700 font-medium rounded-lg block border border-zinc-200"
            href="#beta"
          >
            Join AI Help-Desk Beta
          </a>
        </button>
      </div>

    </div>
  );
};

export default Hero;
