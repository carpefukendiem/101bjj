import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Boxing",
  description: "Boxing fundamentals in Goleta — footwork, defense, and combinations at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🥊", title: "Technical Boxing", desc: "Learn the sweet science — jab, cross, hook, uppercut — with proper mechanics and footwork." },
  { icon: "💪", title: "Functional Strength", desc: "Build real punching power through proper technique, not just brute force." },
  { icon: "🔥", title: "Conditioning", desc: "Boxing training is one of the most effective full-body conditioning methods available." },
  { icon: "🛡️", title: "Head Movement & Defense", desc: "Learn to slip, roll, and block — defensive skills that transfer to all striking arts." },
  { icon: "🎯", title: "Pad & Bag Work", desc: "Develop timing, rhythm, and power through mitt sessions and heavy bag rounds." },
  { icon: "👥", title: "All Levels Welcome", desc: "From total beginners to experienced fighters — all skill levels train together." },
];

const classTypes = [
  { title: "Boxing Fundamentals", desc: "Stance, guard, jab-cross-hook-uppercut, and footwork for new students.", level: "Beginner" },
  { title: "Advanced Boxing", desc: "Combination work, sparring, and competition preparation.", level: "Intermediate/Advanced" },
  { title: "Golden Years Boxing", desc: "Low-impact boxing for students 50+. Great for cardio, coordination, and fun.", level: "50+" },
  { title: "Kids Boxing", desc: "Building coordination, confidence, and discipline through age-appropriate boxing.", level: "Kids/Teens" },
];

export default function BoxingPage() {
  return (
    <ProgramPage
      heroImage="/images/boxing-hero.webp"
      title="Boxing"
      titleAccent="Fundamentals"
      subtitle="Build the sweet science from the ground up — footwork, head movement, and crisp combinations."
      benefitsSectionTitle="Why Boxing?"
      benefitsSectionDescription="Develop timing, power, and confidence in the ring and in life."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
