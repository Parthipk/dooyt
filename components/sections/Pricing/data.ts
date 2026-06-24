export type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  currency: string;
  isPopular: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    tagline: "Great for small businesses.",
    monthlyPrice: 799,
    currency: "INR",
    isPopular: false,
    features: [
      "Core modules: Finance, HR, CRM",
      "Up to 10 users",
      "Standard reports & analytics",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro Plan",
    tagline: "For growing teams managing multiple operations.",
    monthlyPrice: 1499,
    currency: "INR",
    isPopular: true,
    features: [
      "Includes all Starter modules",
      "Adds Project Management, Sales & Inventory",
      "Advanced dashboards & analytics",
      "Custom dashboards",
      "Role based access control",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    tagline: "For large organizations that need full customization.",
    monthlyPrice: 2999,
    currency: "INR",
    isPopular: false,
    features: [
      "All ERP modules included",
      "API integrations & custom workflows",
      "Dedicated account manager",
      "On-premise or cloud deployment",
      "24/7 premium support",
      "Custom integration support",
      "Compliance tools",
    ],
  },
];