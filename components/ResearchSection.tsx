'use client';

import { motion } from 'framer-motion';
import { Atom, Zap, BookOpen } from 'lucide-react';

export function ResearchSection() {
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

  const researchAreas = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Machine Learning',
      description:
        'Developing hybrid quantum-classical architectures combining quantum circuits with deep learning for enhanced pattern recognition and anomaly detection.',
      technologies: ['Qiskit', 'PyTorch', 'Quantum Circuits', 'QNN'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quantum Optimization',
      description:
        'Exploring quantum optimization algorithms for solving complex combinatorial problems and resource allocation challenges.',
      technologies: ['QAOA', 'VQE', 'Qiskit', 'Classical Optimization'],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Intelligent Transportation',
      description:
        'Researching real-time anomaly detection in traffic systems using computer vision and quantum-enhanced machine learning.',
      technologies: ['YOLOv8', 'OpenCV', 'Quantum ML', 'Time Series Analysis'],
    },
  ];

  const futureGoals = [
    'Develop production-grade quantum machine learning models for smart city applications',
    'Explore quantum advantage in high-dimensional data classification',
    'Contribute to open-source quantum computing frameworks',
    'Publish research in top-tier AI and Quantum Computing conferences',
    'Bridge the gap between theoretical quantum computing and practical applications',
  ];

  return (
    <section id="research" className="relative py-24 border-t border-border/40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-xs font-semibold uppercase tracking-widest mb-2">
            <Zap className="w-3 h-3" />
            Cutting Edge
          </div>
          <h2 className="section-header">Research & Innovation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-secondary to-accent" />
          <p className="section-subtitle">
            Pioneering the intersection of Quantum Computing, Artificial Intelligence, and Smart Infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {researchAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              className="bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/5 smooth-transition group relative overflow-hidden flex flex-col justify-between"
              whileHover={{ y: -8 }}
            >
              {/* Subtle hover background glow */}
              <div className="absolute -inset-10 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

              <div>
                <div className="mb-6 p-4 w-fit rounded-xl bg-accent/10 border border-accent/25 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white smooth-transition">
                  {area.icon}
                </div>

                <h3 className="text-xl font-bold text-text mb-3">{area.title}</h3>
                <p className="text-muted text-base leading-relaxed mb-6">{area.description}</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-bold text-text flex items-center gap-2">
                  <span className="w-1 h-3 rounded bg-accent" />
                  Key Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-surface/50 border border-white/5 text-accent text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-surface/30 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-accent-secondary/20 shadow-2xl relative overflow-hidden group hover:border-accent-secondary/40 smooth-transition"
        >
          {/* Subtle glow background */}
          <div className="absolute -inset-20 bg-accent-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

          <h3 className="text-2xl sm:text-3xl font-bold text-text mb-8 flex items-center gap-2">
            <span className="w-1.5 h-7 rounded bg-accent-secondary" />
            Research Goals
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent-secondary/15 border border-accent-secondary/25">
                    <Zap className="h-4 w-4 text-accent-secondary" />
                  </div>
                </div>
                <div>
                  <p className="text-muted group-hover:text-text smooth-transition text-sm sm:text-base font-medium leading-relaxed">{goal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
