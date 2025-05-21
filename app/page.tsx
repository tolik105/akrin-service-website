import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CTA";
import Hero from "@/components/Hero";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { LogoCloudMarquee } from "@/components/ui/LogoCloudMarquee";
import { getDictionary } from "@/lib/i18n";
// Testimonials removed for consistency across the site
import type { NextPage } from "next";

export default function Home() {
  const dict = getDictionary('en');
  return (
    <Container>
      <Hero dict={dict} />
      {/* Projects section removed as requested */}
      <Services dict={dict} locale="en" />
      <LogoCloudMarquee />
      <CallToAction
        headerText={dict.cta.header}
        bodyText={dict.cta.body}
        buttonText={dict.cta.contactButton}
        locale="en"
      />
    </Container>
  );
}
