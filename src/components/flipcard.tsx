"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
    <div className="w-[20rem] lg:w-[22rem] h-[19rem] cursor-pointer">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card
          className="w-[20rem] lg:w-[22rem] h-[19rem] drop-shadow-xl border shadow-lg text-center flex flex-col items-center justify-center"
          onMouseEnter={handleClick}
          onMouseLeave={handleClick}
        >
          <CardHeader>
            <img
              src={imageSrc}
              className="h-[7rem] w-[7rem] mx-auto"
              alt={title}
            />
          </CardHeader>
          <CardContent className="font-semibold text-xl mt-5">
            <CardTitle className="font-bold text-3xl">{title}</CardTitle>
          </CardContent>
        </Card>
        <Card className="w-[20rem] lg:w-[22rem] h-[19rem] drop-shadow-xl border shadow-lg text-white bg-[#2563EB]">
          <CardContent className="text-lg flex items-center justify-center text-center mt-12 font-semibold bg-[#2563EB]">
            {description}
          </CardContent>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
