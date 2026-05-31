"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { HeroPlaceholder } from "@/components/shared/PlaceholderImage";
import { Users, Coffee, Heart, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Kitty Hero - Strong hero for kitty party bookings
 * Showcases Ba-Dastoorr & Shafaq Halls for intimate ladies' gatherings
 */
export function KittyHero() {
  return (
    <HeroPlaceholder className="relative flex items-center justify-center">
      <Container size="lg" className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Users className="h-4 w-4 text-purple-300" />
            Ba-Dastoorr & Shafaq Halls
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-display mb-6 text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">Where friendships</span>
            <span
              className="text-accent block"
              style={{ color: "var(--aagaaz-gold)" }}
            >
              bloom
            </span>
            <span className="block">and memories gather</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Ba-Dastoorr & Shafaq Halls offer the perfect intimate setting for
            kitty parties. From themed celebrations to casual get-togethers, we
            create beautiful spaces where ladies can connect, laugh, and
            celebrate friendship.
          </motion.p>

          {/* Key Features */}
          <motion.div
            className="mx-auto mb-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Users className="text-accent h-6 w-6" />
              </div>
              <div className="font-semibold text-white">Two Halls</div>
              <div className="text-sm text-white/70">Ba-Dastoorr & Shafaq</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Sparkles className="text-accent h-6 w-6" />
              </div>
              <div className="font-semibold text-white">Themed Decor</div>
              <div className="text-sm text-white/70">Custom themes</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Coffee className="text-accent h-6 w-6" />
              </div>
              <div className="font-semibold text-white">Complete Service</div>
              <div className="text-sm text-white/70">Food & arrangements</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group px-8 py-6 text-lg font-medium"
            >
              <Link href="#enquiry" className="flex items-center gap-2">
                Plan Your Kitty Party
                <Coffee className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-white/30 px-8 py-6 text-lg font-medium text-white hover:bg-white/10"
            >
              <Link href="#gallery" className="flex items-center gap-2">
                View Our Themes
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            className="mt-12 border-t border-white/20 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-sm text-white/60">
              🌸 Hosting memorable kitty parties since 2020
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </HeroPlaceholder>
  );
}
