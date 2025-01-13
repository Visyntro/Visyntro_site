"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../constant/navLinks";
import RegistrationForm from "./RegistrationForm";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="text-base size-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">
              <Link href="/">
                <img
                  src="/main-logo.png"
                  alt="Visyntro"
                  className="h-[3vh] md:h-[4.5vh] w-[20vh] md:w-[30vh] ml-[-15px]"
                />
              </Link>
            </SheetTitle>
            <SheetDescription>
              <span className="flex items-start flex-col mt-10 space-y-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    href={href}
                    key={href}
                    className={cn(
                      "text-lg",
                      pathname !== href && "navbar-animation"
                    )}
                  >
                    <span
                      className={cn(
                        "font-semibold text-foreground",
                        pathname === href && "underline underline-offset-4"
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
                <RegistrationForm
                  name="Get in Touch"
                  className="rounded-lg ml-[-5px] font-semibold bg-blue-600 mt-40 hover:bg-blue-500 w-full focus-within:outline-none outline-none focus:outline-none focus-visible:ring-0"
                />
              </span>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
