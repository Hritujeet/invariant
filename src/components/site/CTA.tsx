import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ScrollReveal } from "../ui/scroll-reveal";

const CTA = () => {
  return (
    <section className="mx-auto w-full px-4 mb-20">
      <div className="flex flex-col items-center rounded-[2rem] border border-border/40 bg-muted/10 px-6 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20">

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Still curious?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Read some derivations, play with a simulation, or learn about the guy in the chair.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
            <Link
              href="/simulations"
              className={`rounded-full px-8 transition-transform hover:scale-105 active:scale-95 ${buttonVariants({ variant: "default" })}`}
            >
              Run a simulation
            </Link>

            <Link
              href="/derivations"
              className={`rounded-full px-8 transition-transform hover:scale-105 active:scale-95 ${buttonVariants({ variant: "secondary" })}`}
            >
              Read derivations
            </Link>

            <Link
              href="/about"
              className={`group rounded-full px-6 ${buttonVariants({ variant: "ghost" })}`}
            >
              Learn more
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CTA;
