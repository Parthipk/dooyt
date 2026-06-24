import Image from "next/image";

import chart from "@/app/assets/advantage/chart.png";
import clock from "@/app/assets/advantage/clock.png";
import home from "@/app/assets/advantage/home.png";
import laptop from "@/app/assets/advantage/laptop.png";
import people from "@/app/assets/advantage/people.png";
import rocket from "@/app/assets/advantage/rocket.png";
import walking from "@/app/assets/advantage/walking.png";

type Item = {
  label: string;
  icon: any;
};

export default function Index() {
  const items: Item[] = [
    { label: "Grows with you", icon: rocket },
    { label: "Save time", icon: clock },
    { label: "1-month free trial", icon: chart },
    { label: "Work on the go", icon: walking },
    { label: "Better Teamwork & Collaboration", icon: people },
    { label: "Stay compliant", icon: home },
    { label: "Keep Finances on Track", icon: laptop },
  ];

  return (
    <div className="w-[85%] flex flex-col items-center gap-4 py-10 mx-auto">
      <p className="text-sm text-secondary font-medium">
        Experience the Dooyt Advantage
      </p>
      <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-3 w-full md:w-[70%] overflow-x-auto md:overflow-visible px-2 scrollbar-hide">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 md:flex-shrink flex items-center gap-2 px-4 py-2 rounded-full
            bg-gradient-to-b from-[#FEF0E8] to-[#FAFAF7]
            text-sm text-orange-700 shadow-sm"
          >
            <Image src={item.icon} alt={item.label} width={16} height={16} />
            <span className="text-primary whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}