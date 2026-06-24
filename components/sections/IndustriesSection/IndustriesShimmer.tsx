export default function IndustriesShimmer() {
  return (
    <div className="w-full flex flex-col justify-center font-aeonik animate-pulse">

      {/* HEADER */}
      <div className="text-center w-full px-[7.5%] mt-20 mx-auto space-y-4">

        <div className="h-3 w-24 bg-gray-200 mx-auto rounded" />

        <div className="h-8 w-80 bg-gray-200 mx-auto rounded" />

        <div className="space-y-2 mt-5">
          <div className="h-4 w-[90%] md:w-[60%] bg-gray-200 mx-auto rounded" />
          <div className="h-4 w-[80%] md:w-[50%] bg-gray-200 mx-auto rounded" />
        </div>

      </div>

      {/* DESKTOP SHIMMER */}
      <div className="hidden md:block mt-10 px-[7.5%]">
        <div className="grid grid-cols-3 gap-6">

          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[220px] bg-gray-200 rounded-xl"
            />
          ))}

        </div>
      </div>

      {/* MOBILE SHIMMER */}
      <div className="block md:hidden mt-10 px-[7.5%]">
        <div className="space-y-4">

          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-[140px] bg-gray-200 rounded-xl"
            />
          ))}

        </div>
      </div>

    </div>
  );
}