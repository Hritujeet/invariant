import { ModeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/simulations", label: "Simulations" },
  { href: "/derivations", label: "Derivations" },
  { href: "/devlogs", label: "Devlogs" },
  { href: "/arxiv", label: "Arxiv" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mx-auto w-full *:px-4 *:md:px-6">
      <div className="flex flex-col gap-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="mr-3 shrink-0 font-mono text-[15px] font-medium tracking-tight text-foreground"
            >
              invariant<span className="text-primary font-bold">_</span>
            </Link>
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-4 font-medium text-muted-foreground text-sm md:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-foreground" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-4 border-t py-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} invariant</p>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <p className="inline-flex items-center gap-1">
            <span>Built by</span>
            <a
              aria-label="x/twitter"
              className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground hover:underline"
              href={"https://www.linkedin.com/in/hritujeet-sharma-797ba7281/"}
              rel="noreferrer"
              target="_blank"
            >
              Hritujeet
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
