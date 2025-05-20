"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogoWithText from "../LogoWithText";

export function NavbarWithHoverEffects({
  dict,
  locale,
}: {
  dict: any;
  locale: string;
}) {
  return (
    <div className="w-full px-4 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <Navbar dict={dict} locale={locale} />
      </div>
    </div>
  );
}

const Navbar = ({ dict, locale }: { dict: any; locale: string }) => {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const navItems = [
    { name: dict.nav.home, link: `${prefix}/` },
    { name: dict.nav.services, link: `${prefix}/#services` },
    { name: dict.nav.whyUs, link: `${prefix}/packages` },
    { name: dict.nav.about, link: `${prefix}/solutions` },
    { name: dict.nav.blog, link: `${prefix}/blog` },
  ];

  return (
    <div className="rounded-full bg-white border border-gray-100 shadow-sm py-2 px-6">
      <DesktopNav navItems={navItems} prefix={prefix} dict={dict} locale={locale} />
      <MobileNav navItems={navItems} prefix={prefix} dict={dict} locale={locale} />
    </div>
  );
};

const DesktopNav = ({ navItems, prefix, dict, locale }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex items-center justify-between w-full">
      <motion.div
        onMouseLeave={() => {
          setHovered(null);
        }}
        className="hidden lg:flex w-full items-center justify-between"
      >
      <Link href="/" className="flex items-center space-x-2">
        <LogoWithText />
      </Link>
      <div className="flex-1 flex items-center justify-center space-x-14">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            className="group relative px-4 py-2 text-black hover:text-blue-600 cursor-pointer transition-colors duration-200"
            onMouseEnter={() => {
              setHovered(idx);
            }}
            key={`link=${idx}`}
            href={navItem.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-0 rounded-full bg-blue-600 transition-all group-hover:w-full"
                animate={{ width: hovered === idx ? "100%" : "0%" }}
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href={`${prefix}/contact`}
          className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 px-6 py-2.5 font-medium text-white hover:shadow-lg hover:brightness-110 transition-all"
        >
          {dict.nav.contact}
        </Link>
        <LanguageSwitcher locale={locale} />
      </div>
      </motion.div>
    </div>
  );
};

const MobileNav = ({ navItems, prefix, dict, locale }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        animate={{ borderRadius: open ? "4px" : "2rem" }}
        key={String(open)}
        className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-white px-4 py-2 lg:hidden"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <LogoWithText 
            textClassName="font-bold text-lg tracking-normal text-zinc-700" 
          />
          {open ? (
            <IconX
              className="text-zinc-700"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-zinc-700"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-zinc-600"
                >
                  <motion.span className="block">{navItem.name} </motion.span>
                </Link>
              ))}
              <Link
                href={`${prefix}/contact`}
                className="w-full rounded-full bg-gradient-to-br from-blue-600 to-blue-400 px-8 py-2.5 font-medium text-white hover:shadow-lg hover:brightness-110 transition-all text-center"
              >
                {dict.nav.contact}
              </Link>
              <LanguageSwitcher locale={locale} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const other = locale === 'ja' ? 'en' : 'ja';
  const label = locale === 'ja' ? 'EN' : 'JA';
  return (
    <Link
      href={`/${other}`}
      className="text-sm text-zinc-600 hover:text-blue-600"
    >
      {label}
    </Link>
  );
};
