import { Cards } from "@/components/card-content";
import { businessContent } from "../../../constant/businessContent";

export const OurOffering = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="py-16">
        <h1 className="font-bold text-center mx-auto text-6xl">
          Our Offerings
        </h1>
      </div>

      <div className="py-5 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-6">
        {businessContent.map(
          ({ bgColor, description, subTitle, textColor, title }) => (
            <Cards
              key={title}
              bgColor={bgColor}
              description={description}
              subTitle={subTitle}
              textColor={textColor}
              title={title}
            />
          )
        )}
      </div>
    </div>
  );
};
