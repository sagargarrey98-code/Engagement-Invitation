"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ganesh Image - Optimized */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-2xl opacity-40" />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="https://png.pngtree.com/png-vector/20250519/ourlarge/pngtree-cartoon-ganesha-illustration-png-image_16316817.png"
              alt="Ganesh"
              width={144}
              height={144}
              className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-lg"
              unoptimized
              priority
            />
         
          </div>
        
        </div>
      </motion.div>

      <span  className="text-lg md:text-xl text-gray-700 font-medium">
            || ॐ गं गणपतये नमः ||
      </span>
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 gradient-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        आमच्या साखरपुड्याच्या निमंत्रणास
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-700 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        आपल्या उपस्थितीची आम्हाला आशा आहे
      </motion.p>
    </motion.div>
  );
}
