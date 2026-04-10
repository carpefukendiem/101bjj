import type { CalendarEventRecord } from "@/lib/ghl-api";
import { startOfWeekMonday } from "@/lib/ghl-api";

/**
 * Build ISO timestamps for the current week, aligned to the same Monday as
 * `startOfWeekMonday` (matches "Week of …" on the schedule page).
 * dayIndex: 0=Sun … 6=Sat
 */
function thisWeekDate(dayIndex: number, hour: number, minute: number): string {
  const monday = startOfWeekMonday(new Date());
  const offsetFromMonday = dayIndex === 0 ? 6 : dayIndex - 1;
  const d = new Date(monday);
  d.setDate(monday.getDate() + offsetFromMonday);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

/** Real class times from the original class-schedule.html — rebuilt each request. */
export function getFallbackSchedule(): CalendarEventRecord[] {
  return [
    { id: "m1", title: "Jiu Jitsu", startTime: thisWeekDate(1, 6, 30), notes: "Morning Gi training – fundamental techniques" },
    { id: "m2", title: "No-Gi Jiu Jitsu", startTime: thisWeekDate(1, 12, 0), notes: "Fast-paced grappling without the gi" },
    { id: "m3", title: "Kids Boxing", startTime: thisWeekDate(1, 16, 0), notes: "Fun fitness and coordination for kids" },
    { id: "m4", title: "Kids No-Gi Grappling", startTime: thisWeekDate(1, 17, 0), notes: "Wrestling and submission grappling for kids" },
    { id: "m5", title: "Kickboxing", startTime: thisWeekDate(1, 18, 0), notes: "High-energy striking class" },
    { id: "m6", title: "No-Gi Jiu Jitsu", startTime: thisWeekDate(1, 19, 0), notes: "Advanced techniques and rolling" },

    { id: "t1", title: "Kickboxing", startTime: thisWeekDate(2, 6, 0), notes: "Early morning cardio and striking" },
    { id: "t2", title: "Jiu Jitsu", startTime: thisWeekDate(2, 6, 30), notes: "Morning Gi training – fundamental techniques" },
    { id: "t3", title: "Golden Years Boxing", startTime: thisWeekDate(2, 10, 0), notes: "Low-impact boxing for 50+" },
    { id: "t4", title: "Rock Steady Boxing", startTime: thisWeekDate(2, 10, 0), notes: "Boxing-based fitness program" },
    { id: "t5", title: "Kickboxing", startTime: thisWeekDate(2, 12, 0), notes: "Lunchtime cardio session" },
    { id: "t6", title: "Kids Boxing", startTime: thisWeekDate(2, 16, 0), notes: "Fun fitness and coordination for kids" },
    { id: "t7", title: "Teens Jiu Jitsu", startTime: thisWeekDate(2, 16, 0), notes: "Technical training for teenagers" },
    { id: "t8", title: "Kids Jiu Jitsu (Ages 4-7)", startTime: thisWeekDate(2, 16, 0), notes: "Fun fundamentals for youngest students" },
    { id: "t9", title: "Kids Jiu Jitsu (Ages 8-12)", startTime: thisWeekDate(2, 17, 0), notes: "Building skills and confidence" },
    { id: "t10", title: "TRX Training", startTime: thisWeekDate(2, 17, 0), notes: "Suspension training for strength and core" },
    { id: "t11", title: "Kickboxing", startTime: thisWeekDate(2, 18, 0), notes: "Evening striking class" },
    { id: "t12", title: "Jiu Jitsu Fundamentals", startTime: thisWeekDate(2, 19, 0), notes: "Perfect for beginners – core positions and techniques" },

    { id: "w1", title: "Kickboxing", startTime: thisWeekDate(3, 6, 0), notes: "Early morning cardio and striking" },
    { id: "w2", title: "Jiu Jitsu", startTime: thisWeekDate(3, 6, 30), notes: "Morning Gi training" },
    { id: "w3", title: "Rock Steady Boxing", startTime: thisWeekDate(3, 10, 0), notes: "Boxing-based fitness program" },
    { id: "w4", title: "No-Gi Jiu Jitsu", startTime: thisWeekDate(3, 12, 0), notes: "Lunchtime grappling session" },
    { id: "w5", title: "Kids Boxing", startTime: thisWeekDate(3, 16, 0), notes: "Fun fitness and coordination for kids" },
    { id: "w6", title: "Kids No-Gi Grappling", startTime: thisWeekDate(3, 17, 0), notes: "Wrestling and submission grappling for kids" },
    { id: "w7", title: "Kickboxing", startTime: thisWeekDate(3, 18, 0), notes: "Evening striking class" },
    { id: "w8", title: "No-Gi Jiu Jitsu", startTime: thisWeekDate(3, 19, 0), notes: "Advanced techniques and rolling" },

    { id: "th1", title: "Kickboxing", startTime: thisWeekDate(4, 6, 0), notes: "Early morning cardio" },
    { id: "th2", title: "Jiu Jitsu", startTime: thisWeekDate(4, 6, 30), notes: "Morning Gi fundamentals" },
    { id: "th3", title: "Rock Steady Boxing", startTime: thisWeekDate(4, 10, 0), notes: "Boxing-based fitness" },
    { id: "th4", title: "Kickboxing", startTime: thisWeekDate(4, 12, 0), notes: "Lunchtime cardio" },
    { id: "th5", title: "Teens Jiu Jitsu", startTime: thisWeekDate(4, 16, 0), notes: "Technical training for teenagers" },
    { id: "th6", title: "Kids Jiu Jitsu (Ages 4-7)", startTime: thisWeekDate(4, 16, 0), notes: "Fun fundamentals for youngest students" },
    { id: "th7", title: "Kids Jiu Jitsu (Ages 8-12)", startTime: thisWeekDate(4, 17, 0), notes: "Building skills and confidence" },
    { id: "th8", title: "Kickboxing", startTime: thisWeekDate(4, 18, 0), notes: "Evening striking" },
    { id: "th9", title: "Jiu Jitsu", startTime: thisWeekDate(4, 19, 0), notes: "Evening Gi training" },

    { id: "f1", title: "Kickboxing", startTime: thisWeekDate(5, 6, 0), notes: "Early morning cardio and striking" },
    { id: "f2", title: "Jiu Jitsu", startTime: thisWeekDate(5, 6, 30), notes: "Morning Gi training" },
    { id: "f3", title: "No-Gi Jiu Jitsu", startTime: thisWeekDate(5, 12, 0), notes: "Lunchtime grappling" },
    { id: "f4", title: "Sparring", startTime: thisWeekDate(5, 17, 30), notes: "Open sparring – all disciplines welcome" },
    { id: "f5", title: "Kickboxing", startTime: thisWeekDate(5, 18, 0), notes: "Evening striking class" },

    { id: "sa1", title: "Kids No-Gi Grappling", startTime: thisWeekDate(6, 9, 0), notes: "Weekend kids grappling class" },
    { id: "sa2", title: "TRX Training", startTime: thisWeekDate(6, 9, 0), notes: "Suspension training – strength and core" },
    { id: "sa3", title: "Kickboxing", startTime: thisWeekDate(6, 10, 0), notes: "Weekend striking session" },
  ];
}
