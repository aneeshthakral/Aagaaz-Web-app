"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { PlaceholderImage } from "../shared/PlaceholderImage";
import { ArrowRight, Sunrise, Quote } from "lucide-react";
import Link from "next/link";

/**
 * Story Teaser - Brief section about the Aagaaz meaning and venue character
 * Creates emotional connection with the "beginning" brand story
 */
export function StoryTeaser() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-pearl py-24 lg:py-32">
      <Container size="lg">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            {/* Badge */}
            <div className="bg-accent/10 text-secondary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Sunrise className="h-4 w-4" />
              Our Story
            </div>

            {/* Heading */}
            <h2 className="font-display text-foreground mb-6 text-3xl font-semibold lg:text-4xl">
              <span className="text-accent">Aagaaz</span> means
              <br />a beautiful beginning
            </h2>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="text-accent/30 absolute -top-2 -left-2 h-8 w-8" />
              <blockquote className="text-muted-foreground pl-6 text-xl leading-relaxed font-light italic lg:text-2xl">
                "Every celebration marks the start of something wonderful— a
                marriage, a friendship, a cherished memory. We believe these
                beginnings deserve spaces as special as the moments they hold."
              </blockquote>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In the heart of Ludhiana, Aagaaz has been creating perfect
                beginnings for families and friends since our doors first
                opened. From intimate kitty gatherings to grand wedding
                celebrations, we understand that every moment matters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our three thoughtfully designed spaces—Nawaazissh Banquet Hall,
                Ba-Dastoorr & Shafaq Kitty Halls—each tell their own story while
                sharing our commitment to making your celebration truly
                unforgettable.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="outline" className="group">
                <Link href="/story" className="flex items-center gap-2">
                  Read Our Full Story
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">Start Your Beginning</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <div className="relative">
              {/* Main image */}
              <PlaceholderImage
                width={600}
                height={500}
                type="hotel"
                className="rounded-2xl shadow-xl"
              />

              {/* Floating accent element */}
              <motion.div
                className="absolute -bottom-6 -left-6 rounded-xl border bg-white p-6 shadow-lg"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.3,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <Sunrise className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-foreground text-lg font-semibold">
                      Since 2020
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Creating beautiful beginnings
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background accent */}
              <div className="bg-accent/10 absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
