"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    company: "",
    industry: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const submit = async () => {
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ company: "", industry: "", email: "", phone: "", message: "" });
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-on-tertiary-container/30 bg-on-tertiary-container/5 p-10 text-center">
        <h2 className="mb-4 font-serif text-h2 text-on-tertiary-container">Message received.</h2>
        <p className="mb-6 font-body text-navy/70">
          We&apos;ll respond within one business day. Check your email for confirmation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-body text-copper underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-navy/12 bg-white p-10 shadow-ambient">
      <h2 className="mb-6 font-serif text-h2 text-navy">Send us a message</h2>
      <div className="space-y-6">
        <Field
          label="Company name"
          placeholder="Your business"
          value={form.company}
          onChange={update("company")}
        />
        <Field
          label="Industry"
          placeholder="Landscaping, Roofing, etc."
          value={form.industry}
          onChange={update("industry")}
        />
        <Field
          label="Email"
          placeholder="you@company.com"
          type="email"
          value={form.email}
          onChange={update("email")}
        />
        <Field
          label="Phone"
          placeholder="(555) 555-5555"
          type="tel"
          value={form.phone}
          onChange={update("phone")}
        />
        <div>
          <label className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
            What do you need?
          </label>
          <textarea
            rows={5}
            placeholder="Brief description of your seasonal labor needs..."
            value={form.message}
            onChange={update("message")}
            className="w-full rounded border border-navy/12 bg-paper px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-copper"
          />
        </div>
        {error ? (
          <p className="rounded border border-error/30 bg-error/5 px-4 py-2 text-sm text-error">
            {error}
          </p>
        ) : null}
        <button
          type="button"
          onClick={submit}
          disabled={status === "submitting"}
          className="w-full rounded bg-copper py-4 font-body font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className="text-xs text-on-surface-variant">
          This form does not create an attorney-client relationship. We respond within one business
          day.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-navy/12 bg-paper px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-copper"
      />
    </div>
  );
}
