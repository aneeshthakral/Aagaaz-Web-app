"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Camera, Heart, Users, Sparkles } from "lucide-react";

/**
 * Banquet Gallery - Visual showcase of Nawaazissh Hall and celebrations
 * Displays hall setups, decorations, and past events
 */

const galleryCategories = [
  {
    id: "hall-empty",
    title: "Nawaazissh Hall",
    description: "The elegant venue in various configurations",
    images: [
      {
        width: 600,
        height: 400,
        alt: "Empty banquet hall - theater setup",
        type: "event",
      },
      {
        width: 600,
        height: 400,
        alt: "Empty banquet hall - round table setup",
        type: "event",
      },
      {
        width: 600,
        height: 400,
        alt: "Empty banquet hall - stage view",
        type: "event",
      },
    ],
  },
  {
    id: "weddings",
    title: "Wedding Celebrations",
    description: "Beautiful wedding setups and ceremonies",
    images: [
      { width: 600, height: 400, alt: "Wedding ceremony setup", type: "event" },
      {
        width: 600,
        height: 400,
        alt: "Wedding reception decorations",
        type: "event",
      },
      { width: 600, height: 400, alt: "Bridal stage setup", type: "event" },
    ],
  },
  {
    id: "decorations",
    title: "Decoration Themes",
    description: "Various decoration styles and themes",
    images: [
      {
        width: 600,
        height: 400,
        alt: "Traditional Indian wedding decoration",
        type: "event",
      },
      {
        width: 600,
        height: 400,
        alt: "Modern wedding decoration",
        type: "event",
      },
      {
        width: 600,
        height: 400,
        alt: "Anniversary celebration setup",
        type: "event",
      },
    ],
  },
  {
    id: "celebrations",
    title: "Other Celebrations",
    description: "Corporate events, anniversaries, and milestones",
    images: [
      { width: 600, height: 400, alt: "Corporate event setup", type: "event" },
      {
        width: 600,
        height: 400,
        alt: "Anniversary celebration",
        type: "event",
      },
      { width: 600, height: 400, alt: "Birthday party setup", type: "event" },
    ],
  },
];

export function BanquetGallery() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6 },
    },
  };

  const getCategoryIcon = (id) => {
    switch (id) {
      case "hall-empty":
        return Camera;
      case "weddings":
        return Heart;
      case "decorations":
        return Sparkles;
      case "celebrations":
        return Users;
      default:
        return Camera;
    }
  };

  return (
    <section id="gallery" className="bg-background scroll-mt-24 py-24 lg:py-32">
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Camera className="h-4 w-4" />
            Gallery
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            See where memories
            <span className="text-accent block">come to life</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            Explore Nawaazissh Hall through the eyes of countless celebrations.
            From intimate ceremonies to grand receptions, every moment is
            captured in elegance.
          </p>
        </motion.div>

        {/* Gallery Categories */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryCategories.map((category) => {
            const IconComponent = getCategoryIcon(category.id);

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-foreground text-2xl font-semibold">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl">
                        <PlaceholderImage
                          {...image}
                          className="w-full transform transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                          <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Camera className="h-8 w-8 text-white" />
                          </div>
                        </div>

                        {/* Caption */}
                        <div className="absolute right-4 bottom-4 left-4">
                          <div className="rounded-lg bg-white/90 p-3 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <p className="text-foreground text-sm font-medium">
                              {image.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gallery CTA */}
        <motion.div
          className="mt-16 rounded-2xl border border-border bg-gradient-to-r from-surface to-surface-subtle p-8 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <h3 className="font-display text-foreground mb-4 text-xl font-semibold">
            Picture Your Celebration Here
          </h3>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Every image tells a story of joy, love, and celebration. Schedule a
            visit to see Nawaazissh Hall in person and envision your special
            day.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.a
              href="tel:+919592099941"
              className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            >
              Schedule a Visit
            </motion.a>
            <motion.a
              href="https://wa.me/916239503191?text=Hi! I'd like to see more photos of Nawaazissh Hall for my celebration."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            >
              Request More Photos
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
