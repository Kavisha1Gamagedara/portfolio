import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, User, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#15171e] rounded-xl shadow-2xl border border-black/10 dark:border-white/10 z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-black/5 dark:bg-white/10 text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image */}
          <div className="relative w-full h-56 sm:h-80 rounded-lg overflow-hidden mb-6 bg-neutral-900 border border-black/5 dark:border-white/5">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Header Info */}
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-light-muted dark:text-dark-muted pt-1">
              {project.client && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Client: {project.client}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Date: {project.date}
              </span>
              {project.metrics && (
                <span className="flex items-center gap-1.5 text-accent-dynamic font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" /> {project.metrics}
                </span>
              )}
            </div>
          </div>

          {/* Detailed Content */}
          <p className="text-sm sm:text-base text-light-text/80 dark:text-dark-text/80 leading-relaxed mb-6 font-normal">
            {project.fullDescription}
          </p>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h4 className="text-xs uppercase font-bold tracking-wider text-light-muted dark:text-dark-muted mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-black/5 dark:bg-white/5 text-light-text dark:text-dark-text border border-black/5 dark:border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/10 dark:border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-dynamic text-white dark:text-[#0e0f12] font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 text-light-text dark:text-dark-text font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
