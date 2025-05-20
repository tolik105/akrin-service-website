import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CTA";
import { Templates } from "@/components/Templates";
// Testimonials removed for consistency across the site
import type { NextPage } from "next";

const SolutionsPage: NextPage = () => {
  return (
    <Container
      title={`About Us | Akrin IT Services`}
      description={`Learn about Akrin IT Services, our mission, and how we deliver enterprise-grade IT infrastructure solutions tailored to your business needs.`}
    >
      <div id="work" className=" max-w-6xl mx-auto antialiased">
        <h2 className="font-bold text-4xl text-center text-slate-700  mt-10 md:mt-20">
          About 
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            {" "}
            Akrin IT Services
          </span>
        </h2>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4">
          Enterprise-grade IT infrastructure solutions tailored to your business needs
          and designed for reliability.
        </p>

        <Templates />
      </div>
      {/* Testimonial removed for consistency */}
      <CallToAction headerText={`Need a customized IT solution? We are here!`} />
    </Container>
  );
};

export default SolutionsPage;
