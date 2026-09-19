import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { ProjectDetailModal } from '../components/common/ProjectDetailModal';
import { projectsData } from '../data/projects';
import type { Project } from '../types';

const categories = ['All', 'AI / ML', 'Full-Stack', 'Web Apps', 'Mobile', 'Security'] as const;

export const WorksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Editorial Header */}
      <SectionTitle
        title="Works"
        subtitle="A curated selection of machine learning systems, secure full-stack platforms, time-series forecasting models, and mobile applications."
        badge="Portfolio"
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === cat
                ? 'bg-accent-dynamic text-white dark:text-[#0e0f12] shadow-sm'
                : 'bg-black/5 dark:bg-white/5 text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer flex flex-col rounded-xl overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-accent-dynamic/40 transition-all duration-300"
            >
              {/* Thumbnail with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md">
                  {project.category}
                </span>

                {/* Arrow Icon */}
                <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text group-hover:text-accent-dynamic transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-light-muted dark:text-dark-muted line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-light-muted dark:text-dark-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-light-muted dark:text-dark-muted">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
