import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
};

// Compiles the blog posts in content/blogs/*.mdx
const withMDX = createMDX();

export default withMDX(nextConfig);
