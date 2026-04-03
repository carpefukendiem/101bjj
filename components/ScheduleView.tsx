"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CalendarEventRecord } from "@/lib/ghl-api";

const DAYS_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

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

/** weekStart = Monday 00:00 local; jsDay = Date.getDay() (Sun=0 … Sat=6). */
function dateForJsDayInWeek(weekStartIso: string, jsDay: number): Date {
  const monday = new Date(weekStartIso);
  const offset = jsDay === 0 ? 6 : jsDay - 1;
  const d = new Date(monday);
  d.setDate(d.getDate() + offset);
  return d;
}

type LevelKey = "all" | "beginner" | "intermediate" | "advanced" | "kids";

function levelDisplay(title: string): { key: LevelKey; label: string } {
  const t = title.toLowerCase();
  if (t.includes("golden years")) return { key: "all", label: "50+" };
  if (t.includes("ages 4-7") || t.includes("(ages 4-7)")) return { key: "kids", label: "Ages 4-7" };
  if (t.includes("ages 8-12") || t.includes("(ages 8-12)")) return { key: "kids", label: "Ages 8-12" };
  if (t.includes("teens")) return { key: "kids", label: "Teens" };
  if (t.includes("kids")) return { key: "kids", label: "Kids" };
  if (t.includes("advanced") || t.includes("fight team")) return { key: "advanced", label: "Advanced" };
  if (t.includes("intermediate") || (t.includes("sparring") && !t.includes("kid")))
    return { key: "intermediate", label: "Intermediate+" };
  if (t.includes("beginner") || t.includes("fundamental")) return { key: "beginner", label: "Beginner" };
  return { key: "all", label: "All Levels" };
}

function LevelBadge({ levelKey, label }: { levelKey: LevelKey; label: string }) {
  const base =
    "inline-block whitespace-nowrap rounded-full px-3 py-1 text-[0.8rem] font-semibold leading-tight";
  const map: Record<LevelKey, string> = {
    all: `${base} bg-blue-100 text-blue-800`,
    beginner: `${base} bg-green-100 text-[#166534]`,
    intermediate: `${base} bg-amber-100 text-[#92400e]`,
    advanced: `${base} bg-red-100 text-[#991b1b]`,
    kids: `${base} bg-purple-100 text-[#7c3aed]`,
  };
  return <span className={map[levelKey]}>{label}</span>;
}

type ScheduleViewProps = {
  events: CalendarEventRecord[];
  weekStart: string;
  initialDay: number;
  apiUnavailable?: boolean;
};

export function ScheduleView({ events, weekStart, initialDay, apiUnavailable }: ScheduleViewProps) {
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
  const anchorDate = dateForJsDayInWeek(weekStart, active);
  const headingDateStr = anchorDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const monthScheduleTitle = useMemo(() => {
    const d = new Date(weekStart);
    return `${d.toLocaleDateString("en-US", { month: "long", year: "numeric" })} Schedule`;
  }, [weekStart]);

  const daySubline =
    active === 0 && activeEvents.length === 0
      ? "Rest & Recovery Day"
      : `${activeEvents.length} Class${activeEvents.length === 1 ? "" : "es"} Available`;

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

      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl font-bold uppercase text-secondary">{monthScheduleTitle}</h2>
        <p className="mt-3 text-gray-600">Click on a day to view all available classes.</p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {DAYS_FULL.map((label, idx) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(idx)}
            className={`cursor-pointer rounded-lg border-none px-4 py-3 text-sm font-semibold transition duration-300 md:px-6 ${
              active === idx ? "bg-primary text-white" : "bg-[#f8f9fa] text-gray-800 hover:bg-[#e9ecef]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-t-xl bg-secondary text-center text-white">
        <div className="px-6 py-6">
          <h3 className="mb-2 font-heading text-[1.75rem] font-bold leading-tight">{headingDateStr}</h3>
          <p className="text-sm opacity-80">{daySubline}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-b-xl bg-[#f8f9fa]">
        {activeEvents.length === 0 ? (
          <div className="px-6 py-12 text-center text-[#6c757d]">
            <p className="text-5xl leading-none">😴</p>
            <h4 className="mt-4 font-heading text-xl font-bold text-secondary">No Classes Today</h4>
            <p className="mt-2 text-sm">Take this time to rest and recover. See you tomorrow!</p>
          </div>
        ) : (
          activeEvents.map((ev, i) => {
            const title = (ev.title as string) || "Class / Appointment";
            const start = formatTime(ev.startTime as string);
            const notes = typeof ev.notes === "string" ? ev.notes : "";
            const status = typeof ev.appointmentStatus === "string" ? ev.appointmentStatus : "";
            const desc = notes || status || "Scheduled session";
            const { key, label } = levelDisplay(title);
            return (
              <div
                key={(ev.id as string) || i}
                className="grid grid-cols-1 items-center gap-2 border-b border-[#e9ecef] px-6 py-5 transition-colors duration-300 last:border-b-0 hover:bg-white md:grid-cols-[120px_1fr_150px] md:gap-6"
              >
                <div className="class-time font-heading text-xl font-semibold text-primary">{start}</div>
                <div className="class-info min-w-0">
                  <h4 className="mb-1 text-lg font-semibold text-secondary">{title}</h4>
                  <p className="text-sm text-[#6c757d]">{desc}</p>
                </div>
                <div className="text-left md:text-right">
                  <LevelBadge levelKey={key} label={label} />
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm md:gap-6">
        <div className="flex items-center gap-2">
          <LevelBadge levelKey="all" label="All Levels" />
          <span className="text-gray-700">Open to everyone</span>
        </div>
        <div className="flex items-center gap-2">
          <LevelBadge levelKey="beginner" label="Beginner" />
          <span className="text-gray-700">New students</span>
        </div>
        <div className="flex items-center gap-2">
          <LevelBadge levelKey="intermediate" label="Intermediate+" />
          <span className="text-gray-700">Some experience</span>
        </div>
        <div className="flex items-center gap-2">
          <LevelBadge levelKey="kids" label="Kids/Teens" />
          <span className="text-gray-700">Age-specific</span>
        </div>
      </div>

      <section className="mt-16 bg-gradient-to-br from-primary to-primary-dark py-16 text-center text-white">
        <h2 className="font-heading text-3xl font-bold uppercase md:text-[2rem]">Ready to Train?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg opacity-95">
          Book your free trial class and experience 101 Jiu Jitsu & Kickboxing
        </p>
        <Link
          href="/free-trial"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5"
        >
          Book Your Free Trial
        </Link>
      </section>
    </div>
  );
}
