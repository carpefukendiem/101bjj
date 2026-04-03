import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Kickboxing",
  description: "Adult and teen kickboxing classes in Goleta — cardio, technique, and confidence at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🥊", title: "Real Striking Skills", desc: "Learn punches, kicks, elbows, and knees with proper form and power generation." },
  { icon: "🔥", title: "Incredible Cardio", desc: "High-energy classes burn 600-900 calories while building functional athleticism." },
  { icon: "🛡️", title: "Self-Defense Ready", desc: "Practical striking combinations that work in real-world situations." },
  { icon: "👥", title: "All Fitness Levels", desc: "Modifications available so anyone from day one to seasoned athletes can train together." },
  { icon: "⚡", title: "Fast Results", desc: "See and feel the difference in strength, confidence, and endurance within weeks." },
  { icon: "🎯", title: "Expert Instruction", desc: "Experienced coaches break down technique step by step for safe, effective learning." },
];

const classTypes = [
  { title: "Kickboxing Fundamentals", desc: "Master stance, footwork, and basic combinations in a beginner-friendly format.", level: "All Levels" },
  { title: "Advanced Kickboxing", desc: "Complex combinations, pad work, and sparring for experienced students.", level: "Intermediate/Advanced" },
  { title: "Kids Kickboxing", desc: "Age-appropriate striking and movement classes that build confidence and fitness.", level: "Ages 5-17" },
  { title: "Evening Cardio Kickboxing", desc: "High-energy evening classes focused on conditioning and stress relief.", level: "All Levels" },
];

export default function KickboxingPage() {
  return (
    <ProgramPage
      heroImage="/images/hero-kickboxing.jpg"
      title="Adult"
      titleAccent="Kickboxing"
      subtitle="High-energy striking classes that build conditioning, coordination, and real technique."
      benefitsSectionTitle="Why Kickboxing?"
      benefitsSectionDescription="The perfect combination of cardio, strength, and practical skill."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
