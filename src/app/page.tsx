"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import InvitationCard from "@/components/InvitationCard";
import Inviter from "@/components/Inviter";

// Lazy load components for better performance
const Countdown = lazy(() => import("@/components/Countdown"));
const Details = lazy(() => import("@/components/Details"));
const Gallery = lazy(() => import("@/components/Gallery"));
const RSVP = lazy(() => import("@/components/RSVP"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Optimized Background - Reduced particles for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
          <div className="w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Header />
              <InvitationCard />
            </motion.div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-16 md:py-24 px-4 bg-white/40 backdrop-blur-sm">
          <Suspense fallback={<SectionLoader />}>
            <Countdown />
          </Suspense>
        </section>

        {/* Details Section */}
        <section className="py-16 md:py-24 px-4">
          <Suspense fallback={<SectionLoader />}>
            <Details />
          </Suspense>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 px-4 bg-white/40 backdrop-blur-sm">
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
        </section>

        {/* RSVP Section */}
        {/* <section className="py-16 md:py-24 px-4">
          <Suspense fallback={<SectionLoader />}>
            <RSVP />
          </Suspense>
        </section> */}

        <Suspense fallback={null}>
          <Inviter />
        </Suspense> 
        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
