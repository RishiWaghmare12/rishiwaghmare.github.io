'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const achievementIcons: Record<string, React.ReactNode> = {
  competitive: <Trophy className="w-8 h-8" />,
  academic: <GraduationCap className="w-8 h-8" />,
  professional: <Award className="w-8 h-8" />,
};

export function AchievementsSection() {
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

  return (
    <section id="achievements" className="py-24 border-t border-border/40 bg-surface/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <h2 className="section-header">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
          <p className="section-subtitle">
            Recognitions of technical excellence and academic performance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioData.achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-surface/30 backdrop-blur-sm border border-white/5 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/5 smooth-transition group relative overflow-hidden"
            >
              {/* Hover background glow blob */}
              <div className="absolute -inset-10 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

              <div className="flex flex-col h-full relative z-10">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-accent/15 border border-accent/25 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white smooth-transition">
                  {achievementIcons[achievement.category] || <Star className="w-8 h-8" />}
                </div>

                <div className="flex-1 space-y-3">
                  {achievement.value && (
                    <span className="text-3xl font-extrabold gradient-text block tracking-tight">
                      {achievement.value}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-text group-hover:text-accent smooth-transition">
                    {achievement.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-xs font-semibold text-accent-secondary bg-accent-secondary/15 border border-accent-secondary/20 px-2.5 py-1 rounded-md">
                    {achievement.date.split('-')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
