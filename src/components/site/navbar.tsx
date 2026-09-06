"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./theme-toggle";

const links = [
  { href: "/tech", label: "tech" },
  { href: "/simulations", label: "simulations", flagship: true },
  { href: "/derivations", label: "derivations" },
  { href: "/blog", label: "blog" },
  { href: "/josephine", label: "josephine", flagship: true },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky my-2 inset-x-0 top-5 z-50 flex justify-center px-4">
      <div className="relative">
        <nav
          className="relative flex items-center gap-1 rounded-full border border-foreground/10
            bg-background/60 py-2 pl-5 pr-2 backdrop-blur-md backdrop-saturate-150
            shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_-1px_10px_0_rgba(0,0,0,0.12)_inset,0_10px_30px_-10px_rgba(0,0,0,0.35)]"
        >
          {/* top refraction highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
          />

          <Link
            href="/"
            className="mr-3 shrink-0 font-mono text-[15px] tracking-tight text-foreground"
          >
            invariant<span className="text-yellow-500">_</span>
          </Link>

          <ul className="hidden items-center gap-0.5 font-mono text-[13px] md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
                      active
                        ? "bg-foreground/[0.07] text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {l.flagship && (
                      <span
                        aria-hidden
                        className="h-1 w-1 rounded-full bg-yellow-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-2 flex items-center gap-1 border-l border-foreground/10 pl-2">
            <ModeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/[0.06] hover:text-foreground md:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {open ? (
                  <path
                    d="M3 3L13 13M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M2 4.5H14M2 8H14M2 11.5H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl border border-foreground/10 bg-background/80 p-2 shadow-lg backdrop-blur-xl md:hidden">
            <ul className="flex flex-col font-mono text-sm">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                        active
                          ? "bg-foreground/[0.07] text-foreground"
                          : "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground"
                      }`}
                    >
                      {l.label}
                      {l.flagship && (
                        <span className="h-1 w-1 rounded-full bg-yellow-500" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
