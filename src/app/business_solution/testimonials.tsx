import { TextEffect } from "@/components/animation-fade";
import { Idea } from "@/components/got-an-idea";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <div className="pt-10">
      <div className="pb-12">
        <h1 className="text-center font-bold text-5xl">
          Dreaming to Start Business?
        </h1>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row items-center overflow-hidden mb-28">
        <div className="bg-[#EBEFFF] w-full lg:w-[45%] h-[50vh] lg:h-[70vh]  lg:rounded-r-[5rem] lg:rounded-l-none rounded-b-[5rem] lg:pt-10">
          <img
            src="/file.png"
            className="h-full w-full object-cover rounded-b-[5rem] lg:rounded-r-[5rem]"
            alt="file"
          />
        </div>
        <div className="bg-[#EBEFFF] w-full lg:w-[55%] h-[50vh] lg:h-[70vh] rounded-t-[5rem] lg:rounded-l-[4rem] lg:rounded-r-none p-10 flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl lg:text-5xl my-5">We Says</h1>

          <TextEffect
            per="char"
            preset="fade"
            className="max-w-sm text-lg lg:text-xl text-center font-semibold"
          >
            Skip the hassle of juggling multiple agencies. Get all your
            solutions in one place and watch your vision come to life
            effortlessly.
          </TextEffect>

          <Button className="font-bold bg-[#5674FD] hover:bg-[#5674FD] rounded-full mt-5 text-lg lg:text-xl py-4 lg:py-6 px-8 lg:px-10">
            Schedule a Call
          </Button>
          <span className="text-xs lg:text-sm font-semibold mt-3">
            *No Charges Applied
          </span>
        </div>
      </div>

      <Idea />
    </div>
  );
};

export default Testimonials;
