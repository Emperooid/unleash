import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 whitespace-nowrap";

const variants: Record<Variant, string> = {
  solid:
    "bg-orange-500 text-white hover:bg-orange-600 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(232,113,15,0.6)]",
  outline:
    "border border-ink/15 text-ink hover:border-ink/40 hover:-translate-y-0.5",
  "outline-light":
    "border border-white/30 text-white hover:bg-white hover:text-ink hover:-translate-y-0.5",
  ghost: "text-ink hover:text-orange-500",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function Button({
  href,
  variant = "solid",
  size = "md",
  icon,
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon}
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
