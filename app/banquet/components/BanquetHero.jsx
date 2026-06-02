"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { HeroPlaceholder } from "@/components/shared/PlaceholderImage";
import { Heart, Users, Calendar, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Banquet Hero - Strong hero for wedding and celebration bookings
 * Showcases Nawaazissh Hall with compelling value proposition
 */
export function BanquetHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <HeroPlaceholder className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center">
      <Container size="lg" className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            <Heart className="h-4 w-4 text-rose-300" />
            Nawaazissh Banquet Hall
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-display mb-6 text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
          >
            <span className="block">Where your</span>
            <span
              className="text-accent block"
              style={{ color: "var(--aagaaz-gold)" }}
            >
              love story
            </span>
            <span className="block">becomes legend</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.5,
            }}
          >
            Nawaazissh Hall transforms your wedding dreams into reality. From
            intimate ceremonies to grand receptions, we create the perfect
            backdrop for your most precious moments in Ludhiana.
          </motion.p>

          {/* Key Features */}
          <motion.div
            className="mx-auto mb-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.6,
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Users className="text-accent h-6 w-6" />
              </div>
              <div className="font-semibold text-white">50-180 Guests</div>
              <div className="text-sm text-white/90">Flexible seating</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Calendar className="text-accent h-6 w-6" />
              </div>
              <div className="font-semibold text-white">Year-Round</div>
              <div className="text-sm text-white/90">Availability</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Star className="text-accent h-6 w-6" />
              </div>
              <div className="font-semibold text-white">Full Service</div>
              <div className="text-sm text-white/90">Planning included</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.8,
            }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group px-8 py-6 text-lg font-medium"
            >
              <Link href="#enquiry" className="flex items-center gap-2">
                Plan Your Wedding
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-white/30 px-8 py-6 text-lg font-medium text-white hover:bg-white/10"
            >
              <Link href="#gallery" className="flex items-center gap-2">
                View Gallery
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            className="mt-12 border-t border-white/20 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 1,
            }}
          >
            <p className="text-sm text-white/80">
              ✨ Trusted by 200+ couples for their special day
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </HeroPlaceholder>
  );
}
