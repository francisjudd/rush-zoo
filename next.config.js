// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  // @ts-ignore
  images: {
    domains: ["www.thesportsdb.com"],
  },
};

module.exports = nextConfig;
