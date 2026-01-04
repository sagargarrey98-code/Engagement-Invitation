"use client";

import { motion } from "framer-motion";

export default function Inviter() {

  return (
    <motion.div
      className="max-w-6xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        निमंत्रक
      </motion.h2>
      <motion.p
        className="text-2xl md:text-2xl lg:text-5xl text-gray-700 mb-6 max-w-md leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        समस्त निखाडे परिवार
      </motion.p>
    </motion.div>
  );
}
