import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import KlaroConsent from '@/components/sections/KlaroConsent'
import CookieSettingsLink from '@/components/ui/CookieSettingsLink'
import StructuredData from '@/components/seo/StructuredData'
import NorwegianChrome from '@/components/layout/NorwegianChrome'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hárika Creative | Nettsider for hytter og feriehus i hele Norge',
  description: 'Profesjonelle nettsider for private hytteeiere og små reiselivsbedrifter i Norge. Fra Asker - jobber med kunder i hele landet. Moderne design, rask lasting, SEO-optimalisert.',
  keywords: [
    'nettside hytteutleie Norge',
    'booking nettside hytte',
    'webdesign feriehus Norge',
    'nettside for private hytteeiere',
    'lage nettside hytte',
    'hjemmeside feriebolig Norge',
    'webdesigner Asker',
    'nettside små hoteller Norge',
    'hyttebooking nettside',
    'webdesign Viken',
    'SEO online Norge'
  ],
  authors: [{ name: 'Marianna Xiros Villard' }],
  creator: 'Hárika Creative',
  publisher: 'Hárika Creative',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Hárika Creative | Nettsider for hytter i hele Norge',
    description: 'Profesjonelle nettsider for private hytteeiere og små reiselivsbedrifter. Nordisk design, rask lasting, booking-løsninger.',
    url: 'https://harikacreative.com',
    siteName: 'Hárika Creative',
    locale: 'no_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero/IMG_0234-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Norsk fjellhytte - Hárika Creative nettsider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hárika Creative | Nettsider for hytter i Norge',
    description: 'Profesjonelle nettsider for hytteeiere og reiselivsbedrifter',
    images: ['/images/hero/IMG_0234-hero.webp'],
  },
  alternates: {
    canonical: 'https://harikacreative.com',
    languages: {
      'no': 'https://harikacreative.com',
      'en': 'https://harikacreative.com/en',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TFBLHK6VB0"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased bg-white text-nordic-slate">
        <StructuredData />
        <NorwegianChrome>
          <Navigation
            logo={{
              src: '/logo-small.png',
              alt: 'Hárika Creative - Pixel in place',
              width: 50,
              height: 50,
            }}
            links={[
              { label: 'Hjem', href: '/' },
              { label: 'Tjenester', href: '#services' },
              { label: 'Om meg', href: '#about' },
              { label: 'Kontakt', href: '#contact' },
            ]}
            ctaButton={{
              text: 'Kontakt meg',
              href: '#contact'
            }}
            locale="no"
          />
        </NorwegianChrome>

        {children}

        <NorwegianChrome>
        <footer className="bg-nordic-slate text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Hárika Creative</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Profesjonelle nettsider for hytter, feriehus og små reiselivsbedrifter i Norge.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Kontakt</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <a href="mailto:hello@harikacreative.com" className="block hover:text-white hover:opacity-100 transition-colors">
                    hello@harikacreative.com
                  </a>
                  <p>Asker, Norge</p>
                  <p className="mt-1 text-xs">Jobber med kunder i hele Norge</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Juridisk</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <a href="/personvern" className="block hover:text-white transition-colors">Personvern</a>
                  <CookieSettingsLink label="Informasjonskapsler" className="block text-sm opacity-80" />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
              <p>© 2026 Hárika Creative med M. Xiros Villard · Org.nr. 937 310 447 · Asker, Norge</p>
            </div>
          </div>
        </footer>
        </NorwegianChrome>

        <KlaroConsent />
      </body>
    </html>
  )
}
