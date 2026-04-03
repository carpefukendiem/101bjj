import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary pt-[4.5rem] text-white">
        <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
          <h1 className="font-heading text-4xl font-bold uppercase md:text-5xl">404 — Page Not Found</h1>
          <p className="mt-4 max-w-md text-white/80">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try the home page or free trial form.
          </p>
          <Link
            href="/"
            className="mt-10 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
