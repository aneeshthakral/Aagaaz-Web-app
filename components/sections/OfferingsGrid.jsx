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
    accent: "from-rose-500 to-pink-600",
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
    accent: "from-purple-500 to-violet-600",
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
    accent: "from-blue-500 to-cyan-600",
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
          <div className="bg-accent/10 text-secondary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Star className="h-4 w-4" />
            Our Celebrations
          </div>

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
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <PlaceholderImage
                      {...offering.image}
                      className="w-full transform transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${offering.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
                        <IconComponent className="text-accent h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <div className="text-muted-foreground mb-2 text-sm font-medium tracking-wider uppercase">
                        {offering.subtitle}
                      </div>
                      <h3 className="font-display text-foreground mb-3 text-2xl font-semibold">
                        {offering.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {offering.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {offering.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-sm"
                          >
                            <div className="bg-accent h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="group bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                    >
                      <Link
                        href={offering.href}
                        className="flex items-center justify-center gap-2"
                      >
                        {offering.cta}
                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
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
