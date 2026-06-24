"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function MobileIndustries({ industries }: any) {
  return (
    <div className="mt-6 pl-[7.5%] md:hidden">
      <Carousel className="w-full">
        <CarouselContent className="gap-4">
          {industries.map((item: any, index: number) => {
            const isLast = index === industries.length - 1;

            return (
              <CarouselItem
                key={item.id}
                className={`basis-[85%] sm:basis-[70%] flex-shrink-0 ${
                  isLast ? "pr-[7.5%]" : ""
                }`}
              >
                <div className="bg-[#FFF6F170] border border-[#EFEFEF] rounded-lg h-[320px] flex flex-col overflow-hidden shadow-sm">

                  <div className="h-[60%] flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-[90%] h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-1">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}