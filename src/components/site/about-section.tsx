import { ScrollReveal } from "../ui/scroll-reveal"
import { Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section className="relative mx-auto container px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/about-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center relative">

        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 mb-4 text-[12px] text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono uppercase tracking-wider">About Me</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-center mb-6">
            Building software, <span className="text-muted-foreground">decoding reality.</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3 text-base leading-relaxed text-muted-foreground md:text-center">
          <ScrollReveal delay={0.2}>
            <p>
              I began writing Python back in middle school, eventually trading simple scripts for full-stack architecture. I've built interactive portals at IIT Guwahati and architected B2B SaaS workflows—but over time, I realized my core passion lies beyond the screen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p>
              The frustration of wrestling with a stubborn mechanics or electromagnetism problem is strangely fulfilling—because finding the solution feels like uncovering a hidden piece of reality.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              My ambition is to fuse software engineering with physics and contribute to the frontier of quantum computing. This site is where I document that journey.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
