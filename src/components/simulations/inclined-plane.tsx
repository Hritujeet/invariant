"use client";

import { useEffect, useState } from "react";

const g = 9.81;

export default function InclinedPlaneSimulation() {
  const [angle, setAngle] = useState(30);
  const [muStatic, setMuStatic] = useState(0.4);
  const [muKinetic, setMuKinetic] = useState(0.25);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [running, setRunning] = useState(false);
  const theta = (angle * Math.PI) / 180;
  const acceleration = g * (Math.sin(theta) - muKinetic * Math.cos(theta));

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setVelocity((v) => {
        const next = Math.max(0, v + acceleration * 0.03);
        setPosition((x) => {
          const nextPosition = x + next * 0.03;
          if (nextPosition >= 2.5) {
            setRunning(false);
            return 2.5;
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
  const canSlide = Math.tan(theta) > muStatic;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span>Block on a rough incline</span>
        <div className="flex gap-2">
          <button className="rounded-full border border-border px-3 py-1 normal-case" onClick={reset}>Reset</button>
          <button
            className="rounded-full border border-primary bg-primary px-3 py-1 normal-case text-primary-foreground"
            onClick={() => canSlide && setRunning((value) => !value)}
            disabled={!canSlide}
          >
            {running ? "Pause" : "Release"}
          </button>
        </div>
      </div>
      <svg viewBox="0 0 480 300" className="w-full rounded-xl border border-border bg-muted/20">
        <path d="M55 260 L400 260 L400 100 Z" fill="hsl(var(--muted))" fillOpacity=".55" stroke="hsl(var(--border))" strokeWidth="2" />
        <path d="M85 245 L370 112" stroke="hsl(var(--primary))" strokeWidth="3" />
        <g transform={`translate(${-position * 66} ${position * 31}) rotate(-${angle}, 300, 145)`}>
          <rect x="270" y="120" width="58" height="42" rx="5" fill="hsl(var(--primary))" />
          <text x="299" y="146" textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace">m</text>
        </g>
        <text x="92" y="232" fill="currentColor" fontSize="13" fontFamily="monospace">θ = {angle}°</text>
        <text x="350" y="285" fill="currentColor" fontSize="12" fontFamily="monospace">x along slope</text>
      </svg>
      <div className="grid grid-cols-2 gap-3 font-mono text-xs">
        <div className="rounded-lg border border-border p-3 text-center"><span className="block text-muted-foreground">Acceleration</span><strong>{canSlide ? acceleration.toFixed(2) : "0.00"} m/s²</strong></div>
        <div className="rounded-lg border border-border p-3 text-center"><span className="block text-muted-foreground">Speed</span><strong>{velocity.toFixed(2)} m/s</strong></div>
      </div>
      {!canSlide && <p className="text-xs text-muted-foreground">Static friction is sufficient to keep the block at rest (tan θ ≤ μ).</p>}
      <label className="block space-y-1 font-mono text-xs">
        <span className="flex justify-between"><span>Incline angle</span><span>{angle}°</span></span>
        <input className="w-full accent-primary" type="range" min="5" max="60" value={angle} onChange={(e) => { setAngle(Number(e.target.value)); reset(); }} />
      </label>
      <label className="block space-y-1 font-mono text-xs">
        <span className="flex justify-between"><span>Static friction μₛ</span><span>{muStatic.toFixed(2)}</span></span>
        <input className="w-full accent-primary" type="range" min="0" max="0.8" step="0.01" value={muStatic} onChange={(e) => { setMuStatic(Number(e.target.value)); reset(); }} />
      </label>
      <label className="block space-y-1 font-mono text-xs">
        <span className="flex justify-between"><span>Kinetic friction μₖ</span><span>{muKinetic.toFixed(2)}</span></span>
        <input className="w-full accent-primary" type="range" min="0" max="0.8" step="0.01" value={muKinetic} onChange={(e) => { setMuKinetic(Number(e.target.value)); reset(); }} />
      </label>
      <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-xs text-muted-foreground">
        a = g(sin θ − μₖ cos θ) = {canSlide ? acceleration.toFixed(2) : "0.00"} m/s²
      </p>
    </div>
  );
}
