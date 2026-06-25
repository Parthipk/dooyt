"use client";

import React from "react";
import feature1 from "@/app/assets/feature/feature1.png";
import feature2 from "@/app/assets/feature/feature2.png";
import feature3 from "@/app/assets/feature/feature3.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function FeatureSection() {
  const features = [feature1, feature2, feature3];

  return (
    <section id="features">
      <div className="font-aeonik mt-15 md:mt-20"> 
        
        <div className="text-left w-full px-[7.5%]  ">
          <p className="text-orange-500 text-sm">Features</p>

          <h2 className="text-3xl font-semibold">
            How Dooyt Can Simplify Your Business <br />
            Management?
          </h2>

          <p className="mt-5 text-gray-500 font-inter text-sm sm:text-base leading-6 w-[90%] md:w-xl">
            Dooyt is renowned as the best ERP system for small companies and has
            many features that help to simplify every aspect of your business on a
            single, easy-to-use platform.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="mt-10 pl-[7.5%]">
          <Carousel className="w-full  ">
            <CarouselContent className="gap-4">
              {features.map((img, index) => {
                const isLast = index === features.length - 1;

                return (
                  <CarouselItem
                    key={index}
                    className={`
                    basis-[70%] sm:basis-[45%] md:basis-[55%] lg:basis-[33%]
                    ${isLast ? "md:mr-[7.5%]" : ""}
                  `}
                  >
                    <div className="h-[200]   md:h-[250px]  lg:h-[300px] w-full rounded-xl overflow-hidden shadow-md">
                      <img
                        src={img.src}
                        alt={`feature-${index}`}
                        className="w-full h-full object contain lg:object-cover"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}