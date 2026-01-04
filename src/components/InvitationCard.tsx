"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InvitationCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-full h-[600px] md:h-[700px] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full bg-white rounded-3xl shadow-xl card-glow overflow-hidden p-6 md:p-10 border-2 border-primary-100">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary-300 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent-300 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gold-300 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary-300 rounded-br-2xl" />

            {/* Enhanced decorative gradients */}
            <div className="absolute top-0 left-0 w-full h-2/5 bg-gradient-to-br from-primary-50 via-accent-50 to-transparent" />
            <div className="absolute bottom-0 right-0 w-3/5 h-2/5 bg-gradient-to-tl from-gold-50 via-primary-50 to-transparent opacity-60" />

            {/* Decorative pattern dots */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-1 border-t-2 border-dashed border-primary-200" />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-1 border-b-2 border-dashed border-accent-200" />

            {/* Animated decorative elements */}
            {Array.from({ length: 6 }).map((_, i) => {
              const positions = [
                { top: "10%", left: "8%" },
                { top: "15%", right: "10%" },
                { bottom: "12%", left: "12%" },
                { bottom: "10%", right: "8%" },
                { top: "50%", left: "5%" },
                { top: "50%", right: "5%" },
              ];
              const pos = positions[i];
              return (
                <motion.div
                  key={i}
                  className="absolute text-2xl md:text-3xl"
                  style={pos}
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.8, 1.1, 0.8],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {i % 3 === 0 ? "🌸" : i % 3 === 1 ? "✨" : "💫"}
                </motion.div>
              );
            })}

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              {/* Decorative quote/ornament at top */}
              <motion.div
                className="mb-4 text-3xl md:text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                💐
              </motion.div>

              {/* Groom and Bride with enhanced styling */}
              <div className="flex flex-row md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
                {/* Groom Section */}
                <motion.div
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Decorative ring around groom */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 opacity-30 blur-sm" />
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-2 shadow-xl border-4 border-white mb-3">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-4xl md:text-6xl shadow-inner">
                      👨
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap shadow-lg border-2 border-white mb-2">
                    चि. सुरज
                  </div>
                  {/* Family Information */}
                  <div className="text-center mt-1">
                    <p className="text-xs md:text-sm text-gray-700 font-semibold mb-0.5">
                      पुत्र
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      श्री. ईश्वर गणपती निखाडे
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      सौ. संगीता ईश्वर निखाडे
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      रा. घोडपेठ, जिल्हा चंद्रपूर
                    </p>
                  </div>
                </motion.div>

                {/* Ring Icon */}
                <motion.div
                  className="relative hidden md:block"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-5xl md:text-7xl drop-shadow-lg">💍</div>
                  <div className="absolute -top-2 -right-2 text-xl">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-xl">✨</div>
                </motion.div>

                {/* Mobile Ring Icon */}
                <motion.div
                  className="relative md:hidden -my-2"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-4xl drop-shadow-lg">💍</div>
                </motion.div>

                {/* Bride Section */}
                <motion.div
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Decorative ring around bride */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent-200 to-accent-400 opacity-30 blur-sm" />
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 p-2 shadow-xl border-4 border-white mb-3">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-4xl md:text-6xl shadow-inner">
                      👩
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap shadow-lg border-2 border-white mb-2">
                    ची.सौ.का. सोनाली
                  </div>
                  {/* Family Information */}
                  <div className="text-center mt-1">
                    <p className="text-xs md:text-sm text-gray-700 font-semibold mb-0.5">
                      कन्या
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      कै. शंकर माथुलकर
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                    श्रीमती. पद्मा शंकर माथुलकर
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      रा. सरकार नगर, तुकूम, चंद्रपूर
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-2 mb-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-300 to-primary-500" />
                <div className="text-2xl">🌺</div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent-300 to-accent-500" />
              </div>

              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 gradient-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                साखरपुडा समारंभ
              </motion.h2>

              {/* Decorative quote */}
              <motion.div
                className="mb-4 text-sm md:text-base text-gray-600 italic font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                &ldquo;दोन हृदयांचा मिलन&rdquo;
              </motion.div>

              <motion.p
                className="text-base md:text-lg text-gray-700 mb-6 max-w-md leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                आपल्या आशीर्वादाची आणि उपस्थितीची
                <br />
                आम्हाला आशा आहे
              </motion.p>

              {/* Decorative bottom element */}
              <motion.div
                className="mt-auto flex items-center gap-3 text-xs md:text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span>💫</span>
                <p className="font-medium">कार्ड फिरवण्यासाठी क्लिक करा</p>
                <span>💫</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Back of Card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full bg-white rounded-3xl shadow-xl card-glow overflow-hidden p-6 md:p-10 border-2 border-accent-100">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent-300 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gold-300 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary-300 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent-300 rounded-br-2xl" />

            {/* Enhanced decorative gradients */}
            <div className="absolute top-0 right-0 w-full h-2/5 bg-gradient-to-bl from-accent-50 via-primary-50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-3/5 h-2/5 bg-gradient-to-tr from-gold-50 via-accent-50 to-transparent opacity-60" />

            {/* Decorative pattern dots */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-1 border-t-2 border-dashed border-accent-200" />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-1 border-b-2 border-dashed border-gold-200" />

            {/* Decorative elements */}
            {Array.from({ length: 4 }).map((_, i) => {
              const positions = [
                { top: "12%", left: "10%" },
                { top: "12%", right: "10%" },
                { bottom: "12%", left: "10%" },
                { bottom: "12%", right: "10%" },
              ];
              return (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={positions[i]}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {i % 2 === 0 ? "🌺" : "✨"}
                </motion.div>
              );
            })}

            <div className="relative z-10 h-full flex flex-col items-center text-center px-2 md:px-4 overflow-y-auto py-4 md:py-6">
              {/* Decorative header */}
              <motion.div
                className="mb-3 md:mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-3xl md:text-4xl mb-1.5 md:mb-2">📅</div>
                <motion.h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  तारीख आणि वेळ
                </motion.h3>
                <div className="flex items-center justify-center gap-2 mt-1.5 md:mt-2">
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
                  <span className="text-lg md:text-xl">💫</span>
                  <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-accent-400 to-accent-600" />
                </div>
              </motion.div>

              <div className="space-y-3 md:space-y-4 mb-4 w-full max-w-sm px-2 md:px-0">
                <motion.div
                  className="bg-gradient-to-br from-primary-50 via-primary-100 to-accent-50 rounded-xl md:rounded-2xl p-3 md:p-5 border-2 border-primary-200 shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                    <span className="text-xl md:text-2xl">📅</span>
                    <p className="text-xs md:text-sm font-semibold text-primary-700 uppercase tracking-wide">
                      तारीख
                    </p>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1 leading-tight">
                    २६ जानेवारी २०२६
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">सोमवार</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-accent-50 via-accent-100 to-gold-50 rounded-xl md:rounded-2xl p-3 md:p-5 border-2 border-accent-200 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                    <span className="text-xl md:text-2xl">🕐</span>
                    <p className="text-xs md:text-sm font-semibold text-accent-700 uppercase tracking-wide">
                      वेळ
                    </p>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                    दुपार २:०० वाजता
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1">दुपार</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gold-50 via-gold-100 to-primary-50 rounded-xl md:rounded-2xl p-3 md:p-5 border-2 border-gold-200 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                    <span className="text-xl md:text-2xl flex-shrink-0">📍</span>
                    <p className="text-xs md:text-sm font-semibold text-gold-700 uppercase tracking-wide whitespace-nowrap">
                      ठिकाण
                    </p>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 leading-tight break-words">
                    पोलीस वेलफेयर कन्वेंशन हॉल
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed break-words">
                    तुकुम, चंद्रपूर, महाराष्ट्र ४४२४०१
                  </p>

                  <div className="mt-2 text-[10px] md:text-xs text-gray-500 flex items-center gap-1 flex-wrap">
                    <span>🗺️</span>
                    <span className="break-words">Google Maps वर शोधा</span>
                  </div>
                </motion.div>
              </div>

              {/* Gallery Section */}
              <motion.div
                className="w-full max-w-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="mb-3">
                  <div className="text-3xl mb-2 text-center">📸</div>
                  <motion.h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                    आठवणी
                  </motion.h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
                    <span className="text-lg">💫</span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent via-accent-400 to-accent-600" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "/asset/image1.jpeg",
                    "/asset/image2.jpeg",
                    "/asset/Image3.jpeg",
                    "/asset/image4.jpeg",
                    "/asset/image5.jpeg",
                  ].map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary-200 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative bottom */}
              <motion.div
                className="mt-4 flex items-center gap-3 text-xs md:text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <span>💫</span>
                <p className="font-medium">पुन्हा फिरवण्यासाठी क्लिक करा</p>
                <span>💫</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
