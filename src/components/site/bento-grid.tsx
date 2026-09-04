import { ArrowUpRight, Binary, Code2, PenLine } from "lucide-react";
import Link from "next/link";

const card =
  "relative rounded-xl border border-border p-6 overflow-hidden transition-all duration-300";

const BentoGrid = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="quote mx-auto flex max-w-5xl flex-col gap-1 md:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
          The universe is a computer, but it&apos;s not a computer made of
          silicon, it&apos;s a computer made of the laws of physics.
        </h1>
        <span className="text-muted-foreground">
          — Seth Lloyd (Programming the Universe)
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-5">
        {/* About card */}
        <article
          className={`${card} hover:border-accent-foreground/25 duration-300 hover:-translate-y-0.5 flex flex-col lg:col-span-3 lg:row-span-3 bg-card/25 group`}
        >
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            About
          </p>
          <div className="mt-8 flex flex-wrap gap-2 lg:mt-auto lg:pt-10">
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">
              Hey! It&apos;s me Hritujeet
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              They say physics and computer science are different worlds. I say,
              why not bring them together? Won&apos;t it be amazing? That&apos;s
              what I do, and that&apos;s who I am. A teen from India who&apos;s
              passionate about physics, with a long experience with computer
              science.
            </p>
            {["physics", "computer science", "India"].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/80 bg-muted/30 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        <Link
          href="/derivations"
          className={`${card} group bg-card/25 flex flex-col justify-between gap-8 lg:col-span-2 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5`}
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-start justify-between gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
              <PenLine className="size-4" strokeWidth={1.75} />
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>
          <div className="relative">
            <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              /derivations
            </p>
            <h3 className="mt-1 text-lg font-medium tracking-tight">
              Mechanics on paper
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Handwritten proofs with detailed explanations from first
              principles — the long threads, shown one step at a time.
            </p>
          </div>
        </Link>

        <Link
          href="/simulations"
          className={`${card} group bg-card/25 flex flex-col justify-between gap-8 lg:col-span-2 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5`}
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-start justify-between gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
              <Binary className="size-4" strokeWidth={1.75} />
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>
          <div className="relative">
            <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              /simulations
            </p>
            <h3 className="mt-1 text-lg font-medium tracking-tight">
              Equations that move
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This is where CS and Physics meet. Discrete models you can run —
              the same laws, stepped through in time.
            </p>
          </div>
        </Link>

        <Link
          href="/tech"
          className={`${card} group bg-card/25 flex flex-col justify-between gap-8 lg:col-span-2 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5`}
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-start justify-between gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
              <Code2 className="size-4" strokeWidth={1.75} />
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>
          <div className="relative">
            <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              /tech
            </p>
            <h3 className="mt-1 text-lg font-medium tracking-tight">
              Systems from scratch
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Full-stack web and other CS projects — the software side of the
              workbench.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BentoGrid;
