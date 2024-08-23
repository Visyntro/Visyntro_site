"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, CardContent, CardHeader } from "./ui/card";

type Props = {
  title: string;
  imageSrc: string;
  description: string;
};

const FlipCard = ({ description, imageSrc, title }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="w-72 h-72 cursor-pointer">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card
          className="w-72 h-72 drop-shadow-sm border shadow-md text-center flex flex-col items-center justify-center"
          onMouseEnter={handleClick}
          onMouseLeave={handleClick}
        >
          <CardHeader>
            <img src={imageSrc} className="h-[7rem] w-[7rem] mx-auto" />
          </CardHeader>
          <CardContent className="font-semibold text-xl">{title}</CardContent>
        </Card>
        <Card
          className="w-72 h-72 drop-shadow-sm border shadow-md"
          // onClick={handleClick}
        >
          <CardContent className="font-normal text-lg flex items-center justify-center text-center mt-5 font-semibold">
            {description}
          </CardContent>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
