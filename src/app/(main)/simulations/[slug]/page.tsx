import Atwood from "@/components/simulations/atwood";
import HeavyPulleySimulation from "@/components/simulations/heavy-pulley";
import InclinedPlaneSimulation from "@/components/simulations/inclined-plane";
import GroundToGroundProjectileSimulation from "@/components/simulations/ground-to-ground-projectile";
import ParticleCollisionSimulation from "@/components/simulations/particle-collision";
import { simulations } from "@/lib/site-data";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const simulationComponents = {
  atwood: Atwood,
  "inclined-plane": InclinedPlaneSimulation,
  "ground-to-ground-projectile": GroundToGroundProjectileSimulation,
  "heavy-pulley": HeavyPulleySimulation,
  "particle-collision": ParticleCollisionSimulation,
};

function isSimulationSlug(slug: string): slug is keyof typeof simulationComponents {
  return Object.hasOwn(simulationComponents, slug);
}

export function generateStaticParams() {
  return Object.keys(simulationComponents).map((slug) => ({ slug }));
}

export default async function SimulationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const simulation = simulations.find((item) => item.slug === slug);
  if (!simulation || !isSimulationSlug(slug)) notFound();
  const Simulation = simulationComponents[slug];

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-4 py-10">
      <Link
        href="/simulations"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        All simulations
      </Link>
      <header className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs text-muted-foreground">
          <Terminal className="size-3.5 text-primary" />
          <span className="font-mono uppercase tracking-wider">{simulation.label}</span>
        </div>
        <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
          {simulation.title}
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          {simulation.description}
        </p>
      </header>
      <section className="rounded-2xl border border-border bg-card/50 p-4 sm:p-6">
        <Simulation />
      </section>
    </div>
  );
}
