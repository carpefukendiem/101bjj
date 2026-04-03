import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Boxing",
  description: "Boxing fundamentals in Goleta — footwork, defense, and combinations at 101 Jiu Jitsu & Kickboxing.",
};

export default function BoxingPage() {
  return (
    <ProgramPage
      heroImage="/images/boxing-hero.jpg"
      title="Boxing"
      titleAccent="Fundamentals"
      subtitle="Build the sweet science from the ground up — footwork, head movement, and crisp combinations."
    >
      <p>
        Perfect for fitness or competitive goals, our boxing program emphasizes mechanics, timing, and controlled
        drilling so you improve every session.
      </p>
    </ProgramPage>
  );
}
