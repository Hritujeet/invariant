import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MonitorSmartphone,
  Eye,
  Volume2,
  Cpu,
  Hand,
  Sparkles,
} from "lucide-react";

const MODULES = [
  {
    id: "philosophy",
    icon: Sparkles,
    title: "Core Philosophy",
    subtitle:
      "Josephine is a collaborative advisor, not a command line with a microphone. A hybrid architecture keeps her light until she's needed, launching quietly into the system tray on startup.",
    points: [
      ["Hybrid inference", "Local quantized model for routing and chat; cloud APIs only for heavy tasks like document summarization."],
      ["Silent boot", "Launches into the system tray on startup — no window, no CPU spin-up until she's woken."],
      ["Confidante, not console", "Tone is built around advice and conversation, not terse command acknowledgment."],
    ],
    libraries: [],
  },
  {
    id: "hud",
    icon: MonitorSmartphone,
    title: "The HUD",
    subtitle:
      "An unobtrusive, always-on-top overlay: elegant, translucent, and native to Windows 11.",
    points: [
      ["Tray & menu", "Right-click toggles Online, Asleep, Settings, and Quit."],
      ["Global summon", "A background hotkey toggles dashboard visibility without re-rendering, preserving conversational state."],
      ["Center glass box", "A translucent, frosted dashboard for text output, network status, and manual input."],
      ["Screen-edge glow", "An animated, click-through border that activates on wake-word detection."],
      ["Offline degradation", "Shows 'Awaiting Connection...' with a manual cancel button when a cloud task is queued offline."],
    ],
    libraries: ["PyQt6", "QSystemTrayIcon", "QMenu", "pywinstyles"],
  },
  {
    id: "senses",
    icon: Eye,
    title: "The Senses",
    subtitle: "How Josephine detects when to listen, and what's happening on screen.",
    points: [
      ["Wake word", "Always-listening local detection for \"Josephine\" via Picovoice Porcupine."],
      ["Hotkey", "A system-wide keyboard shortcut as a fallback trigger."],
      ["Screen & clipboard", "OCR over the active window and clipboard monitoring for contextual advice."],
    ],
    libraries: ["pvporcupine", "pynput", "pytesseract", "Pillow", "pyperclip"],
  },
  {
    id: "voice",
    icon: Volume2,
    title: "The Voice",
    subtitle:
      "A warm, human-sounding, fully offline voice that plays alongside the animated UI typing effect.",
    points: [
      ["Offline synthesis", "piper-tts generates natural local speech (e.g. Lessac or Amy voicesets)."],
      ["Non-blocking playback", "Audio plays asynchronously so the PyQt6 UI thread never freezes."],
    ],
    libraries: ["piper-tts", "sounddevice", "pygame"],
  },
  {
    id: "brain",
    icon: Cpu,
    title: "The Brain",
    subtitle:
      "The routing and reasoning core, tuned for a 16GB dual-channel RAM machine.",
    points: [
      ["Intent router", "Classifies prompts as system commands, casual conversation, or heavy cloud tasks."],
      ["Hardware-optimized inference", "llama-cpp-python compiled with the Vulkan backend."],
      ["RAM watchdog", "Auto-unloads the LLM after 5 minutes of inactivity, reloading on the next trigger."],
      ["Contextual memory", "Remembers recent interactions and personal context across sessions."],
    ],
    libraries: ["llama-cpp-python (vulkan)", "sqlite3"],
  },
  {
    id: "hands",
    icon: Hand,
    title: "The Hands",
    subtitle: "The operational modules Josephine uses to carry out commands and daily workflows.",
    points: [
      ["System operations", "Opens apps, manages workspace layouts, and runs 'Deep Work' scripts."],
      ["Knowledge retrieval", "Fetches Wikipedia summaries and arXiv papers."],
      ["Network watchdog", "Polls the connection when a heavy task is queued while offline."],
    ],
    libraries: ["subprocess", "os", "psutil", "wikipedia-api", "arxiv", "requests / aiohttp"],
  },
];

export default function JosephinePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Project Blueprint
          </Badge>
          <h1 className="text-5xl font-black tracking-tight text-slate-900">
            Project JOSEPHINE
          </h1>
          <p className="mt-3 text-slate-500">
            A native, Python-based OS companion for Windows.
          </p>
          <div className="mt-6">
            <Link href="/devlogs">
              <Button>View Devlogs</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <Card key={mod.id} id={mod.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-slate-500" />
                    <CardTitle>{mod.title}</CardTitle>
                  </div>
                  <CardDescription>{mod.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-3">
                    {mod.points.map(([label, text]) => (
                      <li key={label}>
                        <p className="text-sm font-semibold text-slate-800">
                          {label}
                        </p>
                        <p className="text-sm text-slate-500">{text}</p>
                      </li>
                    ))}
                  </ul>

                  {mod.libraries.length > 0 && (
                    <>
                      <Separator className="my-4" />
                      <p className="mb-2 text-xs font-medium text-slate-400">
                        Required libraries
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mod.libraries.map((lib) => (
                          <Badge key={lib} variant="outline">
                            {lib}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-slate-400">
          Josephine — a native Python companion for Windows.
        </p>
      </div>
    </main>
  );
}