'use client';
import ExperienceEntry from './ExperienceEntry';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import experiences from '@/app/data/experiences.json';


export default function ExperienceSection() {

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Line runs from the first dot's center to the last dot's center; ratios are each dot's position along it (0 to 1)
  const [line, setLine] = useState({ top: 0, height: 0, ratios: experiences.map(() => 0) });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerTop = container.getBoundingClientRect().top;
      const centers = Array.from(container.querySelectorAll<HTMLElement>('[data-exp-dot]')).map((dot) => {
        const rect = dot.getBoundingClientRect();
        return rect.top - containerTop + rect.height / 2;
      });
      if (centers.length === 0) return;

      const first = centers[0];
      const span = centers[centers.length - 1] - first;
      setLine({
        top: first,
        height: span,
        ratios: centers.map((center) => (span > 0 ? (center - first) / span : 0)),
      });
    };

    // Re-measure whenever the container resizes (viewport change, text re-wrapping, font loading)
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Scroll progress of the line: 0 when its top reaches 70% of the viewport, 1 when its bottom reaches 60%
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  });

  // Highest progress reached so far, so scrolling back up does not retract the line
  const progress = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value > progress.get()) progress.set(value);
  });

  return (
    <section id="experience" className="py-10 px-4 md:px-40 bg-white flex flex-col items-center">
      <h2 className="section-heading pt-10">Experience</h2>
      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {/* Vertical line: gray track with a black fill that grows with scroll */}
        <div
          ref={trackRef}
          className="absolute left-0 w-1 rounded bg-gray-300"
          style={{ top: line.top, height: line.height }}
        >
          <motion.div
            className="h-full w-full rounded bg-black origin-top"
            style={{ scaleY: progress }}
          />
        </div>
        {/* Experience entries */}
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <ExperienceEntry
              key={index}
              exp={exp}
              index={index}
              progress={progress}
              dotRatio={line.ratios[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
