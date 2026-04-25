'use client'

import { useEffect } from 'react'

const klaroConfig = {
  lang: 'no',
  acceptAll: true,
  hideDeclineAll: false,
  cookieExpiresAfterDays: 365,
  cookieName: 'klaro_consent',
  mustConsent: false,
  acceptOnScroll: false,
  translations: {
    no: {
      consentNotice: {
        title: 'Vi bruker informasjonskapsler',
        description: 'Vi bruker nødvendige informasjonskapsler for at nettsiden skal fungere. Med ditt samtykke bruker vi også analyse-cookies for å forbedre tjenesten.',
        learnMore: 'Les mer',
      },
      consentModal: {
        title: 'Informasjonskapsler',
        description: 'Velg hvilke informasjonskapsler du godtar.',
        privacyPolicy: { text: 'Les vår {privacyPolicy}.', name: 'personvernerklæring' },
      },
      acceptAll: 'Godta alle',
      declineAll: 'Avvis alle',
      acceptSelected: 'Godta valgte',
      close: 'Lukk',
      save: 'Lagre valg',
      purposes: { necessary: 'Nødvendige', analytics: 'Analyse' },
    },
    en: {
      consentNotice: {
        title: 'We use cookies',
        description: 'We use necessary cookies to keep the site running. With your consent, we also use analytics cookies to improve our service.',
        learnMore: 'Learn more',
      },
      consentModal: {
        title: 'Cookie settings',
        description: 'Choose which cookies you accept.',
        privacyPolicy: { text: 'Read our {privacyPolicy}.', name: 'privacy policy' },
      },
      acceptAll: 'Accept all',
      declineAll: 'Decline all',
      acceptSelected: 'Accept selected',
      close: 'Close',
      save: 'Save preferences',
      purposes: { necessary: 'Necessary', analytics: 'Analytics' },
    },
  },
  services: [
    {
      name: 'necessary',
      title: 'Nødvendige informasjonskapsler',
      purposes: ['necessary'],
      required: true,
      description: 'Nødvendige for at nettsiden skal fungere.',
    },
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      required: false,
      description: 'Anonym besøksstatistikk. Deles ikke med tredjeparter.',
      cookies: [
        [/^_ga/, '/', '.harikacreative.com'],
        [/^_ga_/, '/', '.harikacreative.com'],
      ],
      onAccept: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TFBLHK6VB0', { anonymize_ip: true });
      `,
      onDecline: `
        document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = '_ga_TFBLHK6VB0=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      `,
    },
  ],
  privacyPolicy: '/cookies',
}

export default function KlaroConsent() {
  useEffect(() => {
    import('klaro').then((klaro) => {
      klaro.setup(klaroConfig)
      klaro.render(klaroConfig)
    })
  }, [])
  return null
}
