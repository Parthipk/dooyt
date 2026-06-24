export default function PricingShimmer() {
  return (
    <div className="flex min-h-screen w-[85%] flex-col items-center mx-auto font-aeonik animate-pulse">

      {/* HEADER */}
      <div className="mb-10 flex flex-col items-center mt-20 space-y-5">

        <div className="text-center space-y-3">
          <div className="h-3 w-20 bg-gray-200 mx-auto rounded" />
          <div className="h-8 w-72 bg-gray-200 mx-auto rounded" />
        </div>

        {/* toggle */}
        <div className="mt-8 flex gap-2 rounded-md bg-gray-200 p-1 w-[220px]">
          <div className="h-8 w-1/2 bg-gray-300 rounded" />
          <div className="h-8 w-1/2 bg-gray-300 rounded" />
        </div>

        <div className="h-4 w-48 bg-gray-200 rounded" />
      </div>

      {/* CARDS */}
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">

        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col rounded-[28px] border p-8 space-y-5"
          >

            {/* title */}
            <div className="h-6 w-32 bg-gray-200 rounded" />

            {/* subtitle */}
            <div className="h-4 w-48 bg-gray-200 rounded" />

            {/* price */}
            <div className="h-10 w-40 bg-gray-200 rounded" />

            {/* features */}
            <div className="space-y-3 mt-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="h-5 w-5 bg-gray-200 rounded-full" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </div>
              ))}
            </div>

            {/* button */}
            <div className="h-12 w-full bg-gray-300 rounded-2xl mt-6" />

          </div>
        ))}

      </div>
    </div>
  );
}