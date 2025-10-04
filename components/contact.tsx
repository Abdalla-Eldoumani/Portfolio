"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aamsdoumani@gmail.com',
    href: 'mailto:aamsdoumani@gmail.com',
    color: 'text-cyan-400'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'AbdallaEldoumani',
    href: 'https://www.linkedin.com/in/abdallaeldoumani/',
    color: 'text-blue-400'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Abdalla-Eldoumani',
    href: 'https://github.com/Abdalla-Eldoumani',
    color: 'text-purple-400'
  }
];

export const Contact = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Open to new opportunities, collaborations, and conversations about technology, innovation, and building exceptional products.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -4 }}
                className="glass-effect p-6 rounded-xl hover-lift group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${method.color} bg-opacity-10`} style={{ backgroundColor: 'var(--tertiary-bg)' }}>
                    <Icon size={24} className={method.color} />
                  </div>
                  <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {method.label}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="glass-effect p-8 md:p-12 rounded-2xl text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <MapPin size={20} style={{ color: 'var(--accent-primary)' }} className="mr-2" />
            <span style={{ color: 'var(--text-secondary)' }}>Based in Calgary, Alberta, Canada</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.025em' }}>
            Ready to build something exceptional?
          </h3>
          <p className="text-lg text-body mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Whether you&apos;re looking for a developer, have a project in mind, or just want to chat about technology – I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:aamsdoumani@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 glass-effect px-8 py-4 rounded-full font-semibold hover-lift interactive-element"
              style={{ color: 'var(--text-primary)' }}
            >
              <Mail size={20} />
              Send a Message
            </motion.a>
            <motion.a
              href="/my-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold interactive-element"
              style={{
                border: '1px solid var(--border-primary)',
                color: 'var(--text-secondary)'
              }}
            >
              Download Resume
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 pt-8 text-center"
          style={{
            borderTop: '1px solid var(--border-primary)',
            color: 'var(--text-muted)'
          }}
        >
          <p className="text-sm text-center mx-auto">
            &copy; {new Date().getFullYear()} Abdalla Eldoumani. Crafted with precision and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
