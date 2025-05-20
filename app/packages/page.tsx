import Beam from "@/components/Beam/Beam";
import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CTA";
import { Products } from "@/components/Products";
// Testimonials removed for consistency across the site
import type { NextPage } from "next";
import Image from "next/image";

const Pricing: NextPage = () => {
  return (
    <Container className="pb-20 max-w-[90rem] mx-auto">
      <div className="relative">
        <div className="relative mx-auto max-w-container px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col lg:pb-6">
              <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                $2,995/mo
              </h1>
              <p className="order-first text-base font-semibold leading-7 text-sky-500">
                Managed Infrastructure Service
              </p>
              <p className="mt-6 text-base leading-7 text-slate-700">
                Reliable IT infrastructure is critical for your business continuity. We provide
                24/7 monitoring, proactive maintenance, and expert support to keep your
                systems running smoothly at all times.
              </p>

              <div className="mt-10 flex gap-4">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                >
                  <span>
                    <span className="inline-flex items-center">
                      <span>Buy Package</span>
                      <svg
                        viewBox="0 0 20 20"
                        className="ml-1.5 h-5 w-5 fill-slate-400"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-2">
              <Beam showBeam={true} />

              <Image
                src="/images/products/aceternity.png"
                width="1600"
                height="1600"
                className=" -mb-36 aspect-[1600/1600]  rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                alt="thumbnail"
              />
              <div className="z-0 hidden md:block">
                <div className="absolute -top-4 -right-12 -left-12 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -top-12 bottom-0 -left-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -top-12 right-10 mt-px flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsIncluded />
      <div id="work" className=" max-w-6xl mx-auto antialiased">
        <h2 className="font-bold text-4xl text-center text-slate-700 ">
          Some of the infrastructure solutions we have{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            implemented
          </span>
        </h2>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4">
          A look at some of the enterprise IT solutions we've deployed recently.
        </p>

        <Products />
      </div>

      {/* Testimonial removed for consistency */}

      <CallToAction
        headerText={`Need a custom IT solution or managed services? Talk to us.`}
        bodyText={`Have questions about our IT infrastructure services? Contact us today and our team of experts will get back to you within 24 hours.`}
      />
    </Container>
  );
};

const WhatsIncluded = () => {
  const details = [
    {
      id: 0,
      title: "24/7 Infrastructure Monitoring",
      description:
        "Our NinjaOne-powered monitoring system constantly tracks your servers, networks, and endpoints to identify and resolve issues before they impact your business operations.",
    },
    {
      id: 1,
      title: "Proactive Maintenance",
      description:
        "We implement regular patching, updates, and preventative maintenance to keep your systems secure and running at peak performance.",
    },
    {
      id: 2,
      title: "Security Hardening",
      description:
        "Our team deploys multi-layered security measures including Sophos endpoint protection and Zscaler cloud security to safeguard your critical systems and data.",
    },
    {
      id: 3,
      title: "Network Management",
      description:
        "We configure, monitor, and maintain your network infrastructure with Cisco hardware to ensure reliable connectivity and optimal performance.",
    },
    {
      id: 4,
      title: "Backup & Disaster Recovery",
      description:
        "Our Veritas-powered backup solutions provide comprehensive data protection with automated backups and rapid recovery capabilities.",
    },
    {
      id: 6,
      title: "Cloud Management",
      description:
        "We help you optimize cloud resources across Microsoft Azure, AWS, and other platforms to maximize performance while controlling costs.",
    },
    {
      id: 7,
      title: "24/7 Support",
      description:
        "Our technical support team is available around the clock to address any issues and ensure your systems remain operational at all times.",
    },
    {
      id: 8,
      title: "Performance Reporting",
      description:
        "Regular reports provide visibility into system performance, security status, and resource utilization to guide strategic IT decision-making.",
    },
    {
      id: 5,
      title: "Built by experts",
      description:
        "We are the people behind websites like Algochurn and TailwindMasterKit. We have been building websites for over 5+ years now and we know what we are doing.",
    },
  ];
  return (
    <div className="mx-auto mt-52 w-full max-w-container px-4 pb-20 sm:mt-36 sm:px-6 sm:pb-24 lg:mt-28 lg:px-8 lg:pb-32 xl:mt-36">
      <div className="mx-auto max-w-[40rem] space-y-20 divide-y divide-slate-200 sm:space-y-24 lg:max-w-none lg:space-y-32">
        <section className="grid grid-cols-1 items-baseline gap-y-10 gap-x-6 lg:grid-cols-3">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
            What’s included
          </h2>
          <div className="max-w-2xl space-y-10 lg:col-span-2 prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
            {details.map((detail, idx) => (
              <p key={`detail-${idx}`}>
                <strong>{detail.title}</strong> — {detail.description}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
