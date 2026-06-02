"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import {
  Layout,
  Utensils,
  Music,
  Camera,
  Flower,
  Users,
  Shield,
  Clock,
} from "lucide-react";

/**
 * Banquet Offerings - What's included with Nawaazissh Hall
 * Showcases amenities, services, and unique features
 */

const offerings = [
  {
    icon: Layout,
    title: "Flexible Layout Options",
    description:
      "Theater, classroom, U-shape, or cocktail style arrangements to suit your celebration",
    features: ["Round table setup", "Stage arrangements", "Dance floor space"],
  },
  {
    icon: Utensils,
    title: "Complete Catering Services",
    description:
      "Multi-cuisine menus from our Fessta Restaurant with customizable options",
    features: [
      "Indian specialties",
      "Continental options",
      "Custom menus available",
    ],
  },
  {
    icon: Music,
    title: "Audio-Visual Equipment",
    description:
      "Professional sound systems, microphones, and presentation facilities",
    features: [
      "Wireless microphones",
      "Background music",
      "Projection capabilities",
    ],
  },
  {
    icon: Flower,
    title: "Decoration Services",
    description:
      "Elegant floral arrangements and themed decorations for your special day",
    features: ["Seasonal flowers", "Themed setups", "Lighting arrangements"],
  },
  {
    icon: Users,
    title: "Dedicated Event Coordinator",
    description:
      "Personal planning assistance from booking to celebration completion",
    features: [
      "Timeline planning",
      "Vendor coordination",
      "Day-of supervision",
    ],
  },
  {
    icon: Shield,
    title: "Security & Safety",
    description:
      "Professional security and safety measures for worry-free celebrations",
    features: ["Trained security", "Emergency protocols", "Parking assistance"],
  },
];

const capacityOptions = [
  {
    title: "Intimate Celebration",
    capacity: "50-80 guests",
    setup: "Round tables with premium spacing",
    ideal: "Family functions, small weddings",
  },
  {
    title: "Traditional Wedding",
    capacity: "100-120 guests",
    setup: "Mixed seating with stage area",
    ideal: "Cultural ceremonies, receptions",
  },
  {
    title: "Grand Reception",
    capacity: "150-180 guests",
    setup: "Theater-style with dance floor",
    ideal: "Large weddings, milestone celebrations",
  },
];

export function BanquetOfferings() {
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

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Layout className="h-4 w-4" />
            What's Included
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Everything you need for
            <span className="text-accent block">the perfect celebration</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            Nawaazissh Hall comes complete with professional services, elegant
            amenities, and dedicated support to make your day unforgettable.
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
                    className="flex gap-4 rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <IconComponent className="h-6 w-6 text-accent" />
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
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <PlaceholderImage
              width={600}
              height={500}
              type="event"
              className="rounded-2xl shadow-xl"
            />

            <motion.div
              className="absolute -bottom-6 -left-6 rounded-xl border bg-white p-6 shadow-lg"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-display text-foreground text-lg font-semibold">
                    8-12 Hours
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Event duration included
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Capacity Options */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-12 text-center">
            <h3 className="font-display text-foreground mb-4 text-3xl font-semibold">
              Flexible Capacity Options
            </h3>
            <p className="text-muted-foreground">
              Choose the perfect setup for your guest count and celebration
              style
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {capacityOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-pearl rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
              >
                <div className="font-display text-foreground mb-2 text-2xl font-semibold">
                  {option.capacity}
                </div>
                <h4 className="font-display text-secondary mb-3 font-semibold">
                  {option.title}
                </h4>
                <p className="text-muted-foreground mb-3 text-sm">
                  {option.setup}
                </p>
                <div className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                  {option.ideal}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
