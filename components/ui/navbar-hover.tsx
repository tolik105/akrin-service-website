"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import LogoWithText from "../LogoWithText";

export function NavbarHover() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "Why US", link: "/packages" },
    { name: "About Us", link: "/solutions" },
    { name: "Blog", link: "/blog" },
  ];

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <header className="w-full bg-white z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          <LogoWithText textClassName="font-bold text-lg tracking-normal text-zinc-700" />
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative" onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)}>
                <Link href={item.link} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                  {hovered === idx && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 -z-10 rounded-md bg-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                  <span className="relative py-2 px-3">{item.name}</span>
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
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-1 border-t border-gray-200">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center mt-4 px-4 py-3 rounded-full text-white bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
