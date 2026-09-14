import img from "@/images/tech-section.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const TechSection = () => {
  return (
    <section className="text-muted-foreground overflow-hidden">
      <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col-reverse items-center">

        {/* Text side */}
        <div className="lg:grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <Badge
            variant="outline"
            className="mb-5 w-fit font-mono text-[10px] uppercase tracking-widest"
          >
            Tech
          </Badge>

          <h2 className="font-heading lg:text-5xl text-4xl mb-4 font-bold text-foreground tracking-[-0.02em] leading-tight max-w-md md:max-w-none">
            Building software that bridges{" "}
            ideas to reality
          </h2>

          <p className="mb-8 leading-relaxed text-sm max-w-md">
            I've been coding since I was 11 — starting with simple websites and
            moving on to more complex projects since. I build web apps that
            bring ideas into real life, making sure they look as beautiful as
            they feel in mind.
          </p>

          <div className="flex flex-col w-full md:justify-start justify-center gap-3">
            <Link
              href="/tech"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/85 hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore tech
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-background/60 border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-background hover:scale-[1.03] active:scale-[0.98]"
            >
              Read blog
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:w-2/3 mb-5 md:mb-0">
          <div className="relative w-full aspect-6/5 rounded-2xl overflow-hidden shadow-xl border border-border/40">
            <Image
              src={img}
              alt="Tech illustration"
              fill
              sizes="(max-width: 768px) 83vw, (max-width: 1024px) 50vw, 512px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechSection;