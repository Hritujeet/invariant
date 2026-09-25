import BentoGrid from "@/components/site/bento-grid";
import CTA from "@/components/site/CTA";
import Hero from "@/components/site/hero";
import CardContainer from "@/components/site/cards-container";
import PhysicsSection from "@/components/site/physics-section";
import TechSection from "@/components/site/tech-section";
import JosephineTeaser from "@/components/site/josephine-teaser";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 overflow-hidden">
      <Hero />
      <BentoGrid />
      <JosephineTeaser />
      <CardContainer type="Simulations" />
      <PhysicsSection />
      <CardContainer type="Derivations" />
      <CTA />
    </div>
  );
}
