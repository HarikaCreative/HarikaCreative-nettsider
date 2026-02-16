import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import CookieConsent from '@/components/sections/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hárika Creative | Nettsider for hytter og feriehus i Norge',
  description: 'Profesjonelle nettsider for norske hytteeiere og små reiselivsbedrifter. Moderne design, rask lasting, klar for booking.',
  keywords: ['nettsider for hytter', 'hytteutleie', 'feriehus Norge', 'reiseliv nettside', 'booking nettside'],
  authors: [{ name: 'Marianna Harika' }],
  openGraph: {
    title: 'Hárika Creative | Nettsider for hytter i Norge',
    description: 'Profesjonelle nettsider for hytteeiere og reiselivsbedrifter',
    url: 'https://harikacreative.com',
    siteName: 'Hárika Creative',
    locale: 'no_NO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-white text-nordic-slate">
        <Navigation
          logoText="Hárika Creative"
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
                  <p>Oslo, Norge</p>
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
