"use client";

import Image from "next/image";
import { useState } from "react";

import bg from "@/app/assets/advertisement/adv.png";
import bg2 from "@/app/assets/advertisement/advmobile.png";

import RequestFormModal from "@/components/forms/RequestFormModal";

export default function Index() {
    const [openRequest, setOpenRequest] = useState(false);

    return (
        <>
            <div className="relative w-[85%] h-[100vh] md:h-[85vh] xl:h-[70vh] overflow-hidden mx-auto font-aeonik">

                {/* Desktop Background */}
                <Image
                    src={bg}
                    alt="background"
                    fill
                    className="object-cover hidden lg:block"
                    priority
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center lg:justify-start">

                    {/* Desktop Layout */}
                    <div className="hidden lg:block ml-[7.5%] max-w-xl text-white text-left mt-20 xl:mt-30">

                        <h1 className="text-2xl xl:text-5xl font-bold leading-tight">
                            Make Every Day A Win with Dooyt
                        </h1>

                        <p className="mt-4 text-sm md:text-base text-gray-200 w-[60%]">
                            Are you looking to boost your business productivity? Replace all those multiple apps with a single powerful solution, Dooyt.
                        </p>

                        {/* ✅ OPEN MODAL */}
                        <button
                            onClick={() => setOpenRequest(true)}
                            className="mt-6 px-6 py-3 bg-white text-primary transition rounded-md font-medium hover:scale-105"
                        >
                            Request a Demo
                            <span className="ml-3">&gt;</span>
                        </button>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex flex-col lg:hidden items-center text-center px-6">

                        <h1 className="text-3xl font-bold leading-tight text-primary">
                            Make Every Day A Win with Dooyt
                        </h1>

                        <p className="mt-4 text-md text-secondary">
                            Are you looking to boost your business productivity? Replace all those multiple apps with a single powerful solution, Dooyt.
                        </p>

                        {/* ✅ OPEN MODAL */}
                        <button
                            onClick={() => setOpenRequest(true)}
                            className="mt-5 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-md font-medium text-white"
                        >
                            Request a Demo
                        </button>
                        <div className="mt-6 w-full flex justify-center">
                            <Image
                                src={bg2}
                                alt="mobile visual"
                                className="w-[80%] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ MODAL */}
            <RequestFormModal
                open={openRequest}
                onClose={() => setOpenRequest(false)}
            />
        </>
    );
}