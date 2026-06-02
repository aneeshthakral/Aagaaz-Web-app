"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { PlaceholderImage } from "../shared/PlaceholderImage";
import { ArrowRight, ChefHat, Clock, Globe } from "lucide-react";
import Link from "next/link";

/**
 * Dining Glimpse - Showcase Fessta Restaurant with multi-cuisine offering
 * Highlights the dining experience available to guests
 */

const cuisines = [
  { name: "Indian", description: "Authentic flavors from across India" },
  { name: "Italian", description: "Classic pasta and pizza favorites" },
  { name: "Oriental", description: "Fresh and flavorful Asian dishes" },
  { name: "Continental", description: "International comfort foods" },
];

const highlights = [
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Skilled culinary team creating memorable flavors",
  },
  {
    icon: Clock,
    title: "All-Day Dining",
    description: "From breakfast to late-night celebrations",
  },
  {
    icon: Globe,
    title: "Global Cuisines",
    description: "Four distinct culinary traditions under one roof",
  },
];

export function DiningGlimpse() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6 },
    },
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-wine/20 bg-wine/10 px-4 py-2 text-sm font-medium text-wine backdrop-blur-sm">
            <ChefHat className="h-4 w-4" />
            Fessta Restaurant
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            A culinary journey
            <span className="text-accent block">around the world</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            From traditional Indian spices to Italian comfort, our restaurant
            brings global flavors to complement your celebrations.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            {/* Cuisines Grid */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cuisines.map((cuisine, index) => (
                <motion.div
                  key={cuisine.name}
                  className="rounded-xl border border-border/30 bg-surface/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/40 group"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                >
                  <div className="text-center">
                    <h4 className="font-display text-text mb-3 font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                      {cuisine.name}
                    </h4>
                    <p className="text-text-light text-sm leading-relaxed">
                      {cuisine.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Whether you're hosting an intimate kitty party or feeding
                wedding guests, Fessta Restaurant ensures every meal is
                memorable. Our dining offerings feature carefully crafted dishes
                from four culinary traditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for pre-celebration dinners, guest accommodations, or
                simply treating yourself to exceptional dining in Ludhiana.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 group"
              >
                <Link href="/dining" className="flex items-center gap-2">
                  Explore Menu
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/#enquire-now">Reserve a Table</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <div className="relative">
              <PlaceholderImage
                width={600}
                height={500}
                type="food"
                className="rounded-2xl shadow-xl"
              />

              {/* Floating badge */}
              <motion.div
                className="absolute left-4 top-4 rounded-xl border border-accent/20 bg-surface/90 p-3 shadow-xl backdrop-blur-sm sm:-left-4 sm:-top-4 sm:p-4"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.2,
                }}
              >
                <div className="text-center">
                  <div className="font-display text-text text-2xl font-semibold">
                    4
                  </div>
                  <div className="text-text-light text-xs tracking-wider uppercase">
                    Cuisines
                  </div>
                </div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -right-4 -bottom-4 -z-10 hidden h-32 w-32 rounded-full bg-wine/10 sm:block" />
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight) => {
            const IconComponent = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="text-center px-4"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-wine/15 border border-accent/20">
                  <IconComponent className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-display text-text mb-3 font-semibold text-lg">
                  {highlight.title}
                </h4>
                <p className="text-text-light text-sm leading-relaxed max-w-xs mx-auto">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
