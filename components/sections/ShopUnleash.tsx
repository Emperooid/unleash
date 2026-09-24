import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ShopUnleash() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <Container>
        <Reveal className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[1.75rem] sm:aspect-[16/10]">
          <Image
            src="/hub/shop-unleash.png"
            alt="UNLEASH merchandise — apparel, books and accessories"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">
              Shop UNLEASH
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/85 sm:mt-5 sm:text-lg">
              Wear the principles. Carry the message. Take a little piece of
              UNLEASH wherever you go.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:mt-9">
              <Button
                href="/shop"
                size="lg"
                className="!bg-[#FBF3E7] !text-ink hover:!bg-white"
              >
                Shop now
              </Button>
              <Button href="/join" size="lg">
                Join the hub
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
