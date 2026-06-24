"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const usePlans = (type: "monthly" | "annual") => {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_URL}/plans?type=${type}`
        );

        const data = await res.json();

        setPlans(data?.data || []);
      } catch (err) {
        console.log(err);
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [type]);

  return { plans, loading };
};