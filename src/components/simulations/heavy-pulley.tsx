"use client";

import { useEffect, useState } from "react";

const g = 9.81;

export default function HeavyPulleySimulation() {
  const [m1, setM1] = useState(3);
  const [m2, setM2] = useState(5);
  const [pulleyMass, setPulleyMass] = useState(4);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [running, setRunning] = useState(false);
  const inertia = 0.5 * pulleyMass;
  const acceleration = ((m2 - m1) * g) / (m1 + m2 + inertia);
  const tension1 = m1 * (g + acceleration);
  const tension2 = m2 * (g - acceleration);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setVelocity((v) => {
        const next = v + acceleration * 0.03;
        setPosition((x) => {
          const nextPosition = x + next * 0.03;
          if (Math.abs(nextPosition) >= 1.2) {
            setRunning(false);
            return Math.sign(nextPosition) * 1.2;
          }
          return nextPosition;
        });
        return next;
      });
    }, 30);
    return () => window.clearInterval(timer);
  }, [acceleration, running]);

  const reset = () => {
    setRunning(false);
    setPosition(0);
    setVelocity(0);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span>Atwood machine with a solid-disk pulley</span>
        <div className="flex gap-2">
          <button className="rounded-full border border-border px-3 py-1 normal-case" onClick={reset}>Reset</button>
          <button className="rounded-full border border-primary bg-primary px-3 py-1 normal-case text-primary-foreground" onClick={() => setRunning((value) => !value)}>{running ? "Pause" : "Release"}</button>
        </div>
      </div>
      <svg viewBox="0 0 480 300" className="w-full rounded-xl border border-border bg-muted/20">
        <circle cx="240" cy="75" r="37" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="3" />
        <circle cx="240" cy="75" r="5" fill="hsl(var(--primary))" />
        <path d={`M203 75 V${198 - position * 55} H155 V${198 - position * 55} M277 75 V${198 + position * 55} H325 V${198 + position * 55}`} fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
        <rect x="127" y={190 - position * 55} width="56" height="48" rx="5" fill="hsl(var(--primary))" />
        <rect x="297" y={190 + position * 55} width="56" height="48" rx="5" fill="hsl(var(--primary))" />
        <text x="155" y={220 - position * 55} textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace">m₁</text>
        <text x="325" y={220 + position * 55} textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace">m₂</text>
        <text x="240" y="132" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace">M = {pulleyMass} kg</text>
      </svg>
      <div className="grid grid-cols-2 gap-2 font-mono text-xs">
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Acceleration</span><strong>{acceleration.toFixed(2)} m/s²</strong></div>
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Speed</span><strong>{velocity.toFixed(2)} m/s</strong></div>
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Tension T₁</span><strong>{tension1.toFixed(2)} N</strong></div>
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Tension T₂</span><strong>{tension2.toFixed(2)} N</strong></div>
      </div>
      {[
        { label: "Mass m₁", value: m1, setter: setM1, max: 10 },
        { label: "Mass m₂", value: m2, setter: setM2, max: 10 },
        { label: "Pulley mass M", value: pulleyMass, setter: setPulleyMass, max: 12 },
      ].map(({ label, value, setter, max }) => (
        <label key={label} className="block space-y-1 font-mono text-xs">
          <span className="flex justify-between"><span>{label}</span><span>{value} kg</span></span>
          <input className="w-full accent-primary" type="range" min="1" max={max} step="0.5" value={value} onChange={(e) => { setter(Number(e.target.value)); reset(); }} />
        </label>
      ))}
      <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-xs text-muted-foreground">
        I = ½MR², &nbsp; a = (m₂ − m₁)g / (m₁ + m₂ + I/R²)
      </p>
    </div>
  );
}
