"use client";

import { useMemo, useState } from "react";
import { pricing } from "@/data/pricing";

const currencies = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

type Currency = keyof typeof currencies;

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [annual, setAnnual] = useState(false);

  const plans = useMemo(() => {
    const values = pricing.monthly[currency];

    return Object.entries(values).map(([name, price]) => ({
      name,
      price: annual ? Math.round(price * 12 * 0.8) : price,
    }));
  }, [currency, annual]);

  return (
    <section
    id="pricing"
     className="container py-16"
    >

      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[var(--secondary)]">
          Pricing
        </p>

        <h2 className="heading text-3xl md:text-4xl mt-4 mb-10 leading-tight">
          Simple Pricing.
          <br />
          Powerful Results.
        </h2>

      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">

        <select
          value={currency}
          onChange={(e) =>
            setCurrency(e.target.value as Currency)
          }
          className="border rounded-xl px-4 py-3"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <button
          onClick={() => setAnnual(!annual)}
          className="bg-[var(--primary)] rounded-xl px-6 py-3"
        >
          {annual ? "Annual Billing" : "Monthly Billing"}
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

      {plans.map((plan, index) => (

<div
  key={plan.name}
  className={`
    rounded-[32px]
    p-8
    border
    transition-all
    duration-300
    hover:-translate-y-2

    ${
      index === 1
        ? "bg-[var(--secondary)] text-white scale-105 shadow-2xl"
        : "bg-white"
    }
  `}
>

  {index === 1 && (
    <span className="inline-block mb-4 rounded-full bg-[var(--primary)] px-4 py-1 text-sm font-semibold text-black">
      MOST POPULAR
    </span>
  )}

  <h3 className="heading text-3xl mb-6">
    {plan.name}
  </h3>

  <div className="text-5xl font-bold mb-6">

    {currencies[currency]}
    {plan.price}

    <span className="text-lg font-normal">
      /{annual ? "year" : "month"}
    </span>

  </div>

  <ul className="space-y-5 mb-10">

    <li>✓ Unlimited AI Agents</li>
    <li>✓ Workflow Automation</li>
    <li>✓ Real-time Analytics</li>
    <li>✓ API Access</li>

  </ul>

  <button
    className={`
      w-full
      rounded-full
      py-4
      font-semibold

      ${
        index === 1
          ? "bg-[var(--primary)] text-black"
          : "bg-[var(--secondary)] text-white"
      }
    `}
  >
    Get Started
  </button>

</div>

))}

      </div>

    </section>
  );
}