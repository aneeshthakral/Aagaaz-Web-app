"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { Check, Coffee, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

/**
 * Kitty Packages - Kitty party package tiers and themes
 * PLACEHOLDER: Need real package details and themed inclusions from client
 */

const packages = [
  {
    id: "classic",
    name: "Classic Kitty",
    subtitle: "Traditional ladies' gathering",
    availability: "Details shared on enquiry",
    capacity: "15-20 ladies",
    icon: Coffee,
    popular: false,
    features: [
      "Ba-Dastoorr Hall for 4 hours",
      "Traditional decoration setup",
      "Tea & coffee service",
      "Light refreshments included",
      "[SNACKS MENU NEEDED]", // Placeholder
      "Background music",
      "Basic game coordination",
      "Return gift coordination"
    ]
  },
  {
    id: "themed",
    name: "Themed Celebration",
    subtitle: "Most popular for special occasions",
    availability: "Details shared on enquiry",
    capacity: "20-30 ladies",
    icon: Sparkles,
    popular: true,
    features: [
      "Shafaq Hall for 5 hours",
      "[THEMED DECORATION OPTIONS NEEDED]", // Placeholder
      "Premium refreshment service",
      "Customized menu options",
      "Professional photography corner",
      "Game activity coordination",
      "Special return gift arrangements",
      "Music & entertainment system",
      "Themed favor coordination"
    ]
  },
  {
    id: "deluxe",
    name: "Deluxe Experience",
    subtitle: "Ultimate ladies' celebration",
    availability: "Details shared on enquiry",
    capacity: "30-40 ladies",
    icon: Heart,
    popular: false,
    features: [
      "Shafaq Hall for 6 hours",
      "[LUXURY THEMED SETUPS NEEDED]", // Placeholder
      "Premium catering service",
      "Multi-course refreshments",
      "Professional entertainment arrangements",
      "Dedicated event coordinator",
      "Premium photography setup",
      "Luxury return gift packages",
      "Special surprise arrangements",
      "Complimentary decoration extension"
    ]
  }
]

export function KittyPackages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-pearl">
      <Container size="lg">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Kitty Party Packages
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Packages designed for
            <span className="text-accent block">beautiful gatherings</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            From intimate tea parties to themed celebrations, choose the perfect package
            for your ladies' gathering. Each option can be customized to your group's preferences.
          </p>
        </motion.div>

        {/* Package Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg) => {
            const IconComponent = pkg.icon

            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className={`relative bg-white rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular ? 'border-accent shadow-accent/20' : 'border-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`h-16 w-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      pkg.popular ? 'bg-accent/10' : 'bg-purple-100'
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        pkg.popular ? 'text-accent' : 'text-purple-600'
                      }`} />
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {pkg.subtitle}
                    </p>

                    <div className="mb-2">
                      <div className="text-3xl font-display font-bold text-foreground">
                        {pkg.availability}
                      </div>
                      <div className="text-sm text-accent font-medium">
                        {pkg.capacity}
                      </div>
                    </div>

                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm leading-relaxed ${
                          feature.includes('[') ? 'text-orange-600 font-medium' : 'text-muted-foreground'
                        }`}>
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
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    <Link href="#enquiry">
                      Book {pkg.name}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Popular Themes Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
              Popular Themes & Ideas
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get inspired by our most loved kitty party themes. We can customize any theme
              to match your group's style and the season.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Floral Spring", color: "from-pink-100 to-rose-100", emoji: "🌸" },
              { name: "Bollywood Night", color: "from-purple-100 to-violet-100", emoji: "💃" },
              { name: "Tea Party Classic", color: "from-green-100 to-emerald-100", emoji: "☕" },
              { name: "Festive Celebration", color: "from-yellow-100 to-orange-100", emoji: "🎉" },
              { name: "Elegant Black & Gold", color: "from-gray-100 to-yellow-100", emoji: "✨" },
              { name: "Garden Party", color: "from-green-100 to-teal-100", emoji: "🌿" },
              { name: "Vintage Romance", color: "from-pink-100 to-purple-100", emoji: "💕" },
              { name: "Modern Chic", color: "from-gray-100 to-blue-100", emoji: "🎨" }
            ].map((theme, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl bg-gradient-to-br ${theme.color} text-center hover:scale-105 transition-transform cursor-pointer`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="text-2xl mb-2">{theme.emoji}</div>
                <div className="text-sm font-medium text-foreground">
                  {theme.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="text-orange-600 font-medium">[THEME DETAILS NEEDED]</span> -
              Need specific theme inclusions and decoration details for each package
            </p>
            <Button asChild variant="outline">
              <Link href="#enquiry">
                Discuss Custom Themes
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
