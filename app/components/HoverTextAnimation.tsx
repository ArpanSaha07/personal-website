'use client';

import Link from "next/link";

interface AnimatedTextProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function AnimatedText({ href, label, onClick }: AnimatedTextProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block h-[1.5em] overflow-hidden leading-none aria-label=${label}`}
      >
      <span className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:underline">
        {label}
      </span>
    </Link>
  );
}