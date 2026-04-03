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

type ScheduleViewProps = {
  events: CalendarEventRecord[];
  weekStart: string;
};

export function ScheduleView({ events, weekStart }: ScheduleViewProps) {
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
      <p className="mb-6 text-center text-sm text-gray-600">
        Week of{" "}
        {new Date(weekStart).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {DAYS.map((label, idx) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              active === idx ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-secondary text-center text-white">
        <div className="px-4 py-4">
          <h3 className="font-heading text-xl font-bold uppercase">
            {activeEvents[0]?.startTime ? dayLabel(activeEvents[0].startTime as string) : DAYS[active]}
          </h3>
          <p className="text-sm text-white/80">
            {activeEvents.length} event{activeEvents.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>
      <div className="rounded-b-xl bg-gray-100">
        {activeEvents.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-600">
            <p className="text-3xl">📅</p>
            <p className="mt-2 font-medium">No calendar entries this day</p>
            <p className="text-sm">Try another day or book a free class to get started.</p>
          </div>
        ) : (
          activeEvents.map((ev, i) => {
            const title = (ev.title as string) || "Class / Appointment";
            const start = formatTime(ev.startTime as string);
            const status = (ev.appointmentStatus as string) || "Scheduled";
            return (
              <div
                key={(ev.id as string) || i}
                className="grid gap-4 border-b border-gray-200 px-4 py-4 last:border-0 md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <div className="font-heading text-lg font-semibold text-primary">{start}</div>
                <div>
                  <h4 className="font-semibold text-secondary">{title}</h4>
                  <p className="text-sm text-gray-600">{status}</p>
                </div>
                <div className="md:text-right">
                  <Link
                    href={`/free-trial?program=${encodeURIComponent(title)}`}
                    className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
                  >
                    Book This Class
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
