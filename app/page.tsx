import { Hero } from "@/components/sections/Hero";
import { WhatIsUnleash } from "@/components/sections/WhatIsUnleash";
import { BookPromo } from "@/components/sections/BookPromo";
import { Testimonials } from "@/components/sections/Testimonials";
import { ReadersProgramme } from "@/components/sections/ReadersProgramme";
import { BookLaunchVideo } from "@/components/sections/BookLaunchVideo";
import { ChallengeYourself } from "@/components/sections/ChallengeYourself";
import { UnleashConnect } from "@/components/sections/UnleashConnect";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsUnleash />
      <BookPromo />
      <Testimonials />
      <ReadersProgramme />
      <BookLaunchVideo />
      <ChallengeYourself />
      <UnleashConnect />
    </>
  );
}
