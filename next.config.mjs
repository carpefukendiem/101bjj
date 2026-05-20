/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1200, 1400],
    imageSizes: [64, 96, 128, 256, 384],
    remotePatterns: [{ protocol: "https", hostname: "**.stripe.com" }],
  },
  async redirects() {
    return [
      { source: "/special-offer", destination: "/online-offer", permanent: true },
      { source: "/book-free-class", destination: "/free-trial", permanent: true },
      { source: "/book-free-class.html", destination: "/free-trial", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/free-trial.html", destination: "/free-trial", permanent: true },
      { source: "/class-schedule.html", destination: "/schedule", permanent: true },
      { source: "/thank-you.html", destination: "/thank-you", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/404.html", destination: "/", permanent: false },
      { source: "/jiu-jitsu.html", destination: "/programs/jiu-jitsu", permanent: true },
      { source: "/kickboxing.html", destination: "/programs/kickboxing", permanent: true },
      { source: "/boxing.html", destination: "/programs/boxing", permanent: true },
      { source: "/wrestling.html", destination: "/programs/wrestling", permanent: true },
      { source: "/kids-teens.html", destination: "/programs/kids-teens", permanent: true },
      { source: "/mma-gym.html", destination: "/programs/mma", permanent: true },
      { source: "/trx-training.html", destination: "/programs/trx", permanent: true },
      { source: "/rocksteady.html", destination: "/programs/rocksteady", permanent: true },
      { source: "/instructors.html", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
