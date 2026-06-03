'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log('Form submitted:', formState);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-border/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 mb-16"
        >
          <h2 className="section-header">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary" />
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m always interested in hearing about new projects, research collaborations,
                or software engineering opportunities. Whether you have a specific proposal or
                just want to connect, feel free to drop a message.
              </p>

              <motion.div variants={itemVariants} className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: 'Email',
                    value: portfolioData.personal.email,
                    href: `mailto:${portfolioData.personal.email}`,
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: 'Phone',
                    value: portfolioData.personal.phone,
                    href: `tel:${portfolioData.personal.phone}`,
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: 'Location',
                    value: portfolioData.personal.location,
                    href: '#',
                  },
                ].map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 group p-4 rounded-2xl bg-surface/20 border border-white/5 hover:border-accent/40 hover:bg-surface/30 smooth-transition"
                    whileHover={{ x: 6 }}
                  >
                    <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/25 text-accent group-hover:bg-accent group-hover:text-white smooth-transition">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-wider mb-0.5">
                        {contact.label}
                      </p>
                      <p className="text-text font-semibold text-sm sm:text-base">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 pt-8 border-t border-border/40"
            >
              <p className="text-sm font-bold text-text uppercase tracking-wider">Follow Me</p>
              <div className="flex gap-4">
                {portfolioData.personal.socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="p-3.5 rounded-xl bg-surface border border-border/40 text-muted hover:text-white hover:bg-accent hover:border-accent smooth-transition shadow-md"
                    aria-label={link.name}
                  >
                    {getSocialIcon(link.name)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-surface/30 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-2xl hover:border-accent/30 smooth-transition group relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] smooth-transition text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] smooth-transition text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-white/10 text-text placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] smooth-transition resize-none text-sm"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accent-secondary hover:opacity-95 disabled:opacity-50 text-white rounded-xl font-bold flex items-center justify-center gap-2 smooth-transition shadow-[0_4px_15px_rgba(59,130,246,0.2)]"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin text-lg">⚙️</span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/35 text-green-400 text-sm font-semibold flex items-center gap-2"
                >
                  <span>✓</span>
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/35 text-red-400 text-sm font-semibold flex items-center gap-2"
                >
                  <span>✗</span>
                  <span>Error sending message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
