import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpecialOfferLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-center border-b border-gray-200 bg-white py-5">
        <Link href="/" className="inline-block">
          <Image src="/images/logo.png" alt="101 Jiu Jitsu & Kickboxing" width={200} height={80} className="h-16 w-auto" priority />
        </Link>
      </header>
      {children}
    </div>
  );
}
