"use client";

import { LogIn, Menu, SquareChevronRight, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "../ui/button";

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
    <header className="sticky top-4 inset-x-0 z-50 flex justify-center px-4 my-2">
      <div className="relative">
        <nav
          className="relative flex items-center gap-1 rounded-full border border-border
            bg-background/80 py-1.5 pl-5 pr-2 backdrop-blur-md shadow-sm"
        >
          {/* Top subtle refraction highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent"
          />

          <Link
            href="/"
            className="mr-3 shrink-0 font-mono text-[15px] font-medium tracking-tight text-foreground"
          >
            invariant<span className="text-primary font-bold">_</span>
          </Link>

          <ul className="hidden items-center gap-0.5 font-mono text-[13px] md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex items-center gap-1.5 text-sm rounded-full px-3 py-1.5 transition-colors ${active
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                  >
                    {l.label}
                    {l.flagship && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2 ml-auto md:ml-4">

            <Link
              href="/profile"
              className={buttonVariants({ variant: "ghost", size: "icon-sm", className: "rounded-full" })}
              aria-label="Profile"
            >
              <User className="size-4" />
            </Link>
            <Link
              href="#"
              className={buttonVariants({ variant: "default", size: "sm", className: "rounded-full px-3 sm:px-4" })}
            >
              <LogIn className="size-3.5" />
            </Link>
            <Link
              href="/admin"
              className={buttonVariants({ variant: "default", size: "sm", className: "rounded-full px-3 sm:px-4" })}
            >
              <SquareChevronRight className="size-3.5" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
            <ul className="flex flex-col font-mono text-sm">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors ${active
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                    >
                      {l.label}
                      {l.flagship && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
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

