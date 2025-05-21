/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    // ⬅ the magic flag
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // build never stops on lint
  },
};

export default config;
