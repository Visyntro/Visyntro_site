import { AboutUs } from "@/components/about-us";
import { HeroSection } from "@/components/hero-section";
import Portfolio from "@/components/portfolio";
import { ServiceSection } from "@/components/service-section";
import Testimonials from "@/components/testimonials";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutUs />
      <WhyUs />
      <Portfolio />
      <Testimonials />
    </>
  );
}
