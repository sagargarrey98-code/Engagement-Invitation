"use client";

import { motion } from "framer-motion";

export default function Inviter() {
  return (
    <motion.div
      className="max-w-6xl mx-auto text-center relative py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-100/20 rounded-full blur-3xl" />
      </div>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 gradient-text mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        निमंत्रक
      </motion.h2>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
        <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
        <motion.div
          className="text-2xl md:text-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          💫
        </motion.div>
        <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent via-accent-400 to-accent-600" />
      </div>

      {/* Family Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative z-10">
        {/* Nikhade Family */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-primary-200/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-primary-200 shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[280px] md:min-w-[320px]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-300/30 to-primary-400/30 rounded-bl-full" />
            <motion.div
              className="text-4xl md:text-5xl mb-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              👨‍👩‍👧‍👦
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              समस्त निखाडे परिवार
            </h3>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-b-3xl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Connecting element */}
        <motion.div
          className="text-3xl md:text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 0.4,
          }}
        >
          💍
        </motion.div>

        {/* Mathulkar Family */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-100/50 to-accent-200/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-accent-200 shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[280px] md:min-w-[320px]">
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent-300/30 to-accent-400/30 rounded-br-full" />
            <motion.div
              className="text-4xl md:text-5xl mb-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              👨‍👩‍👧‍👦
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              समस्त माथुलकर परिवार
            </h3>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-b-3xl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
