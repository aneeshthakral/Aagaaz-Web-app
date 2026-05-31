/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
