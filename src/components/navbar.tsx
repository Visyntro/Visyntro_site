"use client";

import React from "react";
import { navLinks } from "../../constant/navLinks";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="block drop-shadow-sm">
      <div className="py-3 px-1 lg:px-8 flex items-center">
        <div className="flex-1">
          <Link href="/">
            <img
              src="/main-logo.png"
              alt="Visyntro"
              className="h-[3vh] md:h-[4.5vh] w-[20vh] md:w-[30vh]"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-6">
          {navLinks.map(({ label, href }) => (
            <Link
              href={href}
              key={href}
              className={cn(pathname !== href && "navbar-animation")}
            >
              <h2
                className={cn(
                  "font-semibold text-foreground text-sm lg:text-base",
                  pathname === href && "underline underline-offset-4"
                )}
              >
                {label}
              </h2>
            </Link>
          ))}
          <Link href="/">
            <Button className="rounded-full font-semibold bg-blue-600 hover:bg-blue-500">
              Get in Touch
            </Button>
          </Link>
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
