import Image from "next/image";

type PageHeroProps = {
  backgroundImage: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  /** Matches legacy class-schedule.html hero (1280px container, larger title). */
  scheduleStyle?: boolean;
};

export function PageHero({
  backgroundImage,
  title,
  titleAccent,
  subtitle,
  scheduleStyle,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-[72px] lg:min-h-[55vh]">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,22,40,0.65), rgba(10,22,40,0.55))",
        }}
        aria-hidden
      />
      <div
        className={`relative z-10 mx-auto w-full text-center text-white ${
          scheduleStyle ? "max-w-[1280px] px-4 py-10 lg:px-8 lg:py-16" : "max-w-5xl px-4 py-10 lg:px-8 lg:py-16"
        }`}
      >
        <h1
          className={`font-heading font-bold uppercase tracking-wide text-[clamp(2rem,8vw,3rem)] ${
            scheduleStyle ? "mb-4" : ""
          }`}
        >
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className="text-primary">{titleAccent}</span>
            </>
          ) : null}
        </h1>
        {subtitle ? (
          <p
            className={`mx-auto max-w-full text-sm text-white/90 lg:max-w-2xl lg:text-base ${
              scheduleStyle ? "lg:opacity-90" : "mt-4"
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
