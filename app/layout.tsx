import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavbarWithHoverEffects } from "@/components/ui/navbar-with-hover-effects";
import { getDictionary } from "@/lib/i18n";
import { Footer } from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";
import CookieConsent from "@/components/CookieConsent";
import { ImagePreload } from "@/components/ImagePreload";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import { inter, lora } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://akrin.com'),
  title:
    "Akrin - Innovative IT Solutions for Your Business",
  description:
    "Akrin provides enterprise-grade IT infrastructure services including 24/7 monitoring, cloud migrations, and network security to help your business operate reliably and securely.",
  openGraph: {
    images: ["/images/akrin-banner.png"],
    type: 'website',
    title: 'Akrin - Innovative IT Solutions for Your Business',
    description: 'Akrin provides enterprise-grade IT infrastructure services including 24/7 monitoring, cloud migrations, and network security to help your business operate reliably and securely.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akrin - Innovative IT Solutions for Your Business',
    description: 'Akrin provides enterprise-grade IT infrastructure services including 24/7 monitoring, cloud migrations, and network security.',
    images: ["/images/akrin-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = getDictionary('en');
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className={cn("bg-white antialiased h-full w-full font-sans")}>
        <NavbarWithHoverEffects dict={dict} locale="en" />
        {children}
        <Footer />
        <ClientOnly>
          <CookieConsent />
          <ImagePreload 
            images={[
              "/images/products/invoker.png",
              "/images/products/invoker2.png",
              "/images/templates/Foxtrot.png",
              "/images/templates/Foxtrot2.png"
            ]} 
          />
          <PerformanceMetrics />
          <ThirdPartyScripts />
        </ClientOnly>
      </body>
    </html>
  );
}
