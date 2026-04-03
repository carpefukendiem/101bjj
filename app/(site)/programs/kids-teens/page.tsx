import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "Kids & Teens",
  description: "Kids and teens martial arts in Goleta — jiu-jitsu, kickboxing, and more at 101 Jiu Jitsu & Kickboxing.",
};

export default function KidsTeensPage() {
  return (
    <ProgramPage
      heroImage="/images/kids-bjj.jpg"
      title="Kids"
      titleAccent="Programs"
      subtitle="Confidence, discipline, and athleticism — taught in a fun, structured environment for ages 4–17."
    >
      <p>
        Our youth programs blend technical training with character development. Students learn to work hard, respect
        partners, and speak up with confidence — skills that carry beyond the mats.
      </p>
    </ProgramPage>
  );
}
