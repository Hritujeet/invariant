"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Atwood from "../simulations/atwood";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl min-h-screen flex flex-col justify-center py-16 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
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

          <h1 className="text-4xl tracking-tight leading-tight sm:text-5xl lg:text-6xl font-extrabold md:font-black">
            Mechanics on paper.{" "}
            <span className="text-foreground/70">Software that ships.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-[1.75] text-muted-foreground sm:text-[1.05rem]">
            I derive classical mechanics in a notebook, then I run the same
            system as a simulation. I also build web apps. That&apos;s most of
            what I do.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
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

        {/* Atwood Simulation — visible on all screen sizes */}
        <div className="w-full lg:col-span-5">
          <Atwood />
        </div>
      </div>
    </section>
  );
}
