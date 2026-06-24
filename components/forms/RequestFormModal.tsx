"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import RequestForm from "./RequestForm";

type FormData = {
  fullName: string;
  email: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  buttonText?: string;
};

export default function RequestFormModal({
  open,
  onClose,
  buttonText,
}: Props) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/request`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit request");
      }

      toast.success("Request submitted successfully 🚀");

      onClose();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center font-aeonik"
      onClick={onClose}
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative z-10 w-[85%] md:w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-semibold">Request Form</h2>

        <RequestForm
          onSubmit={handleSubmit}
          loading={loading}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}