"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Star,
  Heart,
  Users,
  Mail,
} from "lucide-react";

/**
 * Banquet Enquiry - Strong conversion-focused enquiry section
 * Multiple contact options and clear next steps for booking
 */

const contactMethods = [
  {
    icon: Phone,
    title: "Call Directly",
    description: "Speak with our wedding specialists",
    action: "Call Now",
    href: "tel:+919592099941",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    description: "Quick responses and instant quotes",
    action: "Start Chat",
    href: "https://wa.me/916239503191?text=Hi! I'd like to enquire about banquet halls for my celebration at Aagaaz.",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    icon: Calendar,
    title: "Schedule Visit",
    description: "See the venue in person",
    action: "Book Visit",
    href: "tel:+919592099941", // Could be a booking form later
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

const quickInfo = [
  {
    icon: Users,
    label: "Capacity",
    value: "50-180 guests",
  },
  {
    icon: Clock,
    label: "Event Duration",
    value: "6-12 hours",
  },
  {
    icon: Star,
    label: "Experience",
    value: "200+ weddings",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakhowal Road",
  },
];

export function BanquetEnquiry() {
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
    <section
      id="enquiry"
      className="scroll-mt-24 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 py-24 lg:py-32"
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
            Ready to Begin?
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Let's plan your
            <span className="text-accent block">perfect celebration</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            Our wedding specialists are here to help you create the celebration
            of your dreams. Get in touch today for availability and personalized
            quotes.
          </p>
        </motion.div>

        {/* Main Enquiry Section */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Methods */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <h3 className="font-display text-foreground mb-6 text-center text-2xl font-semibold">
                Get Your Quote Today
              </h3>

              <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;

                  return (
                    <motion.div key={index} variants={itemVariants}>
                      <a
                        href={method.href}
                        target={
                          method.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          method.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="group block rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div
                          className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${method.color} text-white`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>

                        <div className="text-center">
                          <h4 className="font-display text-foreground mb-2 font-semibold">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground mb-4 text-sm">
                            {method.description}
                          </p>
                          <div className="text-secondary group-hover:text-secondary/80 text-sm font-medium transition-colors">
                            {method.action} →
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Contact */}
              <div className="from-accent/10 rounded-xl bg-gradient-to-r to-rose-100 p-6 text-center">
                <p className="text-muted-foreground mb-3 text-sm">
                  Prefer to talk immediately?
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="tel:+919592099941"
                    className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    +91 95920 99941
                  </a>
                  <span className="text-muted-foreground hidden sm:block">
                    |
                  </span>
                  <a
                    href="mailto:info@aagaaz.in"
                    className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    info@aagaaz.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <div className="sticky top-8 rounded-2xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <h4 className="font-display text-foreground mb-6 text-center font-semibold">
                Quick Information
              </h4>

              <div className="mb-6 space-y-4">
                {quickInfo.map((info, index) => {
                  const IconComponent = info.icon;

                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-accent/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <IconComponent className="text-accent h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-muted-foreground text-sm">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-4">
                <div className="text-center">
                  <div className="font-display mb-1 text-2xl font-semibold text-green-700">
                    Available
                  </div>
                  <div className="text-sm text-green-600">
                    Most 2024 & 2025 dates
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mx-auto max-w-2xl rounded-xl border border-white/40 bg-white/60 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
              <div>
                <div className="font-display text-accent mb-1 text-2xl font-semibold">
                  24hrs
                </div>
                <div className="text-muted-foreground text-sm">
                  Quote Response Time
                </div>
              </div>
              <div>
                <div className="font-display text-accent mb-1 text-2xl font-semibold">
                  200+
                </div>
                <div className="text-muted-foreground text-sm">
                  Successful Weddings
                </div>
              </div>
              <div>
                <div className="font-display text-accent mb-1 text-2xl font-semibold">
                  100%
                </div>
                <div className="text-muted-foreground text-sm">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
