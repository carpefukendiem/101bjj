import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story — 25+ years of martial arts excellence in Goleta. 101 Jiu Jitsu & Kickboxing, formerly Paragon Goleta.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        backgroundImage="/images/training-photo.jpg"
        title="Our"
        titleAccent="Story"
        subtitle="Building champions in Goleta for over 25 years. Discover the legacy behind 101 Jiu Jitsu & Kickboxing."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase text-secondary md:text-4xl">
            About 101 Jiu Jitsu & Kickboxing
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Goleta&apos;s premier martial arts academy dedicated to transforming lives through world-class training.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <Image
              src="/images/training-photo.jpg"
              alt="Training at 101 Jiu Jitsu & Kickboxing"
              width={800}
              height={520}
              className="w-full rounded-xl object-cover"
            />
            <Image
              src="/images/gym-2.jpg"
              alt="Our Goleta martial arts facility"
              width={800}
              height={520}
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="space-y-4 text-gray-700">
            <h3 className="font-heading text-xl font-bold uppercase text-secondary">A Legacy of Excellence</h3>
            <p>
              Founded over 25 years ago, 101 Jiu Jitsu & Kickboxing has been the cornerstone of martial arts training
              in Goleta and the greater Santa Barbara area. What started as a small training space has grown into a
              thriving community of over 5,000 students who have walked through our doors.
            </p>
            <p>
              Our mission is simple: transform lives through martial arts. Whether you&apos;re looking to get in shape,
              learn self-defense, compete at the highest levels, or find a supportive community, we&apos;re here to
              help you achieve your goals.
            </p>
            <p>
              Under the leadership of Professor John, our academy has produced numerous champions while maintaining an
              ego-free, family-friendly environment where everyone from beginners to elite competitors can thrive.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { n: "25+", l: "Years Experience" },
                { n: "5000+", l: "Students Trained" },
                { n: "4.9★", l: "Google Rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-gray-100 p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs font-medium text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold uppercase text-secondary">Our Core Values</h2>
            <p className="mt-2 text-gray-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🏆", t: "Excellence", d: "We strive for excellence in every class, every technique, and every interaction." },
              { icon: "🤝", t: "Respect", d: "Respect for instructors, training partners, and yourself is the foundation of practice." },
              { icon: "💪", t: "Discipline", d: "Consistency and dedication separate those who dream from those who achieve." },
              { icon: "❤️", t: "Community", d: "We’re more than a gym — we’re a family. Everyone reaches their potential here." },
            ].map((v) => (
              <div key={v.t} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-3 font-heading text-lg font-bold uppercase text-secondary">{v.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase text-secondary">Our Facility</h2>
          <p className="mt-2 text-gray-600">State-of-the-art training space in the heart of Goleta.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "/images/gym-1.jpg", alt: "Martial arts training floor" },
            { src: "/images/jiu-jitsu.jpg", alt: "Brazilian Jiu-Jitsu class" },
            { src: "/images/kids-bjj.jpg", alt: "Kids martial arts class" },
            { src: "/images/training-photo.jpg", alt: "Training session" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-secondary to-[#1a2a42] py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-3xl font-bold uppercase">Ready to Join Our Community?</h2>
          <p className="mt-4 text-white/85">Experience the difference 25 years of excellence makes. Your first week is completely free.</p>
          <Link
            href="/free-trial"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 font-semibold text-secondary transition hover:bg-gray-100"
          >
            Start Your Free Trial →
          </Link>
        </div>
      </section>
    </>
  );
}
