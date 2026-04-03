import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "MMA Training",
  description: "Mixed martial arts training in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

export default function MmaPage() {
  return (
    <ProgramPage
      heroImage="/images/training-photo.jpg"
      title="MMA"
      titleAccent="Training"
      subtitle="Combine striking, wrestling, and grappling into complete mixed martial arts development."
    >
      <p>
        For students who want the full picture, MMA training connects the systems you already practice into cohesive
        skill-building and controlled drilling.
      </p>
    </ProgramPage>
  );
}
