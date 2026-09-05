"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* Hero Content */}
        <div className="flex flex-col lg:col-span-7">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-widest uppercase">
              LAB WORKBENCH // INVARIANT.DEV
            </span>
          </div>

          <blockquote className="mb-6 border-l-2 border-zinc-700 pl-4">
            <p className="font-serif text-sm italic leading-relaxed text-zinc-400 sm:text-base">
              &ldquo;Nature uses only the longest threads to weave her patterns,
              so each small piece of her fabric reveals the organization of the
              entire tapestry.&rdquo;
            </p>
            <cite className="mt-1 block font-mono text-xs text-zinc-500 not-italic">
              — Richard Feynman
            </cite>
          </blockquote>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Continuous mechanics on paper. Full-stack web architecture bringing
            ideas into reality.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Welcome to my computational workbench. This is where graphite wears
            down against paper deriving classical mechanics from first
            principles, equations are discretized into real-time numerical
            models, and software systems are built from scratch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/simulations"
              className={`px-4 py-4 ${buttonVariants({variant: "default"})}`}
            >
              <span>Interactive Simulations</span>
            </Link>
            <Link
              href="/derivations"
              className={`px-4 py-4 ${buttonVariants({variant: "outline"})}`}
            >
              <span>Explore /derivations</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400" />
            </Link>
            <Link
              href="/tech"
              className={`px-4 py-4 ${buttonVariants({variant: "outline"})}`}
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
