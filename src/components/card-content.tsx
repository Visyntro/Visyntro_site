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
    <Card className={`w-96 h-80 shadow-xl rounded-2xl bg-[${bgColor}]`}>
      <CardContent className="text-left p-5">
        <CardTitle className="font-bold text-[#5674FD] text-7xl">
          {title}
        </CardTitle>
        <CardDescription className={`text-${textColor}`}>
          <span className="font-bold mt-3 text-2xl block mb-3 max-w-40">
            {subTitle}
          </span>
          <span className="mt-5 font-normal text-[20px]">{description}</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};
