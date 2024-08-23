import FAQ from "@/components/faq";
import { Idea } from "@/components/got-an-idea";
import OtherServices from "@/components/other-services";
import Details from "./details";
import HeroHeader from "./hero-header";
import { OurOffering } from "./our-offering";

const page = () => {
  return (
    <div>
      <HeroHeader />
      <OurOffering />
      <Details />
      <Idea />
      <FAQ />
      <OtherServices />
    </div>
  );
};

export default page;
