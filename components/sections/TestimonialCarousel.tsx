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
    role: 'Villaeier',
    location: 'Kreta',
    text: 'Marianna kommuniserer alltid raskt, tydelig og pålitelig. Vi føler oss trygge selv når vi er langt unna — hun håndterer alt med presisjon og omtanke.',
  },
  {
    id: 2,
    name: 'Sverre Sandberg',
    role: 'Feriehusutleier',
    location: 'Kreta',
    text: 'Profesjonell kommunikasjon fra start til slutt. Alt ble håndtert uten behov for oppfølging — akkurat slik det skal være.',
  },
  {
    id: 3,
    name: 'Inge Wagle',
    role: 'Villaeier',
    location: 'Kreta',
    text: 'Løsningsorientert og tilgjengelig. En stor trygghet å vite at noen tar hånd om detaljene når man ikke kan være til stede selv.',
  },
  {
    id: 4,
    name: 'T. C.',
    role: 'Luksusvilla',
    location: 'Kreta',
    text: 'Levering og oppdateringer av nettside. Vedlikehold og booking. Vi er veldig fornøyde.',
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0)

  // Auto-rotation every 8 seconds
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
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div 
      className="relative max-w-4xl mx-auto px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Testimonial Display */}
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
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                goToNext()
              } else if (swipe > swipeConfidenceThreshold) {
                goToPrevious()
              }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-nordic-pine/10">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-nordic-pine/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-body-lg text-nordic-slate mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-nordic-pine/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-nordic-pine font-display font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-nordic-slate">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-body-sm text-nordic-slate/60">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Desktop */}
      <div className="hidden md:flex">
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-nordic-pine hover:text-white transition-colors group"
          aria-label="Forrige testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-nordic-pine hover:text-white transition-colors group"
          aria-label="Neste testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-nordic-pine w-8'
                : 'bg-nordic-pine/20 hover:bg-nordic-pine/40'
            }`}
            aria-label={`Gå til testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation Hint */}
      <div className="md:hidden text-center mt-4 text-body-xs text-nordic-slate/40">
        Sveip for å se flere
      </div>
    </div>
  )
}
