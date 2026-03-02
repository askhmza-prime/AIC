"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message submitted (Demo). Connect backend later.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-200"
    >
      <div>
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-center py-3 text-sm font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}
