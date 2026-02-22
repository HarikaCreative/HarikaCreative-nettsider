'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export interface NavLink {
  label: string
  href: string
}

export interface NavigationProps {
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  logoText?: string
  links: NavLink[]
  ctaButton?: {
    text: string
    href: string
    onClick?: () => void
  }
  locale?: string
  onLocaleChange?: (locale: string) => void
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({
  logo,
  logoText = 'Hárika Creative',
  links,
  ctaButton,
  locale = 'no',
  onLocaleChange,
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLocale = () => {
    const newLocale = locale === 'no' ? 'en' : 'no'
    onLocaleChange?.(newLocale)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6',
        className
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
         <Link href="/" className="flex items-center gap-3 group">
  {logo && (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width || 40}
      height={logo.height || 40}
      className="transition-transform group-hover:scale-105"
    />
  )}
  <span
    className={cn(
      'font-mono font-bold text-xl transition-colors',
      isScrolled ? 'text-nordic-pine' : 'text-white'
    )}
  >
    {logoText}
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-nordic-pine',
                  isScrolled
                    ? 'text-nordic-slate hover:text-nordic-pine'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className={cn(
                'flex items-center gap-2 font-medium transition-colors',
                isScrolled
                  ? 'text-nordic-slate hover:text-nordic-pine'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <span className="text-sm">🇳🇴</span>
              <span>{locale.toUpperCase()}</span>
            </button>

            {/* CTA Button */}
            {ctaButton && (
              <Button
                variant="primary"
                size="md"
                href={ctaButton.href}
                onClick={ctaButton.onClick}
              >
                {ctaButton.text}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  'w-full h-0.5 transition-all',
                  isScrolled ? 'bg-nordic-slate' : 'bg-white',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all',
                  isScrolled ? 'bg-nordic-slate' : 'bg-white',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all',
                  isScrolled ? 'bg-nordic-slate' : 'bg-white',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-nordic-slate hover:text-nordic-pine font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <button
                onClick={() => {
                  toggleLocale()
                  setIsMobileMenuOpen(false)
                }}
                className="text-nordic-slate hover:text-nordic-pine font-medium py-2 text-left"
              >
                🇳🇴 {locale.toUpperCase()}
              </button>

              {ctaButton && (
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  href={ctaButton.href}
                  onClick={() => {
                    ctaButton.onClick?.()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {ctaButton.text}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
