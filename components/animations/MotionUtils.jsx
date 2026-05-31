'use client'

import { motion, useReducedMotion } from 'framer-motion'

// Luxury easing curves - slow and expensive feeling
export const luxuryEasing = {
  gentle: [0.16, 1, 0.3, 1],           // Gentle luxury curve
  settle: [0.25, 0.46, 0.45, 0.94],   // Settling motion
  silk: [0.23, 1, 0.32, 1],           // Silk-smooth
  expensive: [0.19, 1, 0.22, 1]       // Expensive feeling
}

// Timing presets for luxury motion
export const luxuryDurations = {
  quick: 0.6,
  normal: 1.0,
  slow: 1.4,
  glacial: 2.0
}

// React Bits-style BlurText component
export function BlurText({
  text,
  className = '',
  delay = 100,
  animateBy = 'words',
  direction = 'top',
  threshold = 0.2,
  children
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children || text}</div>
  }

  const words = text ? text.split(' ') : []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: direction === 'top' ? -20 : direction === 'bottom' ? 20 : 0,
      x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      x: 0,
      transition: {
        duration: luxuryDurations.slow,
        ease: luxuryEasing.silk
      }
    }
  }

  if (animateBy === 'words' && text) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: threshold }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // Fallback for non-text content
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={itemVariants}
    >
      {children || text}
    </motion.div>
  )
}

// React Bits-style CountUp component
export function CountUp({
  end,
  start = 0,
  duration = luxuryDurations.slow,
  className = '',
  prefix = '',
  suffix = '',
  separator = '',
  decimals = 0
}) {
  const shouldReduceMotion = useReducedMotion()
  const formattedValue = separator
    ? end.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })
    : end.toFixed(decimals)

  if (shouldReduceMotion) {
    return <span className={className}>{prefix}{formattedValue}{suffix}</span>
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: luxuryDurations.normal,
        ease: luxuryEasing.gentle
      }}
    >
      {prefix}{formattedValue}{suffix}
    </motion.span>
  )
}

// Luxury scroll reveal container
export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  distance = 60,
  delay = 0,
  threshold = 0.1,
  once = true
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const getInitialState = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance }
      case 'down': return { opacity: 0, y: -distance }
      case 'left': return { opacity: 0, x: distance }
      case 'right': return { opacity: 0, x: -distance }
      case 'scale': return { opacity: 0, scale: 0.9 }
      default: return { opacity: 0, y: distance }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: luxuryDurations.slow,
          ease: luxuryEasing.gentle,
          delay
        }
      }}
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}

// Luxury hover effect wrapper
export function LuxuryHover({
  children,
  className = '',
  hoverScale = 1.02,
  hoverY = -4,
  tapScale = 0.98
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? {} : {
        scale: hoverScale,
        y: hoverY,
        transition: {
          duration: luxuryDurations.quick,
          ease: luxuryEasing.gentle
        }
      }}
      whileTap={shouldReduceMotion ? {} : {
        scale: tapScale,
        transition: {
          duration: 0.2,
          ease: luxuryEasing.expensive
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Soft image drift effect (Ken Burns inspired)
export function ImageDrift({
  children,
  className = '',
  drift = 10,
  duration = 20,
  direction = 'random'
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const getDriftAnimation = () => {
    switch (direction) {
      case 'up':
        return { y: [-drift, -drift * 2] }
      case 'down':
        return { y: [drift, drift * 2] }
      case 'left':
        return { x: [-drift, -drift * 2] }
      case 'right':
        return { x: [drift, drift * 2] }
      case 'random':
      default:
        return {
          x: [-drift, drift, -drift],
          y: [-drift/2, drift/2, -drift/2],
          scale: [1, 1.05, 1]
        }
    }
  }

  return (
    <motion.div
      className={className}
      animate={getDriftAnimation()}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation container
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
  threshold = 0.2
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: luxuryDurations.slow,
        ease: luxuryEasing.gentle
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}

// Page transition wrapper
export function PageTransition({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: luxuryDurations.normal,
          ease: luxuryEasing.gentle
        }
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          duration: luxuryDurations.quick,
          ease: luxuryEasing.expensive
        }
      }}
    >
      {children}
    </motion.div>
  )
}
