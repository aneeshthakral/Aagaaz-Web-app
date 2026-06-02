"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/Container";
import { Star, Quote } from "lucide-react";

/**
 * Testimonials Carousel - Social proof and reviews
 * Showcases guest experiences and satisfaction
 */

const testimonials = [
  {
    id: 1,
    name: "Priya & Rajesh Sharma",
    role: "Wedding Celebration",
    content:
      "Aagaaz made our wedding day absolutely magical. The Nawaazissh Hall was beautifully decorated, and every detail was perfect. Our guests still talk about how wonderful the celebration was.",
    rating: 5,
    location: "Ludhiana",
  },
  {
    id: 2,
    name: "Sunita Gupta",
    role: "Kitty Party Host",
    content:
      "The Ba-Dastoorr Hall was perfect for our monthly kitty party. The staff was so helpful, and the themed decoration exceeded our expectations. All the ladies loved it!",
    rating: 5,
    location: "Civil Lines, Ludhiana",
  },
  {
    id: 3,
    name: "Amit Technologies Pvt Ltd",
    role: "Corporate Event",
    content:
      "We hosted our annual conference at Aagaaz and were impressed with their professionalism. The facilities, food, and service were all top-notch. Highly recommended for corporate events.",
    rating: 5,
    location: "Industrial Area",
  },
];

export function TestimonialsCarousel() {
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

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container>
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Star className="h-4 w-4" />
            Guest Stories
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Celebrations that create
            <span className="text-accent block">lasting memories</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            Every celebration tells a story. Here are just a few from families
            and friends who made Aagaaz part of their special moments.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="relative rounded-2xl border border-border bg-surface p-8 shadow-sm"
            >
              {/* Quote icon */}
              <Quote className="text-accent/20 absolute top-6 right-6 h-8 w-8" />

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-display text-foreground font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-secondary text-sm font-medium">
                  {testimonial.role}
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-16 sm:grid-cols-3"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="text-center">
            <div className="font-display text-accent mb-2 text-3xl font-semibold lg:text-4xl">
              500+
            </div>
            <div className="text-muted-foreground text-sm tracking-wider uppercase">
              Celebrations Hosted
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-accent mb-2 text-3xl font-semibold lg:text-4xl">
              4.9
            </div>
            <div className="text-muted-foreground text-sm tracking-wider uppercase">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-accent mb-2 text-3xl font-semibold lg:text-4xl">
              100%
            </div>
            <div className="text-muted-foreground text-sm tracking-wider uppercase">
              Satisfaction Rate
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
