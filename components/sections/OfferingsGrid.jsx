"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { PlaceholderImage } from "../shared/PlaceholderImage";
import { ArrowRight, Users, Heart, Bed, MapPin, Star } from "lucide-react";
import Link from "next/link";

/**
 * Offerings Grid - The three revenue streams prominently featured
 * Banquet, Kitty Parties, and Rooms with compelling CTAs
 */

const offerings = [
  {
    id: "banquet",
    title: "Banquet & Weddings",
    subtitle: "Grand celebrations",
    description:
      "Nawaazissh Hall transforms your wedding dreams into reality with space for 50-180 guests and elegant setups for every celebration.",
    features: [
      "50-180 seated guests",
      "Flexible layout options",
      "Wedding coordination",
      "Catering included",
    ],
    image: { width: 600, height: 400, type: "event" },
    icon: Heart,
    href: "/banquet",
    cta: "Plan Your Wedding",
    accent: "from-accent to-accent/80",
  },
  {
    id: "kitty",
    title: "Kitty Parties",
    subtitle: "Intimate gatherings",
    description:
      "Ba-Dastoorr & Shafaq Halls offer the perfect intimate setting for kitty parties with themed decor and delightful refreshments.",
    features: [
      "Two dedicated halls",
      "Themed party packages",
      "Ladies' afternoon events",
      "Custom decorations",
    ],
    image: { width: 600, height: 400, type: "event" },
    icon: Users,
    href: "/kitty-parties",
    cta: "Book Your Gathering",
    accent: "from-wine to-wine/80",
  },
  {
    id: "rooms",
    title: "Luxury Rooms",
    subtitle: "Comfortable stays",
    description:
      "44 well-appointed rooms with modern amenities ensure your guests have a perfect stay during celebrations or business visits.",
    features: [
      "44 luxury rooms",
      "Modern amenities",
      "LCD TV & minibar",
      "Room service",
    ],
    image: { width: 600, height: 400, type: "room" },
    icon: Bed,
    href: "/rooms",
    cta: "Check Availability",
    accent: "from-secondary to-secondary/80",
  },
];

export function OfferingsGrid() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
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
    <section
      id="offerings"
      className="bg-background scroll-mt-24 py-24 lg:py-32"
    >
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-gradient-to-r from-accent/10 to-wine/10 px-6 py-3 text-sm font-medium text-secondary backdrop-blur-sm"
          >
            <span className={`w-2 h-2 bg-accent rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
            <Star className="h-4 w-4" />
            Our Celebrations
            <span className={`w-2 h-2 bg-wine rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
          </motion.div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Where every celebration
            <span className="text-accent block">finds its perfect home</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            From grand weddings to intimate kitty parties, discover spaces
            designed for life's most precious moments in Ludhiana.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offerings.map((offering) => {
            const IconComponent = offering.icon;

            return (
              <motion.div
                key={offering.id}
                variants={cardVariants}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-surface via-surface to-surface-subtle shadow-xl backdrop-blur-sm transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:border-accent/40 relative group-hover:bg-gradient-to-br group-hover:from-surface group-hover:via-surface group-hover:to-accent/5">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-accent/20 to-transparent transform skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-wine/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <PlaceholderImage
                      {...offering.image}
                      className="w-full transform transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${offering.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-30`} />

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-accent rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={shouldReduceMotion ? {} : {
                            y: [-10, -20, -10],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Icon with enhanced styling */}
                    <motion.div
                      className="absolute top-6 left-6"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-surface/95 to-accent/10 shadow-xl backdrop-blur-sm border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                        <IconComponent className="text-accent h-7 w-7" />
                      </div>
                    </motion.div>

                    {/* Luxury badge */}
                    <motion.div
                      className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ scale: 0.8, rotate: -5 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                    >
                      <div className="bg-gradient-to-r from-accent to-wine text-surface px-3 py-1 rounded-full text-xs font-medium tracking-wider">
                        LUXURY
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-wine/5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="mb-6 relative z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-text-light mb-3 text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-2"
                      >
                        <span className="w-2 h-px bg-accent" />
                        {offering.subtitle}
                      </motion.div>

                      {/* BlurText style title reveal */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-text mb-4 text-3xl font-semibold leading-tight group-hover:text-accent transition-colors duration-500"
                        style={{ fontFamily: 'var(--font-fraunces)' }}
                      >
                        {offering.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-text-light leading-relaxed text-base"
                      >
                        {offering.description}
                      </motion.p>
                    </div>

                    {/* Features */}
                    <div className="mb-8 relative z-10">
                      <motion.h4
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-secondary text-xs uppercase tracking-wider font-semibold mb-4 flex items-center gap-2"
                      >
                        <motion.span
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="w-4 h-px bg-accent origin-left"
                        />
                        Features
                      </motion.h4>
                      <ul className="space-y-3">
                        {offering.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            className="flex items-center gap-4 text-sm group/item"
                          >
                            <motion.div
                              whileHover={shouldReduceMotion ? {} : { scale: 1.3, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                              className="bg-gradient-to-br from-accent to-wine h-2 w-2 flex-shrink-0 rounded-full shadow-sm"
                            />
                            <span className="text-text-light group-hover/item:text-text transition-colors duration-300">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="relative z-10"
                    >
                      <Button
                        asChild
                        className="group bg-gradient-to-r from-accent to-accent/90 hover:from-accent hover:to-wine text-accent-foreground w-full relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link
                          href={offering.href}
                          className="flex items-center justify-center gap-2 relative z-10"
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />

                          {offering.cta}
                          <motion.div
                            whileHover={shouldReduceMotion ? {} : { x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-4 w-4 transform transition-transform" />
                          </motion.div>
                        </Link>
                      </Button>

                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-wine/20 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/gallery">View All Spaces</Link>
            </Button>

            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Pakhowal Road, Ludhiana</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
