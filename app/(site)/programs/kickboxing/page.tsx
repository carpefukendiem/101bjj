import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Kickboxing",
  description: "Adult and teen kickboxing classes in Goleta — cardio, technique, and confidence at 101 Jiu Jitsu & Kickboxing.",
};

export default function KickboxingPage() {
  return (
    <ProgramPage
      heroImage="/images/hero-kickboxing.jpg"
      title="Adult"
      titleAccent="Kickboxing"
      subtitle="High-energy striking classes that build conditioning, coordination, and real technique."
    >
      <p>
        Burn calories, relieve stress, and learn practical striking in classes designed for all levels. Expect
        structured rounds, bag work, partner drills, and coaching that keeps you challenged and safe.
      </p>
    </ProgramPage>
  );
}
