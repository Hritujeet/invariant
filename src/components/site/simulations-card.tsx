import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Simulation } from "@/lib/site-data";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

const SimulationsCard = ({ simulation }: { simulation: Simulation }) => {
  return (
    <Card
      className="group relative h-full bg-card/50 flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex flex-col h-full">
        {/* Visual header */}
        <CardHeader className="pb-0">
          <div className="relative aspect-[16/7] rounded-lg w-full overflow-hidden bg-muted/60 border border-border/40 flex items-center justify-center">
            {/* Grid background */}
            <svg
              className="absolute inset-0 h-full w-full"
              width="100%"
              height="100%"
              fill="none"
            >
              <defs>
                <pattern
                  id={`sim-grid-${simulation.id}`}
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-muted-foreground/20" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#sim-grid-${simulation.id})`} />
            </svg>

            {/* Center label */}
            <div className="relative z-10 text-center">
              <p className="font-mono text-3xl font-black text-muted-foreground/20 select-none tracking-tighter">
                {simulation.topic.split("·")[0].trim()}
              </p>
            </div>

            {/* Label pill */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase bg-background/80 backdrop-blur-md border border-border/60 px-2.5 py-1 rounded-full text-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/60 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
              </span>
              {simulation.label}
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <CardTitle className="text-base font-semibold tracking-tight">
                {simulation.title}
              </CardTitle>
            </div>
            <CardDescription className="text-xs leading-relaxed">
              {simulation.description}
            </CardDescription>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-3 font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              {simulation.derivationSlug && (
                <span className="inline-flex items-center gap-1 text-primary/70">
                  <BookOpen className="size-3" />
                  Derivation linked
                </span>
              )}
              {!simulation.derivationSlug && simulation.topic}
            </span>
            <Link
              href={`/simulations/${simulation.slug}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary"
            >
              Run
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default SimulationsCard;
