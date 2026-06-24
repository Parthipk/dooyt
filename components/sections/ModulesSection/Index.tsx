"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { modules } from "./data";
import modulebg from "@/app/assets/background/modulebg.png";

import file from "@/app/assets/icons/file.png";
import layers from "@/app/assets/icons/layers.png";
import shopping from "@/app/assets/icons/shopping-cart.png";

import { File, Layers, ShoppingCart } from "lucide-react";

const iconMap: any = {
  file: { png: file, lucide: File },
  layers: { png: layers, lucide: Layers },
  "shopping-cart": { png: shopping, lucide: ShoppingCart },
};

export default function ModulesSection() {
  const [active, setActive] = useState(modules[0]);

  return (
    <section className="w-[85%] mt-5 bg-white font-aeonik mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-orange-500 text-sm">Modules</p>
        <h2 className="text-3xl font-semibold">Modules That Do More</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-10 max-w-5xl mx-auto overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center">
        {modules.map((mod) => {
          const isActive = active.id === mod.id;
          const Icon = iconMap[mod.icon]?.lucide;
          const png = iconMap[mod.icon]?.png;

          return (
            <button
              key={mod.id}
              onClick={() => setActive(mod)}
              className={`group flex items-center gap-2 px-4 py-2 min-w-[160px] md:w-[180px] cursor-pointer rounded-md border text-sm transition ${isActive
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-gray-700 border-white hover:border-orange-300"
                }`}
            >
              <span className="relative w-5 h-5 flex items-center justify-center">
                {!isActive && (
                  <Image
                    src={png}
                    alt={mod.name}
                    width={20}
                    height={20}
                    className="group-hover:opacity-0 transition"
                  />
                )}

                {Icon && (
                  <Icon
                    size={20}
                    className={`absolute transition ${isActive
                        ? "text-white"
                        : "opacity-0 group-hover:opacity-100 text-gray-600"
                      }`}
                  />
                )}
              </span>

              <span className="text-left">{mod.name}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mx-auto bg-orange-50 rounded-l-3xl flex flex-col md:flex-row items-center"> 
        <div className="w-full md:w-1/2 px-6 md:px-10 pt-6 md:pt-10">
          <Image
            src={modulebg}
            alt="module"
            className="w-full h-auto object-cover rounded-l-xl"
          />
        </div> 
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {active.name}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}