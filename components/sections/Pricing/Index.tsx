"use client";

import { useState } from "react";
import { BadgeCheck, Zap } from "lucide-react";
import { usePlans } from "@/hooks/usePlans";
import PricingShimmer from "./PricingShimmer";


type Feature = {
  text: string;
  highlighted?: boolean;
};

type PlanUI = {
  name: string;
  description: string;
  monthlyPrice: number;
  features: Feature[];
  icon?: boolean;
};

const ANNUAL_DISCOUNT = 0.15;
 
const toUIPlan = (plan: any): PlanUI => ({
  name: plan.name,
  description: plan.tagline,
  monthlyPrice: plan.monthlyPrice,
  features: (plan.features || []).map((f: string, i: number) => ({
    text: f,
    highlighted: i === 0 && plan.isPopular,
  })),
  icon: plan.isPopular,
});

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="mt-7 flex-1 space-y-3.5">
      {features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-2.5">
          <BadgeCheck
            className={`mt-0.5 h-5 w-5 shrink-0 ${feature.highlighted ? "text-white" : "text-gray-300"
              }`}
            fill={feature.highlighted ? "#f97316" : "none"}
            strokeWidth={1.5}
          />
          <span
            className={
              feature.highlighted
                ? "text-sm font-medium text-gray-900"
                : "text-sm text-gray-700"
            }
          >
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PlanHeader({
  plan,
  billing,
}: {
  plan: PlanUI;
  billing: "monthly" | "annual";
}) {
  const price =
    billing === "monthly"
      ? plan.monthlyPrice
      : Math.round(plan.monthlyPrice * (1 - ANNUAL_DISCOUNT));

  return (
    <>
      <h3 className="flex items-center gap-1.5 text-2xl font-semibold text-gray-900">
        {plan.name}
        {plan.icon && (
          <Zap className="h-5 w-5 text-orange-500" fill="#f97316" />
        )}
      </h3>

      <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-gray-900">₹</span>
        <span className="text-4xl font-bold">
          {price.toLocaleString("en-IN")}
        </span>
        <span className="ml-1 text-sm text-gray-600">/per user</span>
      </div>

      {billing === "annual" && (
        <p className="mt-1 text-xs text-gray-500">billed annually</p>
      )}
    </>
  );
}

function SelectButton() {
  return (
    <button
      type="button"
      className="mt-8 w-full rounded-2xl bg-gray-900 py-3.5 font-semibold text-white hover:bg-gray-800"
    >
      Select plan
    </button>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const { plans, loading } = usePlans("monthly");

  const uiPlans = plans.map(toUIPlan);


  if (loading || uiPlans.length < 3) {
    return <PricingShimmer />;
  }

  const [starter, pro, enterprise] = uiPlans;

  return (
    <section id="pricing">

    <div className="flex min-h-screen w-[85%] flex-col items-center mx-auto md:px-6  font-aeonik">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center">
        <div className="text-center mt-20">
          <p className="text-orange-500 text-sm">pricing</p>
          <h2 className="text-3xl font-semibold">
            Find the Right Plan for You
          </h2>
        </div>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center rounded-md bg-gray-200 p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={
              billing === "monthly"
                ? "rounded-md bg-white px-5 py-2 text-sm font-semibold shadow"
                : "px-5 py-2 text-sm text-gray-500"
            }
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annual")}
            className={
              billing === "annual"
                ? "rounded-md bg-white px-5 py-2 text-sm font-semibold shadow"
                : "px-5 py-2 text-sm text-gray-500"
            }
          >
            Annual
          </button>
        </div>

        <p className="text-orange-500 text-sm mt-5">
          -15% off on annual payments
        </p>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Starter */}
        <div className="flex flex-col rounded-[28px] border p-8">
          <PlanHeader plan={starter} billing={billing} />
          <FeatureList features={starter.features} />
          <SelectButton />
        </div>

        {/* Pro */}
        <div className="overflow-hidden rounded-[28px] bg-orange-500">
          <p className="pt-3 pb-2 text-center text-xs font-semibold text-white uppercase">
            Most popular plan
          </p>

          <div className="mx-3 mb-3 rounded-[22px] bg-orange-50 shadow-lg p-7">
            <PlanHeader plan={pro} billing={billing} />
            <FeatureList features={pro.features} />
            <SelectButton />
            <p className="mt-3 text-center text-sm text-gray-700">
              or contact sales
            </p>
          </div>
        </div>

        {/* Enterprise */}
        <div className="flex flex-col rounded-[28px] border p-8">
          <PlanHeader plan={enterprise} billing={billing} />
          <FeatureList features={enterprise.features} />
          <SelectButton />
        </div>
      </div>
    </div>
    </section>
  );
}