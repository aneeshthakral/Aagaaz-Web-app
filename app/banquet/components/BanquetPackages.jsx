"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Check, Crown, Heart, Star } from "lucide-react";
import Link from "next/link";

/**
 * Banquet Packages - Wedding and celebration package tiers
 * PLACEHOLDER: Need real package details, pricing, and inclusions from client
 */

const packages = [
  {
    id: "classic",
    name: "Classic Celebration",
    subtitle: "Perfect for intimate gatherings",
    price: "[PRICING NEEDED]", // Placeholder - needs real pricing
    guests: "50-80 guests",
    icon: Heart,
    popular: false,
    features: [
      "Nawaazissh Hall for 6 hours",
      "Basic decoration package",
      "Standard audio system",
      "Welcome refreshments",
      "[CATERING DETAILS NEEDED]", // Placeholder
      "Event coordination",
      "Basic photography area",
      "Parking assistance",
    ],
  },
  {
    id: "premium",
    name: "Premium Wedding",
    subtitle: "Most popular for traditional weddings",
    price: "[PRICING NEEDED]", // Placeholder - needs real pricing
    guests: "100-140 guests",
    icon: Crown,
    popular: true,
    features: [
      "Nawaazissh Hall for 8 hours",
      "Premium floral decorations",
      "Professional sound & lighting",
      "Welcome drinks & snacks",
      "[PREMIUM CATERING DETAILS NEEDED]", // Placeholder
      "Dedicated event manager",
      "Professional photography setup",
      "VIP parking area",
      "Bridal room access",
      "Anniversary cake included",
    ],
  },
  {
    id: "royal",
    name: "Royal Reception",
    subtitle: "Ultimate luxury experience",
    price: "[PRICING NEEDED]", // Placeholder - needs real pricing
    guests: "150-180 guests",
    icon: Star,
    popular: false,
    features: [
      "Nawaazissh Hall for 10 hours",
      "Royal themed decorations",
      "Premium AV equipment",
      "Extended cocktail service",
      "[LUXURY CATERING DETAILS NEEDED]", // Placeholder
      "Personal wedding planner",
      "Professional stage setup",
      "Reserved VIP area",
      "Complimentary bridal suite",
      "Live entertainment area",
      "Custom menu planning",
      "Post-event cleanup",
    ],
  },
];

export function BanquetPackages() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6 },
    },
  };

  return (
    <section className="bg-pearl py-24 lg:py-32">
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
            <Crown className="h-4 w-4" />
            Wedding Packages
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Celebration packages designed
            <span className="text-accent block">for every dream</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            Choose the perfect package for your special day. Each option
            includes our signature service and can be customized to your vision.
          </p>
        </motion.div>

        {/* Package Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;

            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className={`relative rounded-2xl border-2 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  pkg.popular
                    ? "border-accent shadow-accent/20"
                    : "border-gray-100"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <div className="bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="mb-8 text-center">
                    <div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${
                        pkg.popular ? "bg-accent/10" : "bg-gray-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${
                          pkg.popular ? "text-accent" : "text-gray-600"
                        }`}
                      />
                    </div>

                    <h3 className="font-display text-foreground mb-2 text-2xl font-semibold">
                      {pkg.name}
                    </h3>

                    <p className="text-muted-foreground mb-4">{pkg.subtitle}</p>

                    <div className="mb-2">
                      <div className="font-display text-foreground text-3xl font-bold">
                        {pkg.price}
                      </div>
                      <div className="text-secondary text-sm font-medium">
                        {pkg.guests}
                      </div>
                    </div>

                    {/* Placeholder Notice */}
                    {pkg.price.includes("[") && (
                      <div className="mt-2 rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-700">
                        Pricing details needed
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-4">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span
                          className={`text-sm leading-relaxed ${
                            feature.includes("[")
                              ? "font-medium text-orange-700"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    <Link href="#enquiry">Get Quote for {pkg.name}</Link>
                  </Button>
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
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-display text-foreground mb-4 text-xl font-semibold">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every celebration is unique. Let us create a personalized package
              that perfectly matches your vision and budget.
            </p>
            <Button asChild variant="outline">
              <Link href="#enquiry">Request Custom Quote</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
