import { Card, CardDescription, CardTitle, CardContent } from "./ui/card";

type Props = {
  bgColor: string;
  textColor: string;
  title: string;
  subTitle: string;
  description: string;
  className?: string;
};

export const Cards = ({
  bgColor,
  textColor,
  description,
  subTitle,
  title,
  className,
}: Props) => {
  return (
    <Card className={`w-72 h-72 shadow-md rounded-2xl bg-[${bgColor}]`}>
      <CardContent className="text-left p-5">
        <CardTitle className="font-bold text-[#5674FD] text-6xl">
          {title}
        </CardTitle>
        <CardDescription className={`text-${textColor}`}>
          <span className="font-bold mt-3 text-2xl block mb-1 max-w-40">
            {subTitle}
          </span>
          <span className="mt-5 font-normal text-[15px]">{description}</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};
