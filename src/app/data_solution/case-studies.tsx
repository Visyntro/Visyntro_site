import { Card } from "@/components/ui/card";

export const CaseStudies = () => {
  return (
    <div className="pt-20 mb-20">
      <h1 className="font-bold text-center text-5xl">Some Case Studies</h1>

      <div className="py-5 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-6">
        <Card className="h-[50vh] w-[40vh] drop-shadow-md rounded-3xl"></Card>
        <Card className="h-[50vh] w-[40vh] drop-shadow-md rounded-3xl"></Card>
        <Card className="h-[50vh] w-[40vh] drop-shadow-md rounded-3xl"></Card>
      </div>
    </div>
  );
};
