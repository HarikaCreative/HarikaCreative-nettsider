'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Elisabeth & Bernt Giil',
    role: 'Villa owners',
    location: 'Crete',
    text: 'Marianna communicates quickly, clearly and reliably. We feel confident even when we are far away — she handles everything with precision and care.',
  },
  {
    id: 2,
    name: 'Sverre Sandberg',
    role: 'Holiday villa owner',
    location: 'Crete',
    text: 'Professional communication from start to finish. Everything was handled without the need for follow-up — exactly as it should be.',
  },
  {
    id: 3,
    name: 'Inge Wagle',
    role: 'Villa owner',
    location: 'Crete',
    text: 'Solution-oriented and always available. A great reassurance to know that someone takes care of the details when you cannot be there yourself.',
  },
  {
    id: 4,
    name: 'T. C.',
    role: 'Luxury villa',
    location: 'Crete',
    text: 'Website delivery, updates, maintenance and booking support. We are very satisfied.',
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
    }, 8000)
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
    enter: (d: number) => ({ x: d > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (d: number) => ({ zIndex: 0, x: d < 0 ? 1000 : -1000, opacity: 0 }),
  }

  return (
    <div
      className="relative max-w-4xl mx-auto px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[280px] md:min-h-[240px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x
              if (swipe < -10000) goToNext()
              else if (swipe > 10000) goToPrevious()
            }}
            className="absolute w-full"
          >
            <div className="bg-white p-8 md:p-10 shadow-sm border border-aegean/10">
              <div className="mb-6">
                <svg className="w-10 h-10 text-aegean/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-body-lg text-ink mb-8 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-aegean/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-aegean font-semibold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-ink">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-body-sm text-ink/50">
                    {testimonials[currentIndex].role} · {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows — desktop */}
      <div className="hidden md:block">
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-md flex items-center justify-center hover:bg-aegean hover:text-white transition-colors"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-md flex items-center justify-center hover:bg-aegean hover:text-white transition-colors"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 transition-all ${
              i === currentIndex ? 'bg-aegean w-8' : 'bg-aegean/20 hover:bg-aegean/40'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      <p className="md:hidden text-center mt-4 text-body-xs text-ink/30">Swipe to see more</p>
    </div>
  )
}
