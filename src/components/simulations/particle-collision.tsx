"use client";

import { useEffect, useRef, useState } from "react";

export default function ParticleCollisionSimulation() {
  const [m1, setM1] = useState(2);
  const [m2, setM2] = useState(3);
  const [u1, setU1] = useState(4);
  const [u2, setU2] = useState(-2);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const progressRef = useRef(0);
  const closingSpeed = u1 - u2;
  const initialX1 = 100;
  const initialX2 = 400;
  const pixelsPerUnit = 24;
  const collisionTime = closingSpeed > 0
    ? (initialX2 - initialX1) / (closingSpeed * pixelsPerUnit)
    : 0;
  const v1 = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2);
  const v2 = (2 * m1 * u1 + (m2 - m1) * u2) / (m1 + m2);
  const momentumBefore = m1 * u1 + m2 * u2;
  const momentumAfter = m1 * v1 + m2 * v2;
  const energyBefore = 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2;
  const energyAfter = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
  const elapsed = progress * collisionTime * 2;
  const collided = progress >= 0.5;
  const postCollisionTime = Math.max(0, elapsed - collisionTime);
  const collisionX = initialX1 + u1 * collisionTime * pixelsPerUnit;
  const x1 = collided
    ? collisionX + v1 * postCollisionTime * pixelsPerUnit
    : initialX1 + u1 * elapsed * pixelsPerUnit;
  const x2 = collided
    ? collisionX + v2 * postCollisionTime * pixelsPerUnit
    : initialX2 + u2 * elapsed * pixelsPerUnit;

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    let lastTime = 0;
    const animate = (time: number) => {
      const dt = lastTime === 0 ? 0 : Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      progressRef.current = Math.min(1, progressRef.current + dt / 3);
      setProgress(progressRef.current);
      if (progressRef.current >= 1) {
        setRunning(false);
        return;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [running]);

  const reset = () => {
    setRunning(false);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <div className="min-w-0 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span>One-dimensional elastic collision</span>
        <div className="flex gap-2">
          <button className="rounded-full border border-border px-3 py-1 normal-case" onClick={reset}>Reset</button>
          <button className="rounded-full border border-primary bg-primary px-3 py-1 normal-case text-primary-foreground" onClick={() => { if (progressRef.current >= 1) reset(); setRunning((value) => !value); }} disabled={closingSpeed <= 0}>{running ? "Pause" : "Run"}</button>
        </div>
      </div>
      <svg viewBox="0 0 500 210" preserveAspectRatio="xMidYMid meet" className="block aspect-[50/21] h-auto w-full rounded-xl border border-border bg-muted/20">
        <path d="M35 145 H465" stroke="hsl(var(--border))" strokeWidth="2" />
        <circle cx={Math.max(48, Math.min(452, x1))} cy="125" r={12 + m1 * 2} fill="hsl(var(--primary))" />
        <circle cx={Math.max(48, Math.min(452, x2))} cy="125" r={12 + m2 * 2} fill="hsl(var(--muted-foreground))" />
        <text x={Math.max(48, Math.min(452, x1))} y="178" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace">m₁ · {collided ? v1.toFixed(1) : u1.toFixed(1)} m/s</text>
        <text x={Math.max(48, Math.min(452, x2))} y="195" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace">m₂ · {collided ? v2.toFixed(1) : u2.toFixed(1)} m/s</text>
      </svg>
      {closingSpeed <= 0 && <p className="text-xs text-muted-foreground">The particles are not approaching; increase u₁ or decrease u₂ to initiate a collision.</p>}
      <div className="grid grid-cols-1 gap-2 font-mono text-xs sm:grid-cols-2">
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Momentum before / after</span><strong>{momentumBefore.toFixed(2)} / {momentumAfter.toFixed(2)} kg·m/s</strong></div>
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Energy before / after</span><strong>{energyBefore.toFixed(2)} / {energyAfter.toFixed(2)} J</strong></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Mass m₁", value: m1, setter: setM1, min: 1, max: 8, step: 0.5 },
          { label: "Mass m₂", value: m2, setter: setM2, min: 1, max: 8, step: 0.5 },
          { label: "Initial velocity u₁", value: u1, setter: setU1, min: -6, max: 6, step: 0.5 },
          { label: "Initial velocity u₂", value: u2, setter: setU2, min: -6, max: 6, step: 0.5 },
        ].map(({ label, value, setter, min, max, step }) => (
          <label key={label} className="block space-y-1 font-mono text-xs">
            <span className="flex justify-between"><span>{label}</span><span>{value} {label.includes("velocity") ? "m/s" : "kg"}</span></span>
            <input className="w-full accent-primary" type="range" min={min} max={max} step={step} value={value} onChange={(e) => { setter(Number(e.target.value)); reset(); }} />
          </label>
        ))}
      </div>
      <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-xs text-muted-foreground">
        v₁ = {v1.toFixed(2)} m/s, &nbsp; v₂ = {v2.toFixed(2)} m/s
      </p>
    </div>
  );
}
