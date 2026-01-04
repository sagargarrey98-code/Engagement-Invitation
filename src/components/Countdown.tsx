'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Set target date - Update this to your actual engagement date
    const targetDate = new Date('2026-01-26T14:00:00+05:30').getTime()

    // Calculate initial time immediately
    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        // If date has passed, set to 0
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    // Calculate immediately
    calculateTime()

    // Then update every second
    const timer = setInterval(calculateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  const countdownItems = [
    { label: 'दिवस', value: timeLeft.days, color: 'primary' },
    { label: 'तास', value: timeLeft.hours, color: 'accent' },
    { label: 'मिनिटे', value: timeLeft.minutes, color: 'gold' },
    { label: 'सेकंद', value: timeLeft.seconds, color: 'primary' },
  ]

  // Show loading state until mounted (prevents hydration mismatch)
  if (!mounted) {
    return (
      <div className="max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-2xl p-6 border-2 border-gray-300 animate-pulse"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-2">
                00
              </div>
              <div className="text-base md:text-lg text-gray-400 font-semibold h-5 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 gradient-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        आमच्या साखरपुड्यापर्यंत
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {countdownItems.map((item, index) => {
          const colorClasses = {
            primary: 'from-primary-500 to-primary-600 border-primary-200',
            accent: 'from-accent-500 to-accent-600 border-accent-200',
            gold: 'from-gold-500 to-gold-600 border-gold-200',
          }
          return (
            <motion.div
              key={item.label}
              className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl p-6 border-2 shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                key={`${item.label}-${item.value}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.div>
              <div className="text-base md:text-lg text-white font-semibold">{item.label}</div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
