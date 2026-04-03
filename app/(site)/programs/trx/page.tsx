import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "TRX Training",
  description: "TRX suspension training in Goleta at 101 Jiu Jitsu & Kickboxing.",
};

export default function TrxPage() {
  return (
    <ProgramPage
      heroImage="/images/trx-hero.jpg"
      title="TRX"
      titleAccent="Training"
      subtitle="Functional strength and core stability using suspension training — scalable for every level."
    >
      <p>
        TRX sessions build the kind of strength that supports martial arts performance: grip, trunk control, and
        full-body coordination without gimmicks.
      </p>
    </ProgramPage>
  );
}
