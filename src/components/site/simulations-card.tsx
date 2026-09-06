import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import img from "@/images/dummy.png";

const SimulationsCard = () => {
  return (
    <Link
      href="/simulations"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-accent/50 bg-accent/25 ring-1 ring-white/5 transition-colors hover:border-accent"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={img}
          alt="Atwood machine simulation"
          fill
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-size-[18px_18px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent"
        />

        <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] tracking-widest\ uppercase bg-primary px-2 rounded-full">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-teal-400" />
          </span>
          sim_01 // atwood
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pt-3 pb-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            Simple Atwood System
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
            Two masses, one pulley, one string. Run it and see what the
            constraint actually does.
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] text-zinc-500">
          <span>2-body · 1 constraint</span>
          <span className="inline-flex items-center gap-1 text-zinc-500 transition-colors group-hover:text-teal-400">
            Run
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SimulationsCard;
