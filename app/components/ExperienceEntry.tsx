import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Experience } from '@/app/types';

export default function ExperienceEntry({ exp, index, scrollPercent, total } : {exp: Experience, index: number, scrollPercent: number, total: number}) {
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
          scrollPercent > index / total ? 'bg-black' : 'bg-gray-300'
        }`}
      />
      {/* Card */}
      <div className="p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-black text-xl font-semibold">{exp.title}</h3>
        <p className="text-sm text-gray-500 mb-1">
          {exp.company} · {exp.date}
        </p>
        <div className="text-gray-700 text-[18px]">
          {exp.description.map((desc, descIndex) => (
            <p key={descIndex} className="mb-2">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}