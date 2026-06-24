"use client";

import React from "react";
import bgImage from "@/app/assets/background/yellowbg.png";
import bg1 from "@/app/assets/background/heroSection1.png";
import bg2 from "@/app/assets/background/heroSection2.png";
import bg3 from "@/app/assets/background/heroSection3.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ImageSection() {
  const slides = [
    { img: bg1, title: "Slide 1" },
    { img: bg2, title: "Slide 2" },
    { img: bg3, title: "Slide 3" },
  ];

  return (
    <div
      className="w-full h-[45vh] md:h-[70vh] bg-center bg-cover bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="absolute inset-0" />

      <div className="w-full z-10 px-3 md:px-6">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-3 md:gap-5">
            {slides.map((item, index) => {
              const isCenter = index === 1;

              return (
                <CarouselItem
                  key={index}
                  className={`
                    transition-all duration-300
                    basis-full sm:basis-1/2 md:basis-[20%]
                    ${isCenter ? "md:basis-[60%]" : ""}
                  `}
                >
                  <div
                    className="
                      h-[35vh] sm:h-[40vh] md:h-[60vh]
                      w-full rounded-xl overflow-hidden shadow
                      bg-cover bg-no-repeat
                    "
                    style={{
                      backgroundImage: `url(${item.img.src})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}