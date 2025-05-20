import { cn } from "@/lib/utils";
import { IsoCertificationBadge } from "./IsoCertificationBadge";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Why US",
      href: "/packages",
    },
    {
      title: "About Us",
      href: "/solutions",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Privacy",
      href: "/privacy",
    },
    {
      title: "Terms",
      href: "/terms",
    },
  ];

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800 "
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-start w-full">
          <div className="flex flex-col items-start">
            <p className="text-neutral-500 dark:text-neutral-400 mb-4">
              &copy; {new Date().getFullYear()} Akrin IT Solutions
            </p>
            <div className="scale-75 origin-top-left mb-8 sm:mb-0">
              <IsoCertificationBadge />
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="#">
              <IconBrandTwitter className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandLinkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandFacebook className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandInstagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={{
        height: "1px",
        width: "100%",
        background: "linear-gradient(to right, rgba(0, 0, 0, 0.1) 50%, transparent 50%)",
        backgroundSize: "8px 1px",
      }}
      className={cn("my-8 w-full opacity-50", className)}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <span className="font-medium text-black dark:text-white text-lg">Akrin</span>
    </Link>
  );
};
