import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { Derivation } from "@/lib/site-data";
import { ArrowUpRight, FileText, Zap } from "lucide-react";
import Link from "next/link";

export function DerivationsCard({ derivation }: { derivation: Derivation }) {
  const isDigital = "isDigital" in derivation && derivation.isDigital;

  return (
    <Link
      href={`/derivations/${derivation.slug}`}
      className="group block h-full"
    >
      <Card className="flex flex-col h-full transition-all duration-300 bg-card/50 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {derivation.topic}
                </span>
                {derivation.simulationSlug && (
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 gap-1">
                    <Zap className="size-2.5" />
                    Simulation available
                  </Badge>
                )}
              </div>
              <CardTitle className="text-base font-semibold leading-snug">
                {derivation.title}
              </CardTitle>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <CardDescription className="line-clamp-2 text-sm">
            {derivation.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-3 flex-1">
          <div className="rounded-lg border border-border/50 bg-muted/30 px-3 py-2 font-mono text-xs text-muted-foreground overflow-x-auto">
            <span className="text-[10px] text-primary/60 mr-2">expr.</span>
            {derivation.expressionDisplay}
          </div>
        </CardContent>

        <CardFooter className="mt-auto flex items-center justify-between font-mono text-[11px] text-muted-foreground pt-0">
          <span className="flex items-center gap-1.5">
            <FileText className="size-3" />
            {derivation.pages} {isDigital ? "steps · Digital" : "pages · Handwritten"}
          </span>
          <span className="inline-flex items-center gap-1 transition-colors group-hover:text-primary">
            Read notes
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default DerivationsCard;
