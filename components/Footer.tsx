'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-surface/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg text-text mb-4">Rishi Waghmare</h3>
            <p className="text-sm text-muted">
              Software Engineer & AI/ML Researcher building scalable systems
              with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-text mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted hover:text-accent smooth-transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-text mb-4">Experience</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Full-Stack Development',
                'AI/ML Engineering',
                'Quantum Computing',
                'Research',
              ].map((item) => (
                <li key={item} className="text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-text mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface hover:bg-accent hover:text-white smooth-transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface hover:bg-accent hover:text-white smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks[2].url}
                className="p-2 rounded-lg bg-surface hover:bg-accent hover:text-white smooth-transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/40 pt-8 flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted"
          >
            © {currentYear} Rishi Waghmare. All rights reserved.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            className="p-2 rounded-lg bg-surface hover:bg-accent hover:text-white smooth-transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
