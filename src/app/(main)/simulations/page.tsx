import SimulationsCard from "@/components/site/simulations-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { simulations } from "@/lib/site-data";
import { Terminal, Zap } from "lucide-react";

export const metadata = {
  title: "Simulations — invariant",
  description:
    "Interactive physics simulations built from scratch. Atwood machine, pendulum, projectile motion, and more.",
};

export default function SimulationsPage() {

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="mx-auto max-w-4xl px-4 pt-12 pb-8 text-center">
        <ScrollReveal delay={0.05} mode="mount">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 mb-5 text-[12px] text-muted-foreground">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono uppercase tracking-wider">lab_01 // models</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} mode="mount">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-black tracking-tight leading-[1.1] mb-5">
            Equations that{" "}
            <span className="text-muted-foreground">actually move</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15} mode="mount">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Every simulation is built entirely from scratch in the browser — no physics libraries. The goal is to prove that the math on paper actually works, and to make the behaviour visible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} mode="mount">
          <div className="mt-6 flex items-center justify-center gap-6 font-mono text-[12px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5 text-primary" />
              {simulations.length} total
            </span>
            <span className="text-border">·</span>
            <span>All from scratch</span>
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {simulations.map((sim, i) => (
            <ScrollReveal key={sim.id} delay={0.05 + i * 0.05} className="h-full">
              <SimulationsCard simulation={sim} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}