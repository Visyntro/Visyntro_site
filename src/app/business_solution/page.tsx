import React from "react";
import HeroHeader from "./hero-header";
import { OurOffering } from "./our-offering";
import Footer from "@/components/footer";
import Testimonials from "./testimonials";
import FAQ from "@/components/faq";
import OtherServices from "@/components/other-services";

const page = () => {
  return (
    <div>
      <HeroHeader />
      <OurOffering />
      <Testimonials />
      <FAQ />
      <OtherServices />
    </div>
  );
};

export default page;
