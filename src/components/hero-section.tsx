import RegistrationFrom from "./RegistrationForm";

export const HeroSection = () => {
  return (
    <div className="">
      <div className="relative w-full h-[65vh] md:h-[50vh] lg:h-[85vh] drop-shadow-2xl shadow-2xl rounded-bl-[11rem]">
        <video
          loop
          autoPlay
          muted
          className="rounded-bl-[11rem] h-[65vh] md:h-[50vh] lg:h-[85vh] w-[100%] object-cover"
        >
          <source src="/video/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[#172055] opacity-95 rounded-bl-[11rem] flex flex-col items-center justify-center">
          <h1 className="text-gradient text-center text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl">
            Empowering business solutions with Expert Services
          </h1>

          <RegistrationFrom
            name="Consult Now"
            className="mt-5 sm:mt-7 py-5 sm:py-6 px-6 sm:px-8 text-black rounded-full bg-white hover:bg-white font-semibold text-lg sm:text-xl hover:scale-105 transition-all duration-150"
          />
        </div>
      </div>
    </div>
  );
};
