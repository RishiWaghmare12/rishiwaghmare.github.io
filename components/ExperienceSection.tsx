'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Zap } from 'lucide-react';
import { techIcons } from './ProjectsSection';
import { portfolioData } from '@/data/portfolio';

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-24 border-t border-border/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <h2 className="section-header">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
          <p className="section-subtitle">
            Building expertise through real-world projects and internships
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="hidden lg:block absolute left-[26px] top-24 w-[2px] h-36 bg-gradient-to-b from-accent via-accent-secondary/50 to-transparent z-0" />
              )}

              <motion.div
                className="bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/5 smooth-transition relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Subtle background glow */}
                <div className="absolute -inset-20 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

                <div className="flex gap-6 relative z-10">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent-secondary relative z-10 flex items-center justify-center border-[3px] border-background"
                      whileHover={{ scale: 1.3 }}
                    >
                      <div className="w-1.5 h-1.5 bg-background rounded-full" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-6 h-6 text-accent" />
                          <h3 className="text-3xl font-bold text-text group-hover:text-accent smooth-transition">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-accent-secondary text-xl font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted text-sm bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg w-fit">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted text-lg leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-text flex items-center gap-2">
                        <span className="w-1 h-3 rounded bg-accent" />
                        Key Achievements:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.slice(0, 6).map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2.5 text-muted text-base"
                          >
                            <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.03, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-sm font-semibold"
                          >
                            <span className="text-accent">{techIcons[tech] || <Zap className="w-5 h-5" />}</span>
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
