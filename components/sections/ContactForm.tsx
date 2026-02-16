'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        // Reset form
        form.reset()
      } else {
        setError('Noe gikk galt. Prøv igjen eller send e-post direkt til hello@harikacreative.com')
      }
    } catch (error) {
      setError('Noe gikk galt. Prøv igjen eller send e-post direkt til hello@harikacreative.com')
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-nordic-forest/10 border border-nordic-forest rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-nordic-forest mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-h4 font-display text-nordic-slate mb-2">Takk for henvendelsen!</h3>
        <p className="text-body-md text-nordic-slate/70">
          Jeg svarer vanligvis innen 24 timer.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms Access Key */}
      <input type="hidden" name="access_key" value="6797cf74-23dc-40ea-8f95-69176b0278e3" />
      
      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-body-sm font-semibold text-nordic-slate mb-2">
            Navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-nordic-snow rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-pine focus:border-transparent transition-all"
            placeholder="Ditt navn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-body-sm font-semibold text-nordic-slate mb-2">
            E-post *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-nordic-snow rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-pine focus:border-transparent transition-all"
            placeholder="din@epost.no"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-body-sm font-semibold text-nordic-slate mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-nordic-snow rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-pine focus:border-transparent transition-all"
          placeholder="+47 xxx xx xxx"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-body-sm font-semibold text-nordic-slate mb-2">
          Emne *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-nordic-snow rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-pine focus:border-transparent transition-all"
          placeholder="Hva gjelder henvendelsen?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm font-semibold text-nordic-slate mb-2">
          Melding *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-nordic-snow rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-pine focus:border-transparent transition-all resize-none"
          placeholder="Fortell meg litt om prosjektet ditt..."
        />
      </div>

      {error && (
        <div className="bg-error/10 border border-error rounded-lg p-4 text-error text-body-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        fullWidth
        className="bg-nordic-forest-light hover:bg-nordic-forest-bright"
      >
        {isSubmitting ? 'Sender...' : 'Send melding'}
      </Button>

      <p className="text-body-xs text-nordic-slate/60 text-center">
        Ved å sende dette skjemaet godtar du vår{' '}
        <a href="/personvern" className="text-nordic-pine hover:underline">
          personvernerklæring
        </a>
      </p>
    </form>
  )
}
