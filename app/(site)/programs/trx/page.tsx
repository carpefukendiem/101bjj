import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "TRX Training",
  description: "TRX suspension training in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "💪", title: "Functional Strength", desc: "TRX uses your body weight to build real-world strength and stability." },
  { icon: "🔥", title: "Core Stability", desc: "Every TRX exercise engages the core — build a rock-solid foundation." },
  { icon: "⚡", title: "Low Impact", desc: "Joint-friendly training that's tough but safe for all body types and fitness levels." },
  { icon: "🎯", title: "Scalable Intensity", desc: "Adjust difficulty by changing your angle — beginners and advanced athletes train together." },
  { icon: "🤸", title: "Flexibility & Mobility", desc: "Improve range of motion and body awareness through dynamic movement patterns." },
  { icon: "🏆", title: "Cross-Training Benefit", desc: "Complement your martial arts training with athletic strength and injury prevention." },
];

const classTypes = [
  { title: "TRX Fundamentals", desc: "Learn proper form on the core TRX exercises in a beginner-friendly session.", level: "All Levels" },
  { title: "TRX Circuit", desc: "High-intensity full-body circuits for maximum calorie burn and functional fitness.", level: "All Levels" },
  { title: "TRX for Martial Arts", desc: "Exercises specifically designed to improve grappling strength and explosive power.", level: "All Levels" },
];

export default function TrxPage() {
  return (
    <ProgramPage
      heroImage="/images/trx-hero.jpg"
      title="TRX"
      titleAccent="Training"
      subtitle="Functional strength and core stability using suspension training — scalable for every level."
      benefitsSectionTitle="Why TRX?"
      benefitsSectionDescription="Suspension training delivers results for everyone from beginners to elite athletes."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
