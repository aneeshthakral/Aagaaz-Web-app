"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/Container";
import { PlaceholderImage } from "../shared/PlaceholderImage";
import { ArrowRight, Briefcase, Gift, Sparkles, Users2 } from "lucide-react";
import Link from "next/link";

/**
 * Experiences Strip - Corporate events and celebration types
 * Horizontal showcase of different celebration categories
 */

const experiences = [
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional meetings, seminars, and team celebrations",
    icon: Briefcase,
    image: { width: 400, height: 300, type: "event" },
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    description: "Milestone celebrations for couples and families",
    icon: Gift,
    image: { width: 400, height: 300, type: "event" },
  },
  {
    id: "birthdays",
    title: "Birthday Parties",
    description: "Special day celebrations for all ages",
    icon: Sparkles,
    image: { width: 400, height: 300, type: "event" },
  },
  {
    id: "reunions",
    title: "Family Reunions",
    description: "Bringing loved ones together for precious moments",
    icon: Users2,
    image: { width: 400, height: 300, type: "event" },
  },
];

export function ExperiencesStrip() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5 },
    },
  };

  return (
    <section className="bg-pearl py-24">
      <Container>
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            Celebrations & Events
          </div>

          <h2 className="font-display text-foreground mb-4 text-3xl font-semibold lg:text-4xl">
            Every occasion deserves
            <span className="text-accent block">the perfect setting</span>
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            From corporate seminars to family celebrations, discover how Aagaaz
            transforms ordinary moments into extraordinary memories.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience) => {
            const IconComponent = experience.icon;

            return (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                className="group"
              >
                <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <PlaceholderImage
                      {...experience.image}
                      className="w-full transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                        <IconComponent className="text-accent h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-foreground group-hover:text-secondary mb-2 font-semibold transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
        >
          <Link
            href="/experiences"
            className="group text-secondary hover:text-secondary/80 inline-flex items-center gap-2 font-medium transition-colors"
          >
            Explore All Experiences
            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
