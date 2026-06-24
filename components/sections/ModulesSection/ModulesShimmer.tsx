export default function ModulesShimmer() {
  return (
    <section className="w-[85%] mt-5 bg-white font-aeonik mx-auto animate-pulse">

      {/* Header */}
      <div className="text-center mb-10 space-y-3">
        <div className="h-3 w-20 bg-gray-200 mx-auto rounded" />
        <div className="h-7 w-64 bg-gray-200 mx-auto rounded" />
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-10 max-w-5xl mx-auto overflow-x-auto md:flex-wrap md:justify-center">

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 min-w-[160px]
            md:w-[180px] rounded-md border border-gray-200 bg-gray-100"
          >
            <div className="w-5 h-5 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        ))}

      </div>

      {/* Content (FIXED HEIGHT MATCH) */}
      <div className="mx-auto bg-orange-50 rounded-l-3xl flex flex-col md:flex-row items-center min-h-[420px]">

        {/* Image side */}
        <div className="w-full md:w-1/2 px-6 md:px-10 pt-6 md:pt-10 flex items-center">
          <div className="w-full h-[320px] bg-gray-200 rounded-xl" />
        </div>

        {/* Text side */}
        <div className="w-full md:w-1/2 p-6 md:p-10 space-y-4">

          <div className="h-6 w-40 bg-gray-200 rounded" />

          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-4/6 bg-gray-200 rounded" />
            <div className="h-4 w-3/6 bg-gray-200 rounded" />
          </div>

        </div>

      </div>

    </section>
  );
}