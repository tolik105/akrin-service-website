import React from 'react';
import { ContactFormGridWithDetails } from '@/components/ui/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto">
        <ContactFormGridWithDetails />
      </div>
    </div>
  );
}
