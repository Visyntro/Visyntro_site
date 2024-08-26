import { TextEffect } from "@/components/animation-fade";

export const Details = () => {
  return (
    <div className="">
      <div className="px-3 md:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="">
          <img
            src="/graphics.png"
            className="h-[450px] lg:h-[550px]"
            draggable="false"
            alt="Graphic Design"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl text-[#5674FD] font-bold">Graphic Design</h1>

          <TextEffect
            per="char"
            preset="fade"
            className="max-w-sm text-xl mt-5 font-semibold"
          >
            is the art of translating our ideas into visual masterpieces that
            speak to the world.
          </TextEffect>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <h1 className="text-center font-bold text-6xl mb-16">Tools We Use</h1>

        <div className="flex items-center justify-center p-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 md:gap-32">
            <img
              src="/ps.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
              alt="Photoshop"
            />
            <img
              src="/ai.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
              alt="Adobe Illustrator"
            />
            <img
              src="/figma.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
              alt="Figma"
            />
            <img
              src="/xd.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
              alt="Adobe XD"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
