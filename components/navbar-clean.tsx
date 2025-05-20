"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LogoWithText from "./LogoWithText";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const NavbarClean = () => {
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
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoWithText textClassName="font-bold text-lg tracking-normal text-zinc-700" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-10">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <Link 
                  href={item.link} 
                  className="py-2 text-[15px] font-medium text-gray-700 relative block"
                >
                  {activeIndex === index && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)]"
                      initial={{ opacity: 0, width: '0%' }}
                      animate={{ opacity: 1, width: '100%' }}
                      exit={{ opacity: 0, width: '0%' }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          
          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2.5 bg-gradient-to-br from-[rgba(5,45,255,.9)] to-[rgba(62,243,255,.9)] text-white text-sm font-medium rounded-full hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <IoIosClose size={28} />
            ) : (
              <IoIosMenu size={24} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-3 pb-5">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="px-2 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="px-2 py-3 text-center bg-gradient-to-br from-[rgba(5,45,255,.9)] to-[rgba(62,243,255,.9)] text-white rounded-full hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300"
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

export default NavbarClean;
