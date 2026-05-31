'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/layout/Container'

const storyMilestones = [
  {
    year: "2012",
    title: "Foundation",
    description: "Aagaaz opened its doors with a vision to create meaningful celebrations that honor both tradition and modern elegance."
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Added Fessta Restaurant, bringing world-class dining to complement our hospitality offerings."
  },
  {
    year: "2018",
    title: "Recognition",
    description: "Named among Ludhiana's premier celebration venues, trusted by families and corporations alike."
  },
  {
    year: "2024",
    title: "Evolution",
    description: "Continuously innovating while staying true to our core belief: every beginning deserves beauty."
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
              At Aagaaz, we understand that celebrations are not just events — they are
              the punctuation marks of life, the moments when time pauses to let joy unfold.
              Whether it's the nervous excitement of a wedding proposal, the proud achievement
              of a corporate milestone, or the simple pleasure of friends gathering for kitty,
              every celebration carries the weight of its meaning.
            </p>
            <p>
              We don't just provide a venue; we curate experiences. Our spaces become canvases
              where your stories are painted in laughter, decorated with connections, and
              illuminated by the warmth of shared moments.
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
              Rooted in Punjab,
              <br />
              <span className="text-accent">Inspired by the World</span>
            </h3>

            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                Located on Pakhowal Road in the heart of Ludhiana, Aagaaz sits at the
                crossroads of Punjab's industrial energy and cultural richness. Our position
                allows us to serve not just the city, but families and businesses from
                across the region who seek a venue that understands both tradition and progress.
              </p>

              <p>
                The design of our spaces reflects this duality — classical elegance that
                honors our heritage, paired with contemporary amenities that serve modern
                needs. From our banquet halls that have witnessed countless wedding vows
                to our corporate spaces that have celebrated business achievements,
                every corner of Aagaaz tells a story of new beginnings.
              </p>

              <p>
                We are more than a venue; we are custodians of moments, architects of
                celebration, and humble servants to the beautiful art of bringing people together.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}