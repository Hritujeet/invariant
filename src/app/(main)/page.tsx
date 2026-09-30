import BentoGrid from "@/components/site/bento-grid";
import CTA from "@/components/site/CTA";
import Hero from "@/components/site/hero";
import CardContainer from "@/components/site/cards-container";
import PhysicsSection from "@/components/site/physics-section";

import { SimulationsSection } from "@/components/site/simulations-section";
import { AboutSection } from "@/components/site/about-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 overflow-hidden">
      <Hero />
      <BentoGrid />

      
      <div className="mt-8 md:mt-12">
        <SimulationsSection />
        <CardContainer type="Simulations" />
      </div>

      <PhysicsSection />
      <CardContainer type="Derivations" />
      
      <AboutSection />
      
      <CTA />
    </div>
  );
}
