"use client";

import { useEffect } from 'react';

/**
 * Component for monitoring and reporting web vitals metrics
 * This helps identify performance issues on the client side
 */
export default function PerformanceMetrics() {
  useEffect(() => {
    // Only run in client side and in production
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return;

    // Report web vitals
    const reportWebVitals = async () => {
      const { onCLS, onFID, onLCP, onTTFB } = await import('web-vitals');
      
      const reportMetric = ({ name, value, delta }: {name: string, value: number, delta: number}) => {
        // This would typically send to an analytics service
        // For now, just log to console in development
        console.log(`Web Vital: ${name}`, { value, delta });
      };
      
      // Core Web Vitals
      onCLS(reportMetric);
      onFID(reportMetric);
      onLCP(reportMetric);
      onTTFB(reportMetric);
    };

    // Defer non-critical metric collection
    setTimeout(() => {
      reportWebVitals().catch(console.error);
    }, 5000);

    // Add lazy loading for non-critical images
    const registerLazyLoad = () => {
      // Find all large images below the fold
      const lazyImages = document.querySelectorAll('img:not([loading])');
      
      lazyImages.forEach(img => {
        // Skip small images or those marked as priority
        if (!img.getAttribute('priority') && !img.classList.contains('priority')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    };

    // Register after initial paint
    window.requestIdleCallback ? 
      window.requestIdleCallback(registerLazyLoad) : 
      setTimeout(registerLazyLoad, 200);
  }, []);

  return null;
}
