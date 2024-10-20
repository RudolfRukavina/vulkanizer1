"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Wrench } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full mt-auto  bg-dark text-white">
      <div className="container border-b border-gray-600 py-8 px-3 md:px-0 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <span className="font-bold text-2xl">Vulcanizer</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <button className="hidden md:inline-flex bg-accent hover:bg-accentLight text-white font-bold py-2 px-4">
            Book Appointment
          </button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <HamburgerMenuIcon className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-center gap-6 mt-12">
                  <Link
                    href="#"
                    className="text-dark"
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="text-dark"
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className="text-dark"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-dark"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
