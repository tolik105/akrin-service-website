import clsx from "clsx";
import Link from "next/link";
import React from "react";

const LogoWithText = ({
  textClassName,
  withLink = true,
}: {
  textClassName?: string;
  withLink?: boolean;
}) => {
  const textClasses = clsx("font-bold text-2xl tracking-wide", textClassName);
  
  return (
    <div className="flex flex-row items-center">
      {withLink ? (
        <Link
          href="/"
          className="flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="150" height="50">
            <defs>
              <linearGradient id="AkrinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00b3b3"/>
                <stop offset="100%" stopColor="#00264d"/>
              </linearGradient>
            </defs>

            {/* Stylized "A" */}
            <path
              d="M20,90 L60,10 L100,90 L85,90 L75,60 L45,60 L35,90 Z"
              fill="url(#AkrinGradient)"
            />
            {/* Cut-out inside the "A" */}
            <path
              d="M60,30 L70,60 L50,60 Z"
              fill="#fff"
            />

            {/* "krin" wordmark */}
            <text
              x="120"
              y="75"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="48"
              fontWeight="600"
              fill="#111"
            >krin</text>
          </svg>
        </Link>
      ) : (
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="150" height="50">
            <defs>
              <linearGradient id="AkrinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00b3b3"/>
                <stop offset="100%" stopColor="#00264d"/>
              </linearGradient>
            </defs>

            {/* Stylized "A" */}
            <path
              d="M20,90 L60,10 L100,90 L85,90 L75,60 L45,60 L35,90 Z"
              fill="url(#AkrinGradient)"
            />
            {/* Cut-out inside the "A" */}
            <path
              d="M60,30 L70,60 L50,60 Z"
              fill="#fff"
            />

            {/* "krin" wordmark */}
            <text
              x="120"
              y="75"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="48"
              fontWeight="600"
              fill="#111"
            >krin</text>
          </svg>
        </div>
      )}
    </div>
  );
};

export default LogoWithText;
