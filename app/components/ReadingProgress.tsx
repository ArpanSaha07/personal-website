'use client';
import { motion, useScroll } from "framer-motion";

// Black line across the top of the page that grows left to right with scroll progress
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-110"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
