import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { AttributionSync } from "@/components/AttributionSync";
import { ChatWidgetLoader } from "@/components/ChatWidgetLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "101 Jiu Jitsu & Kickboxing | Goleta & Santa Barbara Martial Arts",
    template: "%s | 101 Jiu Jitsu & Kickboxing",
  },
  description:
    "Goleta's premier martial arts academy. Brazilian Jiu-Jitsu, Kickboxing, Boxing, Wrestling, and more. Try a free class.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>
        <AttributionSync />
        {children}
        <ChatWidgetLoader />
      </body>
    </html>
  );
}
