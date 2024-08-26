import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type Props = {
  title: string;
  image: string;
  fullImage: string;
};

const PortfolioCard = ({ fullImage, image, title }: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-[26rem] h-[35rem] rounded-3xl drop-shadow-sm border shadow-md text-center relative">
            <CardHeader>
              <img
                className="h-[29rem] w-[24rem] mx-auto rounded-3xl"
                src={image}
                draggable="false"
                alt={title}
              />
            </CardHeader>
            <CardContent className="w-full text-center font-semibold text-lg absolute bottom-0 mt-3">
              <CardTitle>{title}</CardTitle>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="h-[40rem] overflow-scroll mx-1">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <img
                className="mx-auto rounded-2xl"
                src={fullImage}
                draggable="false"
                alt={title}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioCard;
