'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attendance: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', attendance: '', message: '' })
    }, 3000)
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        आपली उपस्थिती नोंदवा
      </motion.h2>
      <motion.p
        className="text-center text-gray-700 mb-8 text-lg font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        आपल्या उपस्थितीची पुष्टी करण्यासाठी कृपया खालील फॉर्म भरा
      </motion.p>

      <motion.div
        className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {submitted ? (
          <motion.div
            className="text-center py-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              धन्यवाद!
            </h3>
            <p className="text-gray-700 font-medium">
              आपली प्रतिक्रिया नोंदवली गेली आहे
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-900 mb-2 font-semibold">
                नाव *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                placeholder="आपले नाव प्रविष्ट करा"
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-2 font-semibold">
                मोबाइल नंबर *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                placeholder="आपला मोबाइल नंबर"
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-2 font-semibold">
                ईमेल
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                placeholder="आपला ईमेल (पर्यायी)"
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-2 font-semibold">
                उपस्थिती *
              </label>
              <select
                required
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
              >
                <option value="" className="bg-white text-gray-900">
                  निवडा
                </option>
                <option value="yes" className="bg-white text-gray-900">
                  होय, मी उपस्थित राहीन
                </option>
                <option value="no" className="bg-white text-gray-900">
                  नाही, मी उपस्थित राहू शकत नाही
                </option>
              </select>
            </div>

            <div>
              <label className="block text-gray-900 mb-2 font-semibold">
                संदेश
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                placeholder="आपला संदेश (पर्यायी)"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              पाठवा
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}
