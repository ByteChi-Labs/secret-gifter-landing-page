/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BREVO_API_KEY: process.env.BREVO_API_KEY,
  },
};

module.exports = nextConfig;
