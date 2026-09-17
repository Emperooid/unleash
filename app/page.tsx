import { Hero } from "@/components/sections/Hero";
import { UnleashStory } from "@/components/sections/UnleashStory";
import { CardScrollShowcase } from "@/components/sections/CardScrollShowcase";
import { HubExpressions } from "@/components/sections/HubExpressions";
import { ShopUnleash } from "@/components/sections/ShopUnleash";
import { Initiatives } from "@/components/sections/Initiatives";
import { QuickLinks } from "@/components/sections/QuickLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <UnleashStory />
      <div id="principles">
        <CardScrollShowcase />
      </div>
      <HubExpressions />
      <ShopUnleash />
      <Initiatives />
      <QuickLinks />
    </>
  );
}
