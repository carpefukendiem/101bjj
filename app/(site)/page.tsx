import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "101 Jiu Jitsu & Kickboxing in Goleta — formerly Paragon Goleta. Brazilian Jiu-Jitsu, kickboxing, kids programs, and a family-friendly martial arts academy.",
};

/** Same file for hero (autoplay background) and Gym Highlights (controls). */
const HOME_HERO_VIDEO = "/media/101-jiu-jitsu-homepage-video.mp4";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-20 md:pt-24">
        <video
          className="absolute inset-0 z-0 h-full min-h-full w-full min-w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/gym-1.jpg"
        >
          <source src={HOME_HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-12 text-center md:max-w-4xl">
          <p
            className="mb-4 text-lg italic text-white md:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            A Mixed Martial Arts Academy For The Entire Family
          </p>

          <Image
            src="/images/logo.png"
            alt="101 Jiu Jitsu & Kickboxing"
            width={200}
            height={200}
            priority
            className="mx-auto h-[120px] w-auto md:h-[180px]"
          />

          <div className="mt-8 w-full rounded-2xl bg-white/95 px-4 py-8 text-left shadow-2xl md:px-10">
            <p className="text-sm font-medium uppercase tracking-wide text-secondary/80">
              Formerly Paragon Goleta, we are proud to introduce our new name:
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold uppercase tracking-wide text-secondary md:text-4xl">
              101 Jiu Jitsu & Kickboxing
            </h1>
            <p className="mt-4 text-gray-700">
              While our name has changed, everything else remains the same — the same location, the same
              team, the same coaches, the same staff, the same gym, and the same commitment to hard work
              and dedication.
            </p>
            <p className="mt-4 text-gray-700">
              Our mission has always been to provide a safe, family-friendly environment where students of
              all ages can grow in confidence, discipline, and skill. That hasn&apos;t changed.
            </p>
            <p className="mt-4 text-gray-700">
              If you&apos;ve trained with us before, you&apos;re home. If you&apos;re new here, welcome —
              we can&apos;t wait to meet you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
              >
                Try A Free Class
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center rounded-lg border-2 border-secondary bg-transparent px-8 py-3 font-semibold text-secondary transition hover:bg-secondary hover:text-white"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="gym-highlights-heading">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center">
            <h2 id="gym-highlights-heading" className="font-heading text-3xl font-bold uppercase text-secondary">
              Gym Highlights
            </h2>
            <p className="mt-2 text-gray-600">
              A real training clip from our academy — play, pause, and scrub with full controls.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-xl">
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/gym-2.jpg"
            >
              <source src={HOME_HERO_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold uppercase text-secondary">Program Spotlight</h2>
            <p className="mt-2 text-gray-600">Full-width highlights — same energy as the live site.</p>
          </div>
        </div>
        <ProgramBand
          href="/programs/kickboxing"
          title="Kickboxing"
          description="High-energy classes for adults and teens focused on cardio, striking technique, and confidence under pressure."
          image="/images/kickboxing-card.jpg"
        />
        <ProgramBand
          href="/programs/jiu-jitsu"
          title="Brazilian Jiu Jitsu"
          description="Build real grappling skill through fundamentals, positional control, and live training in a supportive team environment."
          image="/images/jiu-jitsu.jpg"
        />
        <ProgramBand
          href="/programs/kids-teens"
          title="Kids Programs"
          description="Age-specific martial arts classes that develop discipline, confidence, and athleticism while keeping training fun and structured."
          image="/images/kids-bjj.jpg"
        />
      </section>

      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase">Why Train at 101?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            We&apos;re not just another gym. We&apos;re a community dedicated to helping you become your best
            self.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { t: "Expert Coaching", d: "Learn from experienced instructors in a structured, safe environment." },
              { t: "All Ages & Levels", d: "Programs for kids, teens, and adults — from first day to competition." },
              { t: "Prime Goleta Location", d: "5940 Calle Real with parking and easy access from Santa Barbara & IV." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-primary">{x.t}</h3>
                <p className="mt-2 text-sm text-white/75">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-center text-white">
        <h2 className="font-heading text-3xl font-bold uppercase">Ready to start?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/95">
          Book a free class and see why families choose 101 Jiu Jitsu & Kickboxing.
        </p>
        <Link
          href="/free-trial"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 font-bold text-secondary shadow-lg hover:bg-gray-100"
        >
          Start Free Trial
        </Link>
      </section>
    </>
  );
}

function ProgramBand({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <div className="relative my-4 flex min-h-[50vh] items-center bg-secondary">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 text-white md:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Program Spotlight</p>
        <h3 className="mt-2 font-heading text-4xl font-bold uppercase md:text-5xl">{title}</h3>
        <p className="mt-4 max-w-lg text-lg text-white/90">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-secondary shadow-lg hover:bg-gray-100"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
