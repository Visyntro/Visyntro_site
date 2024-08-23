import React from "react";

const Features = () => {
  return (
    <div className="my-10 p-5 md:p-10">
      <div className="text-center mb-10">
        <h1 className="mx-auto text-3xl md:text-5xl font-bold">
          How We Do It?
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20 space-y-10 lg:space-y-0">
        <div className="flex flex-col font-semibold text-lg md:text-2xl space-y-10 lg:space-y-20 max-w-xl">
          <div className="lg:ml-16 ml-0">
            <h1>1. Market Research</h1>
          </div>
          <div>
            <h1>2. Defining Objectives</h1>
          </div>
          <div className="lg:ml-10 ml-0">
            <h1>3. Competitive Analysis</h1>
          </div>
        </div>

        <div className="flex-shrink-0 lg:mr-20 lg:ml-10 mx-auto">
          <img
            src="/marketing-image.png"
            alt="Marketing"
            className="w-60 h-auto md:w-80 hidden md:flex"
          />
        </div>

        <div className="flex flex-col font-semibold text-lg md:text-2xl space-y-10 lg:space-y-16 max-w-xl">
          <div className="-ml-0 lg:-ml-12">
            <h1>
              4. Digital Marketing
              <br /> Channels
            </h1>
          </div>
          <div>
            <h1>
              5. Digital Marketing
              <br /> Strategies
            </h1>
          </div>
          <div className="-ml-0 lg:-ml-12">
            <h1>
              6. Optimization & <br /> Performance Tracking
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
