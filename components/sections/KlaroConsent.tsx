'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function KlaroConsent() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  useEffect(() => {
    const klaroConfig = {
      lang: isEnglish ? 'en' : 'no',
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
            description: 'Vi bruker nødvendige informasjonskapsler for at nettsiden skal fungere. Med ditt samtykke bruker vi også analyse-cookies.',
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
            description: 'We use necessary cookies to make our website work. With your consent, we also use analytics cookies to improve our service.',
            learnMore: 'Learn more',
          },
          consentModal: {
            title: 'Cookie preferences',
            description: 'Choose which cookies you accept.',
            privacyPolicy: { text: 'Read our {privacyPolicy}.', name: 'privacy policy' },
          },
          acceptAll: 'Accept all',
          declineAll: 'Decline all',
          acceptSelected: 'Save preferences',
          close: 'Close',
          save: 'Save preferences',
          purposes: { necessary: 'Necessary', analytics: 'Analytics' },
        },
      },
      services: [
        {
          name: 'necessary',
          title: isEnglish ? 'Necessary cookies' : 'Nødvendige informasjonskapsler',
          purposes: ['necessary'],
          required: true,
          description: isEnglish
            ? 'Required for the website to function properly.'
            : 'Nødvendige for at nettsiden skal fungere.',
        },
        {
          name: 'google-analytics',
          title: 'Google Analytics',
          purposes: ['analytics'],
          required: false,
          description: isEnglish
            ? 'Anonymous visit statistics. Not shared with third parties.'
            : 'Anonym besøksstatistikk. Deles ikke med tredjeparter.',
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
      privacyPolicy: isEnglish ? '/en/cookies' : '/cookies',
    }

    import('klaro').then((klaro) => {
      klaro.setup(klaroConfig)
      klaro.render(klaroConfig)
    })
  }, [isEnglish])

  return null
}
