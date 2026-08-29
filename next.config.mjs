/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // fix for Next 15.5.24 dev bug: SegmentViewNode in React Client Manifest
  // https://github.com/vercel/next.js/issues/85319
  experimental: {
    serverComponentsHmrCache: false,
  },
};

export default nextConfig;
