"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700 py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-4xl">💕</span>
        </motion.div>

        <motion.p
          className="text-white/90 text-lg mb-4 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          आपल्या प्रेम आणि आशीर्वादासाठी धन्यवाद
        </motion.p>

        <motion.p
          className="text-white/70 text-base mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          सुरज & सोनाली
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="#"
            className="text-white/70 hover:text-accent-400 transition-colors text-2xl"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            📱
          </motion.a>
          <motion.a
            href="#"
            className="text-white/70 hover:text-accent-400 transition-colors text-2xl"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            📧
          </motion.a>
          <motion.a
            href="#"
            className="text-white/70 hover:text-accent-400 transition-colors text-2xl"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            💬
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
