"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import LogoWithText from "./LogoWithText";

export default function NavbarWithHoverEffect() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "Why US", link: "/packages" },
    { name: "About Us", link: "/solutions" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="bg-white py-6 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <LogoWithText textClassName="font-bold text-lg tracking-normal text-zinc-700" />
          
          <div className="flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <div 
                key={idx} 
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={item.link}>
                  <div className="relative z-10 px-3 py-2 text-sm font-medium text-gray-700">
                    {hoveredIndex === idx && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 bg-blue-50 rounded-md -z-10"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
            
            <Link
              href="/contact"
              className="relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="w-24 h-10 flex items-center justify-center bg-white rounded-full mx-0.5">
                Contact
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <LogoWithText textClassName="font-bold text-lg tracking-normal text-zinc-700" />
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-2 pb-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] text-white rounded-full hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
