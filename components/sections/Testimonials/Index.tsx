"use client";

import { Star } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill="#fbbf24"
            stroke="#fbbf24"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-900">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function Index() {
  const { testimonials, loading } = useTestimonials();

  if (loading) {
    return (
      <div className="flex w-[85%] mx-auto justify-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex w-[85%] flex-col items-center bg-white px-6 py-20 font-aeonik mx-auto">
      {/* Header */}
      <div className="mb-12 flex max-w-xl flex-col items-center text-center">
        <p className="text-sm font-semibold text-orange-500">Testimonials</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Proven Results. Real Feedback.
        </h2>
        <p className="mt-3 text-gray-500">
          Here&apos;s what our customers experienced.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
        flex w-full gap-6
        overflow-x-auto scroll-smooth snap-x snap-mandatory
        pb-4
        lg:grid lg:grid-cols-3 lg:overflow-visible
      "
      >
        {testimonials.map((testimonial: any) => (
          <div
            key={testimonial._id || testimonial.id}
            className="
            flex min-w-[85%] snap-center flex-col
            rounded-2xl border border-gray-200 bg-white p-6
            lg:min-w-0
          "
          >
            <StarRating rating={testimonial.rating} />

            <p className="mt-4 flex-1 text-md leading-relaxed text-gray-600">
              {testimonial.quote}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-lg font-semibold text-gray-600">
                {getInitials(testimonial.name)}
              </div>

              <div>
                <p className="text-md font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}