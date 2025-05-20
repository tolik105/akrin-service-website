import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CTA";
import Hero from "@/components/Hero";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { LogoCloudMarquee } from "@/components/ui/LogoCloudMarquee";
// Testimonials removed for consistency across the site
import type { NextPage } from "next";

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* Testimonial removed for consistency */}
      <div id="work" className=" max-w-6xl mx-auto antialiased">
        <h2 className="font-bold text-4xl text-center text-slate-700 capitalize">
          Recent{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            Projects
          </span>
        </h2>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4">
          A look at some of the successful IT infrastructure implementations we've delivered for our clients.
        </p>

        <Products />
      </div>
      {/* Second testimonial removed for consistency */}
      <Services />
      <LogoCloudMarquee />
      <CallToAction />
    </Container>
  );
}
