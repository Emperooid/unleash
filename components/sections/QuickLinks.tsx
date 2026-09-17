import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const QUICK_LINKS = [
  { label: "UNLEASH Play", href: "/games" },
  { label: "UNLEASH Connect", href: "/connect" },
  { label: "UNLEASH Index", href: "/index-score" },
  { label: "Buy UNLEASH", href: "/shop" },
  { label: "Join the Hub", href: "/join" },
];

export function QuickLinks() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.75rem]">
          <div className="absolute inset-0">
            <Image
              src="/hub/quicklinks-balloons.png"
              alt="UNLEASH community looking up at balloons carrying the principles"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
            <div>
              <h2 className="font-display text-4xl font-bold leading-none text-white sm:text-6xl">
                Quick Links
              </h2>
              <p className="mt-4 max-w-sm text-base text-white/85 sm:text-lg">
                Everything you need to stay connected, keep learning and find
                your way around the UNLEASH Hub.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-[#FBE3A8] px-6 py-4 shadow-[0_12px_24px_-16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-7 sm:py-5"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {link.label}
                  </span>
                  <span className="shrink-0 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-orange-600">
                    Tap
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
