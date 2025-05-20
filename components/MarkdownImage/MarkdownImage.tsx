import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
// import styles from "./MarkdownImage.module.css";

export const MarkdownImage = ({
  src,
  alt,
  className,
  ...rest
}: any) => {
  // Convert layout prop to fill if it exists in rest
  const { layout, ...otherRest } = rest;
  const customProps = {
    src: src,
    alt: alt || "Blog post image",
    fill: true,
    sizes: "(max-width: 768px) 100vw, 1000px",
    ...otherRest,
  };
  return (
    <div className="relative max-w-[1000px] max-h-[600px] aspect-[1000/600]">
      <Image
        className={twMerge(
          "rounded-2xl block aspect-[1000/600] object-cover object-left-top",
          className
        )}
        {...customProps}
      />
    </div>
  );
};
