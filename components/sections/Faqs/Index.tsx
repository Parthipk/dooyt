"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type Faq = {
  id: string;
  order: number;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    id: "f1",
    order: 1,
    question: "What is Dooyt?",
    answer:
      "Dooyt is an easy-to-use ERP software designed to help businesses manage their projects, clients, and tasks efficiently in one place.",
  },
  {
    id: "f2",
    order: 2,
    question: "Do you provide customer support?",
    answer:
      "Yes. Every plan includes support, with priority and 24/7 premium options on higher tiers.",
  },
  {
    id: "f3",
    order: 3,
    question: "Is my data safe with Dooyt?",
    answer:
      "Yes. Your data is encrypted in transit and at rest, protected with role-based access control and regular backups.",
  },
  {
    id: "f4",
    order: 4,
    question: "Can I change plans easily?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    id: "f5",
    order: 5,
    question: "Is Dooyt easy to use?",
    answer:
      "Dooyt is built for non-technical users with an intuitive, dashboard-driven interface.",
  },
  {
    id: "f6",
    order: 6,
    question: "Can I access Dooyt from my mobile phone?",
    answer: "Yes. Dooyt is available on the web and through our iOS and Android apps.",
  },
];

export default function Index() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="mx-auto w-[85%] px-6   font-aeonik">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {faqs
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="rounded-2xl bg-gray-100 px-6 py-5">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
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