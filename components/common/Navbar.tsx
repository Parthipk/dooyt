"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/app/assets/logo.png";

export default function Navbar() {

    return (
       <nav className="w-[85%] mx-auto mt-5 rounded-xl px-8 py-2 bg-(--primary-background)  ">

            <div className="flex items-center justify-between">
                <div className="w-24 h-auto rounded-lg flex items-center justify-center bg-re">
                    <Image
                        src={logo}
                        alt="Dooyt logo"
                        width={100}
                        height={100}
                        className="h-auto object-contain"
                    />
                </div>

                <div className="hidden md:flex gap-8 text-secondary font-inter font-medium text-sm">
                    <a>Features</a>
                    <a>Benefits</a>
                    <a>Pricing</a>
                    <a>Contact</a>
                </div>

                <button className="hidden md:block bg-primary text-white px-6 py-1 rounded-md text-sm hover:scale-105 transition-all duration-300">
                    Request A Demo
                </button>
                
                <Sheet>
                    <SheetTrigger className="md:hidden group">
                        <Menu className="w-7 h-7 text-orange transition-transform duration-300 group-data-[state=open]:rotate-90" />
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-(--primary-background) px-8"   >
                        <div className="h-full flex flex-col items-center justify-center gap-8 text-secondary font-inter font-medium">
                            <a className="hover:scale-105 transition">  Features  </a>
                            <a className="hover:scale-105 transition">  Benefits </a>
                            <a className="hover:scale-105 transition">  Pricing  </a>
                            <a className="hover:scale-105 transition">  Contact  </a>
                            <button className="bg-primary text-white px-8 py-2 rounded-md w-fit text-sm hover:scale-105 transition-all duration-300">
                                Request A Demo
                            </button>
                        </div>
                    </SheetContent>

                </Sheet>

            </div>

        </nav>
    );
}