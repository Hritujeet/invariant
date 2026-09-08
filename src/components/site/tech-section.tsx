import img from "@/images/tech-section.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const TechSection = () => {
  return (
    <section className="bg-muted overflow-hidden md:flex md:min-h-120">
      {/* Text side */}
      <div className="flex flex-1 flex-col justify-center px-8 py-16 md:px-16 md:py-24">
        <Badge variant="outline" className="mb-4 w-fit font-mono text-[10px] uppercase tracking-wider">
          Tech
        </Badge>

        <h1 className="font-heading text-4xl font-bold tracking-[-0.02em] leading-tight md:text-5xl">
          Building software that bridges ideas to reality
        </h1>

        <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-muted-foreground">
          I've been coding since I was 11 — starting with simple websites
          and moving on to more complex projects since. I build web apps
          that bring ideas into real life, making sure they look as
          beautiful as they feel in mind.
        </p>
      </div>

      {/* Image side — fills full height of section */}
      <div className="relative min-h-75 flex-1 md:min-h-full">
        <Image
          src={img}
          alt="Tech illustration"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default TechSection;