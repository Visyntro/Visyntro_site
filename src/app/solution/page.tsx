import FAQ from "@/components/faq";
import HeroHeader from "@/components/hero-header";
import OtherServices from "@/components/other-services";
import { OurOffering } from "@/components/our-offering";
import Testimonials from "@/components/testimonials";
import { AboutNew } from "./about-us";
import { LatestProject } from "./latest-project";

const page = () => {
  return (
    <div>
      <HeroHeader />
      <OurOffering />
      <AboutNew />
      <LatestProject />
      <Testimonials />
      <FAQ />
      <OtherServices />
    </div>
  );
};

export default page;
