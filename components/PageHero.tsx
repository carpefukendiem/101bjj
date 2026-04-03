import Image from "next/image";

type PageHeroProps = {
  backgroundImage: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
};

export function PageHero({
  backgroundImage,
  title,
  titleAccent,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-28 md:pt-32">
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
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center text-white">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wide md:text-5xl">
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className="text-primary">{titleAccent}</span>
            </>
          ) : null}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
