"use client";

import { useState } from "react";

type Props = {
  onSubmit: (data: {
    fullName: string;
    email: string;
    message: string;
  }) => void;
  loading: boolean;
  buttonText?: string;
};

export default function ContactForm({
  onSubmit,
  loading,
  buttonText,
}: Props) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        className="border rounded-md px-4 py-2 outline-none"
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border rounded-md px-4 py-2 outline-none"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="border rounded-md px-4 py-2 outline-none min-h-[120px]"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-orange text-white py-2 rounded-md hover:opacity-90 transition"
      >
        {loading ? "Sending..." : buttonText || "Send Message"}
      </button>
    </form>
  );
}