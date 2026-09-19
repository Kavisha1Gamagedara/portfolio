import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { blogPostsData } from '../data/blogs';
import type { BlogPost } from '../types';

export const BlogPage: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <div className="pt-24 pb-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Editorial Header */}
      <SectionTitle
        title="Blog"
        subtitle="Thoughts, essays, and technical explorations on user experience, frontend engineering, typography, and minimalist design."
        badge="Articles & Insights"
      />

      {/* Grid of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {blogPostsData.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setActivePost(post)}
            className="group cursor-pointer flex flex-col rounded-xl overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-accent-dynamic/40 transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/70 text-white backdrop-blur-md">
                {post.category}
              </span>
            </div>

            {/* Post Meta & Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-light-muted dark:text-dark-muted mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-accent-dynamic transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-light-muted dark:text-dark-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Action */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs font-semibold text-accent-dynamic group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#15171e] rounded-xl shadow-2xl border border-black/10 dark:border-white/10 z-10 p-6 sm:p-10"
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/5 dark:bg-white/10 text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-accent-dynamic font-semibold uppercase tracking-wider mb-3">
                <span>{activePost.category}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight mb-6 leading-tight">
                {activePost.title}
              </h2>

              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-8">
                <img
                  src={activePost.thumbnail}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none text-light-text/80 dark:text-dark-text/80 leading-relaxed space-y-4 text-base">
                <p className="text-lg font-medium leading-relaxed italic text-light-text dark:text-dark-text">
                  "{activePost.excerpt}"
                </p>
                {activePost.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
