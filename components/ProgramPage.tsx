import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

type ProgramPageProps = {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  heroImage: string;
  children: ReactNode;
};

export function ProgramPage({ title, titleAccent, subtitle, heroImage, children }: ProgramPageProps) {
  return (
    <>
      <PageHero
        backgroundImage={heroImage}
        title={title}
        titleAccent={titleAccent}
        subtitle={subtitle}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 leading-relaxed text-gray-700">
        {children}
        <div className="mt-12 text-center">
          <Link
            href="/free-trial"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary-dark"
          >
            Try A Free Class
          </Link>
        </div>
      </article>
    </>
  );
}
