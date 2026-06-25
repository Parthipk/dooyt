
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ContactFormModal from "@/components/forms/ContactFormModal";
import logo from "@/app/assets/footer/logo2.png";
import apple from "@/app/assets/footer/apple.png";
import googleplay from "@/app/assets/footer/googleplay.png";
import facebook from "@/app/assets/footer/facebook.png";
import twitter from "@/app/assets/footer/twitter.png";
import linkedIn from "@/app/assets/footer/linkedIn.png";
import footerbg from "@/app/assets/footer/footerbg.png";

type LinkItem = {
    label: string;
    href: string;
};

type LinkColumn = {
    heading: string;
    links: LinkItem[];
};

const columns: LinkColumn[] = [
    {
        heading: "Quick Links",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/" },
            { label: "Modules", href: "#modules" },
        ],
    },
    {
        heading: "Explore",
        links: [
            { label: "Features", href: "#features" },
            { label: "Benefits", href: "#benefits" },
            { label: "Contact", href: "modal:contact" },
        ],
    },
    {
        heading: "Quick Links",
        links: [
            { label: "Pricing", href: "#pricing" },
            { label: "Privacy Policy", href: "/" },
            { label: "FAQ", href: "#faq" },
        ],
    },
];

const socials = [
    { label: "Facebook", src: facebook },
    { label: "X", src: twitter },
    { label: "LinkedIn", src: linkedIn },
];

export default function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    return (
        <footer className="w-full overflow-hidden bg-black font-aeonik">
            <div className="mx-auto w-[85%] px-6 pb-10 pt-14">

                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between items-center">

                    {/* Brand */}
                    <div className="max-w-xs text-center lg:text-left">
                        <Image
                            src={logo}
                            alt="Dooyt"
                            className="h-8 w-auto mx-auto lg:mx-0"
                            priority
                        />

                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
                            <Image
                                src={apple}
                                alt="App Store"
                                className="h-14 w-40 max-w-[140px]"
                            />

                            <Image
                                src={googleplay}
                                alt="Google Play"
                                className="h-14 w-40 max-w-[140px]"
                            />
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="
                        flex flex-1 flex-wrap justify-center lg:justify-end 
                        gap-12 
                        max-sm:gap-8
                    ">
                        {columns.map((column, i) => (
                            <div key={`${column.heading}-${i}`} className="min-w-[100px]">
                                <h4 className="text-sm font-semibold text-white">
                                    {column.heading}
                                </h4>
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        {link.href === "modal:contact" ? (
                                            <button
                                                onClick={() => setIsContactOpen(true)}
                                                className="text-sm text-gray-400 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-sm text-gray-400 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-10 border-t border-gray-800" />

                {/* Bottom */}
                <div className="
                    flex flex-col-reverse items-center justify-between 
                    gap-4 py-6 
                    sm:flex-row
                ">
                    <p className="text-center text-xs text-gray-400 sm:text-left">
                        Copyright © 2025 DOOYT. All Rights Reserved
                    </p>

                    <div className="flex items-center gap-3">
                        {socials.map(({ label, src }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center"
                            >
                                <Image
                                    src={src}
                                    alt={label}
                                    className="h-full w-full"
                                />
                            </a>
                        ))}
                    </div>

                </div>
            </div>

            {/* Background */}
            <div
                className="
                    hidden xl:block relative w-[85%] mx-auto 
                    select-none overflow-hidden
                    md:h-[45vh]
                    max-sm:h-[220px]
                "
                aria-hidden="true"
            >
                <Image
                    src={footerbg}
                    alt=""
                    fill
                    className="object-cover object-center"
                />
            </div>
            <ContactFormModal
                open={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </footer>
    );
}