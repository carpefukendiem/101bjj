import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const mapEmbedSrc =
  "https://maps.google.com/maps?q=" + encodeURIComponent(SITE.address) + "&output=embed";

export const metadata: Metadata = {
  title: "Home",
  description:
    "101 Jiu Jitsu & Kickboxing in Goleta — formerly Paragon Goleta. Brazilian Jiu-Jitsu, kickboxing, kids programs, and a family-friendly martial arts academy.",
};

const HOME_HERO_VIDEO = "/media/101-jiu-jitsu-homepage-video.mp4";

export default function HomePage() {
  return (
    <>
      <section
        className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(10, 22, 40, 0.65), rgba(10, 22, 40, 0.55)), url(/images/gym-1.jpg)",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-8 py-24 text-center text-white">
          <Image
            src="/images/logo.webp"
            alt="101 Jiu Jitsu & Kickboxing"
            width={96}
            height={96}
            priority
            className="mx-auto h-24 w-24"
          />
          <p className="hero-eyebrow mt-6 text-base italic text-white/90 md:text-lg">
            A Mixed Martial Arts Academy For The Entire Family
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-white">
            101 Jiu Jitsu & <span className="text-primary">Kickboxing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/85">
            Formerly Paragon Goleta. Same team, same location, same commitment. Build confidence, discipline,
            and real skills with a community that welcomes all ages and levels.
          </p>
          <div className="hero-cta-group mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white shadow-md transition hover:bg-primary-dark"
            >
              Try A Free Class
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="gym-highlights-heading">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-12 text-center">
            <h2 id="gym-highlights-heading" className="font-heading text-4xl font-bold uppercase text-secondary">
              Gym Highlights
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              A real training clip from the current gym feed, hosted on this site — play, pause, and scrub with full
              controls.
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
          <p className="mt-4 text-center text-sm text-gray-500">
            Need a different clip? Replace the file in <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">public/media/</code>{" "}
            and this section updates on the next deploy.
          </p>
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

      <section className="w-full bg-secondary py-16 text-white">
        <div className="mx-auto w-full max-w-none px-4 md:px-8">
          <h2 className="text-center font-heading text-3xl font-bold uppercase">Why Train at 101?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
            We&apos;re not just another gym. We&apos;re a community dedicated to helping you become your best self.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Expert Coaching",
                d: "Learn from experienced instructors in a structured, safe environment.",
              },
              {
                t: "All Ages & Levels",
                d: "Programs for kids, teens, and adults — from first day to competition.",
              },
              {
                t: "Prime Goleta Location",
                d: "5940 Calle Real with parking and easy access from Santa Barbara & IV.",
              },
              {
                t: "Community & Culture",
                d: "Train with a welcoming team that pushes you to be your best every class.",
              },
            ].map((x) => (
              <div key={x.t} className="border-l-4 border-primary px-6 py-8">
                <h3 className="font-heading text-lg font-bold uppercase text-primary">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="find-us-heading">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-10 text-center">
            <h2 id="find-us-heading" className="font-heading text-3xl font-bold uppercase text-secondary md:text-4xl">
              Find Us
            </h2>
            <p className="mt-3 text-gray-600">{SITE.address}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <iframe
              title="Map — 101 Jiu Jitsu & Kickboxing"
              src={mapEmbedSrc}
              className="h-[min(420px,50vh)] w-full min-h-[280px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-center">
            <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
              Contact & directions →
            </Link>
          </p>
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
