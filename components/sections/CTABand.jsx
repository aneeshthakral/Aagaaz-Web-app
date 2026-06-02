"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

/**
 * CTA Band - Final call to action section
 * Compelling close with multiple contact options
 */
export function CTABand() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-midnight relative overflow-hidden py-24 text-white lg:py-32">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a961' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          {/* Heading */}
          <h2 className="font-display mb-6 text-4xl font-semibold lg:text-6xl">
            Ready to begin
            <span className="text-accent block">your celebration?</span>
          </h2>

          {/* Subtitle */}
          <p className="mb-12 text-xl leading-relaxed font-light text-white/80 lg:text-2xl">
            Let's create something beautiful together. Your perfect celebration
            is just one conversation away.
          </p>

          {/* Contact Options */}
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Phone */}
            <motion.div
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
            >
              <Phone className="text-accent mb-4 h-8 w-8" />
              <div className="mb-2 font-medium">Call Us</div>
              <a
                href="tel:+919592099941"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                +91 95920 99941
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              <MessageCircle className="text-accent mb-4 h-8 w-8" />
              <div className="mb-2 font-medium">WhatsApp</div>
              <a
                href="https://wa.me/916239503191"
                className="text-sm text-white/80 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </motion.div>

            {/* Visit */}
            <motion.div
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
            >
              <Calendar className="text-accent mb-4 h-8 w-8" />
              <div className="mb-2 font-medium">Visit Us</div>
              <span className="text-center text-sm text-white/80">
                Pakhowal Road, Ludhiana
              </span>
            </motion.div>
          </div>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group px-8 py-6 text-lg font-medium"
            >
              <Link href="/#enquire-now" className="flex items-center gap-2">
                Plan Your Celebration
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 px-8 py-6 text-lg font-medium text-white hover:bg-white/10"
            >
              <Link href="/gallery">View Our Spaces</Link>
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            className="mt-12 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.6,
            }}
          >
            <p className="text-sm text-white/80">
              Join 500+ families who chose Aagaaz for their special moments
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTABand;
