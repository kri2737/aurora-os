"use client";

import Image from "next/image";
import { useState } from "react";
import { features } from "@/data/features";

export default function BentoFeatures() {
  const [active, setActive] = useState(0);

  return (
    <section
  id="features"
  className="container py-16"
>

      <div className="text-center mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-[var(--secondary)]">
          Autonomous Departments
        </p>

        <h2 className="heading text-3xl md:text-4xl mt-4 leading-tight">
          Every Department.
          <br />
          Powered by Intelligence.
        </h2>

      </div>

      <div className="hidden lg:grid grid-cols-4 auto-rows-[220px] gap-6">

        {features.map((feature, index) => (

          <div
            key={feature.id}
            onMouseEnter={() => setActive(index)}
            className={`
              rounded-[32px]
              border
              p-10
              cursor-pointer
              transition-all
              duration-300
              shadow-lg

              ${
                feature.size === "large"
                  ? "col-span-2 row-span-2"
                  : feature.size === "wide"
                  ? "col-span-2"
                  : ""
              }

              ${
                active === index
                  ? "bg-[var(--secondary)] text-white shadow-xl scale-[1.02]"
                  : "bg-white hover:-translate-y-2"
              }
            `}
          >

             <div className="w-14 h-14 rounded-xl bg-[var(--primary)] flex items-center justify-center mb-5">

              <Image
                src={feature.icon}
                alt={feature.title}
                width={28}
                height={28}
              />

            </div>

            <h3 className="heading text-2xl font-bold mb-4">
            {feature.title}
              </h3>

            <p className="text-base leading-7 opacity-80">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}