/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/book-free-class",
        destination: "/free-trial",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
