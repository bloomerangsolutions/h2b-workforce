import { NextResponse } from "next/server";

type ContactBody = {
  company?: string;
  industry?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const isEmail = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { company, industry, email, phone, message } = body;

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!company || typeof company !== "string" || company.length < 2) {
    return NextResponse.json({ error: "Company name required" }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 });
  }

  const payload = {
    type: "contact",
    received_at: new Date().toISOString(),
    company,
    industry: industry || null,
    email,
    phone: phone || null,
    message,
  };

  const webhook = process.env.FORM_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Webhook forward failed:", err);
      // Don't fail the request — log and continue
    }
  } else {
    // No webhook configured — log so it surfaces in Vercel runtime logs
    console.log("[contact form submission]", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
