import clsx from "clsx";
// Logo removed as requested
import Link from "next/link";
import React from "react";

const LogoWithText = ({
  textClassName,
}: {
  textClassName?: string;
}) => {
  return (
    <div className="flex flex-row items-center">
      <Link
        href="/"
        className={clsx("font-bold text-2xl tracking-wide", textClassName)}
      >
        Akrin
      </Link>
    </div>
  );
};

export default LogoWithText;
