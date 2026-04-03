import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Rocksteady Boxing",
  description: "Rocksteady Boxing program in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

const benefits = [
  { icon: "🥊", title: "Boxing Fundamentals", desc: "The same technical boxing curriculum taught in our competition boxing program, adapted for fitness." },
  { icon: "🔥", title: "Extreme Cardio", desc: "Rocksteady Boxing is one of the highest-calorie-burning fitness classes available." },
  { icon: "😄", title: "Fun & Social", desc: "Train to music in a group environment that feels more like a party than a workout." },
  { icon: "💪", title: "Tone & Strengthen", desc: "Build lean muscle and burn fat through constant movement and resistance." },
  { icon: "🛡️", title: "Real Boxing Skills", desc: "You will actually learn to box — not just shadow box. Real technique, real results." },
  { icon: "👥", title: "All Fitness Levels", desc: "Whether you've never thrown a punch or you're a seasoned athlete, you'll fit right in." },
];

const classTypes = [
  { title: "Rocksteady Boxing", desc: "The full Rocksteady experience — music, combinations, pads, and bags.", level: "All Levels" },
  { title: "Rocksteady Cardio", desc: "Non-contact cardio boxing for maximum calorie burn without sparring or contact.", level: "All Levels" },
  { title: "Morning Rocksteady", desc: "Early bird sessions to start your day with energy and endorphins.", level: "All Levels" },
];

export default function RocksteadyPage() {
  return (
    <ProgramPage
      heroImage="/images/boxing-1.webp"
      title="Rocksteady"
      titleAccent="Boxing"
      subtitle="High-energy boxing fitness to music — real technique, extreme cardio, and a fun group atmosphere."
      benefitsSectionTitle="Why Rocksteady Boxing?"
      benefitsSectionDescription="High-energy boxing fitness in a welcoming, music-driven environment."
      benefits={benefits}
      classTypes={classTypes}
    />
  );
}
