"use client";

import { useEffect, useState } from "react";

const g = 9.81;

export default function GroundToGroundProjectileSimulation() {
  const [speed, setSpeed] = useState(20);
  const [angle, setAngle] = useState(45);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const radians = (angle * Math.PI) / 180;
  const flightTime = (2 * speed * Math.sin(radians)) / g;
  const range = (speed * speed * Math.sin(2 * radians)) / g;
  const maxHeight = (speed * speed * Math.sin(radians) ** 2) / (2 * g);
  const scaleX = 360 / Math.max(range, 1);
  const scaleY = 145 / Math.max(maxHeight, 1);
  const points = Array.from({ length: 41 }, (_, index) => {
    const fraction = index / 40;
    const x = range * fraction;
    const t = flightTime * fraction;
    const y = speed * Math.sin(radians) * t - 0.5 * g * t * t;
    return `${60 + x * scaleX},${235 - y * scaleY}`;
  }).join(" ");

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 1) {
          setRunning(false);
          return 1;
        }
        return Math.min(1, value + 0.012);
      });
    }, 30);
    return () => window.clearInterval(timer);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setProgress(0);
  };
  const x = range * progress;
  const t = flightTime * progress;
  const y = speed * Math.sin(radians) * t - 0.5 * g * t * t;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span>Level-ground trajectory</span>
        <div className="flex gap-2">
          <button className="rounded-full border border-border px-3 py-1 normal-case" onClick={reset}>Reset</button>
          <button className="rounded-full border border-primary bg-primary px-3 py-1 normal-case text-primary-foreground" onClick={() => { if (progress >= 1) setProgress(0); setRunning((value) => !value); }}>{running ? "Pause" : "Launch"}</button>
        </div>
      </div>
      <svg viewBox="0 0 480 270" className="w-full rounded-xl border border-border bg-muted/20">
        <path d="M45 235 H435" stroke="hsl(var(--border))" strokeWidth="2" />
        <polyline points={points} fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinejoin="round" />
        <circle cx={60 + x * scaleX} cy={235 - y * scaleY} r="8" fill="hsl(var(--primary))" />
        <path d="M60 235 H420" stroke="hsl(var(--muted-foreground))" strokeDasharray="4 6" opacity=".4" />
        <text x="55" y="257" fill="currentColor" fontSize="11" fontFamily="monospace">launch</text>
        <text x="386" y="257" fill="currentColor" fontSize="11" fontFamily="monospace">landing</text>
        <text x="250" y="30" fill="currentColor" fontSize="12" fontFamily="monospace">R = {range.toFixed(1)} m</text>
      </svg>
      <div className="grid grid-cols-3 gap-2 font-mono text-xs">
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Flight</span><strong>{flightTime.toFixed(2)} s</strong></div>
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Max height</span><strong>{maxHeight.toFixed(2)} m</strong></div>
        <div className="rounded-lg border border-border p-2 text-center"><span className="block text-muted-foreground">Range</span><strong>{range.toFixed(2)} m</strong></div>
      </div>
      <label className="block space-y-1 font-mono text-xs">
        <span className="flex justify-between"><span>Launch speed</span><span>{speed} m/s</span></span>
        <input className="w-full accent-primary" type="range" min="5" max="40" value={speed} onChange={(e) => { setSpeed(Number(e.target.value)); reset(); }} />
      </label>
      <label className="block space-y-1 font-mono text-xs">
        <span className="flex justify-between"><span>Launch angle</span><span>{angle}°</span></span>
        <input className="w-full accent-primary" type="range" min="10" max="80" value={angle} onChange={(e) => { setAngle(Number(e.target.value)); reset(); }} />
      </label>
    </div>
  );
}