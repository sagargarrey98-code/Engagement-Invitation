

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function Countdown() {
 const [timeLeft, setTimeLeft] = useState({
   days: 0,
   hours: 0,
   minutes: 0,
   seconds: 0,
 })
 const [mounted, setMounted] = useState(false)
 const [previousValues, setPreviousValues] = useState({
   days: 0,
   hours: 0,
   minutes: 0,
   seconds: 0,
 })


 useEffect(() => {
   setMounted(true)
  
   // Set target date - Update this to your actual engagement date
   const targetDate = new Date('2026-01-26T14:00:00+05:30').getTime()


   // Calculate initial time immediately
   const calculateTime = () => {
     const now = new Date().getTime()
     const difference = targetDate - now


     setTimeLeft((prevTime) => {
     if (difference > 0) {
         const newTime = {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
         seconds: Math.floor((difference % (1000 * 60)) / 1000),
         }
         setPreviousValues(prevTime)
         return newTime
     } else {
       // If date has passed, set to 0
         setPreviousValues(prevTime)
         return {
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0,
         }
       }
       })
   }


   // Calculate immediately
   calculateTime()


   // Then update every second
   const timer = setInterval(calculateTime, 1000)


   return () => clearInterval(timer)
 }, [])


 const countdownItems = [
   {
     label: 'दिवस',
     value: timeLeft.days,
     previousValue: previousValues.days,
     color: 'primary',
     icon: '📅',
     gradient: 'from-primary-500 via-primary-400 to-primary-600',
     bgGradient: 'from-primary-50 via-primary-100/50 to-accent-50',
     borderColor: 'border-primary-300',
   },
   {
     label: 'तास',
     value: timeLeft.hours,
     previousValue: previousValues.hours,
     color: 'accent',
     icon: '🕐',
     gradient: 'from-accent-500 via-accent-400 to-accent-600',
     bgGradient: 'from-accent-50 via-accent-100/50 to-gold-50',
     borderColor: 'border-accent-300',
   },
   {
     label: 'मिनिटे',
     value: timeLeft.minutes,
     previousValue: previousValues.minutes,
     color: 'gold',
     icon: '⏰',
     gradient: 'from-gold-500 via-gold-400 to-gold-600',
     bgGradient: 'from-gold-50 via-gold-100/50 to-primary-50',
     borderColor: 'border-gold-300',
   },
   {
     label: 'सेकंद',
     value: timeLeft.seconds,
     previousValue: previousValues.seconds,
     color: 'primary',
     icon: '⏱️',
     gradient: 'from-primary-500 via-accent-400 to-accent-600',
     bgGradient: 'from-primary-50 via-accent-50 to-gold-50',
     borderColor: 'border-primary-300',
   },
 ]


 // Show loading state until mounted (prevents hydration mismatch)
 if (!mounted) {
   return (
     <div className="max-w-6xl mx-auto text-center">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
         {[0, 1, 2, 3].map((i) => (
           <div
             key={i}
             className="bg-gray-200 rounded-3xl p-6 border-2 border-gray-300 animate-pulse"
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
     className="max-w-6xl mx-auto text-center relative"
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
   >
     {/* Background decorative elements */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-100/15 rounded-full blur-3xl" />
       {/* Floating decorative elements */}
       {Array.from({ length: 8 }).map((_, i) => (
         <motion.div
           key={i}
           className="absolute text-2xl md:text-3xl"
           style={{
             top: `${10 + (i * 12)}%`,
             left: `${5 + (i % 4) * 25}%`,
           }}
           animate={{
             y: [0, -20, 0],
             opacity: [0.3, 0.7, 0.3],
             scale: [0.8, 1.2, 0.8],
           }}
           transition={{
             duration: 4 + i * 0.5,
             repeat: Infinity,
             delay: i * 0.3,
           }}
         >
           {i % 4 === 0 ? '✨' : i % 4 === 1 ? '💫' : i % 4 === 2 ? '🌟' : '⭐'}
         </motion.div>
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
         className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 gradient-text"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5 }}
     >
       आमच्या साखरपुड्यापर्यंत
     </motion.h2>


       {/* Decorative divider */}
       <div className="flex items-center justify-center gap-3 mb-12">
         <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
         <motion.div
           className="text-3xl"
           animate={{ rotate: [0, 360] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         >
           💍
         </motion.div>
         <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-accent-400 to-accent-600" />
       </div>
     </motion.div>


     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10">
       {countdownItems.map((item, index) => {
         const hasChanged = item.value !== item.previousValue
         return (
           <motion.div
             key={item.label}
             className="relative group"
             initial={{ opacity: 0, y: 30, scale: 0.8 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             whileHover={{ y: -8, scale: 1.05 }}
           >
             {/* Background glow */}
             <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
            
             {/* Main card */}
             <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 ${item.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden`}>
               {/* Decorative corner elements */}
               <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-20 rounded-bl-full`} />
               <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${item.gradient} opacity-20 rounded-tr-full`} />
              
               {/* Icon */}
               <motion.div
                 className="text-4xl md:text-5xl mb-4 text-center"
                 animate={{
                   rotate: [0, 10, -10, 0],
                   scale: [1, 1.1, 1],
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   delay: index * 0.5,
                 }}
               >
                 {item.icon}
               </motion.div>


               {/* Number with flip animation */}
               <div className="relative h-20 md:h-24 mb-3 flex items-center justify-center overflow-hidden">
                 <AnimatePresence mode="wait">
             <motion.div
                     key={item.value}
                     className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent absolute inset-0 flex items-center justify-center`}
                     initial={{ y: 50, opacity: 0, rotateX: -90 }}
                     animate={{ y: 0, opacity: 1, rotateX: 0 }}
                     exit={{ y: -50, opacity: 0, rotateX: 90 }}
                     transition={{
                       duration: 0.5,
                       type: "spring",
                       stiffness: 200,
                       damping: 20
                     }}
             >
               {String(item.value).padStart(2, '0')}
             </motion.div>
                 </AnimatePresence>
                
                 {/* Shine effect */}
                 {hasChanged && (
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                     initial={{ x: '-100%' }}
                     animate={{ x: '100%' }}
                     transition={{ duration: 0.6 }}
                   />
                 )}
               </div>


               {/* Label */}
               <div className={`text-base md:text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent text-center`}>
                 {item.label}
               </div>


               {/* Bottom accent line */}
               <motion.div
                 className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient} rounded-b-3xl`}
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
               />
             </div>
           </motion.div>
         )
       })}
     </div>


     {/* Encouragement message */}
     <motion.div
       className="mt-12 relative z-10"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: 0.6 }}
     >
       <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border-2 border-primary-200/50 shadow-lg">
         <motion.span
           className="text-2xl"
           animate={{ rotate: [0, 20, -20, 0] }}
           transition={{ duration: 2, repeat: Infinity, delay: 1 }}
         >
           💐
         </motion.span>
         <p className="text-base md:text-lg font-semibold text-gray-800">
           आम्ही आपल्या उपस्थितीची प्रतीक्षा करत आहोत!
         </p>
         <motion.span
           className="text-2xl"
           animate={{ rotate: [0, -20, 20, 0] }}
           transition={{ duration: 2, repeat: Infinity, delay: 1 }}
         >
           💐
         </motion.span>
       </div>
     </motion.div>
   </motion.div>
 )
}


