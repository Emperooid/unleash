"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/site";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-ink/60 ring-1 ring-ink/10 hover:text-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <motion.div key={post.slug} variants={staggerItem} className="h-full">
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,15,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                  {post.category}
                </span>
                <span className="text-xs text-ink/45">{post.readTime}</span>
              </div>
              <p className="mt-5 font-display text-xl font-bold leading-snug text-ink">
                {post.title}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-5">
                <span className="text-xs text-ink/45">
                  {formatDate(post.date)}
                </span>
                <ArrowRight
                  size={16}
                  className="text-ink/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-600"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  );
}
