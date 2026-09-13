import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function DerivationsCard() {
  return (
    <Link href="/derivations" className="group block w-[75vw] mx-auto">
      <Card className="transition-all duration-300 w-full bg-card/50 hover:border-primary/50 hover:-translate-y-0.5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            Lagrangian Mechanics & Atwood System
          </CardTitle>
          <CardDescription className="line-clamp-2">
            Step-by-step derivation of generalized coordinates, Euler-Lagrange equations, and string tension.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="rounded-lg border border-border/50 bg-muted/30 p-3 font-mono text-xs text-muted-foreground">
            <p className="text-[10px] text-muted-foreground/70">
              m₁g − T = m₁a · T − m₂g = m₂a
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between font-mono text-[11px] text-muted-foreground bg-card/75">
          <span>4 pages · Handwritten</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-primary">
            Read notes
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default DerivationsCard;

