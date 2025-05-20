"use client";

import React, { useEffect } from 'react';

interface ImagePreloadProps {
  images: string[];
}

/**
 * Component to preload critical images for faster initial rendering
 * This helps improve LCP (Largest Contentful Paint) metrics
 */
export const ImagePreload: React.FC<ImagePreloadProps> = ({ images }) => {
  useEffect(() => {
    // Only run in client side
    if (typeof window === 'undefined') return;

    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve anyway to avoid blocking
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images]);

  // This is a utility component that doesn't render anything
  return null;
};
