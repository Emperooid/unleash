"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function NewsletterForm({
  variant = "dark",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const dark = variant === "dark";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  if (done) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold",
          dark ? "bg-white/10 text-white" : "bg-green-50 text-green-700",
          className
        )}
      >
        <Check size={18} strokeWidth={2.5} />
        You&apos;re on the list — welcome to the movement.
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={cn("flex w-full flex-col gap-3 sm:flex-row", className)}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={cn(
          "w-full flex-1 rounded-full border px-5 py-3.5 text-sm outline-none transition-colors",
          dark
            ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-orange-400"
            : "border-ink/15 bg-white text-ink placeholder:text-ink/40 focus:border-orange-400"
        )}
      />
      <button
        type="submit"
        className={cn(
          "shrink-0 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors",
          dark
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-ink text-white hover:bg-orange-600"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
