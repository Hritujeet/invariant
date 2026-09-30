import { DerivationsCard } from "@/components/site/derivations-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { derivations } from "@/lib/site-data";
import { BookOpen, PenLine } from "lucide-react";

export const metadata = {
  title: "Derivations — invariant",
  description:
    "Handwritten derivations from first principles. Lagrangian mechanics, Noether's theorem, orbital motion, and more.",
};

export default function DerivationsPage() {

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="mx-auto max-w-4xl px-4 pt-12 pb-8 text-center">
        <ScrollReveal delay={0.05} mode="mount">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 mb-5 text-[12px] text-muted-foreground">
            <PenLine className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono uppercase tracking-wider">lab_02 // notebook</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} mode="mount">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-black tracking-tight leading-[1.1] mb-5">
            Derivations from{" "}
            <span className="text-muted-foreground">first principles</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15} mode="mount">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            I derive solutions and expressions from scratch — generalized coordinates, variational calculus, and analytical mechanics. Everything is handwritten in a notebook, then scanned and annotated here.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} mode="mount">
          <div className="mt-6 flex items-center justify-center gap-6 font-mono text-[12px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-3.5 text-primary" />
              {derivations.length} total
            </span>
            <span className="text-border">·</span>
            <span>All handwritten</span>
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {derivations.map((d, i) => (
            <ScrollReveal key={d.id} delay={0.05 + i * 0.04} className="h-full">
              <DerivationsCard derivation={d} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}