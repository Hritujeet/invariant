import HeavyPulleyDerivation from "@/components/derivations/heavy-pulley";
import InclinedPlaneDerivation from "@/components/derivations/inclined-plane-crtm";
import GroundToGroundProjectileDerivation from "@/components/derivations/ground-to-ground-projectile";
import ParticleCollisionDerivation from "@/components/derivations/particle-based-collision";
import { derivations } from "@/lib/site-data";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const derivationComponents = {
  "inclined-plane-crtm": InclinedPlaneDerivation,
  "ground-to-ground-projectile": GroundToGroundProjectileDerivation,
  "heavy-pulley": HeavyPulleyDerivation,
  "particle-based-collision": ParticleCollisionDerivation,
};

function isDerivationSlug(slug: string): slug is keyof typeof derivationComponents {
  return Object.hasOwn(derivationComponents, slug);
}

export function generateStaticParams() {
  return Object.keys(derivationComponents).map((slug) => ({ slug }));
}

export default async function DerivationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const derivation = derivations.find((item) => item.slug === slug);
  if (!derivation || !isDerivationSlug(slug)) notFound();
  const Derivation = derivationComponents[slug];

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-10">
      <Link
        href="/derivations"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        All derivations
      </Link>
      <header className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs text-muted-foreground">
          <BookOpen className="size-3.5 text-primary" />
          <span className="font-mono uppercase tracking-wider">{derivation.topic}</span>
        </div>
        <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
          {derivation.title}
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          {derivation.description}
        </p>
      </header>
      <section className="rounded-2xl border border-border bg-card/50 p-5 sm:p-8">
        <Derivation />
      </section>
      {derivation.simulationSlug && (
        <Link
          href={`/simulations/${derivation.simulationSlug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          Run the simulation
          <ArrowUpRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
