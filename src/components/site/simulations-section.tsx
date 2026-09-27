import { ScrollReveal } from "../ui/scroll-reveal"
import { Cpu, Terminal } from "lucide-react"

export function SimulationsSection() {
  return (
    <section className="mx-auto container px-4 sm:px-6 flex flex-col items-center">
      <div className="max-w-3xl text-center flex flex-col items-center">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 mb-6 text-[13px] text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono uppercase tracking-wider">Interactive Web Engines</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6">
            Where Code meets <span className="text-muted-foreground">Physics.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            These interactive simulations bridge the gap between static algebra on a page and dynamic motion on a screen. Every engine is built entirely from scratch to prove that the fundamental math actually works.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
