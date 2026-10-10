export default function ParticleCollisionDerivation() {
  return (
    <article className="space-y-5 text-sm leading-7 text-muted-foreground">
      <p>
        Two particles of masses m₁ and m₂ move along a straight line with
        initial velocities u₁ and u₂. For an isolated, perfectly elastic
        collision, total momentum and kinetic energy are conserved.
      </p>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">1. Momentum conservation</h2>
        <p>Let v₁ and v₂ be the velocities after impact. Then:</p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">2. Elasticity condition</h2>
        <p>
          Equating initial and final kinetic energies and factoring the
          differences of squares gives:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          m₁(u₁² − v₁²) = m₂(v₂² − u₂²)
        </p>
        <p>
          Factor each side and use momentum conservation to cancel the common
          momentum-change term. The relative speed of separation equals the
          relative speed of approach:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          u₁ − u₂ = v₂ − v₁
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">3. Solve the two equations</h2>
        <p>
          Solving the momentum and relative-velocity equations simultaneously
          yields:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          v₁ = [(m₁ − m₂)u₁ + 2m₂u₂] / (m₁ + m₂)
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          v₂ = [2m₁u₁ + (m₂ − m₁)u₂] / (m₁ + m₂)
        </p>
        <p>
          For equal masses these expressions exchange the two velocities. If
          one mass is much larger, it changes velocity less, as expected.
        </p>
      </section>
    </article>
  );
}
