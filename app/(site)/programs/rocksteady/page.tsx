import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Rocksteady Boxing",
  description: "Rocksteady Boxing program in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

export default function RocksteadyPage() {
  return (
    <ProgramPage
      heroImage="/images/boxing-1.webp"
      title="Rocksteady"
      titleAccent="Boxing"
      subtitle="Non-contact boxing-inspired fitness for Parkinson's and movement challenges — coached with care."
    >
      <p>
        Rocksteady Boxing uses adapted boxing drills to support balance, coordination, and confidence. Reach out to
        learn about class times and enrollment.
      </p>
    </ProgramPage>
  );
}
