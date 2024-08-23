import React from "react";
import { Button } from "@/components/ui/button";

const HeroHeader = () => {
  return (
    <div className="h-[50vh] md:h-[55vh] lg:h-[70vh] p-10 bg-white rounded-b-[11rem] drop-shadow-lg flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-64">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold">Business Solutions</h1>
        <p className="text1-gradient font-semibold text-2xl lg:text-4xl mt-5 max-w-sm mx-auto lg:mx-0">
          Struggling to find all your business solutions in one place?
        </p>

        <Button className="mt-10 rounded-3xl font-semibold text-lg bg-[#5674FD] hover:bg-[#5674FD] shadow-sm w-[80%] lg:w-[30vh]">
          <a href="mailto:visyntro@outlook.com">Consult Now</a>
        </Button>
      </div>

      <div className="hidden lg:block">
        <video loop autoPlay muted className="h-[65vh] md:h-[50vh]">
          <source src="/video/buisness-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroHeader;
