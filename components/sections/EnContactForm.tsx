'use client'

import { useState } from 'react'

export default function EnContactForm() {
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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setIsSubmitted(true)
        form.reset()
      } else {
        setError('Something went wrong. Please try again or email hello@harikacreative.com directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or email hello@harikacreative.com directly.')
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-aegean/10 border border-aegean/20 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-aegean/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-aegean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-h4 font-serif text-ink mb-2">Enquiry received</h3>
        <p className="text-body-md text-ink/70">I typically respond within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value="6797cf74-23dc-40ea-8f95-69176b0278e3" />
      <input type="hidden" name="subject" value="New enquiry from harikacreative.com/en" />
      <input type="hidden" name="from_name" value="Hárika Creative EN" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="en-name" className="block text-body-sm font-semibold text-ink mb-2">Name *</label>
          <input
            id="en-name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-ink/20 rounded-sm focus:outline-none focus:border-aegean text-ink bg-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="en-email" className="block text-body-sm font-semibold text-ink mb-2">Email *</label>
          <input
            id="en-email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-ink/20 rounded-sm focus:outline-none focus:border-aegean text-ink bg-white"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="en-location" className="block text-body-sm font-semibold text-ink mb-2">Property location</label>
        <input
          id="en-location"
          type="text"
          name="property_location"
          className="w-full px-4 py-3 border border-ink/20 rounded-sm focus:outline-none focus:border-aegean text-ink bg-white"
          placeholder="e.g. Elounda, Crete"
        />
      </div>

      <div>
        <label htmlFor="en-package" className="block text-body-sm font-semibold text-ink mb-2">Package interest</label>
        <select
          id="en-package"
          name="package_interest"
          className="w-full px-4 py-3 border border-ink/20 rounded-sm focus:outline-none focus:border-aegean text-ink bg-white"
        >
          <option value="">Not sure yet</option>
          <option value="Basic €880">Basic — €880</option>
          <option value="Standard €1,920">Standard — €1,920 (Most chosen)</option>
          <option value="Luxury €3,440">Luxury — €3,440</option>
        </select>
      </div>

      <div>
        <label htmlFor="en-message" className="block text-body-sm font-semibold text-ink mb-2">Message *</label>
        <textarea
          id="en-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-ink/20 rounded-sm focus:outline-none focus:border-aegean text-ink bg-white resize-none"
          placeholder="Tell me about your property and what you're looking for..."
        />
      </div>

      {error && (
        <p className="text-body-sm text-red-600">{error}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-aegean text-white py-4 px-8 font-semibold hover:bg-aegean/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending…' : 'Send enquiry'}
        </button>
        <p className="text-body-xs text-ink/50 mt-3">
          By submitting this form, you agree to us contacting you about your enquiry.{' '}
          <a href="/en/privacy" className="text-aegean hover:underline">Privacy policy</a>
        </p>
      </div>
    </form>
  )
}
