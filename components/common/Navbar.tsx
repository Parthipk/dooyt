"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import RequestFormModal from "@/components/forms/RequestFormModal";
import ContactFormModal from "@/components/forms/ContactFormModal";

export default function Navbar() {
    const [openRequest, setOpenRequest] = useState(false);
    const [openContact, setOpenContact] = useState(false); 
    const [sheetOpen, setSheetOpen] = useState(false);
 
    const openContactModal = () => {
        setSheetOpen(false);
        setTimeout(() => {
            setOpenContact(true);
        }, 250);
    };
 
    const openRequestModal = () => {
        setSheetOpen(false);
        setTimeout(() => {
            setOpenRequest(true);
        }, 250);
    };

    return (
        <>
            <nav className="w-[85%] mx-auto mt-5 rounded-xl px-8 py-2 bg-(--primary-background)">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="w-24 h-auto flex items-center justify-center">
                        <Image
                            src={logo}
                            alt="Dooyt logo"
                            width={100}
                            height={100}
                            className="h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-8 text-secondary font-inter font-medium text-sm">
                        <Link href="#features">Features</Link>
                        <Link href="#benefits">Benefits</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#testimonials">Testimonials</Link>

                        <button onClick={() => setOpenContact(true)}>
                            Contact Us
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="hidden lg:flex gap-3">
                        <button
                            onClick={() => setOpenRequest(true)}
                            className="bg-primary text-white px-6 py-1 rounded-lg text-sm hover:scale-105 transition"
                        >
                            Request A Demo
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger className="md:hidden group">
                            <Menu className="w-7 h-7 text-orange" />
                        </SheetTrigger>

                        <SheetContent side="right" className="bg-(--primary-background) px-8">
                            <div className="h-full flex flex-col items-center justify-center gap-8 text-secondary font-inter font-medium">

                                <Link href="#features">Features</Link>
                                <Link href="#benefits">Benefits</Link>
                                <Link href="#pricing">Pricing</Link>
                                <Link href="#testimonials">Testimonials</Link>

                                <button onClick={openContactModal}>
                                    Contact Us
                                </button>

                                <button
                                    onClick={openRequestModal}
                                    className="bg-primary text-white px-8 py-2 rounded-md w-fit text-sm"
                                >
                                    Request A Demo
                                </button>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </nav>

            {/* Modals */}
            <RequestFormModal
                open={openRequest}
                onClose={() => setOpenRequest(false)}
            />

            <ContactFormModal
                open={openContact}
                onClose={() => setOpenContact(false)}
            />
        </>
    );
}