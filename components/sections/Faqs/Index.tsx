"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useFaq } from "@/hooks/useFaq";
import FaqShimmer from "./FaqShimmer";

type Faq = {
  _id?: string;
  id?: string;
  order: number;
  question: string;
  answer: string;
};

export default function Index() {
  const { faqs, loading } = useFaq();
  const [openId, setOpenId] = useState<string | null>(null);


  if (loading) {
    return <FaqShimmer />;
  }

  return (
    <div className="mx-auto w-[85%] px-0 md:px-6 font-aeonik   mx-auto my-15 md:my20 ">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {faqs
          .slice()
          .sort((a: Faq, b: Faq) => a.order - b.order)
          .map((faq: Faq) => {
            const key = faq._id || faq.id;
            const isOpen = openId === key;

            return (
              <div key={key} className="rounded-2xl bg-gray-100 px-6 py-5">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : key || null)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}