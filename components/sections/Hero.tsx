'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
    onClick?: () => void
  }
  secondaryCTA?: {
    text: string
    href: string
    onClick?: () => void
  }
  image?: {
    src: string
    alt: string
    priority?: boolean
  }
  images?: {
    src: string
    alt: string
    priority?: boolean
  }[]
  imageRotationInterval?: number
  variant?: 'default' | 'centered' | 'split'
  overlay?: boolean
  className?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  images,
  imageRotationInterval = 5000,
  variant = 'default',
  overlay = false,
  className,
}) => {
  // Image rotation state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  const imagesToShow = images || (image ? [image] : [])
  const hasMultipleImages = imagesToShow.length > 1

  // Auto-rotate images (only if not paused)
  useEffect(() => {
    if (!hasMultipleImages || isPaused) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesToShow.length)
    }, imageRotationInterval)

    return () => clearInterval(interval)
  }, [hasMultipleImages, imagesToShow.length, imageRotationInterval, isPaused])

  const currentImage = imagesToShow[currentImageIndex]

  // Navigation functions
  const goToNext = () => {
    setIsPaused(true)
    setCurrentImageIndex((prev) => (prev + 1) % imagesToShow.length)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10s
  }

  const goToPrevious = () => {
    setIsPaused(true)
    setCurrentImageIndex((prev) => (prev - 1 + imagesToShow.length) % imagesToShow.length)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToSlide = (index: number) => {
    setIsPaused(true)
    setCurrentImageIndex(index)
    setTimeout(() => setIsPaused(false), 10000)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext() // Swipe left = next
      } else {
        goToPrevious() // Swipe right = previous
      }
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  if (variant === 'split' && currentImage) {
    return (
      <section className={cn('relative min-h-[600px] lg:min-h-[700px]', className)}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px]">
            {/* Left - Content */}
            <div className="py-20 lg:py-32 animate-slide-up">
              {subtitle && (
                <p className="text-body-lg text-nordic-fjord font-semibold mb-4">
                  {subtitle}
                </p>
              )}
              <h1 className="text-display-lg lg:text-display-xl font-display text-nordic-pine mb-6">
                {title}
              </h1>
              {description && (
                <p className="text-body-xl text-nordic-slate/80 mb-8 max-w-xl">
                  {description}
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                {primaryCTA && (
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryCTA.href}
                    onClick={primaryCTA.onClick}
                  >
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    variant="outline"
                    size="lg"
                    href={secondaryCTA.href}
                    onClick={secondaryCTA.onClick}
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            </div>

            {/* Right - Image */}
            <div 
              className="relative h-[400px] lg:h-[600px] overflow-hidden shadow-2xl animate-scale-in group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                key={currentImageIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority={currentImage.priority}
                className="object-cover transition-opacity duration-1000"
              />
              
              {/* Navigation Arrows (desktop only) */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6 text-nordic-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6 text-nordic-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {imagesToShow.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          index === currentImageIndex 
                            ? "bg-white w-8" 
                            : "bg-white/50 hover:bg-white/75"
                        )}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'centered') {
    return (
      <section className={cn('relative min-h-[600px] lg:min-h-[700px]', className)}>
        {currentImage && (
          <div className="absolute inset-0 z-0">
            <Image
              key={currentImageIndex}
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority={currentImage.priority}
              className="object-cover transition-opacity duration-1000"
            />
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
            )}
          </div>
        )}
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-[600px] lg:min-h-[700px] text-center">
            <div className="max-w-4xl animate-slide-up">
              {subtitle && (
                <p className={cn(
                  'text-body-lg font-semibold mb-4',
                  overlay ? 'text-white/90' : 'text-nordic-fjord'
                )}>
                  {subtitle}
                </p>
              )}
              <h1 className={cn(
                'text-display-xl lg:text-display-2xl font-display mb-6',
                overlay ? 'text-white' : 'text-nordic-pine'
              )}>
                {title}
              </h1>
              {description && (
                <p className={cn(
                  'text-body-xl mb-8 max-w-2xl mx-auto',
                  overlay ? 'text-white/90' : 'text-nordic-slate/80'
                )}>
                  {description}
                </p>
              )}
              <div className="flex flex-wrap gap-4 justify-center">
                {primaryCTA && (
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryCTA.href}
                    onClick={primaryCTA.onClick}
                  >
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    variant={overlay ? 'ghost' : 'outline'}
                    size="lg"
                    href={secondaryCTA.href}
                    onClick={secondaryCTA.onClick}
                    className={overlay ? 'text-white border-white hover:bg-white/20' : ''}
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className={cn('relative', className)}>
      {currentImage && (
        <div className="absolute inset-0 z-0">
          <Image
            key={currentImageIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority={currentImage.priority}
            className="object-cover transition-opacity duration-1000"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          )}
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="min-h-[600px] lg:min-h-[700px] flex items-center">
          <div className="max-w-2xl animate-slide-up">
            {subtitle && (
              <p className={cn(
                'text-body-lg font-semibold mb-4',
                overlay ? 'text-white/90' : 'text-nordic-fjord'
              )}>
                {subtitle}
              </p>
            )}
            <h1 className={cn(
              'text-display-xl lg:text-display-2xl font-display mb-6',
              overlay ? 'text-white' : 'text-nordic-pine'
            )}>
              {title}
            </h1>
            {description && (
              <p className={cn(
                'text-body-xl mb-8',
                overlay ? 'text-white/90' : 'text-nordic-slate/80'
              )}>
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {primaryCTA && (
                <Button
                  variant="primary"
                  size="lg"
                  href={primaryCTA.href}
                  onClick={primaryCTA.onClick}
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant={overlay ? 'ghost' : 'outline'}
                  size="lg"
                  href={secondaryCTA.href}
                  onClick={secondaryCTA.onClick}
                  className={overlay ? 'text-white border-white hover:bg-white/20' : ''}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
