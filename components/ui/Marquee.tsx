import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <div className="flex animate-marquee items-center">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center gap-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-current opacity-40" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
