export const Details = () => {
  return (
    <div className="">
      <div className="px-3 md:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="">
          <img
            src="/graphics.png"
            className="h-[450px] lg:h-[550px]"
            draggable="false"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl text-[#5674FD] font-bold">Graphic Design</h1>
          <p className="max-w-sm text-xl mt-5 font-semibold">
            is the art of translating our ideas into visual masterpieces that
            speak to the world.
          </p>
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
            />
            <img
              src="/ai.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
            />
            <img
              src="/figma.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
            />
            <img
              src="/xd.png"
              className="h-[27vh] w-[27vh]"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
