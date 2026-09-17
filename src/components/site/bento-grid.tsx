"use client";

import { ArrowUpRight, Binary, Code2, PenLine } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const card =
  "relative rounded-xl border border-border p-6 overflow-hidden transition-all duration-300";

// --- Animation variants ---

// The parent container: it orchestrates the children
// staggerChildren = each child starts 0.08s after the previous one
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

// Every card uses this same variant. The parent's stagger applies the delay automatically.
const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      // Per-property transitions: scale gets a spring, the rest use the bezier
      scale:   { type: "spring" as const, stiffness: 260, damping: 22 },
      opacity: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
      y:       { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
      filter:  { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  },
};

// The quote fades in from slightly above, a little slower
const quoteVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const BentoGrid = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-8 md:pb-12">
      {/* Quote — simple standalone fade-in */}
      <motion.div
        className="quote mx-auto flex max-w-5xl flex-col gap-3 md:px-8"
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.02] tracking-tight text-transparent bg-clip-text bg-linear-to-r from-foreground to-zinc-600">
          The universe is a computer, but it&apos;s not a computer made of
          silicon, it&apos;s a computer made of the laws of physics.
        </h1>
        <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
          — Seth Lloyd · Programming the Universe
        </span>
      </motion.div>

      {/* Grid — parent controls stagger, children just declare their state */}
      <motion.div
        className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-5"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
      >
        {/* About card */}
        <motion.article
          variants={cardVariants}
          className={`${card} hover:border-primary/30 duration-300 hover:-translate-y-0.5 flex flex-col justify-between lg:col-span-3 lg:row-span-3 bg-muted/50 hover:bg-muted group h-full min-h-90`}
        >
          <div className="flex items-start justify-between">
            <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              About
            </p>

            <div className="flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              <span>&pi; = 3.1415926</span>
            </div>
          </div>

          <div className="relative my-4 flex min-h-60 h-full w-full items-center justify-center overflow-hidden rounded-lg border border-border/40 bg-muted/10 p-4 transition-colors group-hover:border-primary/20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary-foreground)_0%,transparent_70%)] opacity-5" />
            <svg
              className="absolute inset-0 h-full w-full stroke-muted-foreground/50"
              width="100%"
              height="100%"
              fill="none"
            >
              <defs>
                <pattern
                  id="bento-grid-pattern"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 24 0 L 0 0 0 24" fill="none" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bento-grid-pattern)" />
            </svg>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-medium tracking-[-0.01em] leading-snug md:text-3xl xl:text-4xl">
              Hi. I&apos;m Hritujeet Sharma.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Take a brain already tied to computer science. Pour in a little
              physics. I am what happens next — scribbles on the page, a timestep in
              the browser, the two refusing to stay in their lanes.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1">
              {["physics", "computer science", "India"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/80 bg-muted/30 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div variants={cardVariants} className="lg:col-span-2 h-full">
          <Link
            href="/derivations"
            className={`${card} group bg-muted/50 hover:bg-muted flex flex-col justify-between gap-8 h-full hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5`}
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
              <h3 className="mt-1 font-heading text-lg font-normal tracking-[-0.01em]">
                Derivations on paper
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Handwritten derivations. From expressions to problems, all in one place - physics and mathematics
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants} className="lg:col-span-2 h-full">
          <Link
            href="/simulations"
            className={`${card} group bg-muted/50 hover:bg-muted flex flex-col justify-between gap-8 h-full hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5`}
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
              <h3 className="mt-1 font-heading text-lg font-normal tracking-[-0.01em]">
                Equations that move
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Taking physics from paper to code and from code to interactive simulations.
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants} className="lg:col-span-2 h-full">
          <Link
            href="/tech"
            className={`${card} group bg-muted/50 hover:bg-muted flex flex-col justify-between gap-8 h-full hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5`}
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
              <h3 className="mt-1 font-heading text-lg font-normal tracking-[-0.01em]">
                Systems from scratch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                From usual scripts to full stack web apps - I code it all with a nice cup of coffee.
              </p>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoGrid;
