import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hárika Creative — Bespoke Websites for Villa Owners in Greece & Crete',
  description: 'Handcrafted websites for villa owners in Crete and Greece. Attract the right guests, reduce platform fees and own your booking relationship.',
  alternates: {
    languages: {
      'no': 'https://harikacreative.com',
      'en': 'https://harikacreative.com/en',
    },
  },
}

const enSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://harikacreative.com/en#organization',
  name: 'Hárika Creative',
  description: 'Bespoke websites for villa owners in Greece and Crete',
  url: 'https://harikacreative.com/en',
  logo: 'https://harikacreative.com/logo-small.png',
  founder: {
    '@type': 'Person',
    name: 'Marianna Xiros Villard',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Asker',
    addressCountry: 'NO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@harikacreative.com',
    contactType: 'customer service',
  },
  areaServed: ['GR', 'NO', 'EU'],
  vatID: '937310447',
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cormorant.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enSchema) }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ink/5">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/en" className="flex items-center gap-3">
            <Image src="/logo-small.png" alt="Hárika Creative" width={36} height={36} />
            <span className="font-serif text-lg text-ink hidden sm:block">Hárika Creative</span>
          </Link>
          <nav className="flex items-center gap-6 text-body-sm">
            <a href="/en#packages" className="text-ink/70 hover:text-ink transition-colors">Packages</a>
            <a href="/en#contact" className="text-ink/70 hover:text-ink transition-colors">Contact</a>
            <Link
              href="/"
              title="Norsk"
              className="flex items-center gap-1.5 font-mono text-sm font-semibold text-ink/60 hover:text-ink transition-colors"
            >
              🇳🇴 Norsk
            </Link>
            <a
              href="/en#contact"
              className="bg-aegean text-white px-5 py-2 font-semibold text-body-sm hover:bg-aegean/90 transition-colors"
            >
              Start the conversation
            </a>
          </nav>
        </div>
      </header>
      <div className="pt-16">
        {children}
      </div>
    </div>
  )
}
