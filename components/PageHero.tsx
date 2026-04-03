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
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-[120px]">
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
          background:
            "linear-gradient(135deg, rgba(10, 22, 40, 0.65), rgba(10, 22, 40, 0.55))",
        }}
        aria-hidden
      />
      <div
        className={`relative z-10 mx-auto w-full text-center text-white ${scheduleStyle ? "max-w-[1280px] px-8 py-16" : "max-w-5xl px-4 py-16"}`}
      >
        <h1
          className={`font-heading font-bold uppercase tracking-wide ${scheduleStyle ? "mb-4 text-[2.5rem] md:text-[3.5rem]" : "text-4xl md:text-5xl"}`}
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
            className={`mx-auto max-w-2xl ${scheduleStyle ? "text-xl opacity-90" : "mt-4 text-lg text-white/90"}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
