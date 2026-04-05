import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* High-performance settings */
  reactStrictMode: true,
  
  // Forces Next.js to use native Rust-based compiler for speed
  swcMinify: true, 

  // Ideal for low-end mobile performance: prevents showing server tech to bad actors
  poweredByHeader: false, 
};

export default nextConfig;
