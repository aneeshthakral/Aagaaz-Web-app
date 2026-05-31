"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { HeroPlaceholder } from "../shared/PlaceholderImage";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

/**
 * Cinematic hero section showcasing the Aagaaz concept of "beginning"
 * Features elegant typography, subtle motion, and luxury hospitality feel
 */
export function HeroCinematic() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Luxury easing from design system
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <HeroPlaceholder className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center">
      <Container size="lg" className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
          >
            <div className="bg-accent h-2 w-2 animate-pulse rounded-full" />
            Where celebrations begin
          </motion.div>

          {/* Main heading - The Aagaaz concept */}
          <motion.h1
            variants={textVariants}
            className="font-display mb-6 text-white"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">Every celebration</span>
            <span
              className="text-accent block"
              style={{ color: "var(--aagaaz-gold)" }}
            >
              deserves a beautiful
            </span>
            <span className="block">beginning</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-light text-white/80"
          >
            From intimate kitty gatherings to grand weddings, Aagaaz creates the
            perfect setting for life's most precious moments in the heart of
            Ludhiana.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-medium"
            >
              <Link href="/contact">Plan Your Celebration</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 px-8 py-6 text-lg font-medium text-white hover:bg-white/10"
            >
              <Link href="/gallery">View Our Spaces</Link>
            </Button>
          </motion.div>

          {/* Business highlights */}
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="font-display text-accent text-3xl font-semibold">
                44
              </div>
              <div className="text-sm tracking-wider text-white/70 uppercase">
                Luxury Rooms
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-accent text-3xl font-semibold">
                180
              </div>
              <div className="text-sm tracking-wider text-white/70 uppercase">
                Banquet Capacity
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-accent text-3xl font-semibold">
                3
              </div>
              <div className="text-sm tracking-wider text-white/70 uppercase">
                Event Halls
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: shouldReduceMotion ? 0 : 2,
            duration: shouldReduceMotion ? 0 : 0.5,
          },
        }}
      >
        <motion.div
          animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 10, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <Link
            href="#offerings"
            className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/80"
          >
            <span className="text-xs tracking-wider uppercase">Discover</span>
            <ChevronDown className="h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>
    </HeroPlaceholder>
  );
}
