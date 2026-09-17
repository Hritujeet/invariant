import Link from "next/link";
import { ArrowUpRight, Cpu, Eye, Volume2, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "../ui/scroll-reveal";

const PILLARS = [
  { icon: Sparkles, label: "Hybrid inference", desc: "Local LLM for chat, cloud only for heavy tasks." },
  { icon: Eye, label: "Wake-word aware", desc: "Listens for \"Josephine\" via Picovoice Porcupine." },
  { icon: Volume2, label: "Offline voice", desc: "Warm, natural speech via piper-tts — no internet." },
  { icon: Cpu, label: "RAM-conscious", desc: "Auto-unloads the model after 5 min of inactivity." },
];

export default function JosephineTeaser() {
  return (
    <section className="relative mx-auto max-w-6xl py-4 px-4 sm:px-6">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="flex flex-col gap-8 rounded-2xl border border-border/60 bg-muted/20 p-8 sm:p-10 backdrop-blur-sm">
        {/* Header row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <ScrollReveal delay={0.1} className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Current project
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Project{" "}
              <span className="text-primary">
                JOSEPHINE
              </span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A native Python companion for Windows — hybrid local&nbsp;/&nbsp;cloud inference,
              a frosted-glass HUD, wake-word detection, and an offline voice.
              Built to advise, not just to execute.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-2 shrink-0 self-start sm:mt-0">
            <Link
              href="/josephine"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-1"
              )}
            >
              Full blueprint
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, label, desc }, index) => (
            <ScrollReveal key={label} delay={0.3 + index * 0.1}>
              <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/50 p-4 hover:scale-[1.05] duration-300">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
