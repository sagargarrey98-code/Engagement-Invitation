"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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
  // {
  //   id: 4,
  //   src: "/asset/image4.jpeg",
  //   alt: "Gallery Image 4",
  // },
  // {
  //   id: 5,
  //   src: "/asset/image5.jpeg",
  //   alt: "Gallery Image 5",
  // },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  // Preload images to prevent flickering
  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play carousel (optional - uncomment to enable)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

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
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-100/15 rounded-full blur-3xl" />
      </div>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 gradient-text relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        आमच्या क्षणांची गॅलरी
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Main Carousel */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-primary-50 via-accent-50 to-gold-50 border-2 border-primary-100/50">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gold-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            {/* Animated decorative dots */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary-300/40"
                style={{
                  top: `${10 + i * 12}%`,
                  left: `${5 + (i % 3) * 30}%`,
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-video bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 40 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                onClick={() => setSelectedImage(currentIndex)}
              >
                {/* Image with frame effect */}
                <div className="absolute inset-4 md:inset-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                    priority={currentIndex === 0}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                  {/* Shine overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-500/5 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows with enhanced styling */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-full p-3 md:p-4 shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group"
            aria-label="Previous image"
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all" />
            <svg
              className="w-6 h-6 md:w-7 md:h-7 relative z-10 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white rounded-full p-3 md:p-4 shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 group"
            aria-label="Next image"
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all" />
            <svg
              className="w-6 h-6 md:w-7 md:h-7 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Enhanced Image Counter */}
          <motion.div
            className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary-600/90 via-accent-600/90 to-gold-600/90 text-white px-4 py-2 rounded-full text-sm md:text-base font-bold backdrop-blur-md shadow-xl border-2 border-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">📸</span>
              <span>
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20 z-20">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-gold-500"
              initial={{ width: "0%" }}
              animate={{
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Enhanced Thumbnail Navigation */}
        <div className="mt-8 relative">
          {/* Decorative background for thumbnails */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100/40 via-accent-100/40 to-gold-100/40 rounded-3xl blur-2xl -z-10" />
          <div className="relative flex justify-center gap-3 md:gap-4 overflow-x-auto pb-3 scrollbar-hide px-6 py-4 rounded-3xl bg-white/40 backdrop-blur-md border-2 border-primary-200/50 shadow-xl">
            {images.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "border-4 border-primary-500 scale-110 shadow-2xl ring-4 ring-primary-200/50"
                    : "border-2 border-gray-300 opacity-70 hover:opacity-100 hover:scale-105 hover:border-primary-300"
                }`}
                whileHover={{
                  scale: index === currentIndex ? 1.15 : 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
                {index === currentIndex && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30"
                      layoutId="activeThumbnail"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                    {/* Active indicator */}
                    <div className="absolute top-1 right-1 w-3 h-3 bg-primary-500 rounded-full border-2 border-white shadow-lg">
                      <motion.div
                        className="absolute inset-0 bg-primary-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6 relative z-10">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border-2 border-primary-200/50 shadow-xl">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full relative ${
                  index === currentIndex
                    ? "w-10 h-3 bg-gradient-to-r from-primary-500 via-accent-500 to-gold-500 shadow-lg"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox with Carousel Navigation */}
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

          {/* Lightbox Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + images.length) % images.length
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-primary-400 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-primary-400 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center z-10"
            aria-label="Next image"
          >
            ›
          </button>

          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-400 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Lightbox Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
