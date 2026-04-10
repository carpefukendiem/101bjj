"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CalendarEventRecord } from "@/lib/ghl-api";

// Mon-first order, matching the live site
const DAYS_ORDERED = [
  { label: "Mon", fullName: "Monday", idx: 1 },
  { label: "Tue", fullName: "Tuesday", idx: 2 },
  { label: "Wed", fullName: "Wednesday", idx: 3 },
  { label: "Thu", fullName: "Thursday", idx: 4 },
  { label: "Fri", fullName: "Friday", idx: 5 },
  { label: "Sat", fullName: "Saturday", idx: 6 },
  { label: "Sun", fullName: "Sunday", idx: 0 },
] as const;

function formatTime(iso?: string): string {
  if (!iso) return "";
  const timePart = iso.includes("T") ? iso.split("T")[1]! : iso;
  const [hourStr, minPart] = timePart.split(":");
  const hour = parseInt(hourStr!, 10);
  const minStr = minPart?.replace(/\D/g, "").slice(0, 2) ?? "0";
  const min = parseInt(minStr, 10);
  if (Number.isNaN(hour)) return "";
  const ampm = hour >= 12 ? "pm" : "am";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const displayMin = min === 0 ? "" : `:${String(min).padStart(2, "0")}`;
  return `${displayHour}${displayMin} ${ampm}`;
}

function eventDayIndex(ev: CalendarEventRecord): number {
  if (typeof ev.day === "number" && ev.day >= 0 && ev.day <= 6) return ev.day;
  const iso = ev.startTime as string | undefined;
  if (!iso) return -1;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return -1;
  return d.getDay();
}

function getLevelBadgeClass(title = ""): string {
  const t = title.toLowerCase();
  const base = "inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold";
  if (t.includes("kids") || t.includes("junior") || t.includes("ages 4") || t.includes("ages 8"))
    return `${base} bg-[#f3e8ff] text-[#7c3aed]`;
  if (t.includes("teen")) return `${base} bg-[#f3e8ff] text-[#7c3aed]`;
  if (t.includes("advanced") || t.includes("competition")) return `${base} bg-[#fee2e2] text-[#991b1b]`;
  if (t.includes("sparring")) return `${base} bg-[#fee2e2] text-[#991b1b]`;
  if (t.includes("fundamental") || t.includes("intro") || t.includes("beginner") || t.includes("rock steady"))
    return `${base} bg-[#dcfce7] text-[#166534]`;
  if (t.includes("open") || t.includes("all gyms")) return `${base} bg-[#dbeafe] text-[#1e40af]`;
  return `${base} bg-[#dcfce7] text-[#166534]`;
}

function getLevelLabel(title = ""): string {
  const t = title.toLowerCase();
  if (t.includes("ages 4")) return "Ages 4–7";
  if (t.includes("ages 8")) return "Ages 8–12";
  if (t.includes("kids")) return "Kids";
  if (t.includes("teen")) return "Teens";
  if (t.includes("advanced")) return "Advanced";
  if (t.includes("sparring")) return "Intermediate+";
  if (t.includes("competition")) return "Advanced";
  if (t.includes("fundamental") || t.includes("beginner") || t.includes("intro")) return "Beginner";
  if (t.includes("rock steady")) return "All Levels";
  if (t.includes("open") || t.includes("all gyms")) return "Open";
  return "All Levels";
}

type Props = { events: CalendarEventRecord[] };

export function ScheduleView({ events }: Props) {
  const [activeIdx, setActiveIdx] = useState(1);

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
      const d = eventDayIndex(ev);
      if (d >= 0 && d <= 6) map[d].push(ev);
    });
    Object.keys(map).forEach((k) => {
      map[Number(k)].sort((a, b) => String(a.startTime).localeCompare(String(b.startTime)));
    });
    return map;
  }, [events]);

  const activeDay = DAYS_ORDERED.find((d) => d.idx === activeIdx)!;
  const activeEvents = grouped[activeIdx] ?? [];

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {DAYS_ORDERED.map((day) => (
          <button
            key={day.label}
            type="button"
            onClick={() => setActiveIdx(day.idx)}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              activeIdx === day.idx
                ? "bg-primary text-white shadow-md"
                : "bg-[#f8f9fa] text-gray-800 hover:bg-gray-200"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl shadow-lg">
        <div className="bg-secondary px-6 py-6 text-center text-white">
          <h3 className="mb-1 font-heading text-[1.75rem] font-bold uppercase leading-tight">
            {activeDay.fullName}
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
              const desc = (ev.notes as string) || "";
              return (
                <div
                  key={(ev.id as string) || i}
                  className="grid items-center gap-4 border-b border-[#e9ecef] px-6 py-5 last:border-0 md:grid-cols-[110px_1fr_auto]"
                >
                  <div className="font-heading text-xl font-bold leading-none text-primary">{time}</div>
                  <div>
                    <h4 className="mb-0.5 font-semibold text-secondary">{title}</h4>
                    {desc ? <p className="text-sm text-[#6c757d]">{desc}</p> : null}
                  </div>
                  <div>
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
        style={{ background: "linear-gradient(135deg, #E42416, #C41E1A)" }}
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
