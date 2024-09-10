/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Cache 30 seconds
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ['@node-rs/argon2'],
};

export default nextConfig;
