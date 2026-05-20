import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Wrestling",
  description: "Wrestling and grappling training in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🤼", title: "Takedown Mastery", desc: "Learn singles, doubles, high crotches, and level changes — the foundation of wrestling." },
  { icon: "💪", title: "Physical Toughness", desc: "Wrestling builds extraordinary strength, cardio, and mental grit." },
  { icon: "🎯", title: "Top Control", desc: "Dominant top positions, rides, and pinning combinations that control the match." },
  { icon: "⚡", title: "Explosive Athleticism", desc: "Develop explosive hips, fast feet, and powerful core mechanics." },
  { icon: "🛡️", title: "Sprawl & Defense", desc: "Shut down takedown attempts with solid sprawl mechanics and scramble skills." },
  { icon: "🏆", title: "MMA Foundation", desc: "Wrestling is the most valuable base for MMA — control where the fight goes." },
];

const classTypes = [
  { title: "Wrestling Fundamentals", desc: "Stance, level change, setups, and basic takedowns for all experience levels.", level: "All Levels" },
  { title: "Advanced Wrestling", desc: "Competition drilling, live wrestling, and advanced chain wrestling.", level: "Intermediate/Advanced" },
  { title: "Teens Wrestling", desc: "Technical wrestling for teenagers in a structured, competitive environment.", level: "Teens" },
  { title: "Wrestling for BJJ", desc: "Takedowns and top control specifically adapted for the BJJ ruleset.", level: "All Levels" },
];

export default function WrestlingPage() {
  return (
    <ProgramPage
      heroImage="/images/kids-grappling-1.webp"
      title="Wrestling"
      subtitle="Develop takedowns, scrambles, and mat wrestling that pair perfectly with jiu-jitsu and MMA goals."
      benefitsSectionTitle="Why Wrestling?"
      benefitsSectionDescription="The foundation of effective grappling and MMA. Wrestling changes everything."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
