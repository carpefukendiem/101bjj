import type { Metadata } from "next";
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

  const events = result.ok ? result.events : [];
  const apiUnavailable = !result.ok;
  const initialDay = now.getDay();

  return (
    <>
      <PageHero
        scheduleStyle
        backgroundImage="/images/training-photo.jpg"
        title="Class"
        titleAccent="Schedule"
        subtitle="Find the perfect class time that fits your schedule. We offer classes 6 days a week."
      />
      <section className="mx-auto max-w-[1280px] px-8 py-16">
        <ScheduleView
          events={events}
          weekStart={weekStart.toISOString()}
          initialDay={initialDay}
          apiUnavailable={apiUnavailable}
        />
      </section>
    </>
  );
}
