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
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-widest uppercase">
              home // invariant.dev
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Mechanics on paper. Software that ships.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
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
              <ArrowUpRight className="h-4 w-4 text-zinc-400" />
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
