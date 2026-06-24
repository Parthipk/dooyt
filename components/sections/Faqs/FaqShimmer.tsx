export default function FaqShimmer() {
  return (
    <div className="mx-auto w-[85%] px-0 md:px-6 font-aeonik mb-10 animate-pulse">

      {/* Title */}
      <div className="h-8 w-96 bg-gray-200 rounded" />

      {/* FAQ items */}
      <div className="mt-8 flex flex-col gap-3">

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-100 px-6 py-5"
          >

            {/* question row */}
            <div className="flex items-center justify-between gap-4">

              <div className="h-4 w-[70%] bg-gray-200 rounded" />

              <div className="h-7 w-7 rounded-full bg-gray-300" />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}