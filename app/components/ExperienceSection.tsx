'use client';
import ExperienceEntry from './ExperienceEntry';
import { useEffect, useRef, useState } from 'react';
import experiences from '@/app/data/experiences.json';


export default function ExperienceSection() {

  const lineRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Create refs for each experience entry, this is to fix the issue of not being able to call React Hooks inside a callback, loops or conditionals
  // const entryRefs = experiences.map(() => useRef(null));

  const handleScroll = () => {
    if (lineRef.current) {
      const { top, height } = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percent = Math.min(Math.max((windowHeight - top) / height, 0), 1);
      setScrollPercent(percent);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-10 px-4 md:px-40 bg-white flex flex-col items-center">
      <h2 className="section-heading pt-10">Experience</h2>
      <div className="relative max-w-7xl mx-auto">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute top-7 left-0 w-1 rounded bg-gradient-to-b from-gray-300 to-black transition-all duration-500"
          style={{
            height: `${85}%`,
            background: `linear-gradient(to bottom, #000 ${scrollPercent * 50}%, #ccc ${scrollPercent * 100}%)`,
          }}
        />
        {/* Experience entries */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceEntry
              key={index}
              exp={exp}
              index={index}
              scrollPercent={scrollPercent}
              total={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
