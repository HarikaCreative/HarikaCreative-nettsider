'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-nordic-slate text-white p-6 shadow-2xl">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg mb-2">
              Vi bruker informasjonskapsler (cookies)
            </h3>
            <p className="text-sm opacity-90">
              Vi bruker nødvendige cookies for at nettsiden skal fungere. 
              Les mer i vår{' '}
              <a href="/personvern" className="underline hover:text-white">
                personvernerklæring
              </a>
              .
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-white text-white hover:bg-white/10"
            >
              Avslå
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={acceptCookies}
              className="bg-nordic-forest-light hover:bg-nordic-forest-bright"
            >
              Godta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
