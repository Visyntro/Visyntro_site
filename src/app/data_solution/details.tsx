import React from "react";

const Details = () => {
  return (
    <div className="mt-[-2rem] mb-[2rem]">
      <div className="px-10 lg:px-40 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="sm:w-1/2">
          <img
            src="/data-image.png"
            className="h-[350px] md:h-[450px] lg:h-[550px]"
            draggable="false"
          />
        </div>
        <div className="sm:w-1/2">
          <h1 className="text-4xl font-bold max-w-lg sm:text-5xl text-center sm:text-left">
            <span className="text-[#5674FD]">Data</span> is the new oil; we help
            you refine it into actionable intelligence.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
