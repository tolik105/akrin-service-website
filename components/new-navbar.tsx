"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LogoWithText from "./LogoWithText";
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";

const NewNavbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "Why US", link: "/packages" },
    { name: "About Us", link: "/solutions" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="w-full bg-blue-50/50 border-b border-blue-100">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center justify-between">
          <LogoWithText textClassName="font-bold text-lg tracking-normal text-zinc-700" />
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <Link href={item.link} className="py-2 px-3 text-sm font-medium text-gray-700 relative">
                  {activeIndex === index && (
                    <motion.div 
                      layoutId="hoverBackground"
                      className="absolute inset-0 bg-blue-100 rounded-md -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {item.name}
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
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <IoIosCloseCircleOutline size={26} />
              ) : (
                <IoIosMenu size={26} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 overflow-hidden md:hidden"
            >
              <div className="flex flex-col space-y-3 pt-3 pb-5">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="block px-4 py-3 rounded-md text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link
                  href="/contact"
                  className="block py-3 text-center rounded-full text-white bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300"
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
};

export default NewNavbar;
