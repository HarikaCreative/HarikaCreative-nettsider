import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import CookieConsent from '@/components/sections/CookieConsent'
import StructuredData from '@/components/seo/StructuredData'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
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
  authors: [{ name: 'Marianna' }],
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased bg-white text-nordic-slate">
        <StructuredData />
<Navigation
  logo={{
    src: '/logo-small.png',
    alt: 'Hárika Creative - Pixel in place',
    width: 180,
    height: 60
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
        
        {children}

        <footer className="bg-nordic-slate text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* KOLONNE 1: Om Hárika Creative */}
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Hárika Creative</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Profesjonelle nettsider for hytter, feriehus og små reiselivsbedrifter i Norge.
                </p>
              </div>

              {/* KOLONNE 2: Kontakt */}
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

              {/* KOLONNE 3: Juridisk */}
              <div>
                <h4 className="font-semibold mb-4">Juridisk</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <a href="/personvern" className="block hover:text-white transition-colors">Personvern</a>
                  <a href="/cookies" className="block hover:text-white transition-colors">Informasjonskapsler</a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
              <p>© {new Date().getFullYear()} Hárika Creative. Alle rettigheter reservert.</p>
              <p className="mt-2">Bygget med Next.js og kjærlighet til norsk natur 💚</p>
            </div>
          </div>
        </footer>

        <CookieConsent />
      </body>
    </html>
  )
}
