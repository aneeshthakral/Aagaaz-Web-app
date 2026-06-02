"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

/**
 * Family Leadership - Three portrait cards showing the founding family
 * Mr. Rajnish Ahuja (CMD RIPL), Mr. Rahul Ahuja (MD RIPL), Dr. Sonika Ahuja
 *
 * NOTE: Professional portraits pending final photography
 * Dr. Sonika Ahuja content pending owner approval before launch
 */

const familyMembers = [
  {
    id: "rajnish",
    name: "Mr. Rajnish Ahuja",
    title: "Chairman & Managing Director",
    organization: "Rajnish Industries Pvt. Ltd.",
    role: "The Visionary",
    description: "Since founding RIPL in 1968, Mr. Rajnish Ahuja has built a company that now serves over 50 countries worldwide. His business acumen and persistent endeavor have shaped not just an industrial empire, but a legacy of excellence that extends into hospitality. The same vision that transformed a small manufacturing unit into a global operation now guides Aagaaz's commitment to creating meaningful celebrations.",
    achievements: [
      "Founded RIPL in 1968 as a small manufacturing unit",
      "Expanded operations to serve 50+ countries globally",
      "Established the Shrimati Shashi Ahuja Charitable Trust",
      "ISO/TS 16949:2009 certified operations"
    ]
  },
  {
    id: "rahul",
    name: "Mr. Rahul Ahuja",
    title: "Managing Director",
    organization: "Rajnish Industries Pvt. Ltd.",
    role: "The Executor",
    description: "As Managing Director of RIPL, Mr. Rahul Ahuja brings the same operational excellence that serves over 3,000 customers across India to the hospitality experience at Aagaaz. His dedication to quality and customer satisfaction ensures every celebration meets the exacting standards that have earned RIPL recognition from the Confederation of Indian Industries and the Engineering Export Promotion Council.",
    achievements: [
      "Managing Director of RIPL's global operations",
      "Oversees service to 3,000+ customers in India",
      "Led company to CII and EEPC excellence awards",
      "Champions quality standards across all ventures"
    ]
  },
  {
    id: "sonika",
    name: "Dr. Sonika Ahuja",
    title: "[Title Pending Owner Approval]",
    organization: "[Organization Pending Owner Approval]",
    role: "The Creative Force",
    description: "[Professional description and achievements pending owner approval. Content to be provided before launch.]",
    achievements: [
      "[Key achievement 1 - pending owner input]",
      "[Key achievement 2 - pending owner input]",
      "[Key achievement 3 - pending owner input]"
    ]
  }
];

export function FamilyLeadership() {
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
      transition: { duration: shouldReduceMotion ? 0 : 0.8 },
    },
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary border border-secondary/20">
            The Founding Family
          </div>

          <h2 className="font-display text-foreground mb-6 text-4xl font-semibold lg:text-5xl">
            Built on a foundation of
            <span className="text-accent block">trust and excellence</span>
          </h2>

          <p className="text-muted-foreground text-xl leading-relaxed">
            From industrial leadership to hospitality excellence, the Ahuja family brings
            decades of business acumen and community trust to every celebration at Aagaaz.
          </p>
        </motion.div>

        {/* Family Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {familyMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Portrait Card */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Professional Portrait - Awaiting Final Photography */}
                <div className="relative bg-gradient-to-br from-surface-subtle to-background">
                  <div className="aspect-[4/5] w-full flex items-center justify-center bg-gradient-to-br from-accent/10 via-wine/5 to-accent/5 border-2 border-dashed border-accent/30">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-wine/20 flex items-center justify-center">
                        <span className="text-2xl text-accent">👤</span>
                      </div>
                      <p className="text-xs text-text-light uppercase tracking-wider font-medium">
                        Professional Portrait
                      </p>
                      <p className="text-xs text-text-light mt-1">
                        Final photography pending
                      </p>
                    </div>
                  </div>

                  {/* Gradient Overlay for Consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />

                  {/* Role Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-full bg-gradient-to-r from-accent/90 to-wine/90 px-4 py-2 text-center backdrop-blur-sm border border-accent/30">
                      <span className="text-surface text-sm font-medium tracking-wide">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Name & Title */}
                  <div className="mb-6 text-center">
                    <h3 className="font-display text-foreground mb-2 text-2xl font-semibold">
                      {member.name}
                    </h3>
                    {member.title && (
                      <p className="text-secondary text-sm font-medium">
                        {member.title}
                      </p>
                    )}
                    {member.organization && (
                      <p className="text-muted-foreground text-sm">
                        {member.organization}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  {member.description && (
                    <div className="mb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  )}

                  {/* Achievements */}
                  {member.achievements.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-foreground text-sm font-medium">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Context */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-surface p-8 shadow-sm">
            <h3 className="font-display text-foreground mb-4 text-xl font-semibold">
              From Industrial Excellence to Hospitality Heritage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The same commitment to quality that has made RIPL a trusted name across 50 countries
              now ensures every wedding, kitty party, and celebration at Aagaaz exceeds expectations.
              When Ludhiana families choose Aagaaz, they choose a legacy built on five decades
              of trust, excellence, and community standing.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}