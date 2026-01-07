"use client";

import { motion } from "framer-motion";

export default function Details() {
  const details = [
    {
      icon: "📅",
      title: "तारीख",
      content: "२६ जानेवारी २०२६",
      subContent: "सोमवार",
      gradient: "from-primary-500 via-primary-400 to-primary-600",
      bgGradient: "from-primary-50 via-primary-100/50 to-accent-50",
      borderColor: "border-primary-200",
    },
    {
      icon: "🕐",
      title: "वेळ",
      content: "दुपारी २:०० वाजता",
      subContent: "",
      gradient: "from-accent-500 via-accent-400 to-accent-600",
      bgGradient: "from-accent-50 via-accent-100/50 to-gold-50",
      borderColor: "border-accent-200",
    },
    {
      icon: "📍",
      title: "ठिकाण",
      content: "पोलीस वेलफेयर कन्वेंशन हॉल",
      subContent: "तुकुम, चंद्रपूर, महाराष्ट्र ४४२४०१",
      gradient: "from-gold-500 via-gold-400 to-gold-600",
      bgGradient: "from-gold-50 via-gold-100/50 to-primary-50",
      borderColor: "border-gold-200",
    },
    {
      icon: "👗",
      title: "ड्रेस कोड",
      content: "पारंपारिक पोशाख",
      subContent: "सुंदर रंगीत वस्त्रे",
      gradient: "from-primary-500 via-accent-400 to-accent-500",
      bgGradient: "from-primary-50 via-accent-50 to-gold-50",
      borderColor: "border-primary-200",
    },
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-100/15 rounded-full blur-3xl" />
        {/* Animated decorative elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary-300/30"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 3) * 40}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          कार्यक्रमाची माहिती
        </motion.h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
          <motion.div
            className="text-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-accent-400 to-accent-600" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Card background with gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${detail.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
            />

            {/* Main card */}
            <div
              className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 ${detail.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              {/* Decorative corner elements */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${detail.gradient} opacity-10 rounded-bl-full`}
              />
              <div
                className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${detail.gradient} opacity-10 rounded-tr-full`}
              />

              {/* Icon container with enhanced styling */}
              <motion.div
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center text-4xl md:text-5xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl" />
                <div className="relative z-10">{detail.icon}</div>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 relative z-10">
                {detail.title}
              </h3>

              <div className="space-y-2 relative z-10">
                <p className="text-lg md:text-xl text-gray-800 font-bold leading-tight">
                  {detail.content}
                </p>
                {detail.subContent && (
                  <p className="text-base md:text-lg text-gray-600 font-medium">
                    {detail.subContent}
                  </p>
                )}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${detail.gradient} rounded-b-3xl`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <motion.div
        className="mt-12 md:mt-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Background for map section */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-accent-50/50 to-gold-50/50 rounded-3xl blur-2xl" />

        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-primary-200 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-gold-200/20 to-primary-200/20 rounded-tr-full" />

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                🗺️ नकाशा
              </h3>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-accent-400 to-accent-600" />
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary-200 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20 z-10 pointer-events-none" />
              <iframe
                src="https://www.google.com/maps?q=Police+Welfare+Convention+Hall,+Tukum,+Chandrapur,+Maharashtra+442401&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full relative z-0"
                title="Location Map - पोलीस वेलफेयर कन्वेंशन हॉल"
              />
            </div>

            <div className="mt-6 text-center">
              <motion.a
                href="https://maps.app.goo.gl/hXno7F5qyhRZbpmt6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 via-accent-600 to-gold-600 text-white font-bold rounded-xl hover:from-primary-700 hover:via-accent-700 hover:to-gold-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">🗺️</span>
                <span className="text-base md:text-lg">
                  Google Maps मध्ये उघडा
                </span>
                <span className="text-xl">↗️</span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
