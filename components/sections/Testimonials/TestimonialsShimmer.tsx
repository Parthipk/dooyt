export default function TestimonialsShimmer() {
  return (
    <div className="flex w-[85%] flex-col items-center bg-white px-6 py-20 font-aeonik mx-auto animate-pulse">

      {/* Header */}
      <div className="mb-12 flex max-w-xl flex-col items-center text-center space-y-4">
        <div className="h-3 w-24 bg-gray-200 rounded" />
        <div className="h-10 w-80 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-200 rounded" />
      </div>

      {/* Cards */}
      <div
        className="
          flex w-full gap-6 overflow-x-auto pb-4
          lg:grid lg:grid-cols-3 lg:overflow-visible
        "
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="
              flex min-w-[85%] flex-col
              rounded-2xl border border-gray-200 bg-white p-6
              lg:min-w-0 space-y-5
            "
          >
            {/* stars */}
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="h-4 w-4 bg-gray-200 rounded" />
              ))}
              <div className="h-4 w-10 bg-gray-200 rounded ml-2" />
            </div>

            {/* quote */}
            <div className="space-y-2 flex-1">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>

            {/* user */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />

              <div className="space-y-2">
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}