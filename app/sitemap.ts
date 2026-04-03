import type { MetadataRoute } from "next";

const base = "https://101jjkb.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/schedule",
    "/free-trial",
    "/contact",
    "/special-offer",
    "/privacy",
    "/terms",
    "/thank-you",
    "/programs/jiu-jitsu",
    "/programs/kickboxing",
    "/programs/boxing",
    "/programs/wrestling",
    "/programs/kids-teens",
    "/programs/mma",
    "/programs/trx",
    "/programs/rocksteady",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
