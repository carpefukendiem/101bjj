import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Brazilian Jiu-Jitsu",
  description: "Brazilian Jiu-Jitsu classes in Goleta — gi and no-gi, all levels at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🥋", title: "Gi & No-Gi Training", desc: "Train in both traditional gi and no-gi formats to develop a complete grappling game." },
  { icon: "🏆", title: "All Skill Levels", desc: "Whether you're a complete beginner or experienced grappler, our structured curriculum meets you where you are." },
  { icon: "💪", title: "Real Self-Defense", desc: "BJJ is proven in real-world situations. Learn techniques that work based on leverage, not strength." },
  { icon: "🤝", title: "Supportive Community", desc: "Train in a positive, ego-free environment where everyone helps each other improve." },
  { icon: "🎯", title: "Structured Curriculum", desc: "Clear progression from white belt fundamentals through advanced techniques and competition prep." },
  { icon: "⚡", title: "Full-Body Fitness", desc: "Improve cardio, strength, flexibility, and coordination through dynamic mat training." },
];

const classTypes = [
  { title: "Fundamentals (Gi)", desc: "Perfect for beginners. Learn core positions, escapes, and submissions in a structured environment.", level: "All Levels" },
  { title: "Advanced (Gi)", desc: "Drilling, live training, and competition preparation for experienced practitioners.", level: "Intermediate/Advanced" },
  { title: "No-Gi Jiu Jitsu", desc: "Fast-paced grappling without the gi, great for MMA cross-training and sport submission wrestling.", level: "All Levels" },
  { title: "Open Mat", desc: "Unstructured rolling sessions to apply what you've learned against training partners of all levels.", level: "All Levels" },
];

export default function JiuJitsuPage() {
  return (
    <ProgramPage
      heroImage="/images/jiu-jitsu.webp"
      title="Brazilian"
      titleAccent="Jiu-Jitsu"
      subtitle="Master leverage, control, and submissions with structured classes for beginners through advanced students."
      benefitsSectionTitle="Why Brazilian Jiu-Jitsu?"
      benefitsSectionDescription="Discover what makes BJJ one of the most effective martial arts in the world."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
