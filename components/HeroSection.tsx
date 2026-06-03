'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function HeroSection() {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* Animated background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-accent/25 rounded-full blur-[130px] animate-pulse-subtle" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-accent-secondary/20 rounded-full blur-[130px] animate-pulse-subtle" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-accent/5 rounded-full blur-[130px]" />
        
        {/* Mesh grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-accent/20 text-accent text-sm font-medium backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              🚀 Staff-Level Engineering Presence
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="text-text block sm:inline">Hi, I&apos;m </span>
              <span className="gradient-text drop-shadow-[0_0_15px_rgba(59,130,246,0.35)] block sm:inline">
                {portfolioData.personal.name}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted font-medium tracking-tight">
                {portfolioData.personal.title}
              </h2>
              <p className="text-base sm:text-lg text-muted/80 max-w-2xl leading-relaxed">
                {portfolioData.personal.summary}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold flex items-center justify-center gap-2 smooth-transition shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 border border-accent/30 hover:border-accent hover:bg-surface text-text rounded-lg font-semibold smooth-transition justify-center flex items-center"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href={portfolioData.personal.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface border border-border/40 hover:border-accent hover:bg-accent hover:text-white smooth-transition group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              </a>
              <a
                href={portfolioData.personal.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface border border-border/40 hover:border-accent hover:bg-accent hover:text-white smooth-transition group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              </a>
              <a
                href={portfolioData.personal.socialLinks[2].url}
                className="p-3 rounded-lg bg-surface border border-border/40 hover:border-accent hover:bg-accent hover:text-white smooth-transition group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Glowing Background Glow */}
              <div className="absolute inset-[-8%] bg-gradient-to-tr from-accent to-accent-secondary rounded-full blur-3xl opacity-35 animate-pulse-subtle -z-10" />

              {/* Orbital Rings */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-accent/30 animate-[spin_50s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-dashed border-accent-secondary/15 animate-[spin_80s_linear_infinite_reverse] pointer-events-none" />

              {/* Main Image Frame */}
              <div className="w-full h-full rounded-full border-2 border-white/10 p-2 sm:p-3 bg-surface/30 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface relative border border-white/5">
                  <img
                    src="/profile.png"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle glass overlay shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border border-muted rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-muted rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
