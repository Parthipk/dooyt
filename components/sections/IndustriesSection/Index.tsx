"use client";

import DesktopIndustries from "./DesktopIndustries";
import MobileIndustries from "./MobileIndustries";
import { useIndustries } from "@/hooks/useIndustry";
import { industryImages } from "./industryImages";
import IndustriesShimmer from "./IndustriesShimmer";

export default function Index() {

  const { industries, loading } = useIndustries();



if (loading) return <IndustriesShimmer />;


  // attach images locally
  const industriesWithImages = industries.map((item) => ({
    ...item,
    image: industryImages[item.id] || industryImages["solar"],
  }));


  return (
    <div className="w-full flex flex-col justify-center font-aeonik">

      {/* HEADER */}
      <div className="text-center w-full px-[7.5%] mt-20 mx-auto">
        <p className="text-orange-500 text-sm">Industries</p>
        <h2 className="text-3xl font-semibold">
          Smart Solutions for Every Industry
        </h2>
        <p className="my-5 text-gray-500 text-sm sm:text-base leading-6 w-[90%] md:w-xl mx-auto">
          Dooyt is recognized as a reliable and customized ERP solution that adapts to the unique needs of every industry.
        </p>
      </div>

      {/* DESKTOP */}
      <DesktopIndustries industries={industriesWithImages} />

      {/* MOBILE */}
      <MobileIndustries industries={industriesWithImages} />

    </div>
  );
}