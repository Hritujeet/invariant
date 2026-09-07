"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* Hero Content */}
        <div className="flex flex-col lg:col-span-7">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            <span className="tracking-widest uppercase">
              home // invariant.dev
            </span>
          </div>

          <h1 className="font-heading text-5xl font-semibold tracking-[-0.01em] leading-[1.15] sm:text-6xl lg:text-[4.25rem]">
            Mechanics on paper.{" "}
            <span className="text-foreground/70">Software that ships.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-[1.75] text-muted-foreground sm:text-[1.05rem]">
            I derive classical mechanics in a notebook, then I run the same
            system as a simulation. I also build web apps. That&apos;s most of
            what I do.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/simulations"
              className={`px-4 py-4 ${buttonVariants({ variant: "default" })}`}
            >
              <span>Interactive Simulations</span>
            </Link>
            <Link
              href="/derivations"
              className={`px-4 py-4 ${buttonVariants({ variant: "outline" })}`}
            >
              <span>Explore /derivations</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/tech"
              className={`px-4 py-4 ${buttonVariants({ variant: "outline" })}`}
            >
              <span>Systems & Tech</span>
            </Link>
          </div>
        </div>

        {/* Atwood Simulation */}
        <div></div>
      </div>
    </section>
  );
}
