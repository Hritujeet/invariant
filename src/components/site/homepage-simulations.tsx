import SimulationsCard from "@/components/site/simulations-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { simulations } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredSimulations = simulations.slice(0, 3);

export default function HomepageSimulations() {
  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuredSimulations.map((simulation, index) => (
          <ScrollReveal
            key={simulation.id}
            delay={0.05 + index * 0.05}
            className="h-full"
          >
            <SimulationsCard simulation={simulation} />
          </ScrollReveal>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-center">
        <Link
          href="/simulations"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          View all simulations
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </>
  );
}
