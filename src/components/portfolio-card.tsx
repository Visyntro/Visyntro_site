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
          <Card className="w-[21rem] h-[25rem] rounded-3xl drop-shadow-sm border shadow-md text-center relative">
            <CardHeader>
              <img
                className="h-[19rem] w-[20rem] mx-auto rounded-3xl"
                src={image}
                draggable="false"
              />
            </CardHeader>
            <CardContent className="w-full text-center font-semibold text-lg absolute bottom-0">
              <CardTitle>{title}</CardTitle>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="h-[40rem] overflow-scroll">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <img
                className="mx-auto rounded-2xl"
                src={fullImage}
                draggable="false"
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioCard;
