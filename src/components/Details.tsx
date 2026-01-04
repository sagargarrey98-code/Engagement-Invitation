'use client'

import { motion } from 'framer-motion'

export default function Details() {
  const details = [
    {
      icon: '📅',
      title: 'तारीख',
      content: '२६ जानेवारी २०२६',
      subContent: 'सोमवार',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      icon: '🕐',
      title: 'वेळ',
      content: 'दुपार २:०० वाजता',
      subContent: 'दुपार',
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      icon: '📍',
      title: 'ठिकाण',
      content: 'पोलीस वेलफेयर कन्वेंशन हॉल',
      subContent: 'तुकुम, चंद्रपूर, महाराष्ट्र ४४२४०१',
      gradient: 'from-gold-500 to-gold-600',
    },
    {
      icon: '👗',
      title: 'ड्रेस कोड',
      content: 'पारंपारिक पोशाख',
      subContent: 'सुंदर रंगीत वस्त्रे',
      gradient: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        कार्यक्रमाची माहिती
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center text-3xl mb-4 shadow-md`}>
              {detail.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {detail.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-800 mb-2 font-semibold">
              {detail.content}
            </p>
            <p className="text-base text-gray-600">
              {detail.subContent}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <motion.div
        className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          🗺️ नकाशा
        </h3>
        <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-200 shadow-md">
          <iframe
            src="https://www.google.com/maps?q=Police+Welfare+Convention+Hall,+Tukum,+Chandrapur,+Maharashtra+442401&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Location Map - पोलीस वेलफेयर कन्वेंशन हॉल"
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://maps.app.goo.gl/hXno7F5qyhRZbpmt6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>🗺️</span>
            <span>Google Maps मध्ये उघडा</span>
            <span>↗️</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
