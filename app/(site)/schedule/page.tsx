import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScheduleView } from "@/components/ScheduleView";
import { addDays, fetchCalendarEventsForWeek, startOfWeekMonday, type CalendarEventRecord } from "@/lib/ghl-api";
import { FALLBACK_SCHEDULE } from "@/lib/schedule-fallback";

export const metadata: Metadata = {
  title: "Class Schedule",
  description:
    "Weekly class schedule at 101 Jiu Jitsu & Kickboxing in Goleta, CA. Jiu-Jitsu, Kickboxing, Boxing, Kids classes and more.",
};

export const dynamic = "force-dynamic";

export default async function SchedulePage() {
  const now = new Date();
  const weekStart = startOfWeekMonday(now);
  let events: CalendarEventRecord[] | null = null;
  let useFallback = false;

  try {
    const weekEnd = addDays(weekStart, 7);
    const result = await fetchCalendarEventsForWeek(weekStart, weekEnd);
    if (result.ok && result.events.length > 0) {
      events = result.events;
    } else {
      useFallback = true;
    }
  } catch {
    useFallback = true;
  }

  return (
    <>
      <PageHero
        scheduleStyle
        backgroundImage="/images/training-photo.jpg"
        title="CLASS"
        titleAccent="SCHEDULE"
        subtitle="Find the perfect class time that fits your schedule. We offer classes 6 days a week."
      />
      <section className="mx-auto max-w-5xl px-4 py-10 lg:py-16">
        <ScheduleView events={useFallback ? FALLBACK_SCHEDULE : (events ?? FALLBACK_SCHEDULE)} />
      </section>
    </>
  );
}
