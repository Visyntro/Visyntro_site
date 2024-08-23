import FAQ from "@/components/faq";
import { Idea } from "@/components/got-an-idea";
import OtherServices from "@/components/other-services";
import { Details } from "./detail-art";
import HeroHeader from "./hero-header";
import { LatestProject } from "./latest-project";
import { OurOffering } from "./our-offering";

const page = () => {
  return (
    <div>
      <HeroHeader />
      <OurOffering />
      <Details />
      <LatestProject />
      <Idea />
      <FAQ />
      <OtherServices />
    </div>
  );
};

export default page;
