'use client';

import { motion } from 'framer-motion';
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGit,
  FaLinux,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaCode,
  FaServer,
  FaGithub,
  FaDesktop,
  FaAtom,
  FaProjectDiagram,
  FaMicrochip,
  FaCogs,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiQiskit,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { SiGnubash } from 'react-icons/si';
import { portfolioData } from '@/data/portfolio';
import { getSkillsByCategory } from '@/lib/utils';

const skillIcons: Record<string, React.ReactNode> = {
  Python: <FaPython className="w-8 h-8" />,
  Java: <FaJava className="w-8 h-8" />,
  'C++': <SiCplusplus className="w-8 h-8" />,
  JavaScript: <FaJsSquare className="w-8 h-8" />,
  TypeScript: <SiTypescript className="w-8 h-8" />,
  'React.js': <FaReact className="w-8 h-8" />,
  'Node.js': <FaNode className="w-8 h-8" />,
  'Spring Boot': <SiSpringboot className="w-8 h-8" />,
  MySQL: <SiMysql className="w-10 h-10" />,
  MongoDB: <SiMongodb className="w-8 h-8" />,
  PostgreSQL: <SiPostgresql className="w-8 h-8" />,
  PyTorch: <SiPytorch className="w-8 h-8" />,
  'Scikit-Learn': <SiScikitlearn className="w-10 h-10" />,
  OpenCV: <SiOpencv className="w-8 h-8" />,
  Qiskit: <SiQiskit className="w-8 h-8" />,
  HTML5: <SiHtml5 className="w-8 h-8" />,
  CSS3: <SiCss3 className="w-8 h-8" />,
  SQL: <SiMysql className="w-8 h-8" />,
  Git: <FaGit className="w-8 h-8" />,
  Linux: <FaLinux className="w-8 h-8" />,
  'REST APIs': <FaDatabase className="w-8 h-8" />,
  'YOLOv8': <FaBrain className="w-8 h-8" />,
  'Data Structures & Algorithms': <FaCode className="w-8 h-8" />,
  'Object-Oriented Programming': <FaCode className="w-8 h-8" />,
  'Responsive UI Design': <SiHtml5 className="w-8 h-8" />,
  PCA: <FaChartLine className="w-8 h-8" />,
  'Model Optimization': <FaChartLine className="w-8 h-8" />,
  'Quantum Machine Learning': <FaAtom className="w-8 h-8" />,
  'Quantum Neural Networks (QNN)': <FaProjectDiagram className="w-8 h-8" />,
  'Quantum Circuit Design': <FaMicrochip className="w-8 h-8" />,
  'Quantum Optimization': <FaCogs className="w-8 h-8" />,
  'Shell Scripting': <SiGnubash className="w-8 h-8" />,
  'CI/CD Fundamentals': <FaServer className="w-8 h-8" />,
  'Software Engineering': <FaCode className="w-8 h-8" />,
  'Agile Development': <FaCode className="w-8 h-8" />,
  GitHub: <FaGithub className="w-8 h-8" />,
  'Database Management Systems': <FaDatabase className="w-8 h-8" />,
  'Operating Systems': <FaDesktop className="w-8 h-8" />,
};

interface SkillCategory {
  name: string;
  label: string;
}

const categories: SkillCategory[] = [
  { name: 'language', label: 'Programming Languages' },
  { name: 'frontend', label: 'Frontend' },
  { name: 'backend', label: 'Backend' },
  { name: 'database', label: 'Databases' },
  { name: 'ml', label: 'AI/ML' },
  { name: 'quantum', label: 'Quantum Computing' },
  { name: 'devops', label: 'DevOps' },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-24 border-t border-border/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <h2 className="section-header">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
          <p className="section-subtitle">
            A comprehensive toolkit for building scalable applications and
            conducting cutting-edge research
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {categories.map((category) => {
            const skills = getSkillsByCategory(portfolioData.skills, category.name);
            if (skills.length === 0) return null;

            return (
              <motion.div key={category.name} variants={itemVariants} className="space-y-6">
                <h3 className="text-lg font-semibold text-text flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded bg-accent-secondary" />
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ delay: index * 0.03, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="p-5 rounded-2xl bg-surface/30 backdrop-blur-sm border border-white/5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 smooth-transition group cursor-pointer relative overflow-hidden"
                    >
                      {/* Subtle hover background glow */}
                      <div className="absolute -inset-10 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

                      <div className="flex flex-col items-center justify-center gap-3 h-full">
                        <div className="text-muted group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                          {skillIcons[skill.name] || (
                            <div className="w-8 h-8 bg-accent/10 rounded-md border border-accent/20" />
                          )}
                        </div>
                        <p className="text-lg font-semibold text-text text-center group-hover:text-accent smooth-transition">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
