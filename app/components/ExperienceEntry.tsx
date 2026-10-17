import { motion, useAnimation, useInView, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Experience } from '@/app/types';

export default function ExperienceEntry({ exp, index, progress, dotRatio } : {exp: Experience, index: number, progress: MotionValue<number>, dotRatio: number}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Dot lights up once the line's progress reaches it; progress never retracts, so it stays lit
  const dotColor = useTransform(progress, (value) => (value > 0 && value >= dotRatio ? '#000000' : '#d1d5db'));

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
      <motion.div
        data-exp-dot
        className="absolute -left-7.5 top-7 w-4 h-4 rounded-full transition-colors duration-500 border-2"
        style={{ backgroundColor: dotColor }}
      />
      {/* Card */}
      <div className="p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-black text-xl font-semibold">{exp.title}</h3>
        <p className="text-sm text-gray-500 mb-1">
          {exp.company} · {exp.date}
        </p>
        <div className="text-gray-700 text-[18px]">
          {exp.description.map((desc, descIndex) => (
            <p key={descIndex} className="mb-1">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}