export default function GroundToGroundProjectileDerivation() {
  return (
    <article className="space-y-5 text-sm leading-7 text-muted-foreground">
      <p>
        Launch a particle from level ground with speed <i>u</i> at angle{" "}
        <i>θ</i> above the horizontal. Neglect air resistance and take
        acceleration to be (0, −g).
      </p>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">1. Resolve the initial velocity</h2>
        <p>The horizontal and vertical components are constant and independent:</p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          uₓ = u cos θ, &nbsp; uᵧ = u sin θ
        </p>
        <p>
          Integrating the accelerations with the launch point as the origin
          gives x(t) = u cos θ · t and y(t) = u sin θ · t − ½gt².
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">2. Flight time</h2>
        <p>
          The projectile returns to the launch elevation when y(T) = 0. The
          nonzero root of the vertical equation is:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          T = 2u sin θ / g
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">3. Height and range</h2>
        <p>
          At the apex, vertical velocity u sin θ − gt is zero, so the time to
          the apex is T/2. Substituting into y(t), and substituting the full
          flight time into x(t), gives:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          H = u² sin² θ / (2g), &nbsp; R = u² sin(2θ) / g
        </p>
        <p>
          At fixed launch speed the range is greatest at 45°. Complementary
          launch angles have equal ranges in this ideal, level-ground model.
        </p>
      </section>
    </article>
  );
}
