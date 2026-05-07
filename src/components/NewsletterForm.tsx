"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async () => {
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Network error.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded bg-white/10 p-6 text-white">
        <p className="font-body font-bold">You&apos;re subscribed.</p>
        <p className="text-sm opacity-90">Watch for our next dispatch.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="Work email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-[300px] rounded border border-white/20 bg-white/10 px-6 py-4 placeholder:text-white/60 transition-all focus:bg-white focus:text-navy focus:outline-none"
        />
        <button
          type="button"
          onClick={submit}
          disabled={status === "submitting" || !email}
          className="rounded bg-navy px-8 py-4 font-bold text-white transition-all hover:bg-navy/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "..." : "Subscribe"}
        </button>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-white/90">{error}</p>
      ) : (
        <p className="mt-4 text-xs opacity-70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      )}
    </div>
  );
}
