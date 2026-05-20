import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Kids & Teens",
  description: "Kids and teens martial arts in Goleta — jiu-jitsu, kickboxing, and more at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🌟", title: "Confidence & Self-Esteem", desc: "Kids who train martial arts develop unshakeable confidence that carries into every area of life." },
  { icon: "🎯", title: "Focus & Discipline", desc: "Our structured classes teach children to listen, follow directions, and stay present." },
  { icon: "🛡️", title: "Anti-Bullying Skills", desc: "Kids learn verbal de-escalation first, and physical self-defense as a last resort." },
  { icon: "💪", title: "Fitness & Coordination", desc: "Improve strength, flexibility, agility, and coordination through fun, engaging training." },
  { icon: "🤝", title: "Teamwork & Respect", desc: "Learning alongside peers builds sportsmanship, empathy, and mutual respect." },
  { icon: "🏆", title: "Goal Setting", desc: "The belt system teaches kids that hard work and consistency lead to real achievement." },
];

const classTypes = [
  { title: "Kids Jiu Jitsu (Ages 4-7)", desc: "Fun fundamentals focusing on basic movements, games, and listening skills.", level: "Ages 4-7" },
  { title: "Kids Jiu Jitsu (Ages 8-12)", desc: "Technical BJJ with live training in a safe, supervised environment.", level: "Ages 8-12" },
  { title: "Teens Jiu Jitsu", desc: "Advanced techniques, competition prep, and leadership development.", level: "Ages 13-17" },
  { title: "Kids No-Gi Grappling", desc: "Wrestling and submission grappling without the gi — great for energy and athleticism.", level: "Kids" },
  { title: "Kids Boxing", desc: "Fundamental striking, coordination drills, and pad work in a fun setting.", level: "Kids" },
  { title: "Kids Kickboxing", desc: "High-energy striking classes combining punches and kicks with games and drills.", level: "Kids" },
];

export default function KidsTeensPage() {
  return (
    <ProgramPage
      heroImage="/images/kids-bjj.webp"
      title="Kids"
      titleAccent="Programs"
      subtitle="Confidence, discipline, and athleticism — taught in a fun, structured environment for ages 4–17."
      benefitsSectionTitle="Why Kids Martial Arts?"
      benefitsSectionDescription="Give your child skills that last a lifetime — on and off the mats."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
