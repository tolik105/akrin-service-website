import React from 'react';
import './services.css';
import ScrollToTop from '@/components/ScrollToTop';
// TestimonialRemover no longer needed as testimonials have been removed from all pages

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="services-layout-wrapper">
      <ScrollToTop />
      {children}
    </div>
  );
}
