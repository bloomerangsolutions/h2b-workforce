import { NextResponse } from "next/server";

const isEmail = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isEmail(body.email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const payload = {
    type: "newsletter",
    received_at: new Date().toISOString(),
    email: body.email,
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
    }
  } else {
    console.log("[newsletter signup]", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
