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
  return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
}

type LevelKey = "all" | "beginner" | "intermediate" | "advanced" | "kids";

function inferLevelFromTitle(title: string): LevelKey {
  const t = title.toLowerCase();
  if (t.includes("kids") || t.includes("kid ")) return "kids";
  if (t.includes("advanced")) return "advanced";
  if (t.includes("beginner") || t.includes("fundamental")) return "beginner";
  if (t.includes("intermediate")) return "intermediate";
  return "all";
}

function LevelBadge({ level }: { level: LevelKey }) {
  const base = "inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold";
  const map: Record<LevelKey, string> = {
    all: `${base} bg-green-100 text-[#166534]`,
    beginner: `${base} bg-green-100 text-[#166534]`,
    intermediate: `${base} bg-amber-100 text-[#92400e]`,
    advanced: `${base} bg-red-100 text-[#991b1b]`,
    kids: `${base} bg-purple-100 text-[#7c3aed]`,
  };
  const labels: Record<LevelKey, string> = {
    all: "All Levels",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    kids: "Kids",
  };
  return <span className={map[level]}>{labels[level]}</span>;
}

type ScheduleViewProps = {
  events: CalendarEventRecord[];
  weekStart: string;
  apiUnavailable?: boolean;
};

export function ScheduleView({ events, weekStart, apiUnavailable }: ScheduleViewProps) {
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

  const [active, setActive] = useState(1);

  const activeEvents = grouped[active] || [];

  return (
    <div>
      {apiUnavailable ? (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-secondary">
          Live calendar is temporarily unavailable — browse days below or{" "}
          <Link href="/free-trial" className="font-semibold text-primary underline">
            book a free trial
          </Link>
          .
        </div>
      ) : null}

      <p className="mb-6 text-center text-sm text-gray-600">
        Week of{" "}
        {new Date(weekStart).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="mb-10 text-center">
        <h2 className="font-heading text-2xl font-bold uppercase text-secondary md:text-3xl">
          Weekly Schedule
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {DAYS.map((label, idx) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(idx)}
            className={`cursor-pointer rounded-lg border-none px-4 py-2 text-sm font-semibold transition duration-300 ${
              active === idx ? "bg-primary text-white" : "bg-[#f8f9fa] text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-t-xl bg-secondary text-center text-white">
        <div className="px-6 py-6">
          <h3 className="mb-2 font-heading text-[1.75rem] font-bold leading-tight">
            {activeEvents[0]?.startTime ? dayLabel(activeEvents[0].startTime as string) : DAYS[active]}
          </h3>
          <p className="text-sm text-white/80">
            {activeEvents.length} Class{activeEvents.length === 1 ? "" : "es"} Available
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-b-xl bg-[#f8f9fa]">
        {activeEvents.length === 0 ? (
          <div className="px-6 py-16 text-center text-gray-600">
            <p className="text-4xl">😴</p>
            <h4 className="mt-4 font-heading text-xl font-bold text-secondary">No Classes Today</h4>
            <p className="mt-2 text-sm text-gray-600">
              Take this time to rest and recover. See you tomorrow!
            </p>
          </div>
        ) : (
          activeEvents.map((ev, i) => {
            const title = (ev.title as string) || "Class / Appointment";
            const start = formatTime(ev.startTime as string);
            const notes = typeof ev.notes === "string" ? ev.notes : "";
            const status = typeof ev.appointmentStatus === "string" ? ev.appointmentStatus : "";
            const desc = notes || status || "Scheduled session";
            const level = inferLevelFromTitle(title);
            return (
              <div
                key={(ev.id as string) || i}
                className="grid grid-cols-1 items-center gap-4 border-b border-[#e9ecef] px-6 py-5 last:border-b-0 md:grid-cols-[120px_1fr_auto]"
              >
                <div className="class-time font-heading text-2xl font-bold text-primary">{start}</div>
                <div className="class-info min-w-0">
                  <h4 className="mb-1 font-semibold text-secondary">{title}</h4>
                  <p className="text-sm text-[#6c757d]">{desc}</p>
                </div>
                <div className="md:text-right">
                  <LevelBadge level={level} />
                </div>
              </div>
            );
          })
        )}
      </div>

      <section className="mt-16 bg-gradient-to-br from-primary to-primary-dark py-16 text-center text-white">
        <h2 className="font-heading text-3xl font-bold uppercase">Ready to Train?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/95">
          Book your free trial class and experience 101 Jiu Jitsu & Kickboxing
        </p>
        <Link
          href="/free-trial"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 font-bold text-secondary shadow-lg transition hover:bg-gray-100"
        >
          Book Your Free Trial
        </Link>
      </section>
    </div>
  );
}
