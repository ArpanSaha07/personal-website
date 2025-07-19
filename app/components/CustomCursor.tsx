'use client';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll('[data-cursor="project"]');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => setHovering(true));
      el.addEventListener('mouseleave', () => setHovering(false));
    });
    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', () => setHovering(true));
        el.removeEventListener('mouseleave', () => setHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[9999] transition-transform duration-150 ease-out ${
        hovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="backdrop-blur-md bg-white/10 text-black text-sm font-medium px-4 py-2 rounded-full border border-white/40 shadow-xl">
        View Project →
      </div>
    </div>
  );
};

export default CustomCursor;
