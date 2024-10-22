"use client";

import React from "react";
import Link from "next/link";
import { Wrench } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const links = [
    {
      name: "Usluge",
      id: "services-section",
    },
    {
      name: "O nama",
      id: "about-us-section",
    },
    {
      name: "Zašto Vulkanizer",
      id: "why-choose-us-section",
    },
    {
      name: "Recenzije",
      id: "testimonials-section",
    },
  ];

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header id="header" className="w-full mt-auto  bg-dark text-white">
      <div className="container border-b border-gray-600 py-8 px-3 md:px-0 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <span className="font-bold text-2xl">Vulkanizer</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={`#${link.id}`}
                onClick={(e) => smoothScroll(e, link.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button className="hidden md:inline-flex bg-accent hover:bg-accentLight text-white font-bold py-2 px-4">
            Rezerviraj termin
          </button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="grid place-items-center">
                <div className="grid grid-cols-2 gap-2 place-items-center">
                  <div className="rounded-full bg-light w-2 h-2"></div>
                  <div className="rounded-full bg-light w-2 h-2"></div>
                  <div className="rounded-full bg-light w-2 h-2"></div>
                  <div className="rounded-full bg-light w-2 h-2"></div>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-center gap-6 mt-12">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={`#${link.id}`}
                      onClick={(e) => smoothScroll(e, link.id)}
                      className="text-dark"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
