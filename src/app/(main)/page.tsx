import BentoGrid from "@/components/site/bento-grid";
import CTA from "@/components/site/CTA";
import Hero from "@/components/site/hero";
import HomeCardsContainer from "@/components/site/home-cards-container";
import PhysicsSection from "@/components/site/physics-section";
import TechSection from "@/components/site/tech-section";

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <Hero />
      <BentoGrid />
      <HomeCardsContainer type="Simulations" />
      <PhysicsSection />
      <HomeCardsContainer type="Derivations" />
      <TechSection />
      <HomeCardsContainer type="Tech" />
      <HomeCardsContainer type="Blogs" />
      <CTA />
    </section>
  );
}
