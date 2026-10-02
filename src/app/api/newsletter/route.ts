import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter signup. Validation and bot-trapping live here already; swap the
 * marked block for the real ESP call (Mailchimp / Brevo / Resend audiences)
 * once credentials are available.
 */
export async function POST(request: Request) {
  let payload: { email?: unknown; firstName?: unknown; company?: unknown };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in — silently accept so the bot doesn't retry.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ message: "Thanks for subscribing." });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 422 });
  }

  // TODO: forward { email, firstName } to the email provider.

  return NextResponse.json({ message: "You're on the list. Welcome to the Tennista story." });
}
