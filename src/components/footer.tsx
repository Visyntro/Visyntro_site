import React from "react";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-auto lg:h-[80vh] bg-[#0E0E2C] mt-20 rounded-tr-[11rem] py-16 px-6 lg:px-24 text-white">
      <div className="flex flex-col lg:flex-row items-center mb-10">
        <div className="flex-1 mb-6 lg:mb-0">
          <h1 className="text-[#5674FD] font-bold text-4xl mb-4">
            Vision to Reality
          </h1>
          <p className="text-xl">
            Have a Vision? Let&apos;s Bring It to Life &ndash; Contact Us Today!
          </p>
        </div>
        <div className="">
          <Button className="hidden md:flex bg-[#FFEB00] hover:bg-[#FFEB00] rounded-3xl text-black font-bold text-2xl py-6">
            Query Now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 space-y-7">
          <h1 className="text-3xl text-[#5674FD] font-bold">Visyntro</h1>
          <p>
            Visyntro is your business consultancy partner, delivering tailored
            strategies to fuel growth and innovation for startups and
            established companies. We guide successful launches, enhance market
            competitiveness, and optimize operations.
          </p>
          <Button className="bg-[#5674FD] hover:bg-[#5675fde6] rounded-3xl text-2xl py-5">
            Read More
          </Button>
        </div>

        <div className="md:col-span-4 mt-8 md:mt-0">
          <h1 className="text-2xl font-semibold text-[#5674FD]">Services</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/solution"
                className="hover:underline hover:underline-offset-4"
              >
                IT Solution
              </Link>
            </li>
            <li>
              <Link
                href="/business_solution"
                className="hover:underline hover:underline-offset-4"
              >
                Business Solution
              </Link>
            </li>
            <li>
              <Link
                href="/graphic_arts"
                className="hover:underline hover:underline-offset-4"
              >
                Graphic Arts
              </Link>
            </li>
            <li>
              <Link
                href="/marketing"
                className="hover:underline hover:underline-offset-4"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/data_solution"
                className="hover:underline hover:underline-offset-4"
              >
                Data Analytics
              </Link>
            </li>
          </ul>

          <h1 className="text-2xl font-semibold text-[#5674FD] mt-5 mb-2">
            Contact
          </h1>
          <p className="flex items-center space-x-2">
            <Mail className="size-7" />
            <span>
              <a href="mailto:visyntro@outlook.com" className="font-semibold">
                visyntro@outlook.com
              </a>
            </span>
          </p>

          <p className="flex items-center space-x-2 mt-2">
            <Phone className="size-7" />
            <span className="font-semibold">
              (+91)- 83492 28115, 63962 44151
            </span>
          </p>
        </div>

        <div className="md:col-span-4 mt-8 md:mt-0">
          <h1 className="text-2xl font-semibold text-[#5674FD]">Newsletters</h1>
          <p className="mt-4 max-w-sm mb-5">
            We will send you nice <br /> letter. No Spam.
          </p>

          <Button className="bg-[#FFEB00] hover:bg-[#FFEB00] rounded-3xl text-black font-bold text-2xl py-6 mb-7">
            Query Now
          </Button>
          <h1 className="text-2xl font-semibold text-[#5674FD]">
            Follow Us On
          </h1>

          <section className="mt-5 flex items-center space-x-5">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/visyntro/?viewAsMember=true"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="size-10" />
            </Link>
            <Link href="https://x.com/visyntro" target="_blank">
              <img src="/twitter.png" alt="Twitter" className="size-10" />
            </Link>
            <img src="/github.png" alt="Github" className="size-10" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
