import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Brazilian Jiu-Jitsu",
  description: "Brazilian Jiu-Jitsu classes in Goleta — gi and no-gi, all levels at 101 Jiu Jitsu & Kickboxing.",
};

export default function JiuJitsuPage() {
  return (
    <ProgramPage
      heroImage="/images/jiu-jitsu.jpg"
      title="Brazilian"
      titleAccent="Jiu-Jitsu"
      subtitle="Master leverage, control, and submissions with structured classes for beginners through advanced students."
    >
      <p>
        Our Brazilian Jiu-Jitsu program builds real grappling skill through positional drilling, live training, and
        coaching that meets you where you are. Train gi and no-gi in a supportive, ego-free room.
      </p>
      <p className="mt-4">
        Whether your goals are fitness, self-defense, or competition, you&apos;ll progress with clear fundamentals
        and challenging rounds.
      </p>
    </ProgramPage>
  );
}
