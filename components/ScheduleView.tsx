"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CalendarEventRecord } from "@/lib/ghl-api";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function formatTime(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function dayKey(iso?: string): number {
  if (!iso) return 0;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 0;
  return d.getDay();
}

function dayLabel(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function getLevelBadgeClass(title: string = ""): string {
  const t = title.toLowerCase();
  const base = "inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap";
  if (t.includes("kids") || t.includes("teen") || t.includes("junior"))
    return `${base} bg-[#f3e8ff] text-[#7c3aed]`;
  if (t.includes("advanced") || t.includes("competition"))
    return `${base} bg-[#fee2e2] text-[#991b1b]`;
  if (t.includes("intermediate")) return `${base} bg-[#fef3c7] text-[#92400e]`;
  if (t.includes("beginner") || t.includes("fundamental") || t.includes("intro"))
    return `${base} bg-[#dcfce7] text-[#166534]`;
  return `${base} bg-[#dcfce7] text-[#166534]`;
}

function getLevelLabel(title: string = ""): string {
  const t = title.toLowerCase();
  if (t.includes("kids") || t.includes("junior")) return "Kids";
  if (t.includes("teen")) return "Teens";
  if (t.includes("advanced") || t.includes("competition")) return "Advanced";
  if (t.includes("intermediate")) return "Intermediate";
  if (t.includes("beginner") || t.includes("fundamental") || t.includes("intro")) return "Beginner";
  if (t.includes("50+") || t.includes("golden")) return "50+";
  return "All Levels";
}

type ScheduleViewProps = {
  events: CalendarEventRecord[];
  weekStart: string;
  initialDay: number;
};

export function ScheduleView({ events, weekStart, initialDay }: ScheduleViewProps) {
  const grouped = useMemo(() => {
    const map: Record<number, CalendarEventRecord[]> = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    events.forEach((ev) => {
      const k = dayKey(ev.startTime as string);
      map[k].push(ev);
    });
    Object.keys(map).forEach((k) => {
      map[Number(k)].sort((a, b) => String(a.startTime).localeCompare(String(b.startTime)));
    });
    return map;
  }, [events]);

  const [active, setActive] = useState(initialDay);
  const activeEvents = grouped[active] || [];

  return (
    <div>
      <p className="mb-6 text-center text-sm text-gray-500">
        Week of{" "}
        {new Date(weekStart).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {DAYS.map((label, idx) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === idx ? "bg-primary text-white" : "bg-[#f8f9fa] text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="rounded-t-xl bg-secondary px-6 py-6 text-center text-white">
        <h3 className="mb-2 font-heading text-[1.75rem] font-bold uppercase">
          {activeEvents[0]?.startTime
            ? dayLabel(activeEvents[0].startTime as string)
            : DAYS[active]}
        </h3>
        <p className="text-sm text-white/80">
          {activeEvents.length} Class{activeEvents.length !== 1 ? "es" : ""} Available
        </p>
      </div>

      <div className="overflow-hidden rounded-b-xl bg-[#f8f9fa]">
        {activeEvents.length === 0 ? (
          <div className="px-6 py-16 text-center text-gray-600">
            <div className="mb-4 text-5xl">😴</div>
            <h4 className="mb-2 text-lg font-semibold text-secondary">No Classes Today</h4>
            <p className="text-sm">Take this time to rest and recover. See you tomorrow!</p>
          </div>
        ) : (
          activeEvents.map((ev, i) => {
            const title = (ev.title as string) || "Class";
            const notes = typeof ev.notes === "string" ? ev.notes : "";
            const status = typeof ev.appointmentStatus === "string" ? ev.appointmentStatus : "";
            const desc = notes || status || "";
            return (
              <div
                key={(ev.id as string) || i}
                className="grid gap-4 border-b border-[#e9ecef] px-6 py-5 last:border-0 md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <div className="font-heading text-2xl font-bold text-primary">
                  {formatTime(ev.startTime as string)}
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-secondary">{title}</h4>
                  <p className="text-sm text-[#6c757d]">{desc}</p>
                </div>
                <div>
                  <span className={getLevelBadgeClass(title)}>{getLevelLabel(title)}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <section
        className="mt-16 rounded-2xl py-16 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #E42416, #C41E1A)",
        }}
      >
        <h2 className="mb-4 font-heading text-3xl font-bold uppercase">Ready to Train?</h2>
        <p className="mx-auto mb-8 max-w-xl text-white/95">
          Book your free trial class and experience 101 Jiu Jitsu & Kickboxing.
        </p>
        <Link
          href="/free-trial"
          className="inline-flex rounded-lg bg-white px-8 py-3 font-bold text-secondary shadow-lg transition-colors hover:bg-gray-100"
        >
          Book Your Free Trial
        </Link>
      </section>
    </div>
  );
}
