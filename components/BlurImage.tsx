"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

interface IBlurImage {
  height?: number;
  width?: number;
  src: string | any;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  fill = false,
  sizes,
  style,
  alt,
  quality = 75,
  priority = false,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  
  return (
    <Image
      className={clsx(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjRmNGY1Ii8+PC9zdmc+"
      style={style}
      alt={alt || "Image"}
      {...rest}
    />
  );
};
