import Image from "next/image";
import { cn } from "@/lib/cn";

type Book3DSize = "xs" | "sm" | "md" | "lg";

type Book3DProps = {
  size?: Book3DSize;
  coverSrc?: string;
  backSrc?: string;
  spineSrc?: string;
  pageSrc?: string;
  title?: string;
  tagline?: string;
  speed?: number;
  className?: string;
};

const DIMENSIONS: Record<Book3DSize, { w: number; h: number; d: number }> = {
  xs: { w: 26, h: 34, d: 6 },
  sm: { w: 64, h: 84, d: 14 },
  md: { w: 190, h: 250, d: 32 },
  lg: { w: 300, h: 396, d: 48 },
};

export function Book3D({
  size = "lg",
  coverSrc = "/book/front.jpg",
  backSrc = "/book/back.jpg",
  spineSrc,
  pageSrc,
  title = "UNLEASH",
  tagline = "The blueprint for a life that attracts uncommon opportunities.",
  speed = 14,
  className,
}: Book3DProps) {
  const { w, h, d } = DIMENSIONS[size];
  const showTitle = size !== "xs";
  const showCopy = size === "md" || size === "lg";
  const showSpineText = size !== "xs";

  return (
    <div
      className={cn("group/book shrink-0 [perspective:1600px]", className)}
      style={{ width: w, height: h }}
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d] animate-book-spin motion-reduce:animate-none group-hover/book:[animation-play-state:paused]"
        style={{ "--book-speed": `${speed}s` } as React.CSSProperties}
      >
        {/* front cover */}
        <div
          className="absolute overflow-hidden rounded-[3px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
          style={{
            width: w,
            height: h,
            transform: `translateZ(${d / 2}px)`,
          }}
        >
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={`${title} book cover`}
              width={w}
              height={h}
              className="h-full w-full object-cover"
              draggable={false}
              priority={size === "lg"}
            />
          ) : (
            <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-orange-500 via-orange-600 to-ink p-[8%]">
              {showCopy && (
                <span className="self-start rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                  Bestseller
                </span>
              )}
              {!showTitle && (
                <span className="m-auto font-display text-xs font-bold text-white">
                  U
                </span>
              )}
              {showTitle && (
                <div>
                  <p
                    className="font-display font-bold leading-[0.95] text-white"
                    style={{ fontSize: size === "lg" ? "1.9rem" : size === "md" ? "1.1rem" : "0.6rem" }}
                  >
                    {title}
                  </p>
                  {showCopy && (
                    <p className="mt-2 text-[11px] leading-relaxed text-white/70">
                      {tagline}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/25"
            aria-hidden
          />
        </div>

        {/* back cover */}
        <div
          className="absolute overflow-hidden rounded-[3px] bg-ink"
          style={{
            width: w,
            height: h,
            transform: `translateZ(-${d / 2}px) rotateY(180deg)`,
          }}
        >
          {backSrc && (
            <Image
              src={backSrc}
              alt={`${title} back cover`}
              width={w}
              height={h}
              className="h-full w-full object-cover"
              draggable={false}
            />
          )}
        </div>

        {/* spine */}
        <div
          className="absolute flex items-center justify-center overflow-hidden bg-ink"
          style={{
            width: d,
            height: h,
            left: (w - d) / 2,
            transform: `rotateY(-90deg) translateZ(${w / 2}px)`,
          }}
        >
          {spineSrc ? (
            <Image
              src={spineSrc}
              alt=""
              width={d}
              height={h}
              className="h-full w-full object-cover"
              draggable={false}
              aria-hidden
            />
          ) : (
            showSpineText && (
              <p
                className="whitespace-nowrap font-semibold uppercase tracking-[0.3em] text-orange-400"
                style={{
                  writingMode: "vertical-rl",
                  fontSize: size === "lg" ? "10px" : size === "md" ? "8px" : "6px",
                }}
              >
                {title}
              </p>
            )
          )}
        </div>

        {/* page edge (aged paper until real photo is supplied) */}
        <div
          className="absolute"
          style={{
            width: d,
            height: h,
            left: (w - d) / 2,
            transform: `rotateY(90deg) translateZ(${w / 2}px)`,
          }}
        >
          {pageSrc ? (
            <Image
              src={pageSrc}
              alt=""
              width={d}
              height={h}
              className="h-full w-full object-cover"
              draggable={false}
              aria-hidden
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(to right, #a9764c, #c99a63 45%, #8a6238)",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(60,38,18,0.22) 0px, rgba(60,38,18,0.22) 1px, transparent 1px, transparent 3px), linear-gradient(to right, #a9764c, #c99a63 45%, #8a6238)",
              }}
            />
          )}
        </div>

        {/* top edge */}
        <div
          className="absolute"
          style={{
            width: w,
            height: d,
            top: (h - d) / 2,
            background: "linear-gradient(to bottom, #d1ab7a, #a9764c)",
            transform: `rotateX(90deg) translateZ(${h / 2}px)`,
          }}
        />

        {/* bottom edge */}
        <div
          className="absolute"
          style={{
            width: w,
            height: d,
            top: (h - d) / 2,
            background: "linear-gradient(to bottom, #7a5230, #563c22)",
            transform: `rotateX(-90deg) translateZ(${h / 2}px)`,
          }}
        />
      </div>
    </div>
  );
}
