import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { experienceData, educationData, skillGroups } from '../data/resume';
import cvPdf from '../assets/new_my_cv.pdf';

export const ResumePage: React.FC = () => {
  return (
    <div className="pt-24 pb-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionTitle
          title="Resume"
          subtitle="A comprehensive overview of my professional trajectory, technical competencies, and academic background."
          badge="Career Journey"
        />

        <a
          href={cvPdf}
          download="Kavisha_Gamagedara_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start sm:self-center px-5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 text-light-text dark:text-dark-text font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-sm group cursor-pointer"
        >
          <Download className="w-4 h-4 text-accent-dynamic group-hover:-translate-y-0.5 transition-transform" />
          <span>Download CV</span>
        </a>
      </div>

      {/* Grid: Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Experience
            </h2>
          </div>

          <div className="relative pl-6 border-l border-black/10 dark:border-white/10 flex flex-col gap-10">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node Bullet */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#0e0f12] border-2 border-accent-dynamic group-hover:scale-125 transition-transform" />

                <span className="text-xs font-semibold tracking-wider text-accent-dynamic uppercase">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-light-text dark:text-dark-text mt-1">
                  {exp.title}
                </h3>
                <div className="text-xs font-medium text-light-muted dark:text-dark-muted mb-3">
                  {exp.company} • {exp.location}
                </div>
                <p className="text-sm text-light-text/70 dark:text-dark-text/70 leading-relaxed mb-3">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-light-muted dark:text-dark-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Education
            </h2>
          </div>

          <div className="relative pl-6 border-l border-black/10 dark:border-white/10 flex flex-col gap-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node Bullet */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#0e0f12] border-2 border-accent-dynamic group-hover:scale-125 transition-transform" />

                <span className="text-xs font-semibold tracking-wider text-accent-dynamic uppercase">
                  {edu.period}
                </span>
                <h3 className="text-lg font-bold text-light-text dark:text-dark-text mt-1">
                  {edu.degree}
                </h3>
                <div className="text-xs font-medium text-light-muted dark:text-dark-muted mb-3">
                  {edu.institution} • {edu.location}
                </div>
                <p className="text-sm text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text mb-8 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-accent-dynamic" />
          <span>Core Competencies & Proficiency</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
            >
              <h3 className="text-base font-bold text-light-text dark:text-dark-text uppercase tracking-wider text-xs mb-6 text-light-muted dark:text-dark-muted">
                {group.category}
              </h3>

              <div className="flex flex-col gap-5">
                {group.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-light-text dark:text-dark-text">{skill.name}</span>
                      <span className="text-accent-dynamic">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (groupIdx + sIdx) * 0.05 }}
                        className="h-full bg-accent-dynamic rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
