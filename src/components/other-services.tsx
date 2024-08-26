"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { otherServicesConst } from "../../constant/otherService";

const OtherServices = () => {
  const pathname = usePathname();

  return (
    <div className="px-4 py-5 md:px-20 md:py-10">
      <h1 className="text-center font-semibold md:font-bold mb-5 md:mb-10 lg:mb-20 text-2xl md:text-3xl lg:text-5xl">
        Explore Other Services
      </h1>
      <ul className="flex flex-col md:flex-row items-center justify-center font-semibold text-lg md:text-2xl space-y-4 md:space-y-0 md:space-x-8 lg:space-x-28">
        {otherServicesConst
          .filter(({ href }) => href !== pathname)
          .map(({ href, label }) => (
            <li
              key={href}
              className={cn("bg-[#EBEFFF] rounded-3xl py-2 px-4 md:px-6")}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OtherServices;
