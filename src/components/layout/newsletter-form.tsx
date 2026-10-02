"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "h-14 w-full rounded-full bg-white px-6 text-[0.9375rem] text-ink placeholder:text-ink-subtle " +
  "shadow-[inset_0_0_0_1px_rgb(0_31_82_/_0.06)] transition-shadow duration-200 " +
  "focus:outline-none focus:shadow-[inset_0_0_0_2px_var(--color-blue)]";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          firstName: data.get("firstName"),
          company: data.get("company"),
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message ?? "Something went wrong.");
      setStatus("success");
      setMessage(result.message ?? "You're on the list. Welcome to the Tennista story.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="newsletter-first-name" className="sr-only">
          First name
        </label>
        <input
          id="newsletter-first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="First Name"
          className={fieldClass}
        />
      </div>

      {/* Honeypot — real people leave this empty. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="newsletter-company">Company</label>
        <input id="newsletter-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" variant="blue" size="md" disabled={status === "submitting"}>
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>

        <AnimatePresence mode="wait">
          {status === "success" || status === "error" ? (
            <motion.p
              key={status}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              role="status"
              aria-live="polite"
              className={`text-sm font-medium ${status === "success" ? "text-blue-deep" : "text-red-700"}`}
            >
              {message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
