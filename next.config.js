// @ts-check

const withPreact = require("next-plugin-preact");

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

module.exports = withPreact(nextConfig);
