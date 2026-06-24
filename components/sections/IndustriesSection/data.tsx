import solar from "@/app/assets/Industry/solar.png";
import Ecommerce from "@/app/assets/Industry/E-commerce.jpg";
import Education from "@/app/assets/Industry/Education.png";
import digitalmarketing from "@/app/assets/Industry/digital marketing.png";
import itandsales from "@/app/assets/Industry/it and sales.png";
import Construction from "@/app/assets/Industry/Construction.png";

import { StaticImageData } from "next/image";

export interface Industry {
    id: string;
    name: string;
    description: string;
    image: StaticImageData;
}

export const industries: Industry[] = [
    {
        id: "solar",
        name: "Solar",
        description:
            "Customizable ERP that simplifies daily solar operations with better control, real-time insights, and faster, risk-free workflows.",
        image: solar,
    },
    {
        id: "it-saas",
        name: "IT and SaaS",
        description:
            "Scalable ERP for IT and SaaS to manage projects, resources, and optimize financial performance in real time. Empowering teams to work faster, smarter, and more efficiently.",
        image: itandsales,
    },
    {
        id: "construction",
        name: "Construction",
        description:
            "Reduce costs, improve efficiency, and ensure projects are completed on time.",
        image: Construction,
    },
    {
        id: "education",
        name: "Education",
        description:
            "Automate administrative processes for preschools, schools, colleges, and coaching institutes.",
        image: Education,
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        description:
            "Integrate every aspect of the business on a single database for smooth operations.",
        image: solar,
    },
    {
        id: "ecommerce",
        name: "E-commerce",
        description:
            "Sync inventory, orders, and customer data for smooth business management.",
        image: Ecommerce,
    },
    {
        id: "logistics",
        name: "Logistics",
        description:
            "Automate logistics processes, control costs, and ensure smooth operations.",
        image: digitalmarketing,
    },
    {
        id: "digital-marketing",
        name: "Digital Marketing",
        description:
            "Simplify daily tasks, improve client service, and boost profitability.",
        image: digitalmarketing,
    },
];