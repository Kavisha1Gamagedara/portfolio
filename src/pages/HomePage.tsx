import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TiltedHeroImage } from '../components/common/TiltedHeroImage';
import { TypewriterHeadline } from '../components/common/TypewriterHeadline';
import { profileData } from '../data/profile';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-140px)] flex flex-col justify-between pt-16 sm:pt-20 pb-20 sm:pb-24 max-w-7xl mx-auto">
      {/* Center Hero Stage */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 xl:gap-20 my-auto">
        {/* Slanted Parallelogram Portrait */}
        <div className="flex-shrink-0">
          <TiltedHeroImage />
        </div>

        {/* Greeting & Quick Pitch */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-center lg:text-left px-4 sm:px-0"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-dynamic animate-ping" />
            <span className="w-2 h-2 rounded-full bg-accent-dynamic absolute" />
            <span className="text-light-muted dark:text-dark-muted ml-2">
              {profileData.availability}
            </span>
          </div>

          {/* Exact Greeting Matching Screenshot */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium leading-relaxed text-light-text dark:text-dark-text">
            Hello, I'm{' '}
            <span className="text-accent-dynamic font-bold transition-colors duration-300">
              {profileData.name}
            </span>
            , {profileData.role} Based in {profileData.location}.
          </p>

          <p className="mt-4 text-sm sm:text-base text-light-muted dark:text-dark-muted leading-relaxed font-normal">
            Bridging the gap between advanced data analytics and software engineering. Proficient in full-stack web development, statistical modeling, and integrating machine learning pipelines into secure, scalable applications.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-dynamic text-white dark:text-[#0e0f12] font-semibold text-sm hover:opacity-95 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200"
            >
              <span>Explore My Works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-black/15 dark:border-white/15 text-light-text dark:text-dark-text font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-accent-dynamic" />
              <span>Let's Talk</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Massive Bold Headline Cycling at the Bottom */}
      <div className="w-full mt-8 lg:mt-4">
        <TypewriterHeadline />
      </div>
    </div>
  );
};
