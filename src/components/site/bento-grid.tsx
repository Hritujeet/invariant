import { ArrowUpRight, Binary, PenLine } from "lucide-react";
import Link from "next/link";

const card = "rounded-xl border border-border p-6";

const BentoGrid = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="quote mx-auto flex max-w-5xl flex-col gap-1 px-8">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          The universe is a computer, but it&apos;s not a computer made of
          silicon, it&apos;s a computer made of the laws of physics.
        </h1>
        <span className="text-muted-foreground">
          — Seth Lloyd (Programming the Universe)
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-5">
        <article
          className={`${card} flex flex-col lg:col-span-3 lg:row-span-2 bg-linear-to-bl from-zinc-950/80 via-card/25 to-card`}
        >
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            About
          </p>
          <div className="mt-8 flex flex-wrap gap-2 lg:mt-auto lg:pt-10">
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              Hey! It&apos;s me Hritujeet
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              They say physics and computer science are separate domains. I say,
              why not bring them together? Won&apos;t it be amazing? That&apos;s
              what I do, and that&apos;s who I am. A teen from India who&apos;s
              passionate about physics, with a long experience with computer
              science.
            </p>
            {["physics", "computer science", "India"].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        <Link
          href="/derivations"
          className={`${card} group bg-card/25 flex flex-col justify-between gap-8 lg:col-span-2`}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50">
              <PenLine className="size-4" strokeWidth={1.75} />
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              /derivations
            </p>
            <h3 className="mt-1 text-lg font-medium tracking-tight">
              Mechanics on paper
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Handwritten proofs from first principles — the long threads, shown
              one step at a time.
            </p>
          </div>
        </Link>

        <Link
          href="/simulations"
          className={`${card} group bg-card/25 flex flex-col justify-between gap-8 lg:col-span-2`}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50">
              <Binary className="size-4" strokeWidth={1.75} />
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              /simulations
            </p>
            <h3 className="mt-1 text-lg font-medium tracking-tight">
              Equations that move
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Discrete models you can run — the same laws, stepped through in
              time.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BentoGrid;
