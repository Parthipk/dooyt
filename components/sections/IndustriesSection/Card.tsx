"use client";

import Image from "next/image";

type CardProps = {
  item: any;
  className: string;
  horizontal?: boolean;
};

const forceTextTop = ["it-saas", "education", "solar"];

const Card = ({ item, className, horizontal }: CardProps) => {
  const isTextTop =
    forceTextTop.includes(item.id) || item.id === "solar";

  return (
    <div
      className={`${className} bg-[#FFF6F170] p-4 border border-[#EFEFEF] rounded-lg`}
    >
      {!horizontal ? (
        isTextTop ? (
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-md">{item.description}</p>
            </div>

            <div className="h-[70%] flex items-end overflow-hidden rounded">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-between">
            <div className="h-[70%] flex items-end overflow-hidden rounded">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
        )
      ) : (
        <div className="flex gap-3 h-full items-center">
          <div className="w-1/2 h-full overflow-hidden rounded">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          <div className="w-1/2 flex flex-col gap-1 justify-center">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-md">{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;