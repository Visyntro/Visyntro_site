import React from "react";
import { Button } from "@/components/ui/button";

const HeroHeader = () => {
  return (
    <div className="h-[50vh] md:h-[55vh] lg:h-[70vh] p-10 bg-[#D7F8FF] rounded-b-[11rem] drop-shadow-lg flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold text-zinc-700">
          Data Analytics
        </h1>
        <p className="text1-gradient font-semibold text-2xl lg:text-4xl mt-5 max-w-sm mx-auto lg:mx-0">
          Transform decision-making and automation with our Data and AI
          Solutions
        </p>

        <Button className="mt-10 rounded-3xl font-semibold text-lg bg-[#5674FD] hover:bg-[#5674FD] shadow-sm w-[80%] lg:w-[30vh]">
          <a href="mailto:visyntro@outlook.com">Consult Now</a>
        </Button>
      </div>

      <div className="hidden lg:block">
        <video loop autoPlay muted className="h-[65vh] md:h-[50vh] rounded-2xl">
          <source src="/video/data-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroHeader;

// <div class="bg-gradient-to-r from-blue-500 to-green-500 ...">
//   <!-- Your content here -->
// </div>
