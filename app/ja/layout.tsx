import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";
import { NavbarWithHoverEffects } from "@/components/ui/navbar-with-hover-effects";
import { Footer } from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";
import CookieConsent from "@/components/CookieConsent";
import { ImagePreload } from "@/components/ImagePreload";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import { inter, lora } from "../fonts";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL('https://akrin.com'),
  title: 'Akrin - ITソリューション',
  description: 'Akrinは24/7監視、クラウド移行、ネットワークセキュリティなどのエンタープライズ向けITインフラサービスを提供します。',
};

export default function JaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = getDictionary('ja');
  return (
    <html lang="ja" className={`${inter.variable} ${lora.variable}`}>
      <body className={cn("bg-white antialiased h-full w-full font-sans")}>
        <NavbarWithHoverEffects dict={dict} locale="ja" />
        {children}
        <Footer />
        <ClientOnly>
          <CookieConsent />
          <ImagePreload
            images={[
              "/images/products/invoker.png",
              "/images/products/invoker2.png",
              "/images/templates/Foxtrot.png",
              "/images/templates/Foxtrot2.png",
            ]}
          />
          <PerformanceMetrics />
          <ThirdPartyScripts />
        </ClientOnly>
      </body>
    </html>
  );
}
