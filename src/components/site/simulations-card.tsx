import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import img from "@/images/physics-handwritten-bg-1.jpeg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const SimulationsCard = () => {
  return (
    <Card className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
      <Link href="/simulations" className="flex flex-col h-full">
        <CardHeader>
          <div className="relative aspect-video rounded-lg w-full overflow-hidden bg-muted">
            <Image
              src={img}
              alt="Atwood machine simulation"
              fill
              className="object-cover opacity-80 rounded-lg transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase bg-background/80 backdrop-blur-md border border-border/60 px-2.5 py-1 rounded-full text-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/60 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
              </span>
              sim_01 // atwood
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <CardTitle className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
              Simple Atwood System
            </CardTitle>
            <CardDescription className="mt-1 text-xs leading-relaxed">
              Two masses, one pulley, one string. Run it and see what the constraint actually does.
            </CardDescription>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-3 font-mono text-[11px] text-muted-foreground">
            <span>NLM</span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
              Run
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default SimulationsCard;
