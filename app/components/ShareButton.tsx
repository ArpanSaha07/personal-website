'use client';
import { useState } from "react";
import { FiShare } from "react-icons/fi";
import { ShareButtonProps } from "@/app/types";

// Opens the native share sheet where supported (mostly mobile), otherwise copies the link
export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Share sheet dismissed
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={share} aria-label="Share this post" className="flex items-center gap-2 text-black hover:text-gray-600">
      {copied && <span className="text-sm">Link copied</span>}
      <FiShare className="text-2xl" />
    </button>
  );
}
