"use client";

import React, { useState } from "react";
import { Phone, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import fireGif from "@/app/assets/icons/fire.gif";

import RequestFormModal from "@/components/forms/RequestFormModal";

export default function HeadingSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-[85%] mx-auto flex flex-col items-center text-center mt-10">

        {/* Badge */}
        <div className="px-4 py-1 rounded-md bg-(--primary-background)/50 text-primary text-xs font-medium mb-5 flex items-end gap-1">
          <Image
            src={fireGif}
            alt="fire"
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />

          <span className="font-aeonik text-orange text-xs sm:text-sm">
            Best ERP Software
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-black px-2">
          Accuracy. Productivity.
          <br />
          <span className="text-orange">Business Wins</span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-gray-500 font-inter text-sm sm:text-base leading-6 px-3">
          Instead of using many tools, just choose one to control your entire business effortlessly.
          Dooyt, the best ERP software that makes smarter decisions and drives business growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-7 w-full sm:w-auto px-4 sm:px-0">

          {/* OPEN POPUP */}
          <button
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange text-white px-6 py-2 rounded-md text-sm hover:scale-105 transition"
          >
            <Phone size={16} fill="white" />
            Request A Demo
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 px-6 py-2 rounded-md text-sm hover:scale-105 transition">
            Try Free for 30 Days
            <ChevronRight size={16} />
          </button>

        </div>

        {/* Rating */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-5 text-xs text-gray-500">

          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                fill="orange"
                className="text-orange-400"
              />
            ))}
          </div>

          <span>(Rating 4.5 star)</span>
        </div>

      </section>

      {/* ✅ POPUP MODAL */}
      <RequestFormModal
        open={open}
        onClose={() => setOpen(false)}
        buttonText="Request Demo"
      />
    </>
  );
}