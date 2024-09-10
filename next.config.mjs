/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Cache 30 seconds
    staleTimes: {
      dynamic: 30,
    }
  }
};

export default nextConfig;
