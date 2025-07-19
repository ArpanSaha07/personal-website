'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import experiences from '@/app/data/experiences.json';

export default function ExperienceSection() {

  const lineRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

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
      <h2 className="section-heading">Experience</h2>

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
          {experiences.map((exp, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              }
            }, [inView, controls]);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.2 } },
                }}
                className="relative ml-6"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-7.5 top-7 w-4 h-4 rounded-full transition-colors duration-500 border-2 ${
                    scrollPercent > index / experiences.length ? 'bg-black' : 'bg-gray-300'
                  }`}
                />

                {/* Card */}
                <div className="p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-black text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {exp.company} · {exp.date}
                  </p>
                  <div className="text-gray-700 text-[18px]">
                    {//map the exp.description to paragraphs
                      exp.description.map((desc, descIndex) => (
                      <p key={descIndex} className="mb-2">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
