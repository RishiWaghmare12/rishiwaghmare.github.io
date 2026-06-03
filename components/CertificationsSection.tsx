'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="certifications" className="py-24 border-t border-border/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <h2 className="section-header">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
          <p className="section-subtitle">
            Professional qualifications demonstrating continuous learning and skill mastery
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/5 smooth-transition group relative overflow-hidden flex flex-col justify-between"
              whileHover={{ y: -6 }}
            >
              {/* Hover background glow blob */}
              <div className="absolute -inset-10 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/25 text-accent group-hover:bg-accent group-hover:text-white smooth-transition">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-text group-hover:text-accent smooth-transition leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-semibold text-accent mt-1">{cert.institution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted bg-white/5 border border-white/5 px-2.5 py-1 rounded-md w-fit">
                    Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </div>

                  <div>
                    <p className="text-xs font-bold text-text uppercase tracking-wider mb-2">
                      Key Skills
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full text-[10px] bg-accent/10 border border-accent/20 text-accent font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
