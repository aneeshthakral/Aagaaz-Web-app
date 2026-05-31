"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import {
  Palette,
  Coffee,
  Music,
  Camera,
  Gift,
  Utensils,
  Users2,
  Smile,
} from "lucide-react";

/**
 * Kitty Offerings - What's included with Ba-Dastoorr & Shafaq Halls
 * Showcases amenities and services for ladies' gatherings and kitty parties
 */

const offerings = [
  {
    icon: Palette,
    title: "Themed Decorations",
    description:
      "Beautiful themed setups tailored to your kitty party style and season",
    features: ["Seasonal themes", "Color coordinated", "Photo backdrops"],
  },
  {
    icon: Utensils,
    title: "Delightful Refreshments",
    description:
      "Customized menu options perfect for afternoon gatherings and tea parties",
    features: ["Tea & coffee service", "Light snacks", "Cake arrangements"],
  },
  {
    icon: Music,
    title: "Entertainment Setup",
    description:
      "Audio system and entertainment arrangements for games and activities",
    features: [
      "Background music",
      "Microphone for games",
      "Activity coordination",
    ],
  },
  {
    icon: Gift,
    title: "Return Gifts & Favors",
    description:
      "Thoughtful return gift arrangements and party favor coordination",
    features: ["Gift wrapping", "Favor coordination", "Special arrangements"],
  },
  {
    icon: Users2,
    title: "Ladies' Lounge Setup",
    description:
      "Comfortable seating arrangements perfect for conversations and relaxation",
    features: ["Cozy seating", "Social arrangements", "Privacy assured"],
  },
  {
    icon: Camera,
    title: "Memory Capture",
    description:
      "Photography areas and arrangements to capture beautiful moments",
    features: ["Photo corners", "Group photo setups", "Memory keeping"],
  },
];

const hallFeatures = [
  {
    name: "Ba-Dastoorr Hall",
    capacity: "15-25 ladies",
    features: ["Intimate setting", "Air conditioned", "Modern amenities"],
    ideal: "Small kitty groups, close friends",
  },
  {
    name: "Shafaq Hall",
    capacity: "25-40 ladies",
    features: ["Spacious layout", "Flexible seating", "Entertainment ready"],
    ideal: "Larger groups, themed parties",
  },
];

export function KittyOfferings() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-600">
            <Coffee className="h-4 w-4" />
            What's Included
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Everything for the perfect
            <span className="text-accent block">ladies' gathering</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            Ba-Dastoorr & Shafaq Halls come complete with all the thoughtful
            touches that make kitty parties special, memorable, and effortlessly
            elegant.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mb-20 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Offerings List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {offerings.map((offering, index) => {
                const IconComponent = offering.icon;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-display text-foreground mb-2 font-semibold">
                        {offering.title}
                      </h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {offering.description}
                      </p>
                      <ul className="space-y-1">
                        {offering.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-muted-foreground flex items-center gap-2 text-sm"
                          >
                            <div className="bg-accent h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="sticky top-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PlaceholderImage
              width={600}
              height={500}
              type="event"
              className="rounded-2xl shadow-xl"
            />

            <motion.div
              className="absolute -bottom-6 -left-6 rounded-xl border bg-white p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Smile className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-display text-foreground text-lg font-semibold">
                    All Inclusive
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Setup to cleanup
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hall Comparison */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h3 className="font-display text-foreground mb-4 text-3xl font-semibold">
              Choose Your Perfect Hall
            </h3>
            <p className="text-muted-foreground">
              Two beautiful halls designed for different group sizes and
              celebration styles
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {hallFeatures.map((hall, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-purple-100 bg-purple-50 p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-display text-accent mb-2 text-2xl font-semibold">
                  {hall.capacity}
                </div>
                <h4 className="font-display text-foreground mb-4 font-semibold">
                  {hall.name}
                </h4>

                <div className="mb-4 space-y-2">
                  {hall.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-muted-foreground flex items-center justify-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium tracking-wider text-purple-600 uppercase">
                  {hall.ideal}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
