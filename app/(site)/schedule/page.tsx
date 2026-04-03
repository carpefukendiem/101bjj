import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScheduleView } from "@/components/ScheduleView";
import {
  addDays,
  fetchCalendarEventsForWeek,
  startOfWeekMonday,
} from "@/lib/ghl-api";

export const metadata: Metadata = {
  title: "Class Schedule",
  description: "Weekly class schedule at 101 Jiu Jitsu & Kickboxing in Goleta, CA.",
};

export const dynamic = "force-dynamic";

export default async function SchedulePage() {
  const now = new Date();
  const weekStart = startOfWeekMonday(now);
  const weekEnd = addDays(weekStart, 7);
  const result = await fetchCalendarEventsForWeek(weekStart, weekEnd);

  return (
    <>
      <PageHero
        backgroundImage="/images/training-photo.jpg"
        title="Class"
        titleAccent="Schedule"
        subtitle="Plan your week — book a free class to get started."
      />
      <section className="mx-auto max-w-4xl px-4 py-16">
        {result.ok ? (
          <ScheduleView events={result.events} weekStart={weekStart.toISOString()} />
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-10 text-center">
            <p className="text-lg font-semibold text-secondary">Schedule temporarily unavailable</p>
            <p className="mt-2 text-gray-700">
              Please call us or visit our booking page to reserve your first class.
            </p>
            <Link
              href="/free-trial"
              className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark"
            >
              Book a free class
            </Link>
            <p className="mt-4 text-xs text-gray-500">{result.error}</p>
          </div>
        )}
      </section>
    </>
  );
}
