import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
}) => {
  return (
    <div className="mb-12 md:mb-16">
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-accent-dynamic bg-accent-dynamic/10 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-dynamic animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
      >
        {title}
        <span className="text-accent-dynamic">.</span>
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-base md:text-lg text-light-muted dark:text-dark-muted max-w-2xl font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      <div className="mt-6 w-16 h-[2px] bg-accent-dynamic/80 rounded-full" />
    </div>
  );
};
