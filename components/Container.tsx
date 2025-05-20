"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Container = (props: any) => {
  const { children, className } = props;
  const pathname = usePathname();
  const [isServicesPage, setIsServicesPage] = useState(false);
  
  useEffect(() => {
    // Check if current page is a services page
    setIsServicesPage(pathname?.startsWith("/services") || false);
  }, [pathname]);

  // Filter out Testimonial components if on a services page
  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (!isServicesPage) return true;
    
    // Filter out components with name 'Testimonial'
    // @ts-ignore - dynamic type check
    const componentName = child?.type?.name || child?.type?.displayName;
    return componentName !== "Testimonial";
  });
  
  return (
    <main className={clsx("bg-white min-h-screen antialiased px-6", className)}>
      {isServicesPage ? filteredChildren : children}
    </main>
  );
};
