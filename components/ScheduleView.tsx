"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CalendarEventRecord } from "@/lib/ghl-api";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
const DAY_LABELS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function formatTime(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function dayIndex(iso?: string): number {
  if (!iso) return -1;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return -1;
  return d.getDay();
}

function dayHeadingLabel(iso?: string, dayIdx?: number): string {
  if (!iso) return DAYS[dayIdx ?? 0];
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return DAYS[dayIdx ?? 0];
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getLevelBadgeClass(title = ""): string {
  const t = title.toLowerCase();
  const base = "inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold";
  if (t.includes("kids") || t.includes("junior")) return `${base} bg-[#f3e8ff] text-[#7c3aed]`;
  if (t.includes("teen")) return `${base} bg-[#f3e8ff] text-[#7c3aed]`;
  if (t.includes("advanced") || t.includes("competition") || t.includes("sparring"))
    return `${base} bg-[#fee2e2] text-[#991b1b]`;
  if (t.includes("intermediate")) return `${base} bg-[#fef3c7] text-[#92400e]`;
  if (
    t.includes("beginner") ||
    t.includes("fundamental") ||
    t.includes("intro") ||
    t.includes("golden") ||
    t.includes("50+")
  )
    return `${base} bg-[#dcfce7] text-[#166534]`;
  return `${base} bg-[#dcfce7] text-[#166534]`;
}

function getLevelLabel(title = ""): string {
  const t = title.toLowerCase();
  if (t.includes("ages 4") || t.includes("ages 5") || t.includes("junior")) return "Ages 4-7";
  if (t.includes("ages 8")) return "Ages 8-12";
  if (t.includes("kids")) return "Kids";
  if (t.includes("teen")) return "Teens";
  if (t.includes("advanced") || t.includes("competition")) return "Advanced";
  if (t.includes("sparring")) return "Intermediate+";
  if (t.includes("intermediate")) return "Intermediate";
  if (t.includes("beginner") || t.includes("intro")) return "Beginner";
  if (t.includes("fundamental")) return "All Levels";
  if (t.includes("golden") || t.includes("50+")) return "50+";
  return "All Levels";
}

type Props = { events: CalendarEventRecord[]; weekStart: string };

export function ScheduleView({ events, weekStart }: Props) {
  const grouped = useMemo(() => {
    const map: Record<number, CalendarEventRecord[]> = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };
    events.forEach((ev) => {
      const idx = dayIndex(ev.startTime as string);
      if (idx >= 0) map[idx].push(ev);
    });
    Object.keys(map).forEach((k) => {
      map[Number(k)].sort((a, b) => String(a.startTime).localeCompare(String(b.startTime)));
    });
    return map;
  }, [events]);

  const todayIdx = new Date().getDay();
  const [active, setActive] = useState(todayIdx === 0 ? 1 : todayIdx);

  const activeEvents = grouped[active] ?? [];

  return (
    <div>
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-500">
          Week of{" "}
          {new Date(weekStart).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {DAY_LABELS_SHORT.map((label, idx) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === idx
                ? "bg-primary text-white shadow-md"
                : "bg-[#f8f9fa] text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl shadow-lg">
        <div className="bg-secondary px-6 py-6 text-center text-white">
          <h3 className="mb-1 font-heading text-[1.75rem] font-bold uppercase leading-tight">
            {activeEvents[0]?.startTime
              ? dayHeadingLabel(activeEvents[0].startTime as string, active)
              : `${DAYS[active]}`}
          </h3>
          <p className="text-sm text-white/80">
            {activeEvents.length > 0
              ? `${activeEvents.length} Class${activeEvents.length !== 1 ? "es" : ""} Available`
              : "Rest & Recovery Day"}
          </p>
        </div>

        <div className="bg-[#f8f9fa]">
          {activeEvents.length === 0 ? (
            <div className="px-6 py-16 text-center text-gray-600">
              <div className="mb-4 text-5xl">😴</div>
              <h4 className="mb-2 text-lg font-semibold text-secondary">No Classes Today</h4>
              <p className="text-sm">Take this time to rest and recover. See you tomorrow!</p>
            </div>
          ) : (
            activeEvents.map((ev, i) => {
              const title = (ev.title as string) || "Class";
              const time = formatTime(ev.startTime as string);
              const desc = (ev.notes as string) || (ev.appointmentStatus as string) || "";
              return (
                <div
                  key={(ev.id as string) || i}
                  className="grid items-center gap-4 border-b border-[#e9ecef] px-6 py-5 last:border-0 md:grid-cols-[120px_1fr_auto]"
                >
                  <div className="font-heading text-2xl font-bold leading-none text-primary">{time}</div>
                  <div>
                    <h4 className="mb-1 font-semibold text-secondary">{title}</h4>
                    {desc ? <p className="text-sm text-[#6c757d]">{desc}</p> : null}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={getLevelBadgeClass(title)}>{getLevelLabel(title)}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div
        className="mt-16 rounded-2xl px-8 py-16 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #E42416, #C41E1A)",
        }}
      >
        <h2 className="mb-4 font-heading text-3xl font-bold uppercase">Ready to Train?</h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-white/95">
          Book your free trial class and experience 101 Jiu Jitsu &amp; Kickboxing. No commitment. No credit card.
        </p>
        <Link
          href="/free-trial"
          className="inline-flex rounded-lg bg-white px-8 py-3 font-bold text-secondary shadow-lg transition hover:bg-gray-100"
        >
          Book Your Free Trial
        </Link>
      </div>
    </div>
  );
}
