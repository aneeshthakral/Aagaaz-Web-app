'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'

const storyMilestones = [
  {
    year: "1968",
    title: "Industrial Roots",
    description: "The Ahuja family founded Rajnish Industries, beginning five decades of business excellence in manufacturing and global exports."
  },
  {
    year: "2012",
    title: "Aagaaz Foundation",
    description: "Drawing from generations of business trust, the family opened Aagaaz with a vision to create meaningful celebrations."
  },
  {
    year: "2015",
    title: "Culinary Excellence",
    description: "Added Fessta Restaurant, bringing the same quality standards that made RIPL globally trusted to hospitality dining."
  },
  {
    year: "2024",
    title: "Legacy Continues",
    description: "Today, Aagaaz stands as testament to what five decades of community trust and business excellence can build."
  }
]

export default function StoryContent() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <section className="py-section-padding-y bg-surface-subtle">
      <Container>
        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            Our Philosophy
          </span>

          <h2 className="font-display text-4xl md:text-display-lg text-text mb-8">
            Where Moments Become
            <br />
            <span className="text-secondary">Memories</span>
          </h2>

          <div className="prose prose-xl text-text-light leading-relaxed mx-auto">
            <p>
              Trust takes decades to build. The Ahuja family learned this through fifty-five years
              of business, from a small manufacturing unit in 1968 to serving customers across
              fifty countries today. That same commitment to excellence guides every wedding,
              every kitty party, every corporate celebration at Aagaaz.
            </p>
            <p>
              When families choose Aagaaz for their most important moments, they choose more
              than a venue. They choose the standing that comes from five decades of keeping
              promises, the quality that earned international recognition for RIPL, and the
              trust that makes Ludhiana families feel confident in our hands.
            </p>
            <p>
              We understand that celebrations are the punctuation marks of life. Whether it's
              the nervous excitement of a wedding proposal or friends gathering for kitty,
              every moment matters. That's why we bring the same precision that serves
              customers in fifty countries to every detail of your celebration.
            </p>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl text-text">A Timeline of Beginnings</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-hover rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent-foreground font-display font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="font-display text-2xl text-accent mb-2">
                    {milestone.year}
                  </div>
                </div>

                <h3 className="font-display text-xl text-text mb-3 group-hover:text-accent transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Heritage */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            {/* Placeholder for location/heritage image */}
            <div className="bg-gradient-to-br from-wine/20 to-accent/20 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-text-light p-8">
                <div className="w-16 h-16 bg-wine/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-display text-xl mb-2">Pakhowal Road</h3>
                <p className="text-sm">Heart of Ludhiana</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-2 bg-wine/10 border border-wine/20 rounded-full text-wine text-sm font-medium mb-6">
              Our Location
            </span>

            <h3 className="font-display text-3xl text-text mb-6">
              Built on five decades of
              <br />
              <span className="text-accent">community trust</span>
            </h3>

            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                Located on Pakhowal Road in the heart of Ludhiana, Aagaaz grows from roots
                that run deep in this city's business community. When the Ahuja family launched
                Rajnish Industries in 1968, they made a promise to deliver excellence. That
                promise built relationships across fifty countries and earned recognition from
                the Confederation of Indian Industries.
              </p>

              <p>
                The same principles that made RIPL globally trusted now shape every celebration
                at Aagaaz. Families and businesses choose us because they know the name means
                something in Ludhiana. Our banquet halls have witnessed countless wedding vows,
                our corporate spaces have celebrated business achievements, and behind every
                event stands a family known for keeping their word.
              </p>

              <p>
                This is more than a venue. This is where five decades of business excellence
                meets the beautiful art of bringing people together. When you celebrate at Aagaaz,
                you celebrate with partners who understand that trust is earned one promise at a time.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}