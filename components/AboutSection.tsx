'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const education = portfolioData.education[0];

  return (
    <section id="about" className="py-24 border-t border-border/40">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="section-header">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
            </div>

            <div className="space-y-6 text-muted">
              <p className="text-lg leading-relaxed">
                I&apos;m a passionate software engineer and AI/ML researcher currently
                pursuing a B.Tech in Computer Engineering at MIT Academy of
                Engineering, Pune. With a strong foundation in full-stack
                development and emerging technologies, I&apos;m committed to building
                scalable systems that solve real-world problems.
              </p>

              <p className="text-lg leading-relaxed">
                My expertise spans across full-stack web development with React and
                Spring Boot, machine learning with PyTorch and scikit-learn, and
                cutting-edge quantum computing research using Qiskit. I believe in
                continuous learning and combining theoretical knowledge with
                practical implementation.
              </p>

              <p className="text-lg leading-relaxed">
                {portfolioData.careerGoals}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text flex items-center gap-2">
                <span className="w-1.5 h-6 rounded bg-accent" />
                Key Focus Areas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {portfolioData.interests.slice(0, 6).map((interest, i) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, borderColor: 'var(--color-accent)' }}
                    className="px-4 py-3 rounded-xl bg-surface/40 border border-white/5 text-sm text-accent font-medium backdrop-blur-sm shadow-sm smooth-transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="p-6 rounded-2xl bg-surface/30 backdrop-blur-sm border border-white/5 shadow-xl relative overflow-hidden group hover:border-accent/40 smooth-transition"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Colored side-accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-secondary" />
              
              <h3 className="text-lg font-semibold text-text mb-4 pl-2 flex items-center gap-2">
                🎓 Education
              </h3>
              <div className="space-y-4 pl-2">
                <div>
                  <h4 className="text-xl font-bold text-text group-hover:text-accent smooth-transition">{education.degree}</h4>
                  <p className="text-accent font-semibold text-sm mt-1">{education.school}</p>
                  <p className="text-muted text-sm mt-1">
                    {education.field} • {education.startDate.split('-')[0]} - {education.endDate.split('-')[0]}
                  </p>
                  <div className="mt-4 flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg w-fit">
                    <span className="text-sm font-semibold text-text">CGPA:</span>
                    <span className="text-lg font-extrabold text-accent">{education.gpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { label: 'Years Active', value: '3+' },
                { label: 'Projects', value: '15+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Certifications', value: '3' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm text-center shadow-md relative overflow-hidden group hover:border-accent/30 smooth-transition"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* Subtle background glow on card hover */}
                  <div className="absolute -inset-10 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />
                  
                  <p className="text-3xl font-extrabold gradient-text tracking-tight">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted font-medium mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
