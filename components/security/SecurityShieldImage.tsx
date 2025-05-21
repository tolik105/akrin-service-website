"use client";
import Image from "next/image";
import React from "react";

const SecurityShieldImage = () => {
  return (
    <div className="relative w-full h-48 mt-4 mb-6 overflow-hidden rounded-lg">
      <Image
        src="/images/security-services.png"
        alt="Multi-Layer Security Shield Services"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default SecurityShieldImage;
