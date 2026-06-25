"use client";

import Card from "./Card";

export default function DesktopIndustries({ industries }: any) {
  const cards = [
    { i: 0, className: "col-span-3 row-span-3 col-start-1 row-start-3" },
    { i: 1, className: "col-span-4 row-span-4 col-start-4 row-start-1" },
    { i: 2, className: "col-span-3 row-span-3 col-start-8 row-start-3" },
    { i: 3, className: "col-span-3 row-span-3 col-start-1 row-start-6" },
    { i: 4, className: "col-span-4 row-span-4 col-start-4 row-start-5" },
    { i: 5, className: "col-span-3 row-span-3 col-start-8 row-start-6" },
  ];

  const bottomCards = [
    { i: 6, className: "col-span-5 row-span-2 col-start-1 row-start-9 flex gap-3" },
    { i: 7, className: "col-span-5 row-span-2 col-start-6 row-start-9 flex gap-3" },
  ];

  return (
    <div className="hidden lg:grid w-[85%] grid-cols-10 grid-rows-10 gap-2 mx-auto">
      {cards.map((c) => (
        <Card key={c.i} {...c} />
      ))}

      {bottomCards.map((c) => (
        <Card key={c.i} {...c} horizontal />
      ))}
    </div>
  );
}