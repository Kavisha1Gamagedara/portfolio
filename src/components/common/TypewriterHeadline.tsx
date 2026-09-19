import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhraseItem {
  prefix: string;
  keyword: string;
}

const phrases: PhraseItem[] = [
  { prefix: 'I build', keyword: 'predictive AI models' },
  { prefix: 'I develop', keyword: 'mobile apps' },
  { prefix: 'I code', keyword: 'cool websites' },
  { prefix: 'I engineer', keyword: 'agentic AI systems' },
  { prefix: 'I design', keyword: 'secure web platforms' },
];

export const TypewriterHeadline: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const current = phrases[index];

  return (
    <div className="w-full flex items-center justify-center text-center select-none py-4">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2"
        >
          <span className="text-light-text dark:text-dark-text transition-colors duration-300">
            {current.prefix}
          </span>
          <span className="text-accent-dynamic transition-colors duration-300 inline-block font-black">
            {current.keyword}
          </span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
