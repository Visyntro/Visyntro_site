import RegistrationForm from "./RegistrationForm";

export const Idea = () => {
  return (
    <div className="mx-10 p-5 md:p-10 h-[50vh] bg-[#EBEFFF] rounded-[4.5rem] flex items-center justify-center overflow-hidden gap-5 md:gap-10">
      <div className="text-center md:text-left">
        <h1 className="font-bold text-center md:text-left text-3xl md:text-4xl max-w-2xl mx-auto md:mx-0">
          Got a Project Idea? Let's turn your vision into reality with seamless
          solutions
        </h1>
        <div className="flex flex-col md:flex-row gap-5 mt-5 items-center justify-center md:items-start md:justify-start md:mt-10">
          <RegistrationForm
            name="Consult Now"
            className="bg-[#5674FD] hover:bg-[#5674FD] text-2xl font-semibold rounded-full py-7 px-10"
          />
        </div>
      </div>
      <div className="hidden md:inline">
        <img
          src="/untitled.png"
          className="h-[52vh] w-[52vh]"
          alt="Consult"
          draggable="false"
        />
      </div>
    </div>
  );
};
