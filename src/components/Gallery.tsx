"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Images from public/asset directory
  const images = [
    {
      id: 1,
      src: "/asset/image1.jpeg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/asset/image2.jpeg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/asset/Image3.jpeg",
      alt: "Gallery Image 3",
    },
    {
      id: 4,
      src: "/asset/image4.jpeg",
      alt: "Gallery Image 4",
    },
    {
      id: 5,
      src: "/asset/image5.jpeg",
      alt: "Gallery Image 5",
    },
    {
      id: 6,
      src: "/asset/image6.jpeg",
      alt: "Gallery Image 6",
    },
  ];

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
        आमच्या क्षणांची गॅलरी
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-full max-h-full rounded-lg shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg object-contain"
              unoptimized
            />
          </motion.div>
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent-400 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
