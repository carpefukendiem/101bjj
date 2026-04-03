import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Wrestling",
  description: "Wrestling and grappling training in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

export default function WrestlingPage() {
  return (
    <ProgramPage
      heroImage="/images/kids-grappling-1.jpg"
      title="Wrestling"
      subtitle="Develop takedowns, scrambles, and mat wrestling that pair perfectly with jiu-jitsu and MMA goals."
    >
      <p>
        Build explosive power and positional dominance with wrestling-focused training designed to complement your
        grappling game.
      </p>
    </ProgramPage>
  );
}
