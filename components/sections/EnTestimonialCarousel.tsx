'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  property: string
  href?: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Elisabeth & Bernt Giil',
    role: 'Villa owners',
    property: 'Anasa Retreat Crete',
    href: 'https://anasaretreatcrete.com',
    text: 'Marianna communicates quickly, clearly and reliably. We feel confident even when we are far away — she handles everything with precision and care.',
  },
  {
    id: 2,
    name: 'Your name here',
    role: 'Villa owner',
    property: 'Greece',
    text: 'Your experience here…',
    // TODO: replace with verified testimonial
  },
]

export default function EnTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 9000)
    return () => clearInterval(interval)
  }, [isPaused])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 800 : -800, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (d: number) => ({ zIndex: 0, x: d < 0 ? 800 : -800, opacity: 0 }),
  }

  const current = testimonials[currentIndex]

  return (
    <div
      className="relative max-w-3xl mx-auto px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[260px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 280, damping: 28 }, opacity: { duration: 0.2 } }}
            className="absolute w-full"
          >
            <div className="text-center px-4">
              <svg className="w-10 h-10 text-gold/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="font-serif text-h3 text-white italic leading-relaxed mb-8">
                &ldquo;{current.text}&rdquo;
              </p>

              <div>
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-body-sm text-white/60 mt-1">
                  {current.role}
                  {current.href
                    ? <> · <a href={current.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{current.property}</a></>
                    : <> · {current.property}</>
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors flex items-center justify-center"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors flex items-center justify-center"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1 transition-all ${i === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
