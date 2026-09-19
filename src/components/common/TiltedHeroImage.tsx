import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';

export const TiltedHeroImage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center select-none py-6 sm:py-8 lg:py-0">
      {/* Subtle Glow behind the frame in dark mode */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-accent-dynamic/10 blur-3xl pointer-events-none -z-10 transition-colors duration-500" />

      {/* Angled Parallelogram / Tilted Photo Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -13 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: -11, scale: 1.02 }}
        className="tilted-hero-container relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[490px] lg:w-[410px] lg:h-[530px] xl:w-[450px] xl:h-[570px] overflow-hidden rounded-sm bg-neutral-900 shadow-2xl border border-black/10 dark:border-white/10"
      >
        {/* Inner Counter-Rotated Image Container */}
        <div className="tilted-hero-inner absolute -inset-16 w-[140%] h-[140%] flex items-center justify-center">
          <img
            src={profileData.avatarUrl}
            alt={profileData.name}
            className="w-full h-full object-cover object-top sm:object-center contrast-105 brightness-100 transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              // Graceful fallback in case user hasn't put an image yet
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </div>

        {/* Subtle Vignette & Light Sheen Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </motion.div>
    </div>
  );
};
