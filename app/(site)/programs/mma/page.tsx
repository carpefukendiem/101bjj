import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "MMA Training",
  description: "Mixed martial arts training in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🥊", title: "Complete Fighter Development", desc: "Striking, wrestling, and submissions integrated into one fluid system." },
  { icon: "💪", title: "Elite Conditioning", desc: "MMA training is the most demanding and complete athletic conditioning available." },
  { icon: "🎯", title: "Tactical Intelligence", desc: "Learn to read fights, create openings, and control the pace and position." },
  { icon: "🛡️", title: "Proven Self-Defense", desc: "Real-world application combining the best of all martial arts disciplines." },
  { icon: "⚡", title: "Competition Ready", desc: "We train fighters for amateur and professional MMA competition." },
  { icon: "🏆", title: "World-Class Coaches", desc: "Learn from coaches with real competition and teaching experience across all disciplines." },
];

const classTypes = [
  { title: "MMA Fundamentals", desc: "Striking-to-grappling transitions, clinch work, and ground-and-pound basics.", level: "All Levels" },
  { title: "Advanced MMA", desc: "Full contact drilling, sparring, and competition preparation.", level: "Intermediate/Advanced" },
  { title: "MMA Conditioning", desc: "Fight-specific conditioning: circuits, bag work, and explosive movement.", level: "All Levels" },
  { title: "Fight Team", desc: "Invitation-only program for competitive athletes preparing for amateur or pro bouts.", level: "Advanced" },
];

export default function MmaPage() {
  return (
    <ProgramPage
      heroImage="/images/training-photo.webp"
      title="MMA"
      titleAccent="Training"
      subtitle="Combine striking, wrestling, and grappling into complete mixed martial arts development."
      benefitsSectionTitle="Why MMA?"
      benefitsSectionDescription="Train complete mixed martial arts under one roof."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
