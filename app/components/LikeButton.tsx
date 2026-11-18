'use client';
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

// Toggles a filled heart. Not persisted yet: the like resets on reload and no count is shown
// until a storage backend is chosen.
export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      aria-label={liked ? "Unlike this post" : "Like this post"}
      aria-pressed={liked}
      className="flex items-center gap-2 text-black hover:text-gray-600"
    >
      <FiHeart className="text-2xl" fill={liked ? "currentColor" : "none"} />
    </button>
  );
}
