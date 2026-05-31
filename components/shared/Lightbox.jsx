'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, isOpen, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [imageLoaded, setImageLoaded] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    setCurrentIndex(initialIndex)
    setImageLoaded(false)
  }, [initialIndex, isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const timer = window.setTimeout(() => setImageLoaded(true), shouldReduceMotion ? 0 : 100)

    return () => window.clearTimeout(timer)
  }, [currentIndex, isOpen, shouldReduceMotion])

  const goToNext = () => {
    setImageLoaded(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setImageLoaded(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  if (!isOpen || !images.length) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
        className="fixed inset-0 bg-midnight/95 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery image viewer"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-midnight/50 p-2 text-cream transition-colors hover:bg-midnight/70 focus-visible:outline-none"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-midnight/50 p-3 text-cream transition-colors hover:bg-midnight/70 focus-visible:outline-none md:left-4"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-midnight/50 p-3 text-cream transition-colors hover:bg-midnight/70 focus-visible:outline-none md:right-4"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Container */}
        <div
          className="relative max-w-7xl max-h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ scale: shouldReduceMotion ? 1 : 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal rounded-lg">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Placeholder for real image - using gradient with current image info */}
            <div
              className="flex min-h-[200px] w-[min(90vw,960px)] items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-wine/20"
              style={{ aspectRatio: '3/2' }}
            >
              <div className="text-center text-cream p-8">
                <h3 className="font-display text-2xl mb-2">{currentImage.title}</h3>
                <p className="text-cream/80 text-sm mb-4">{currentImage.category}</p>
                <span className="text-xs text-cream/60">
                  Image {currentIndex + 1} of {images.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-midnight/50 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="font-display text-lg text-cream mb-1">
              {currentImage.title}
            </h3>
            <p className="text-cream/80 text-sm mb-2">
              {currentImage.category}
            </p>
            {images.length > 1 && (
              <div className="flex justify-center gap-1 mt-3">
                {images.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((_, idx) => {
                  const actualIndex = Math.max(0, currentIndex - 2) + idx
                  return (
                    <button
                      key={actualIndex}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentIndex(actualIndex)
                        setImageLoaded(false)
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        actualIndex === currentIndex ? 'bg-accent' : 'bg-cream/30'
                      }`}
                      aria-label={`Go to image ${actualIndex + 1}`}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
