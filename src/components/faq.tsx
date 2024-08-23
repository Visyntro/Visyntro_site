import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { accordionContent } from "../../constant/accordionContent";

const FAQ = () => {
  return (
    <div className="p-16">
      <h1 className="text-center font-bold text-5xl md:text-6xl my-5">FAQ</h1>
      <Accordion type="single" collapsible className="w-full">
        {accordionContent.map(({ details, id, title }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger className="font-semibold text-xl">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-lg">{details}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
