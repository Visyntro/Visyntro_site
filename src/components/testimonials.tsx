import React from "react";
import { Button } from "./ui/button";
import { Idea } from "./got-an-idea";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="mb-10">
      <div className="text-center my-16">
        <Link
          href="https://www.behance.net/preetimaheshwari987"
          target="_blank"
        >
          <Button className="font-semibold text-2xl bg-[#5674FD] hover:bg-[#5675fde1] rounded-full p-7">
            Explore More
          </Button>
        </Link>
      </div>

      <Idea />
    </div>
  );
};

export default Testimonials;
