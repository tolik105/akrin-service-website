"use client";

import { useEffect } from 'react';

/**
 * Component for lazy loading third-party scripts
 * This improves initial page load performance by deferring non-critical scripts
 */
export default function ThirdPartyScripts() {
  useEffect(() => {
    // Only run in client side
    if (typeof window === 'undefined') return;

    // Function to load a script asynchronously
    const loadScript = (src: string, async: boolean = true, defer: boolean = true): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.defer = defer;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    // Wait for page to be fully loaded and idle
    const loadThirdPartyScripts = () => {
      try {
        // Add any third-party scripts here
        // Examples are commented out since we don't know exactly which ones to include
        
        // Analytics (example)
        // loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX');
        
        // Chat widget (example)
        // loadScript('https://static.zdassets.com/ekr/snippet.js?key=XXXXXXX');
        
        // Social media embeds (example)
        // loadScript('https://platform.twitter.com/widgets.js');
        
        console.log('Third-party scripts loaded successfully');
      } catch (error) {
        console.error('Error loading third-party scripts:', error);
      }
    };

    // Use requestIdleCallback if available, otherwise use setTimeout
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        loadThirdPartyScripts();
      });
    } else {
      // Wait for main content to load before loading non-critical scripts
      setTimeout(loadThirdPartyScripts, 5000);
    }
  }, []);

  return null;
}
