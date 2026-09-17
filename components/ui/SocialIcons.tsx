import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 16, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 4c.4 2.2 2 3.8 4 4.2" />
    </svg>
  );
}

// Branded, full-color badges — each is a self-contained square/circle with
// its own background, unlike the outline icons above.

export function LinkedInBrandIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="9" fill="#0A66C2" />
      <path
        d="M12.9 16.9h4.2v13.4h-4.2V16.9Zm2.1-6.7a2.4 2.4 0 1 1 0 4.9 2.4 2.4 0 0 1 0-4.9Zm4.9 6.7h4v1.8h.06c.56-1.02 1.9-2.1 3.94-2.1 4.2 0 5 2.7 5 6.2v7.5h-4.2v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.6 1.7-2.6 3.5v6.7h-4.2V16.9Z"
        fill="#fff"
      />
    </svg>
  );
}

export function XBrandIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="9" fill="#0B0C0F" />
      <path
        d="M22.3 18.6 29 11h-2.2l-5.8 6.6L16.4 11h-6l6.9 10-6.9 8h2.2l6.1-7 5 7h6l-7.1-10.4Zm-2.2 2.5-.7-1L14 13.6h2.1l4.5 6.4.7 1 5.9 8.4h-2.1l-4.9-6.9Z"
        fill="#fff"
      />
    </svg>
  );
}

export function TikTokBrandIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#0B0C0F" />
      <path
        d="M24.5 10.5c.5 2.3 2 3.9 4.4 4.2v3.1c-1.6.1-3-.4-4.4-1.3v6.7c0 4.2-3.1 6.8-6.7 6.8-1.5 0-2.9-.4-4-1.3-1.8-1.4-2.7-3.7-2.3-6 .5-2.9 3-5 6-5 .4 0 .8 0 1.2.1v3.2a3 3 0 0 0-1.4-.2 3 3 0 1 0 2.3 4.9c.3-.4.5-.9.5-1.5V10.5h4.4Z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramBrandIcon({ size = 40 }: { size?: number }) {
  const gradientId = "instagram-gradient";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient
          id={gradientId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13 32) rotate(-55) scale(34)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect width="40" height="40" rx="9" fill={`url(#${gradientId})`} />
      <rect
        x="10.5"
        y="10.5"
        width="19"
        height="19"
        rx="6"
        stroke="#fff"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="5.2" stroke="#fff" strokeWidth="2" />
      <circle cx="26" cy="14" r="1.3" fill="#fff" />
    </svg>
  );
}
