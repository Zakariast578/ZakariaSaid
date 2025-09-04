import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="py-12 border-t border-gray-800/50 bg-black/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex items-center space-x-2 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold gradient-text">Zakaria Said</span>
          </motion.div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
              © 2025 ZakariaSaid. Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>{' '}
              by Zakaria Said
            </p>
            <p className="text-sm text-gray-500 mt-2">
              ZakariaSaid.dev - Premium Digital Experiences
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}