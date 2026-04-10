import type { CalendarEventRecord } from "@/lib/ghl-api";

// Accurate weekly schedule from 101jiujitsugoleta.com/schedule
// Displayed as a repeating weekly schedule — no dates shown

export const FALLBACK_SCHEDULE: CalendarEventRecord[] = [
  // ── MONDAY ──────────────────────────────────────────
  { id: "mon-1", title: "Jiu Jitsu", startTime: "2024-01-01T06:30:00", day: 1, notes: "Morning Gi training" },
  { id: "mon-2", title: "No-Gi Jiu Jitsu", startTime: "2024-01-01T12:00:00", day: 1, notes: "Fast-paced grappling without the gi" },
  { id: "mon-3", title: "Kids Boxing", startTime: "2024-01-01T16:00:00", day: 1, notes: "Fun fitness and coordination for kids" },
  { id: "mon-4", title: "Kids No-Gi Grappling", startTime: "2024-01-01T17:00:00", day: 1, notes: "Wrestling and submission grappling for kids" },
  { id: "mon-5", title: "Kickboxing", startTime: "2024-01-01T18:00:00", day: 1, notes: "High-energy striking class" },
  { id: "mon-6", title: "No-Gi Jiu Jitsu", startTime: "2024-01-01T19:00:00", day: 1, notes: "Advanced techniques and rolling" },

  // ── TUESDAY ─────────────────────────────────────────
  { id: "tue-1", title: "Kickboxing", startTime: "2024-01-02T06:00:00", day: 2, notes: "Early morning cardio and striking" },
  { id: "tue-2", title: "Jiu Jitsu", startTime: "2024-01-02T06:30:00", day: 2, notes: "Morning Gi training" },
  { id: "tue-3", title: "Rock Steady Boxing", startTime: "2024-01-02T10:00:00", day: 2, notes: "Boxing-based fitness program" },
  { id: "tue-4", title: "Kickboxing", startTime: "2024-01-02T12:00:00", day: 2, notes: "Lunchtime cardio session" },
  { id: "tue-5", title: "Teens Jiu Jitsu", startTime: "2024-01-02T16:00:00", day: 2, notes: "Technical training for teenagers" },
  { id: "tue-6", title: "Kids Jiu Jitsu (Ages 4-7)", startTime: "2024-01-02T16:00:00", day: 2, notes: "Fun fundamentals for youngest students" },
  { id: "tue-7", title: "Kids Jiu Jitsu (Ages 8-12)", startTime: "2024-01-02T16:45:00", day: 2, notes: "Building skills and confidence" },
  { id: "tue-8", title: "TRX", startTime: "2024-01-02T17:00:00", day: 2, notes: "Suspension training for strength and core" },
  { id: "tue-9", title: "Kickboxing", startTime: "2024-01-02T18:00:00", day: 2, notes: "Evening striking class" },
  { id: "tue-10", title: "Jiu Jitsu Fundamentals", startTime: "2024-01-02T19:00:00", day: 2, notes: "Perfect for beginners — core positions and techniques" },
  { id: "tue-11", title: "Advanced Jiu Jitsu", startTime: "2024-01-02T19:00:00", day: 2, notes: "Competition prep and advanced techniques" },

  // ── WEDNESDAY ───────────────────────────────────────
  { id: "wed-1", title: "Kickboxing", startTime: "2024-01-03T06:00:00", day: 3, notes: "Early morning cardio and striking" },
  { id: "wed-2", title: "Jiu Jitsu", startTime: "2024-01-03T06:30:00", day: 3, notes: "Morning Gi training" },
  { id: "wed-3", title: "Rock Steady Boxing", startTime: "2024-01-03T10:00:00", day: 3, notes: "Boxing-based fitness program" },
  { id: "wed-4", title: "No-Gi Jiu Jitsu", startTime: "2024-01-03T12:00:00", day: 3, notes: "Lunchtime grappling session" },
  { id: "wed-5", title: "Kids Boxing", startTime: "2024-01-03T16:00:00", day: 3, notes: "Fun fitness and coordination for kids" },
  { id: "wed-6", title: "Kids No-Gi Grappling", startTime: "2024-01-03T17:00:00", day: 3, notes: "Wrestling and submission grappling for kids" },
  { id: "wed-7", title: "Kickboxing", startTime: "2024-01-03T18:00:00", day: 3, notes: "Evening striking class" },
  { id: "wed-8", title: "Mixed Martial Arts", startTime: "2024-01-03T18:00:00", day: 3, notes: "Full MMA — striking, wrestling, and submissions" },
  { id: "wed-9", title: "No-Gi Jiu Jitsu", startTime: "2024-01-03T19:00:00", day: 3, notes: "Advanced techniques and rolling" },

  // ── THURSDAY ────────────────────────────────────────
  { id: "thu-1", title: "Kickboxing", startTime: "2024-01-04T06:00:00", day: 4, notes: "Early morning cardio and striking" },
  { id: "thu-2", title: "Jiu Jitsu", startTime: "2024-01-04T06:30:00", day: 4, notes: "Morning Gi training" },
  { id: "thu-3", title: "Rock Steady Boxing", startTime: "2024-01-04T10:00:00", day: 4, notes: "Boxing-based fitness program" },
  { id: "thu-4", title: "Kickboxing", startTime: "2024-01-04T12:00:00", day: 4, notes: "Lunchtime cardio session" },
  { id: "thu-5", title: "Teens Jiu Jitsu", startTime: "2024-01-04T16:00:00", day: 4, notes: "Technical training for teenagers" },
  { id: "thu-6", title: "Kids Jiu Jitsu (Ages 4-7)", startTime: "2024-01-04T16:00:00", day: 4, notes: "Fun fundamentals for youngest students" },
  { id: "thu-7", title: "Kids Jiu Jitsu (Ages 8-12)", startTime: "2024-01-04T16:45:00", day: 4, notes: "Building skills and confidence" },
  { id: "thu-8", title: "TRX", startTime: "2024-01-04T17:00:00", day: 4, notes: "Suspension training for strength and core" },
  { id: "thu-9", title: "Kickboxing", startTime: "2024-01-04T18:00:00", day: 4, notes: "Evening striking class" },
  { id: "thu-10", title: "Jiu Jitsu Fundamentals", startTime: "2024-01-04T19:00:00", day: 4, notes: "Perfect for beginners" },
  { id: "thu-11", title: "Advanced Jiu Jitsu", startTime: "2024-01-04T19:00:00", day: 4, notes: "Competition prep and advanced techniques" },

  // ── FRIDAY ──────────────────────────────────────────
  { id: "fri-1", title: "Sparring", startTime: "2024-01-05T06:00:00", day: 5, notes: "Open sparring — all disciplines welcome" },
  { id: "fri-2", title: "No-Gi Jiu Jitsu", startTime: "2024-01-05T12:00:00", day: 5, notes: "Lunchtime grappling" },
  { id: "fri-3", title: "Sparring", startTime: "2024-01-05T17:30:00", day: 5, notes: "Evening open sparring" },

  // ── SATURDAY ────────────────────────────────────────
  { id: "sat-1", title: "Kids No-Gi Grappling", startTime: "2024-01-06T09:00:00", day: 6, notes: "Weekend kids grappling class" },
  { id: "sat-2", title: "TRX", startTime: "2024-01-06T09:00:00", day: 6, notes: "Suspension training for strength and core" },
  { id: "sat-3", title: "Kickboxing", startTime: "2024-01-06T10:00:00", day: 6, notes: "Weekend striking session" },
  { id: "sat-4", title: "No-Gi: Open To All Gyms", startTime: "2024-01-06T12:00:00", day: 6, notes: "Open mat — all gyms welcome" },

  // ── SUNDAY ──────────────────────────────────────────
  // No classes on Sunday — rest day
];
