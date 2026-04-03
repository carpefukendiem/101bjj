import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export type ProgramBenefit = {
  icon: string;
  title: string;
  desc: string;
};

export type ProgramClassType = {
  title: string;
  desc: string;
  level: string;
};

function levelBadgeClass(level: string): string {
  const l = level.toLowerCase();
  if (l.includes("kid") || l.includes("ages") || l.includes("teen"))
    return "bg-purple-100 text-[#7c3aed]";
  if (l.includes("advanced") || l.includes("fight team"))
    return "bg-red-100 text-[#991b1b]";
  if (l.includes("intermediate"))
    return "bg-amber-100 text-[#92400e]";
  if (l.includes("beginner") || l.includes("fundamental") || l.includes("50+"))
    return "bg-green-100 text-[#166534]";
  return "bg-green-100 text-[#166534]";
}

type ProgramPageProps = {
  heroImage: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  benefitsSectionTitle: string;
  benefitsSectionDescription: string;
  benefits: ProgramBenefit[];
  classTypes: ProgramClassType[];
};

export function ProgramPage({
  heroImage,
  title,
  titleAccent,
  subtitle,
  benefitsSectionTitle,
  benefitsSectionDescription,
  benefits,
  classTypes,
}: ProgramPageProps) {
  return (
    <>
      <PageHero
        backgroundImage={heroImage}
        title={title}
        titleAccent={titleAccent}
        subtitle={subtitle}
      />

      <section className="section py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="section-header mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold uppercase text-secondary md:text-4xl">
              {benefitsSectionTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">{benefitsSectionDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="feature-box rounded-2xl border-2 border-transparent bg-[#f8f9fa] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="feature-icon mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[20px] bg-gradient-to-br from-primary to-primary-dark text-4xl">
                  {b.icon}
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold text-secondary">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f8f9fa] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="section-header mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold uppercase text-secondary md:text-4xl">
              Class Types
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Find the right class for your experience level and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {classTypes.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border-2 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-xl font-bold text-secondary">{c.title}</h3>
                  <span
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${levelBadgeClass(c.level)}`}
                  >
                    {c.level}
                  </span>
                </div>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-3xl font-bold uppercase md:text-4xl">Ready to Train?</h2>
          <p className="mt-4 text-lg text-white/95">
            Book your free trial class and experience 101 Jiu Jitsu & Kickboxing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/free-trial"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-white px-8 py-3 font-bold text-secondary shadow-lg transition hover:bg-gray-100"
            >
              Book Your Free Trial
            </Link>
            <Link
              href="/schedule"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition hover:bg-white hover:text-secondary"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
