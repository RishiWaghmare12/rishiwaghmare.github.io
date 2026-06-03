'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RW</span>
            </div>
            <span className="font-bold text-lg text-text hidden sm:inline">
              Rishi
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-sm text-muted hover:text-text smooth-transition"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-block px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg text-sm font-medium smooth-transition"
          >
            Contact
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-surface rounded-lg smooth-transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-text" />
            ) : (
              <Menu className="w-5 h-5 text-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-border/40 bg-surface/50"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted hover:text-text smooth-transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg text-sm font-medium smooth-transition text-center"
            >
              Contact
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
