import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Initiatives() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <h2 className="font-display text-4xl font-bold leading-none text-ink sm:text-6xl">
            Initiatives
          </h2>
          <p className="max-w-md text-base text-ink/70 sm:text-lg">
            Ideas become meaningful when they move beyond conversation.
            Explore the initiatives turning UNLEASH principles into action.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] sm:mt-14 sm:aspect-[16/9]"
        >
          <Image
            src="/hub/initiatives-team.jpg"
            alt="The UNLEASH team"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-12">
            <Button
              href="/initiatives"
              size="lg"
              className="!bg-[#1FA060] hover:!bg-[#188a51]"
            >
              Learn more
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
