'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Database, Layers, AlertTriangle, Monitor } from 'lucide-react';
import {
  FaPython,
  FaJava,
  FaReact,
  FaNode,
  FaGit,
  FaGithub,
  FaBrain,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiOpencv,
  SiQiskit,
  SiPytorch,
  SiScikitlearn,
  SiRazorpay,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { portfolioData } from '@/data/portfolio';

export const techIcons: Record<string, ReactNode> = {
  'React.js': <FaReact className="w-5 h-5" />,
  'Spring Boot': <SiSpringboot className="w-5 h-5" />,
  MySQL: <SiMysql className="w-5 h-5" />,
  MongoDB: <SiMongodb className="w-5 h-5" />,
  PostgreSQL: <SiPostgresql className="w-5 h-5" />,
  'Node.js': <FaNode className="w-5 h-5" />,
  Python: <FaPython className="w-5 h-5" />,
  Java: <FaJava className="w-5 h-5" />,
  Razorpay: <SiRazorpay className="w-5 h-5" />,
  GitHub: <FaGithub className="w-5 h-5" />,
  Git: <FaGit className="w-5 h-5" />,
  PyTorch: <SiPytorch className="w-5 h-5" />,
  'Scikit-Learn': <SiScikitlearn className="w-5 h-5" />,
  YOLOv8: <SiOpencv className="w-5 h-5" />,
  OpenCV: <SiOpencv className="w-5 h-5" />,
  Qiskit: <SiQiskit className="w-5 h-5" />,
  PCA: <FaChartLine className="w-5 h-5" />,
  'Quantum ML': <FaBrain className="w-5 h-5" />,
  'Machine Learning': <FaBrain className="w-5 h-5" />,
  'Data Analytics': <FaChartLine className="w-5 h-5" />,
  Cybersecurity: <Shield className="w-5 h-5" />,
  'Network Security': <Shield className="w-5 h-5" />,
  'Threat Detection': <AlertTriangle className="w-5 h-5" />,
  'Web Technologies': <Layers className="w-5 h-5" />,
  'REST APIs': <Database className="w-5 h-5" />,
  HTML5: <SiHtml5 className="w-5 h-5" />,
  CSS3: <SiCss3 className="w-5 h-5" />,
  SQL: <SiMysql className="w-5 h-5" />,
  'Responsive UI Design': <Layers className="w-5 h-5" />,
  'Database Management Systems': <Database className="w-5 h-5" />,
  'Operating Systems': <Monitor className="w-5 h-5" />,
  'Software Engineering': <Layers className="w-5 h-5" />,
  'CI/CD Fundamentals': <Layers className="w-5 h-5" />,
};

export function ProjectsSection() {
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

  const featured = portfolioData.projects.filter((p) => p.featured);
  const others = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-border/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <h2 className="section-header">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
          <p className="section-subtitle">
            Innovative solutions combining cutting-edge technologies and software
            engineering excellence
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12 mb-20"
        >
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Content - alternating sides */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                <div>
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category.toUpperCase()}
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-text mb-4 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface/20 border border-white/5">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                      Problem Statement
                    </p>
                    <p className="text-muted text-sm leading-relaxed">{project.problemStatement}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface/20 border border-white/5">
                    <p className="text-xs font-bold text-accent-secondary uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-muted text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-text mb-3 flex items-center gap-2">
                    <span className="w-1 h-3 rounded bg-accent" />
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {project.keyAchievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-muted">
                        <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-normal">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-base font-bold text-text mb-3 flex items-center gap-2">
                    <span className="w-1 h-3 rounded bg-accent-secondary" />
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-surface/30 border border-white/5 text-text text-sm font-bold"
                      >
                        <span className="text-accent">
                          {techIcons[tech] || <Zap className="w-5 h-5" />}
                        </span>
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold smooth-transition shadow-[0_4px_15px_rgba(59,130,246,0.2)]"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 hover:border-accent text-text rounded-lg font-semibold smooth-transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Visual element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-surface/30 backdrop-blur-sm border border-white/5 shadow-2xl flex items-center justify-center group hover:border-accent/40 smooth-transition"
              >
                {/* Background glow and subtle color overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-secondary/10 group-hover:from-accent/15 group-hover:to-accent-secondary/15 transition-all duration-500" />
                <div className="absolute -inset-10 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 smooth-transition" />
                
                {project.images?.[0] ? (
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="text-center space-y-4 relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <div className="text-7xl drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] select-none">
                      {project.category === 'quantum' ? '⚛️' : '💻'}
                    </div>
                    <h4 className="text-text text-xl font-bold tracking-tight px-6">{project.title}</h4>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-secondary mx-auto" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        {others.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text mb-2">Other Projects</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-accent/40 shadow-lg hover:shadow-xl hover:shadow-accent/5 smooth-transition group relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute -inset-10 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

                  <div className="space-y-4 relative z-10">
                    <div>
                      <h4 className="text-xl font-bold text-text mb-2 group-hover:text-accent smooth-transition">
                        {project.title}
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold"
                        >
                          <span className="text-accent">
                            {techIcons[tech] || <Zap className="w-5 h-5" />}
                          </span>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-sm text-muted font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
