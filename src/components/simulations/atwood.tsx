"use client";

import { useEffect, useRef, useState } from "react";

const g = 9.8;

export default function Atwood() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({ pos: 0, vel: 0, running: false, last: 0 });
  const [m1, setM1] = useState(3);
  const [m2, setM2] = useState(5);
  const [running, setRunning] = useState(false);
  const [readout, setReadout] = useState({ a: 0, T: 0, v: 0 });

  const reset = () => {
    state.current.pos = 0;
    state.current.vel = 0;
    state.current.running = false;
    setRunning(false);
    setReadout({ a: 0, T: 0, v: 0 });
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = wrapRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * pixelRatio);
      canvas.height = Math.round(rect.height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    let raf: number;
    const draw = (t: number) => {
      const s = state.current;
      const dt = s.last === 0 ? 0 : Math.min((t - s.last) / 1000, 0.05);
      s.last = t;

      if (s.running) {
        const a = ((m2 - m1) * g) / (m1 + m2);
        s.vel += a * dt;
        s.pos += s.vel * dt;
        if (Math.abs(s.pos) > 1.2) {
          s.pos = Math.sign(s.pos) * 1.2;
          s.vel = 0;
          s.running = false;
          setRunning(false);
        }
        setReadout({
          a: Math.abs(a),
          T: (2 * m1 * m2 * g) / (m1 + m2),
          v: Math.abs(s.vel),
        });
      }

      const pixelRatio = window.devicePixelRatio || 1;
      const W = canvas.width / pixelRatio, H = canvas.height / pixelRatio;
      ctx.clearRect(0, 0, W, H);

      const isDark = document.documentElement.classList.contains("dark");
      const primary = isDark ? "#34d399" : "#10b981";
      const fg = isDark ? "#f4f4f5" : "#18181b";
      const rope = isDark ? "#a1a1aa" : "#71717a";
      const blockBg = isDark ? "#27272a" : "#f4f4f5";

      const pr = Math.min(W, H) * 0.08;
      const px = W / 2, py = pr + 20;
      const ropeLen = H - py - pr - 60;
      const travel = ropeLen * 0.4;
      const disp = (s.pos * travel) / 1.2;
      const bw = Math.min(W, H) * 0.16, bh = bw * 0.68;
      const xL = px - pr * 0.6, xR = px + pr * 0.6;
      const baseY = py + pr;
      const y1 = baseY + ropeLen - disp - bh;
      const y2 = baseY + ropeLen + disp - bh;

      ctx.strokeStyle = rope;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xL, py); ctx.lineTo(xL, y1);
      ctx.moveTo(xR, py); ctx.lineTo(xR, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.strokeStyle = primary;
      ctx.lineWidth = 3;
      ctx.stroke();

      const block = (x: number, y: number, label: string, mass: number, heavy: boolean) => {
        ctx.fillStyle = heavy ? primary : blockBg;
        ctx.fillRect(x - bw / 2, y, bw, bh);
        ctx.fillStyle = heavy ? "#fff" : fg;
        ctx.textAlign = "center";
        ctx.font = `bold ${bw * 0.22}px monospace`;
        ctx.fillText(label, x, y + bh * 0.4);
        ctx.font = `${bw * 0.17}px monospace`;
        ctx.fillText(`${mass} kg`, x, y + bh * 0.75);
      };
      block(xL, y1, "m1", m1, m1 >= m2);
      block(xR, y2, "m2", m2, m2 >= m1);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [m1, m2]);

  return (
    <div className="flex flex-col gap-3 w-full select-none">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          Atwood Machine // ideal NLM
        </span>
        <div className="flex gap-1.5">
          <button
            onClick={reset}
            className="rounded-full px-3 py-1 text-[11px] font-medium border border-border text-muted-foreground hover:text-foreground"
          >
            Reset
          </button>
          <button
            onClick={() => {
              if (running) {
                setRunning(false);
                state.current.running = false;
              } else {
                state.current.running = true;
                setRunning(true);
              }
            }}
            className="rounded-full px-3 py-1 text-[11px] font-medium border border-border"
            style={{
              background: running ? "transparent" : "var(--primary)",
              color: running ? "var(--muted-foreground)" : "var(--primary-foreground)",
            }}
          >
            {running ? "Stop" : "Release"}
          </button>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden rounded-xl border border-border"
        style={{ height: "clamp(200px, 36vw, 360px)" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "a", val: `${readout.a.toFixed(2)} m/s²` },
          { label: "T", val: `${readout.T.toFixed(1)} N` },
          { label: "v", val: `${readout.v.toFixed(2)} m/s` },
        ].map(({ label, val }) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-lg border border-border py-2 font-mono"
          >
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
              {label}
            </span>
            <span className="text-[12px] font-bold text-foreground mt-0.5">{val}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {([["m1", m1, setM1], ["m2", m2, setM2]] as const).map(([key, val, set]) => (
          <label key={key} className="flex flex-col gap-1">
            <div className="flex justify-between font-mono text-[11px] text-muted-foreground">
              <span>{key}</span>
              <span className="text-foreground font-semibold">{val} kg</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={0.5}
              value={val}
              onChange={(e) => {
                set(parseFloat(e.target.value));
                reset();
              }}
              className="w-full h-1.5 rounded-full accent-primary"
            />
          </label>
        ))}
      </div>
    </div>
  );
}