import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CTA";
import Hero from "@/components/Hero";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { LogoCloudMarquee } from "@/components/ui/LogoCloudMarquee";
import { getDictionary } from "@/lib/i18n";

export default function HomeJa() {
  const dict = getDictionary('ja');
  return (
    <Container>
      <Hero dict={dict} />
      <div id="work" className=" max-w-6xl mx-auto antialiased">
        <h2 className="font-bold text-4xl text-center text-slate-700 capitalize">
          最近の{' '}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            プロジェクト
          </span>
        </h2>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4">
          これまでに提供したITインフラ構築事例の一部をご紹介します。
        </p>
        <Products />
      </div>
      <Services dict={dict} locale="ja" />
      <LogoCloudMarquee />
      <CallToAction
        headerText={dict.cta.header}
        bodyText={dict.cta.body}
        buttonText={dict.cta.contactButton}
        locale="ja"
      />
    </Container>
  );
}
