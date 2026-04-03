import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-4 pt-20 text-center text-white">
      <h1 className="font-heading text-4xl font-bold uppercase md:text-5xl">404 — Page Not Found</h1>
      <p className="mt-4 max-w-md text-white/80">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link
        href="/"
        className="mt-10 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
